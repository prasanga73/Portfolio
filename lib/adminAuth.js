import { createHmac, timingSafeEqual } from 'node:crypto'

const COOKIE_NAME = 'portfolio_admin_session'
const SESSION_TTL_SECONDS = 60 * 60 * 8

function secret() {
  return process.env.ADMIN_SESSION_SECRET || process.env.ADMIN_PASSWORD || ''
}

function signature(username, expiresAt) {
  return createHmac('sha256', secret()).update(`${username}.${expiresAt}`).digest('hex')
}

function parseCookies(header = '') {
  return Object.fromEntries(header.split(';').map((part) => part.trim().split('=')))
}

export function isAdminConfigured() {
  return Boolean(process.env.ADMIN_USERNAME && process.env.ADMIN_PASSWORD && secret())
}

export function authenticate(username, password) {
  return isAdminConfigured() && username === process.env.ADMIN_USERNAME && password === process.env.ADMIN_PASSWORD
}

export function createSession(username, secure) {
  const expiresAt = Math.floor(Date.now() / 1000) + SESSION_TTL_SECONDS
  const value = `${username}.${expiresAt}.${signature(username, expiresAt)}`
  return `${COOKIE_NAME}=${value}; Max-Age=${SESSION_TTL_SECONDS}; Path=/; HttpOnly; SameSite=Strict${secure ? '; Secure' : ''}`
}

export function clearSession() {
  return `${COOKIE_NAME}=; Max-Age=0; Path=/; HttpOnly; SameSite=Strict`
}

export function hasValidSession(req) {
  if (!isAdminConfigured()) return false
  const value = parseCookies(req.headers.cookie)[COOKIE_NAME]
  const [username, expiresAt, receivedSignature] = value?.split('.') || []
  if (!username || !expiresAt || !receivedSignature || Number(expiresAt) < Math.floor(Date.now() / 1000)) return false

  const expectedSignature = signature(username, expiresAt)
  const expectedBuffer = Buffer.from(expectedSignature)
  const receivedBuffer = Buffer.from(receivedSignature)
  return expectedBuffer.length === receivedBuffer.length && timingSafeEqual(expectedBuffer, receivedBuffer)
}

export function isSecureRequest(req) {
  return req.headers['x-forwarded-proto'] === 'https' || process.env.NODE_ENV === 'production'
}