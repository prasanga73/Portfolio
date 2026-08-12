import { useState, useEffect, useRef } from 'react'

// ASCII Art for neofetch
const ASCII_ART = [
  '   ___  _  __ ',
  '  / _ \\/ |/ / ',
  ' / ___/    /  ',
  '/_/  /_/|_/   '
]

const PROJECTS_DATA = [
  {
    id: 1,
    title: 'LegalGPT Nepal',
    description: 'AI-powered legal advisory application for Nepali law using Retrieval-Augmented Generation. Served as AI Lead — fine-tuned Mistral 7B Instruct, implemented RAG pipeline with pgvector, and built a citation reference system.',
    tech: ['FastAPI', 'React', 'PostgreSQL', 'pgvector', 'Mistral 7B Instruct'],
    github: 'https://github.com/e-wakil/legalgpt/tree/prasanga73-patch-1',
    year: '2025'
  },
  {
    id: 2,
    title: 'ChessSansar',
    description: 'Full-stack chess platform with Stockfish bot play, puzzles, and real-time multiplayer. Built interactive chessboard with Chess.js, Redux Toolkit state management, and user authentication.',
    tech: ['React', 'Vite', 'Tailwind CSS', 'Chess.js', 'Redux Toolkit', 'Stockfish'],
    github: 'https://github.com/prasanga73/chessSansar',
    year: '2024'
  }
]

// Canvas Matrix Rain Component
function MatrixRain({ onExit }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animationFrameId

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = canvas.parentElement.clientWidth
      canvas.height = canvas.parentElement.clientHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Characters definition
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$+-*/=<>!@#%&'
    const fontSize = 14
    const columns = Math.floor(canvas.width / fontSize)
    const rainDrops = Array(columns).fill(1)

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = '#0F0'
      ctx.font = `${fontSize}px monospace`

      for (let i = 0; i < rainDrops.length; i++) {
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length))
        const x = i * fontSize
        const y = rainDrops[i] * fontSize

        ctx.fillText(text, x, y)

        if (y > canvas.height && Math.random() > 0.975) {
          rainDrops[i] = 0
        }
        rainDrops[i]++
      }
    }

    const interval = setInterval(draw, 30)

    const handleKeyDown = (e) => {
      if (e.key === 'Escape' || e.key === 'q' || e.key === 'Q') {
        onExit()
      }
    }
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      clearInterval(interval)
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [onExit])

  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 10, backgroundColor: 'black' }}>
      <canvas ref={canvasRef} style={{ width: '100%', height: '100%', display: 'block' }} />
      <button
        onClick={onExit}
        style={{
          position: 'absolute',
          top: '16px',
          right: '16px',
          background: 'rgba(255, 255, 255, 0.1)',
          color: '#0F0',
          border: '1px solid #0F0',
          padding: '6px 12px',
          fontFamily: 'monospace',
          borderRadius: '4px',
          cursor: 'pointer',
          zIndex: 20,
          transition: 'all 0.2s'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#0F0'
          e.currentTarget.style.color = '#000'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'
          e.currentTarget.style.color = '#0F0'
        }}
      >
        Exit Matrix (Esc/q)
      </button>
    </div>
  )
}

