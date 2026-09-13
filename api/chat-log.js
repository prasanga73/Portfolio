import { isStoreConfigured, saveConversation } from '../lib/conversationStore.js'

const MAX_TEXT_LENGTH = 4000

function cleanText(value) {
  return typeof value === 'string' ? value.trim().slice(0, MAX_TEXT_LENGTH) : ''
}

function getClientIp(value) {
  if (!value) return 'unknown'
  return value.split(',')[0].trim() || 'unknown'
}

function cleanBrowserInfo(browser) {
  if (!browser || typeof browser !== 'object') return {}
  const clean = (value, limit = 300) => {
    if (typeof value === 'string') return value.trim().slice(0, limit)
    if (typeof value === 'number' || typeof value === 'boolean') return value
    return undefined
  }
  const cleanObject = (value) => Object.fromEntries(
    Object.entries(value || {}).map(([key, item]) => [key, clean(item)]).filter(([, item]) => item !== undefined),
  )
  return {
    userAgent: clean(browser.userAgent),
    appVersion: clean(browser.appVersion),
    platform: clean(browser.platform),
    vendor: clean(browser.vendor),
    language: clean(browser.language, 80),
    languages: Array.isArray(browser.languages) ? browser.languages.slice(0, 20).map(item => clean(item, 80)).filter(Boolean) : [],
    timezone: clean(browser.timezone, 100),
    timezoneOffset: clean(browser.timezoneOffset),
    cookieEnabled: clean(browser.cookieEnabled),
    doNotTrack: clean(browser.doNotTrack, 20),
    online: clean(browser.online),
    hardwareConcurrency: clean(browser.hardwareConcurrency),
    deviceMemory: clean(browser.deviceMemory),
    maxTouchPoints: clean(browser.maxTouchPoints),
    screen: cleanObject(browser.screen),
    viewport: cleanObject(browser.viewport),
    referrer: clean(browser.referrer),
  }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })
  if (!isStoreConfigured()) return res.status(503).json({ error: 'Conversation logging is not configured' })

  const { sessionId, question, answer, source, messageCount, language, browser } = req.body || {}
  if (!sessionId || !question || !answer) return res.status(400).json({ error: 'Incomplete conversation log' })

  try {
    await saveConversation({
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      createdAt: new Date().toISOString(),
      sessionId: cleanText(sessionId).slice(0, 100),
      question: cleanText(question),
      answer: cleanText(answer),
      source: cleanText(source).slice(0, 40),
      messageCount: Number.isFinite(messageCount) ? messageCount : 0,
      visitor: {
        ip: getClientIp(req.headers['x-forwarded-for'] || req.socket?.remoteAddress),
        userAgent: cleanText(req.headers['user-agent']).slice(0, 300),
        referer: cleanText(req.headers.referer).slice(0, 300),
        language: cleanText(language).slice(0, 80),
        browser: cleanBrowserInfo(browser),
        requestHeaders: {
          accept: cleanText(req.headers.accept).slice(0, 300),
          encoding: cleanText(req.headers['accept-encoding']).slice(0, 100),
          forwardedProto: cleanText(req.headers['x-forwarded-proto']).slice(0, 20),
        },
      },
    })
    return res.status(201).json({ ok: true })
  } catch (error) {
    console.error('Conversation log failed:', error.message)
    return res.status(500).json({ error: 'Unable to save conversation' })
  }
}