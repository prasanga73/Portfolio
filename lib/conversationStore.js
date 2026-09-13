const LOG_KEY = 'portfolio:conversation-logs'
const MAX_LOGS = 500

function getConfig() {
  return {
    url: process.env.UPSTASH_REDIS_REST_URL,
    token: process.env.UPSTASH_REDIS_REST_TOKEN,
  }
}

async function redis(command) {
  const { url, token } = getConfig()
  if (!url || !token) throw new Error('Conversation logging is not configured')

  const response = await fetch(`${url}/${command.map(encodeURIComponent).join('/')}`, {
    headers: { Authorization: `Bearer ${token}` },
  })

  if (!response.ok) throw new Error(`Conversation store returned ${response.status}`)
  return response.json()
}

export function isStoreConfigured() {
  const { url, token } = getConfig()
  return Boolean(url && token)
}

export async function saveConversation(log) {
  await redis(['lpush', LOG_KEY, JSON.stringify(log)])
  await redis(['ltrim', LOG_KEY, '0', String(MAX_LOGS - 1)])
}

export async function listConversations(limit = 100) {
  const result = await redis(['lrange', LOG_KEY, '0', String(Math.min(limit, MAX_LOGS) - 1)])
  return (result.result || []).map((item) => JSON.parse(item))
}