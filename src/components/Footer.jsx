export default function Footer({ theme, setTheme }) {
  const year = new Date().getFullYear()

  return (
    <footer style={{ borderTop: '1px solid var(--glass-border)', padding: '40px 24px', backdropFilter: 'blur(var(--glass-blur))', WebkitBackdropFilter: 'blur(var(--glass-blur))' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
          <img
            src="/logo.png"
            alt="Logo"
            style={{
              width: '20px',
              height: '20px',
              borderRadius: '50%',
              objectFit: 'cover',
              padding: '1.5px',
              backgroundColor: '#0e121a',
              border: '1px solid var(--border-color)',
            }}
          />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)' }}>
            prasanga.n
          </span>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            © {year}
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
            React + Vite + Tailwind
          </span>
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            style={{
              background: 'var(--glass-bg-tertiary)', border: '1px solid var(--glass-border)',
              borderRadius: '6px', padding: '6px 12px', cursor: 'pointer',
              fontSize: '0.78rem', fontWeight: 500, color: 'var(--text-secondary)',
              fontFamily: 'var(--font-sans)', transition: 'all 0.2s',
              display: 'flex', alignItems: 'center', gap: '6px',
              backdropFilter: 'blur(var(--glass-blur))', WebkitBackdropFilter: 'blur(var(--glass-blur))',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--border-hover)'; e.currentTarget.style.color = 'var(--text-primary)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--glass-border)'; e.currentTarget.style.color = 'var(--text-secondary)' }}
          >
            {theme === 'dark' ? (
              <><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/></svg>Light</>
            ) : (
              <><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>Dark</>
            )}
          </button>
        </div>
      </div>
    </footer>
  )
}
