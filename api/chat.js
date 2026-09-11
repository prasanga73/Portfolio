/**
 * Vercel Serverless Function: /api/chat
 * Proxies requests to Groq (or any OpenAI-compatible API).
 * The API key lives here on the server — it never touches the browser.
 */
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const apiKey = process.env.AI_API_KEY
  const apiEndpoint = process.env.AI_ENDPOINT || 'https://api.groq.com/openai/v1/chat/completions'

  if (!apiKey) {
    return res.status(500).json({ error: 'AI_API_KEY not configured on server' })
  }

  const { messages, model, temperature, max_tokens } = req.body

  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: 'Invalid request body: messages array required' })
  }

  // Models to try in order
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
        return res.status(200).json(data)
      }

      const errBody = await groqRes.text()
      console.warn(`Model ${modelName} returned ${groqRes.status}: ${errBody}`)
      // Try next model
    } catch (err) {
      console.warn(`Model ${modelName} fetch failed:`, err.message)
      // Try next model
    }
  }

  return res.status(502).json({ error: 'All models failed' })
}
