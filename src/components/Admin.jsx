import { useEffect, useState } from 'react'

function formatDate(value) {
  return new Intl.DateTimeFormat(undefined, { dateStyle: 'medium', timeStyle: 'short' }).format(new Date(value))
}

function formatSessionRange(firstSeen, lastSeen) {
  const first = new Date(firstSeen)
  const last = new Date(lastSeen)
  const dateFormat = new Intl.DateTimeFormat(undefined, { dateStyle: 'medium' })
  if (first.toDateString() !== last.toDateString()) return { date: `${dateFormat.format(first)} to ${dateFormat.format(last)}` }
  return { date: dateFormat.format(first) }
}

function groupBySession(conversations) {
  const sessions = new Map()
  conversations.forEach((conversation) => {
    const sessionId = conversation.sessionId || conversation.id
    if (!sessions.has(sessionId)) sessions.set(sessionId, { sessionId, firstSeen: conversation.createdAt, lastSeen: conversation.createdAt, visitor: conversation.visitor, exchanges: [] })
    const session = sessions.get(sessionId)
    session.firstSeen = new Date(session.firstSeen) < new Date(conversation.createdAt) ? session.firstSeen : conversation.createdAt
    session.lastSeen = new Date(session.lastSeen) > new Date(conversation.createdAt) ? session.lastSeen : conversation.createdAt
    session.exchanges.push(conversation)
  })
  return Array.from(sessions.values()).sort((a, b) => new Date(b.lastSeen) - new Date(a.lastSeen))
}

function formatBrowserValue(value) {
  if (value === undefined || value === null || value === '') return 'Not available'
  if (Array.isArray(value)) return value.join(', ')
  if (typeof value !== 'object') return String(value)
  return Object.entries(value).map(([key, item]) => `${key}: ${item}`).join(' · ')
}

function CopyButton({ value, label = 'value' }) {
  const handleCopy = async () => {
    try { await navigator.clipboard.writeText(value) } catch (error) { console.warn(`Unable to copy ${label}:`, error) }
  }
  return <button type="button" onClick={handleCopy} title={`Copy ${label}`}>Copy</button>
}

function BrowserField({ label, value, copyable = false }) {
  const displayValue = formatBrowserValue(value)
  return (
    <div className="admin-browser-field">
      <dt>{label}</dt>
      <dd className={copyable ? 'admin-browser-copyable' : ''}>
        <span>{displayValue}</span>
        {copyable && <CopyButton value={displayValue} label={label} />}
      </dd>
    </div>
  )
}

function BrowserGroup({ title, fields }) {
  return <section className="admin-browser-group"><h4>{title}</h4><dl>{fields.map(field => <BrowserField key={field.label} {...field} />)}</dl></section>
}

