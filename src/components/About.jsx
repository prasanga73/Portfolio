export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: '120px 24px',
        borderTop: '1px solid var(--glass-border)',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Section Label */}
        <div style={{ marginBottom: '64px' }}>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8rem',
              color: 'var(--text-muted)',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
            }}
          >
            About
          </span>
          <h2
            style={{
              fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              marginTop: '8px',
            }}
          >
            Background
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '48px',
          }}
          className="md:grid-cols-2"
        >
          {/* Bio */}
          <div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                color: 'var(--text-secondary)',
                fontSize: '1rem',
                lineHeight: 1.8,
              }}
            >
              <p>
                I'm a Computer Engineering student at the Institute of Engineering,
                Tribhuvan University, Nepal (2023–2026). My work sits at the intersection
                of full-stack web development and applied machine learning.
              </p>
              <p>
                I've gone from studying data structures and algorithms to building
                production-ready AI systems — including a RAG-based legal advisory tool
                that serves Nepali law. I write clean, maintainable code and design
                applications with the end-user in mind.
              </p>
              <p style={{ color: 'var(--text-muted)' }}>
                Outside of work: guitar, chess, and novels.
              </p>
            </div>
          </div>

          {/* Education & Certs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* Education Card */}
            <div className="card">
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '12px',
                  flexWrap: 'wrap',
                  gap: '8px',
                }}
              >
                <h3 style={{ fontSize: '1rem', fontWeight: 700 }}>
                  B.E. Computer Engineering
                </h3>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.78rem',
                    color: 'var(--text-muted)',
                  }}
                >
                  2023 – 2026
                </span>
              </div>
              <p
                style={{
                  fontSize: '0.9rem',
                  color: 'var(--text-secondary)',
                  marginBottom: '16px',
                }}
              >
                Institute of Engineering, Tribhuvan University
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {['Data Structures & Algorithms', 'Machine Learning', 'Database Systems', 'Probability & Statistics'].map(
                  (course) => (
                    <span key={course} className="badge">
                      {course}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* Certifications Card */}
            <div className="card">
              <h3
                style={{
                  fontSize: '1rem',
                  fontWeight: 700,
                  marginBottom: '16px',
                }}
              >
                Certifications
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  { name: 'Supervised Machine Learning', org: 'DeepLearning.AI', year: '2024' },
                  { name: 'Advanced Learning Algorithms', org: 'DeepLearning.AI', year: '2024' },
                ].map((cert) => (
                  <div
                    key={cert.name}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '12px 0',
                      borderBottom: '1px solid var(--border-color)',
                      flexWrap: 'wrap',
                      gap: '4px',
                    }}
                  >
                    <div>
                      <p
                        style={{
                          fontSize: '0.9rem',
                          fontWeight: 600,
                          color: 'var(--text-primary)',
                        }}
                      >
                        {cert.name}
                      </p>
                      <p
                        style={{
                          fontSize: '0.8rem',
                          color: 'var(--text-muted)',
                        }}
                      >
                        {cert.org}
                      </p>
                    </div>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.75rem',
                        color: 'var(--text-muted)',
                      }}
                    >
                      {cert.year}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
