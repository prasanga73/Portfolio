import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    const fd = new FormData(e.target)
    fd.append('access_key', '2daeca8c-4aac-4213-9b3e-54e93fb26563')

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: fd,
    })
    const data = await response.json()
    setLoading(false)
    if (data.success) setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <section id="contact" style={{ padding: '120px 24px', borderTop: '1px solid var(--glass-border)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ marginBottom: '64px' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-muted)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
            Contact
          </span>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 800, letterSpacing: '-0.03em', marginTop: '8px' }}>
            Get In Touch
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginTop: '12px', fontSize: '1rem', maxWidth: '480px' }}>
            I'm always open to new projects, collaborations, or opportunities.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '40px' }} className="md:grid-cols-2">
          {/* Contact Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              { label: 'Email', value: 'prasanganiraula2016@gmail.com', href: 'mailto:prasanganiraula2016@gmail.com' },
              { label: 'Phone', value: '+977-986-236-4021', href: 'tel:+977-986-236-4021' },
              { label: 'Location', value: 'Kathmandu, Nepal', href: null },
            ].map(({ label, value, href }) => (
              <div key={label} className="card" style={{ padding: '20px 24px' }}>
                <p style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--text-muted)', marginBottom: '4px' }}>
                  {label}
                </p>
                {href ? (
                  <a href={href} style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-primary)' }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-color)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--text-primary)'}
                  >
                    {value}
                  </a>
                ) : (
                  <p style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-primary)' }}>{value}</p>
                )}
              </div>
            ))}

            {/* Social Links */}
            <div className="card" style={{ padding: '20px 24px' }}>
              <p style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--text-muted)', marginBottom: '12px' }}>
                Social
              </p>
              <div style={{ display: 'flex', gap: '8px' }}>
                {[
                  { href: 'https://github.com/prasanga73', label: 'GitHub', d: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' },
                  { href: 'https://www.linkedin.com/in/prasanga-niraula-7bb8242a6/', label: 'LinkedIn', d: 'M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.735-2.004 1.446-.103.25-.129.598-.129.946v5.413h-3.554s.05-8.789 0-9.514h3.554v1.347c.42-.648 1.36-1.573 3.322-1.573 2.429 0 4.25 1.574 4.25 4.963v4.777zM5.337 8.855c-1.144 0-1.915-.758-1.915-1.704 0-.948.77-1.704 1.963-1.704 1.193 0 1.915.756 1.937 1.704 0 .946-.744 1.704-1.985 1.704zm1.582 11.597H3.635V9.438h3.284v10.914zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z' },
                ].map(({ href, label, d }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                    style={{ width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px', border: '1px solid var(--glass-border)', color: 'var(--text-muted)', background: 'var(--glass-bg-tertiary)', backdropFilter: 'blur(var(--glass-blur))', WebkitBackdropFilter: 'blur(var(--glass-blur))', transition: 'all 0.2s' }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--border-hover)'; e.currentTarget.style.color = 'var(--text-primary)'; e.currentTarget.style.background = 'var(--glass-bg-secondary)' }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--glass-border)'; e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.background = 'var(--glass-bg-tertiary)' }}
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d={d}/></svg>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="card" style={{ padding: '32px' }}>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <label htmlFor="name" style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--text-muted)', marginBottom: '8px' }}>Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="input-text" placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="email" style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--text-muted)', marginBottom: '8px' }}>Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="input-text" placeholder="your@email.com" />
              </div>
              <div>
                <label htmlFor="message" style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--text-muted)', marginBottom: '8px' }}>Message</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} className="input-text" style={{ resize: 'none' }} placeholder="Your message..." />
              </div>

              <button type="submit" className="button-primary" style={{ width: '100%', justifyContent: 'center', fontFamily: 'var(--font-sans)' }} disabled={loading}>
                {loading ? 'Sending...' : 'Send Message'}
              </button>

              {submitted && (
                <p style={{ fontSize: '0.9rem', color: '#22c55e', fontWeight: 500 }}>
                  ✓ Message sent successfully.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
