export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{ borderTop: '1px solid var(--glass-border)', padding: '40px 24px', backdropFilter: 'blur(var(--glass-blur))', WebkitBackdropFilter: 'blur(var(--glass-blur))' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
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
        <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>•</span>
        <a
          href="https://blog.prasanganiraula.com.np/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontSize: '0.8rem',
            color: 'var(--text-secondary)',
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '3px',
            transition: 'color 0.2s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-color)')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
        >
          <span>blog</span>
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </a>
      </div>
    </footer>
  )
}
