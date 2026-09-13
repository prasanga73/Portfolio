import { defineConfig, loadEnv } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import tailwindcss from '@tailwindcss/vite'
import adminConversations from './api/admin-conversations.js'
import chatLog from './api/chat-log.js'

function localApiFunctionsPlugin() {
  const handlers = {
    '/api/admin-conversations': adminConversations,
    '/api/chat-log': chatLog,
  }

  return {
    name: 'local-api-functions',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const path = req.url?.split('?')[0]
        const handler = handlers[path]
        if (!handler) return next()

        let body = ''
        req.on('data', chunk => { body += chunk })
        req.on('end', async () => {
          const response = {
            status(code) {
              res.statusCode = code
              return response
            },
            json(data) {
              res.setHeader('Content-Type', 'application/json')
              res.end(JSON.stringify(data))
            },
            setHeader(name, value) {
              res.setHeader(name, value)
            },
          }

          try {
            req.body = body ? JSON.parse(body) : {}
            req.query = Object.fromEntries(new URL(req.url, 'http://localhost').searchParams)
            await handler(req, response)
          } catch (error) {
            console.error(`Local API ${path} failed:`, error)
            if (!res.headersSent) {
              res.statusCode = 500
              res.setHeader('Content-Type', 'application/json')
              res.end(JSON.stringify({ error: 'Local API request failed' }))
            }
          }
        })
      })
    },
  }
}

// Dev middleware plugin to handle /api/chat locally without needing Vercel CLI
function localApiChatPlugin(env) {
  return {
    name: 'local-api-chat',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (req.url === '/api/chat' && req.method === 'POST') {
          let body = ''
          req.on('data', chunk => {
            body += chunk
          })
          req.on('end', async () => {
            try {
              const { messages, model, temperature, max_tokens } = JSON.parse(body || '{}')
              const apiKey = env.AI_API_KEY || process.env.AI_API_KEY
              const apiEndpoint = env.AI_ENDPOINT || process.env.AI_ENDPOINT || 'https://api.groq.com/openai/v1/chat/completions'

              if (!apiKey) {
                res.statusCode = 500
                res.setHeader('Content-Type', 'application/json')
                return res.end(JSON.stringify({ error: 'AI_API_KEY not configured in .env' }))
              }

              const modelsToTry = model
                ? [model]
                : ['openai/gpt-oss-20b', 'groq/compound-mini', 'qwen/qwen3.8-27b', 'openai/gpt-oss-120b']

              for (const modelName of modelsToTry) {
                try {
                  const groqRes = await fetch(apiEndpoint, {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                      'Authorization': `Bearer ${apiKey}`,
                    },
                    body: JSON.stringify({
                      model: modelName,
                      messages,
                      temperature: temperature ?? 0.7,
                      max_tokens: max_tokens ?? 250,
                    }),
                  })

                  if (groqRes.ok) {
                    const data = await groqRes.json()
                    res.statusCode = 200
                    res.setHeader('Content-Type', 'application/json')
                    return res.end(JSON.stringify(data))
                  }
                  const errText = await groqRes.text()
                  console.warn(`Local proxy: Model ${modelName} returned ${groqRes.status}: ${errText}`)
                } catch (err) {
                  console.warn(`Local proxy: Model ${modelName} failed:`, err.message)
                }
              }

              res.statusCode = 502
              res.setHeader('Content-Type', 'application/json')
              res.end(JSON.stringify({ error: 'All models failed' }))
            } catch (err) {
              res.statusCode = 400
              res.setHeader('Content-Type', 'application/json')
              res.end(JSON.stringify({ error: 'Invalid request' }))
            }
          })
        } else {
          next()
        }
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  Object.assign(process.env, env)
  return {
    plugins: [
      tailwindcss(),
      react(),
      babel({ presets: [reactCompilerPreset()] }),
      localApiFunctionsPlugin(),
      localApiChatPlugin(env),
    ],
  }
})
