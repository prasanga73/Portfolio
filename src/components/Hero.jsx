import { useState, useEffect } from 'react'
import profileImage from '../assets/image.jpeg'

const ROLES = [
  'Full-Stack Developer',
  'AI / ML Engineer',
  'Computer Engineer',
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = ROLES[roleIndex]
    let timer

    if (!isDeleting && text.length < currentRole.length) {
      timer = setTimeout(() => setText(currentRole.slice(0, text.length + 1)), 80)
    } else if (!isDeleting && text.length === currentRole.length) {
      timer = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && text.length > 0) {
      timer = setTimeout(() => setText(text.slice(0, -1)), 40)
    } else if (isDeleting && text.length === 0) {
      setIsDeleting(false)
      setRoleIndex((prev) => (prev + 1) % ROLES.length)
    }

    return () => clearTimeout(timer)
  }, [text, isDeleting, roleIndex])

  return (
    <section
      id="home"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >


      {/* Subtle radial gradient */}
      <div
        style={{
          position: 'absolute',
          top: '-40%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '800px',
          height: '800px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, var(--accent-light), transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '720px',
          padding: '0 24px',
          textAlign: 'center',
        }}
      >
        {/* Avatar */}
        <div className="fade-in" style={{ marginBottom: '32px' }}>
          <div
            style={{
              width: '96px',
              height: '96px',
              borderRadius: '50%',
              overflow: 'hidden',
              margin: '0 auto',
              border: '2px solid var(--border-color)',
            }}
          >
            <img
              src={profileImage}
              alt="Prasanga Niraula"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              marginTop: '12px',
            }}
          >
            <div
              style={{
                width: '7px',
                height: '7px',
                borderRadius: '50%',
                backgroundColor: '#22c55e',
              }}
            />
            <span
              style={{
                fontSize: '0.8rem',
                color: 'var(--text-muted)',
                fontWeight: 500,
              }}
            >
              Available for work
            </span>
          </div>
        </div>

        {/* Name */}
        <h1
          className="fade-in delay-1"
          style={{
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: '-0.04em',
            marginBottom: '16px',
          }}
        >
          Prasanga Niraula
        </h1>

        {/* Typing role */}
        <div
          className="fade-in delay-2"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '1.05rem',
            color: 'var(--accent-color)',
            fontWeight: 500,
            marginBottom: '24px',
            minHeight: '1.6em',
          }}
        >
          {text}
          <span
            style={{
              display: 'inline-block',
              width: '2px',
              height: '1.1em',
              backgroundColor: 'var(--accent-color)',
              marginLeft: '2px',
              verticalAlign: 'text-bottom',
              animation: 'blink 1s step-end infinite',
            }}
          />
        </div>

        {/* Description */}
        <p
          className="fade-in delay-3"
          style={{
            fontSize: '1.1rem',
            lineHeight: 1.7,
            color: 'var(--text-secondary)',
            marginBottom: '40px',
            maxWidth: '540px',
            margin: '0 auto 40px',
          }}
        >
          Computer Engineering student at IOE, Tribhuvan University.
          I build web applications and AI solutions that solve real problems.
        </p>

        {/* CTAs */}
        <div
          className="fade-in delay-4"
          style={{
            display: 'flex',
            gap: '12px',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: '48px',
          }}
        >
          <a href="#projects" className="button-primary" style={{ backdropFilter: 'blur(var(--glass-blur))', WebkitBackdropFilter: 'blur(var(--glass-blur))' }}>
            View Work
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
          <a href="#contact" className="button-secondary" style={{ backdropFilter: 'blur(var(--glass-blur))', WebkitBackdropFilter: 'blur(var(--glass-blur))' }}>
            Contact
          </a>
        </div>

        {/* Social */}
        <div
          className="fade-in delay-4"
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '12px',
          }}
        >
          {[
            {
              href: 'https://github.com/prasanga73',
              label: 'GitHub',
              icon: <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />,
            },
            {
              href: 'https://www.linkedin.com/in/prasanga-niraula-7bb8242a6',
              label: 'LinkedIn',
              icon: <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.735-2.004 1.446-.103.25-.129.598-.129.946v5.413h-3.554s.05-8.789 0-9.514h3.554v1.347c.42-.648 1.36-1.573 3.322-1.573 2.429 0 4.25 1.574 4.25 4.963v4.777zM5.337 8.855c-1.144 0-1.915-.758-1.915-1.704 0-.948.77-1.704 1.963-1.704 1.193 0 1.915.756 1.937 1.704 0 .946-.744 1.704-1.985 1.704zm1.582 11.597H3.635V9.438h3.284v10.914zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />,
            },
            {
              href: 'mailto:prasanganiraula2016@gmail.com',
              label: 'Email',
              icon: <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />,
            },
          ].map(({ href, label, icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              aria-label={label}
              style={{
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '8px',
                border: '1px solid var(--glass-border)',
                color: 'var(--text-muted)',
                backdropFilter: 'blur(var(--glass-blur))',
                WebkitBackdropFilter: 'blur(var(--glass-blur))',
                background: 'var(--glass-bg-tertiary)',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-hover)'
                e.currentTarget.style.color = 'var(--text-primary)'
                e.currentTarget.style.background = 'var(--glass-bg-secondary)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--glass-border)'
                e.currentTarget.style.color = 'var(--text-muted)'
                e.currentTarget.style.background = 'var(--glass-bg-tertiary)'
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                {icon}
              </svg>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