export default function Admin() {
  const [authenticated, setAuthenticated] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [conversations, setConversations] = useState([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const loadConversations = async (showErrors = true) => {
    setLoading(true)
    setError('')
    try {
      const response = await fetch('/api/admin-conversations', {
        credentials: 'same-origin',
      })
      const data = await response.json()
      if (!response.ok) throw new Error(data.error || 'Unable to load conversations')
      setAuthenticated(true)
      setConversations(data.conversations || [])
    } catch (requestError) {
      if (showErrors && requestError.message !== 'Unauthorized') setError(requestError.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    const timer = window.setTimeout(() => loadConversations(false), 0)
    return () => window.clearTimeout(timer)
  }, [])

  const handleLogin = (event) => {
    event.preventDefault()
    setLoading(true)
    setError('')
    fetch('/api/admin-conversations', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'same-origin',
      body: JSON.stringify({ username, password }),
    })
      .then(async (response) => {
        const data = await response.json()
        if (!response.ok) throw new Error(data.error || 'Unable to sign in')
        setPassword('')
        setAuthenticated(true)
        await loadConversations()
      })
      .catch((requestError) => setError(requestError.message))
      .finally(() => setLoading(false))
  }

  const sessions = groupBySession(conversations)

  if (!authenticated) {
    return (
      <main className="admin-shell">
        <form className="admin-login card" onSubmit={handleLogin}>
          <div className="admin-login-heading">
            <p className="admin-kicker">PRIVATE CONSOLE / SIGN IN</p>
            <h1>Conversation archive</h1>
            <p>Sign in to review visitor conversations.</p>
          </div>
          <div className="admin-login-fields">
            <label>Username<input autoFocus type="text" value={username} onChange={(event) => setUsername(event.target.value)} autoComplete="username" placeholder="Username" /></label>
            <label>Password<input type="password" value={password} onChange={(event) => setPassword(event.target.value)} autoComplete="current-password" placeholder="Password" /></label>
          </div>
          <button className="button-primary admin-login-submit" type="submit" disabled={loading}>{loading ? 'Signing in...' : 'Sign in'}</button>
          {error && <small className="admin-error">{error}</small>}
        </form>
      </main>
    )
  }

  return (
    <main className="admin-shell">
      <div className="admin-header">
        <div className="admin-title"><p className="admin-kicker">PRIVATE CONSOLE</p><h1>Conversation archive</h1><p>{sessions.length} sessions <span aria-hidden="true">·</span> {conversations.length} exchanges</p></div>
        <button className="admin-button" onClick={() => loadConversations()} disabled={loading}>{loading ? 'Refreshing...' : 'Refresh'}</button>
      </div>
      {error && <p className="admin-error">{error}</p>}
      <div className="admin-list">
        {sessions.map((session) => (
          <article className="admin-conversation admin-session card" key={session.sessionId}>
            <div className="admin-session-header">
              <div><span className="admin-session-label">SESSION</span><strong className="admin-session-date"><span className="admin-session-date-value">{formatSessionRange(session.firstSeen, session.lastSeen).date.split(' ').map((part, index) => <span key={`${part}-${index}`}>{part}</span>)}</span></strong></div>
              <div className="admin-session-stats">
                <span>{session.exchanges.length} {session.exchanges.length === 1 ? 'exchange' : 'exchanges'}</span>
                <span>{session.visitor?.ip || 'unknown IP'}</span>
              </div>
            </div>
            <div className="admin-exchanges">
              {session.exchanges.slice().reverse().map((conversation) => (
                <div className="admin-exchange" key={conversation.id}>
                  <div className="admin-exchange-time">{formatDate(conversation.createdAt)} <span aria-hidden="true">·</span> {conversation.source || 'unknown source'}</div>
                  <div className="admin-message admin-question"><span className="admin-role">VISITOR</span><p>{conversation.question}</p></div>
                  <div className="admin-message"><span className="admin-role">ASSISTANT</span><p>{conversation.answer}</p></div>
                </div>
              ))}
            </div>
            {session.visitor?.browser && <details className="admin-browser-details"><summary>Browser details</summary><div className="admin-browser-groups">
              <BrowserGroup title="Device / OS" fields={[{ label: 'Platform', value: session.visitor.browser.platform }, { label: 'Hardware concurrency', value: session.visitor.browser.hardwareConcurrency }, { label: 'Max touch points', value: session.visitor.browser.maxTouchPoints }, { label: 'Device memory', value: session.visitor.browser.deviceMemory }]} />
              <BrowserGroup title="Browser" fields={[{ label: 'User agent', value: session.visitor.browser.userAgent, copyable: true }, { label: 'App version', value: session.visitor.browser.appVersion, copyable: true }, { label: 'Vendor', value: session.visitor.browser.vendor }, { label: 'Languages', value: session.visitor.browser.languages }]} />
              <BrowserGroup title="Display" fields={[{ label: 'Screen', value: session.visitor.browser.screen }, { label: 'Viewport', value: session.visitor.browser.viewport }, { label: 'Pixel ratio', value: session.visitor.browser.viewport?.devicePixelRatio }, { label: 'Color depth', value: session.visitor.browser.screen?.colorDepth }]} />
              <BrowserGroup title="Locale / Network" fields={[{ label: 'IP address', value: session.visitor?.ip, copyable: true }, { label: 'Timezone', value: session.visitor.browser.timezone }, { label: 'Timezone offset', value: session.visitor.browser.timezoneOffset }, { label: 'Language', value: session.visitor.browser.language }, { label: 'Online', value: session.visitor.browser.online }, { label: 'Cookies enabled', value: session.visitor.browser.cookieEnabled }, { label: 'Do not track', value: session.visitor.browser.doNotTrack }, { label: 'Referrer', value: session.visitor.browser.referrer, copyable: true }]} />
            </div></details>}
            <div className="admin-session-footer"><span className="admin-session-id">Session {session.sessionId} <CopyButton value={session.sessionId} label="session ID" /></span></div>
          </article>
        ))}
        {!loading && conversations.length === 0 && <p className="admin-empty">No conversations have been logged yet.</p>}
      </div>
    </main>
  )
}