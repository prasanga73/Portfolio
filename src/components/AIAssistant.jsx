import { useState, useRef, useEffect } from 'react'
import { queryAI } from '../utils/aiKnowledgeBase'

const SUGGESTIONS = [
  'Who is Prasanga?',
  'Career & What Now?',
  'Likes & Dislikes',
  'Fitness & Lifestyle',
  'Personal Style',
  'Featured Projects',
  'Contact Details',
]

const INITIAL_MESSAGES = [
  {
    sender: 'ai',
    text: `Hi! I'm Prasanga's personal AI Assistant. Ask me anything about his studies, hobbies, likes and dislikes, or personal writings!`,
    source: 'knowledge-base',
  },
]

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState(INITIAL_MESSAGES)
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [showKeyInput, setShowKeyInput] = useState(false)
  const [keyInput, setKeyInput] = useState(() => (typeof window !== 'undefined' ? localStorage.getItem('ai_api_key') || '' : ''))
  const [hasCustomKey, setHasCustomKey] = useState(() => (typeof window !== 'undefined' ? !!localStorage.getItem('ai_api_key') : false))
  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)

  const handleSaveKey = () => {
    if (typeof window !== 'undefined') {
      const trimmed = keyInput.trim()
      if (trimmed) {
        localStorage.setItem('ai_api_key', trimmed)
        setHasCustomKey(true)
      } else {
        localStorage.removeItem('ai_api_key')
        setHasCustomKey(false)
      }
      setShowKeyInput(false)
    }
  }

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
      setTimeout(() => inputRef.current?.focus(), 150)
    }
  }, [isOpen, messages])

  const handleSend = async (textToSend) => {
    const query = (textToSend || inputValue).trim()
    if (!query || isLoading) return

    setInputValue('')
    const userMsg = { sender: 'user', text: query }
    const updatedMessages = [...messages, userMsg]
    setMessages(updatedMessages)
    setIsLoading(true)

    try {
      // Build conversation history format for LLM
      const historyForLLM = updatedMessages.map((m) => ({
        role: m.sender === 'user' ? 'user' : 'assistant',
        content: m.text,
      }))

      const response = await queryAI(query, historyForLLM)
      setMessages((prev) => [
        ...prev,
        {
          sender: 'ai',
          text: response.text,
          source: response.source,
        },
      ])
    } catch (err) {
      console.error('Error fetching AI response:', err)
      setMessages((prev) => [
        ...prev,
        {
          sender: 'ai',
          text: `I had trouble connecting to the open-source endpoint, but feel free to ask about Prasanga's hobbies, projects, likes and dislikes, or how to reach him!`,
          source: 'knowledge-base',
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  // Clean text renderer: strips asterisks and bullet clutter, formats clean paragraphs & links
  const renderFormattedText = (rawText) => {
    const paragraphs = rawText
      .split(/\n\s*\n/)
      .map((p) => p.trim())
      .filter(Boolean)

    return paragraphs.map((para, paraIdx) => {
      const lines = para.split('\n')
      return (
        <div key={paraIdx} style={{ marginBottom: paraIdx < paragraphs.length - 1 ? '10px' : '0', lineHeight: 1.65 }}>
          {lines.map((rawLine, lineIdx) => {
            // Strip leading bullet symbols or raw asterisks
            let line = rawLine
              .replace(/^[•\-\*]\s*/, '')
              .replace(/\*\*(.*?)\*\*/g, '$1')
              .replace(/\*(.*?)\*/g, '$1')

            // Parse markdown links [text](url)
            const linkRegex = /\[(.*?)\]\((.*?)\)/g
            let parts = []
            let lastIndex = 0
            let match

            while ((match = linkRegex.exec(line)) !== null) {
              if (match.index > lastIndex) {
                parts.push(line.substring(lastIndex, match.index))
              }
              parts.push(
                <a
                  key={match.index}
                  href={match[2]}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: 'var(--accent-color)',
                    textDecoration: 'underline',
                    fontWeight: 600,
                  }}
                >
                  {match[1]}
                </a>
              )
              lastIndex = match.index + match[0].length
            }

            if (lastIndex < line.length) {
              parts.push(line.substring(lastIndex))
            }

            return (
              <div key={lineIdx} style={{ marginBottom: lineIdx < lines.length - 1 ? '4px' : '0' }}>
                {parts}
              </div>
            )
          })}
        </div>
      )
    })
  }

  return (
    <>
      {/* Floating Trigger Button */}
      <div
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 990,
        }}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Open AI Assistant"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '12px 18px',
            borderRadius: '9999px',
            backgroundColor: 'var(--bg-secondary)',
            color: 'var(--text-primary)',
            border: '1px solid var(--glass-border)',
            backdropFilter: 'blur(var(--glass-blur))',
            WebkitBackdropFilter: 'blur(var(--glass-blur))',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.35)',
            cursor: 'pointer',
            fontSize: '0.88rem',
            fontWeight: 600,
            transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
            transform: isOpen ? 'scale(0.95)' : 'scale(1)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'var(--accent-color)'
            e.currentTarget.style.boxShadow = '0 12px 36px rgba(99, 102, 241, 0.25)'
            e.currentTarget.style.transform = 'translateY(-2px)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'var(--glass-border)'
            e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.35)'
            e.currentTarget.style.transform = isOpen ? 'scale(0.95)' : 'scale(1)'
          }}
        >
          {/* Sparkle Icon */}
          <span
            style={{
              display: 'inline-flex',
              color: '#f59e0b',
              animation: 'pulse 2s infinite',
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
            </svg>
          </span>

          <span style={{ letterSpacing: '-0.01em' }}>Ask Prasanga AI</span>

          {/* Active status pulse */}
          <span
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: '#10b981',
              boxShadow: '0 0 8px #10b981',
              marginLeft: '2px',
            }}
          />
        </button>
      </div>

      {/* Floating Chat Drawer */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            bottom: '84px',
            right: '24px',
            width: 'min(420px, calc(100vw - 32px))',
            height: 'min(580px, calc(100vh - 120px))',
            backgroundColor: 'var(--bg-secondary)',
            borderRadius: '16px',
            border: '1px solid var(--glass-border)',
            backdropFilter: 'blur(var(--glass-blur))',
            WebkitBackdropFilter: 'blur(var(--glass-blur))',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.45)',
            zIndex: 995,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            animation: 'fadeIn 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          {/* Chat Header */}
          <div
            style={{
              padding: '16px 20px',
              borderBottom: '1px solid var(--glass-border)',
              background: 'var(--glass-bg)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div
                style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '50%',
                  background: 'var(--accent-light)',
                  border: '1px solid var(--accent-color)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-color)',
                  fontSize: '1rem',
                }}
              >
                ⌬
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <h3 style={{ fontSize: '0.96rem', fontWeight: 700, margin: 0 }}>Prasanga AI</h3>
                  <span
                    style={{
                      fontSize: '0.68rem',
                      fontFamily: 'var(--font-mono)',
                      color: '#10b981',
                      background: 'rgba(16, 185, 129, 0.1)',
                      padding: '1px 6px',
                      borderRadius: '10px',
                      border: '1px solid rgba(16, 185, 129, 0.2)',
                    }}
                  >
                    Open-Source
                  </span>
                </div>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', margin: 0 }}>
                  Details, hobbies, likes & dislikes
                </p>
              </div>
            </div>

            {/* Actions: Key Config, Clear and Close */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <button
                onClick={() => setShowKeyInput(!showKeyInput)}
                title={hasCustomKey ? 'Custom Open-Source LLM key active (Click to edit)' : 'Configure Open-Source API Key (Optional)'}
                style={{
                  background: 'none',
                  border: 'none',
                  color: hasCustomKey ? 'var(--accent-color)' : 'var(--text-muted)',
                  cursor: 'pointer',
                  padding: '6px',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = hasCustomKey ? 'var(--accent-color)' : 'var(--text-muted)')}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="7.5" cy="15.5" r="4.5" />
                  <path d="M10.5 12.5L20 3m0 0h3m-3 0v3m-4.5 1.5l2 2" />
                </svg>
              </button>

              <button
                onClick={() => setMessages(INITIAL_MESSAGES)}
                title="Reset conversation"
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-muted)',
                  cursor: 'pointer',
                  padding: '6px',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                  <path d="M3 3v5h5" />
                </svg>
              </button>

              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close Assistant"
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-muted)',
                  cursor: 'pointer',
                  padding: '6px',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
          </div>

          {/* Optional API Key Input Drawer */}
          {showKeyInput && (
            <div
              style={{
                padding: '12px 16px',
                background: 'var(--bg-tertiary)',
                borderBottom: '1px solid var(--glass-border)',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.74rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                  Custom LLM Key (Groq / OpenRouter):
                </span>
                <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>Optional</span>
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <input
                  type="password"
                  value={keyInput}
                  onChange={(e) => setKeyInput(e.target.value)}
                  placeholder="Paste your API key here..."
                  style={{
                    flex: 1,
                    padding: '6px 10px',
                    borderRadius: '6px',
                    background: 'var(--bg-primary)',
                    border: '1px solid var(--border-color)',
                    color: 'var(--text-primary)',
                    fontSize: '0.78rem',
                    outline: 'none',
                  }}
                />
                <button
                  onClick={handleSaveKey}
                  style={{
                    padding: '6px 12px',
                    background: 'var(--accent-color)',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '6px',
                    fontSize: '0.78rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                  }}
                >
                  Save
                </button>
              </div>
            </div>
          )}

          {/* Quick Suggestion Chips */}
          <div
            style={{
              padding: '8px 14px',
              display: 'flex',
              gap: '6px',
              overflowX: 'auto',
              borderBottom: '1px solid var(--glass-border)',
              background: 'var(--glass-bg-secondary)',
              scrollbarWidth: 'none',
            }}
          >
            {SUGGESTIONS.map((s, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(s)}
                disabled={isLoading}
                style={{
                  background: 'var(--glass-bg-tertiary)',
                  border: '1px solid var(--glass-border)',
                  borderRadius: '14px',
                  padding: '4px 10px',
                  fontSize: '0.74rem',
                  color: 'var(--text-secondary)',
                  whiteSpace: 'nowrap',
                  cursor: isLoading ? 'not-allowed' : 'pointer',
                  transition: 'all 0.2s',
                  flexShrink: 0,
                }}
                onMouseEnter={(e) => {
                  if (!isLoading) {
                    e.currentTarget.style.borderColor = 'var(--accent-color)'
                    e.currentTarget.style.color = 'var(--text-primary)'
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--glass-border)'
                  e.currentTarget.style.color = 'var(--text-secondary)'
                }}
              >
                {s}
              </button>
            ))}
          </div>

          {/* Message Stream */}
          <div
            style={{
              flex: 1,
              padding: '16px',
              overflowY: 'auto',
              display: 'flex',
              flexDirection: 'column',
              gap: '14px',
            }}
          >
            {messages.map((m, idx) => {
              const isUser = m.sender === 'user'
              return (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: isUser ? 'flex-end' : 'flex-start',
                  }}
                >
                  <div
                    style={{
                      maxWidth: '86%',
                      padding: '10px 14px',
                      borderRadius: isUser ? '14px 14px 2px 14px' : '14px 14px 14px 2px',
                      background: isUser ? 'var(--accent-color)' : 'var(--glass-bg-tertiary)',
                      color: isUser ? '#ffffff' : 'var(--text-primary)',
                      border: isUser ? '1px solid transparent' : '1px solid var(--glass-border)',
                      fontSize: '0.88rem',
                      lineHeight: 1.6,
                      wordBreak: 'break-word',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                    }}
                  >
                    {isUser ? m.text : renderFormattedText(m.text)}
                  </div>

                  {/* Message footer source indicator */}
                  {!isUser && (
                    <span
                      style={{
                        fontSize: '0.68rem',
                        fontFamily: 'var(--font-mono)',
                        color: 'var(--text-muted)',
                        marginTop: '4px',
                        marginLeft: '4px',
                      }}
                    >
                      {m.source === 'open-source-llm' ? '✨ Open-Source LLM' : '⚡ Verified Profile'}
                    </span>
                  )}
                </div>
              )
            })}

            {/* Typing Indicator */}
            {isLoading && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '6px 12px' }}>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
                  Prasanga AI is thinking
                </span>
                <span
                  style={{
                    display: 'inline-flex',
                    gap: '3px',
                  }}
                >
                  <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'var(--accent-color)', animation: 'blink 1.2s infinite 0.1s' }} />
                  <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'var(--accent-color)', animation: 'blink 1.2s infinite 0.3s' }} />
                  <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'var(--accent-color)', animation: 'blink 1.2s infinite 0.5s' }} />
                </span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div
            style={{
              padding: '12px 14px',
              borderTop: '1px solid var(--glass-border)',
              background: 'var(--glass-bg)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask about hobbies, likes, projects..."
              disabled={isLoading}
              style={{
                flex: 1,
                padding: '9px 14px',
                borderRadius: '8px',
                background: 'var(--bg-primary)',
                border: '1px solid var(--border-color)',
                color: 'var(--text-primary)',
                fontSize: '0.86rem',
                outline: 'none',
                transition: 'border-color 0.2s',
              }}
              onFocus={(e) => (e.target.style.borderColor = 'var(--accent-color)')}
              onBlur={(e) => (e.target.style.borderColor = 'var(--border-color)')}
            />

            <button
              onClick={() => handleSend()}
              disabled={!inputValue.trim() || isLoading}
              aria-label="Send message"
              style={{
                background: inputValue.trim() && !isLoading ? 'var(--accent-color)' : 'var(--glass-bg-secondary)',
                color: inputValue.trim() && !isLoading ? '#ffffff' : 'var(--text-muted)',
                border: '1px solid var(--glass-border)',
                borderRadius: '8px',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: inputValue.trim() && !isLoading ? 'pointer' : 'default',
                transition: 'all 0.2s',
                flexShrink: 0,
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  )
}