export default function Terminal() {
  const [loadTime] = useState(Date.now())
  const [history, setHistory] = useState([
    { type: 'output', text: "Welcome to Prasanga's Interactive Shell (v1.0.0)" },
    { type: 'output', text: "Type 'help' to see a list of available commands, or 'neofetch' to view profile summary." },
    { type: 'output', text: '' }
  ])
  const [input, setInput] = useState('')
  const [cmdHistory, setCmdHistory] = useState([])
  const [historyIdx, setHistoryIdx] = useState(-1)
  const [isMatrixActive, setIsMatrixActive] = useState(false)
  const [termTheme, setTermTheme] = useState('dark') // dark, light, matrix
  const [isFullscreen, setIsFullscreen] = useState(false)
  
  const bodyRef = useRef(null)
  const terminalEndRef = useRef(null)
  const inputRef = useRef(null)
  const containerRef = useRef(null)

  const commands = [
    'help',
    'about',
    'skills',
    'projects',
    'contact',
    'neofetch',
    'matrix',
    'theme',
    'gui',
    'clear'
  ]

  useEffect(() => {
    scrollToBottom()
  }, [history, isMatrixActive])

  const scrollToBottom = () => {
    if (bodyRef.current) {
      bodyRef.current.scrollTo({
        top: bodyRef.current.scrollHeight,
        behavior: 'smooth'
      })
    }
  }

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus({ preventScroll: true })
    }
  }

  // Handle command submissions
  const handleCommand = (rawCommand) => {
    const trimmed = rawCommand.trim()
    if (!trimmed) {
      setHistory(prev => [...prev, { type: 'input', text: '' }])
      return
    }

    const args = trimmed.split(' ')
    const cmd = args[0].toLowerCase()
    
    // Add to input display
    const newLogs = [{ type: 'input', text: trimmed }]

    // Save in command history
    setCmdHistory(prev => [trimmed, ...prev])
    setHistoryIdx(-1)

    switch (cmd) {
      case 'clear':
        setHistory([])
        setInput('')
        return

      case 'help':
        newLogs.push({
          type: 'output',
          text: `Available commands:
  about     - Learn more about Prasanga's background
  skills    - List programming languages, tools & frameworks
  projects  - Show featured development projects & repos
  contact   - Display social profiles and email details
  neofetch  - Run system information fetch
  matrix    - Enter code digital rain simulation (Canvas screen)
  theme     - Customize shell theme (theme dark | theme light | theme matrix)
  gui       - Scroll viewport back to standard visual interface
  clear     - Clean the terminal window buffer`
        })
        break

      case 'about':
        newLogs.push({
          type: 'output',
          text: `Prasanga Niraula — Computer Engineering Student (IOE, TU)
-----------------------------------------------------------
Bio:
  I build highly functional web applications and train/deploy machine
  learning models. My expertise spans Python/FastAPI, Javascript/React,
  and RAG pipelines.

Education:
  B.E. Computer Engineering (2023 - 2026)
  Institute of Engineering, Tribhuvan University, Nepal
  Major Focus: Machine Learning, DSA, Databases, Computer Vision

Certifications:
  - Supervised Machine Learning (DeepLearning.AI, 2024)
  - Advanced Learning Algorithms (DeepLearning.AI, 2024)`
        })
        break

      case 'skills':
        newLogs.push({
          type: 'output',
          text: `Technical Expertise:
--------------------
[Languages]
  Python, C, C++, SQL, HTML, CSS, JavaScript (ES6+)

[Frameworks & Tools]
  React, Vite, Node.js, FastAPI, Tailwind CSS, Redux Toolkit, Git, Chess.js

[AI & Data Science]
  Machine Learning, Deep Learning, PyTorch, TensorFlow, Computer Vision, RAG pipelines, pgvector

[Databases & Infrastructure]
  MySQL, PostgreSQL, MongoDB, REST APIs, Vercel`
        })
        break

      case 'projects':
        if (args[1] === 'open' && args[2]) {
          const id = parseInt(args[2], 10)
          const p = PROJECTS_DATA.find(item => item.id === id)
          if (p) {
            window.open(p.github, '_blank', 'noopener,noreferrer')
            newLogs.push({ type: 'output', text: `Opening repository for ${p.title}...` })
          } else {
            newLogs.push({ type: 'output', text: `Project ID ${args[2]} not found. Type 'projects' to list valid IDs.` })
          }
        } else {
          let projectLines = PROJECTS_DATA.map(p => 
            `[${p.id}] ${p.title} (${p.year})
    Description: ${p.description}
    Tech Stack:  ${p.tech.join(', ')}
    GitHub Link: ${p.github}`
          ).join('\n\n')

          projectLines += `\n\nUsage: 'projects open <id>' to open GitHub project repository`
          newLogs.push({ type: 'output', text: `Featured Work:\n--------------\n${projectLines}` })
        }
        break

      case 'contact':
        newLogs.push({
          type: 'output',
          text: `Contact Info:
-------------
Email:    prasanganiraula2016@gmail.com
GitHub:   https://github.com/prasanga73
LinkedIn: https://www.linkedin.com/in/prasanga-niraula-7bb8242a6

(Feel free to scroll down and use the contact form to send a message!)`
        })
        break

      case 'neofetch':
        const uptimeSec = Math.floor((Date.now() - loadTime) / 1000)
        const uptimeFormatted = uptimeSec > 60 
          ? `${Math.floor(uptimeSec / 60)}m ${uptimeSec % 60}s` 
          : `${uptimeSec}s`

        const rightColumn = [
          `guest@prasanga.n`,
          `----------------`,
          `OS: PrasangaOS v1.0.0`,
          `Shell: react-terminal-cli`,
          `Host: IOE, Tribhuvan University`,
          `Uptime: ${uptimeFormatted}`,
          `Skills: React, FastAPI, ML/AI`,
          `Status: Available for hire`,
          `Terminal Theme: ${termTheme}`
        ]

        // Combine ascii art and info
        let neofetchOutput = ''
        const maxLines = Math.max(ASCII_ART.length, rightColumn.length)
        for (let i = 0; i < maxLines; i++) {
          const asciiLine = ASCII_ART[i] || '              '
          const infoLine = rightColumn[i] || ''
          neofetchOutput += `${asciiLine.padEnd(16)}${infoLine}\n`
        }

        newLogs.push({ type: 'output', text: neofetchOutput.trimEnd() })
        break

      case 'matrix':
        setIsMatrixActive(true)
        newLogs.push({ type: 'output', text: 'Initializing Matrix Digital Rain...' })
        break

      case 'theme':
        if (args[1] === 'dark') {
          setTermTheme('dark')
          newLogs.push({ type: 'output', text: 'Theme changed to DARK.' })
        } else if (args[1] === 'light') {
          setTermTheme('light')
          newLogs.push({ type: 'output', text: 'Theme changed to LIGHT.' })
        } else if (args[1] === 'matrix') {
          setTermTheme('matrix')
          newLogs.push({ type: 'output', text: 'Theme changed to MATRIX.' })
        } else {
          newLogs.push({ type: 'output', text: 'Usage: theme <dark | light | matrix>' })
        }
        break

      case 'gui':
        const aboutSection = document.getElementById('about')
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: 'smooth' })
          newLogs.push({ type: 'output', text: 'Scrolling to standard GUI...' })
        } else {
          newLogs.push({ type: 'output', text: 'Could not scroll. GUI not found.' })
        }
        break

      default:
        newLogs.push({
          type: 'output',
          text: `Command not found: '${cmd}'. Type 'help' for options.`
        })
    }

    setHistory(prev => [...prev, ...newLogs])
    setInput('')
  }

  // Handle Tab autocomplete and Arrow history keys
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand(input)
    } 
    else if (e.key === 'Tab') {
      e.preventDefault()
      const trimmed = input.trim()
      if (!trimmed) return

      const matching = commands.filter(c => c.startsWith(trimmed))
      if (matching.length === 1) {
        setInput(matching[0] + ' ')
      } else if (matching.length > 1) {
        // Show options
        setHistory(prev => [
          ...prev,
          { type: 'input', text: input },
          { type: 'output', text: matching.join('    ') }
        ])
      }
    } 
    else if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (cmdHistory.length === 0) return
      const nextIdx = historyIdx + 1
      if (nextIdx < cmdHistory.length) {
        setHistoryIdx(nextIdx)
        setInput(cmdHistory[nextIdx])
      }
    } 
    else if (e.key === 'ArrowDown') {
      e.preventDefault()
      const nextIdx = historyIdx - 1
      if (nextIdx >= 0) {
        setHistoryIdx(nextIdx)
        setInput(cmdHistory[nextIdx])
      } else {
        setHistoryIdx(-1)
        setInput('')
      }
    }
  }

  // Setup theme-based styles
  const getThemeStyles = () => {
    switch (termTheme) {
      case 'light':
        return {
          bg: '#FFFFFF',
          text: '#1E293B',
          prompt: '#2563EB',
          accent: '#4F46E5',
          border: '1px solid #E2E8F0',
          titleBg: '#F8FAFC',
          titleText: '#64748B',
          cursor: '#2563EB'
        }
      case 'matrix':
        return {
          bg: '#000000',
          text: '#00FF00',
          prompt: '#00FF00',
          accent: '#00FF00',
          border: '1px solid #00FF00',
          titleBg: '#051105',
          titleText: '#00FF00',
          cursor: '#00FF00',
          textShadow: '0 0 4px rgba(0, 255, 0, 0.6)'
        }
      case 'dark':
      default:
        return {
          bg: '#0D0E12',
          text: '#F1F5F9',
          prompt: '#6366F1',
          accent: '#818CF8',
          border: '1px solid #1E293B',
          titleBg: '#13151D',
          titleText: '#94A3B8',
          cursor: '#818CF8'
        }
    }
  }

  const themeStyles = getThemeStyles()

  return (
    <section 
      id="terminal" 
      className="section"
      style={{ 
        padding: '120px 24px', 
        borderTop: '1px solid var(--border-color)',
        position: 'relative'
      }}
    >
      <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
        
        {/* Section Header */}
        <div style={{ marginBottom: '48px', textAlign: 'center' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-muted)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
            Interactive Shell
          </span>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 800, letterSpacing: '-0.03em', marginTop: '8px' }}>
            Developer Terminal
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginTop: '8px' }}>
            Interact with the portfolio using standard command line tools.
          </p>
        </div>

        {/* Terminal Window Container */}
        <div 
          ref={containerRef}
          onClick={focusInput}
          style={{
            width: '100%',
            height: isFullscreen ? '75vh' : '480px',
            backgroundColor: themeStyles.bg,
            border: themeStyles.border,
            borderRadius: isFullscreen ? '0px' : '12px',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.88rem',
            position: isFullscreen ? 'fixed' : 'relative',
            inset: isFullscreen ? '0' : 'auto',
            zIndex: isFullscreen ? 1000 : 'auto',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.25)',
            transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          {/* Matrix Overlay if active */}
          {isMatrixActive && <MatrixRain onExit={() => setIsMatrixActive(false)} />}

          {/* Title Bar */}
          <div 
            style={{
              height: '38px',
              backgroundColor: themeStyles.titleBg,
              borderBottom: themeStyles.border,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0 16px',
              userSelect: 'none'
            }}
          >
            {/* OSX Style Window Dots */}
            <div style={{ display: 'flex', gap: '8px' }}>
              <div 
                onClick={(e) => { e.stopPropagation(); setHistory([{ type: 'output', text: 'Terminal reset.' }]) }}
                style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#EF4444', cursor: 'pointer' }} 
                title="Clear Logs"
              />
              <div 
                onClick={(e) => { e.stopPropagation(); setIsMatrixActive(true) }}
                style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#F59E0B', cursor: 'pointer' }}
                title="Matrix Rain"
              />
              <div 
                onClick={(e) => { e.stopPropagation(); setIsFullscreen(!isFullscreen) }}
                style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#10B981', cursor: 'pointer' }}
                title={isFullscreen ? "Restore size" : "Fullscreen"}
              />
            </div>

            {/* Window Title */}
            <div style={{ color: themeStyles.titleText, fontSize: '0.78rem', fontWeight: 500 }}>
              guest@prasanga: ~
            </div>

            {/* Theme Indicators */}
            <div style={{ display: 'flex', gap: '6px' }}>
              {['dark', 'light', 'matrix'].map(t => (
                <button
                  key={t}
                  onClick={(e) => { e.stopPropagation(); setTermTheme(t) }}
                  style={{
                    fontSize: '0.68rem',
                    padding: '2px 6px',
                    borderRadius: '4px',
                    backgroundColor: termTheme === t ? themeStyles.accent : 'transparent',
                    color: termTheme === t ? themeStyles.bg : themeStyles.titleText,
                    border: `1px solid ${termTheme === t ? themeStyles.accent : 'transparent'}`,
                    cursor: 'pointer',
                    textTransform: 'uppercase',
                    fontWeight: 600,
                    transition: 'all 0.15s'
                  }}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Terminal Body / Output Scroll Container */}
          <div 
            ref={bodyRef}
            style={{
              flex: 1,
              overflowY: 'auto',
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              color: themeStyles.text,
              textShadow: themeStyles.textShadow,
              lineHeight: 1.5,
              whiteSpace: 'pre-wrap',
              position: 'relative'
            }}
          >
            {/* Scanlines effect for Matrix theme */}
            {termTheme === 'matrix' && (
              <div 
                style={{
                  position: 'absolute',
                  inset: 0,
                  pointerEvents: 'none',
                  background: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))',
                  backgroundSize: '100% 4px, 6px 100%',
                  zIndex: 2
                }}
              />
            )}

            {/* History Output */}
            {history.map((log, idx) => {
              if (log.type === 'input') {
                return (
                  <div key={idx} style={{ display: 'flex' }}>
                    <span style={{ color: themeStyles.prompt, marginRight: '8px', fontWeight: 600 }}>guest@prasanga:~$</span>
                    <span>{log.text}</span>
                  </div>
                )
              } else {
                return (
                  <div key={idx} style={{ color: themeStyles.text }}>
                    {log.text}
                  </div>
                )
              }
            })}

            {/* Current Prompt Input */}
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ color: themeStyles.prompt, marginRight: '8px', fontWeight: 600 }}>guest@prasanga:~$</span>
              <div style={{ flex: 1, display: 'flex', position: 'relative', alignItems: 'center' }}>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  autoComplete="off"
                  autoCorrect="off"
                  autoCapitalize="off"
                  spellCheck="false"
                  style={{
                    width: '100%',
                    background: 'transparent',
                    border: 'none',
                    outline: 'none',
                    color: 'transparent', // Hide native text color, caret is custom
                    caretColor: 'transparent',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.88rem',
                    position: 'absolute',
                    inset: 0,
                    zIndex: 2
                  }}
                />
                {/* Rendered Text + Custom Cursor */}
                <div style={{ display: 'flex', alignItems: 'center', pointerEvents: 'none', zIndex: 1 }}>
                  <span>{input}</span>
                  <span 
                    style={{
                      display: 'inline-block',
                      width: '8px',
                      height: '15px',
                      backgroundColor: themeStyles.cursor,
                      marginLeft: '1px',
                      animation: 'blink 1s step-end infinite',
                      boxShadow: termTheme === 'matrix' ? '0 0 6px #00FF00' : 'none'
                    }}
                  />
                </div>
              </div>
            </div>
            
            <div ref={terminalEndRef} />
          </div>

          {/* Info Bottom Bar */}
          <div 
            style={{
              padding: '6px 16px',
              backgroundColor: themeStyles.titleBg,
              borderTop: themeStyles.border,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontSize: '0.72rem',
              color: themeStyles.titleText,
              userSelect: 'none'
            }}
          >
            <div>
              Press <span style={{ color: themeStyles.accent, fontWeight: 600 }}>Tab</span> for autocomplete
            </div>
            <div>
              Type <span style={{ color: themeStyles.accent, fontWeight: 600 }}>help</span> to list commands
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
