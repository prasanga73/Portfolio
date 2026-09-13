import { isStoreConfigured, listConversations } from '../lib/conversationStore.js'
import { authenticate, createSession, hasValidSession, isAdminConfigured } from '../lib/adminAuth.js'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { username, password } = req.body || {}
    if (!isAdminConfigured()) return res.status(503).json({ error: 'Admin login is not configured' })
    if (!authenticate(username, password)) return res.status(401).json({ error: 'Invalid username or password' })
    res.setHeader('Set-Cookie', createSession(username, req.headers['x-forwarded-proto'] === 'https' || process.env.NODE_ENV === 'production'))
    return res.status(200).json({ ok: true })
  }

  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' })

  if (!hasValidSession(req)) return res.status(401).json({ error: 'Unauthorized' })
  if (!isStoreConfigured()) return res.status(503).json({ error: 'Conversation logging is not configured' })

  try {
    const conversations = await listConversations(Number(req.query?.limit) || 100)
    return res.status(200).json({ conversations })
  } catch (error) {
    console.error('Conversation list failed:', error.message)
    return res.status(500).json({ error: 'Unable to load conversations' })
  }
}