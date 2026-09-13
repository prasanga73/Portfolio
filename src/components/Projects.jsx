export default function Projects() {
  const projects = [
    {
      title: 'QA Portfolio',
      description: 'Quality engineering portfolio covering manual testing, requirements traceability, UI automation, REST API verification, and JMeter load testing. Documents 52 test cases, 14 API endpoints, and 20,000 benchmarked requests.',
      tech: ['Manual QA', 'UI Automation', 'REST API', 'JMeter', 'Test Cases'],
      live: 'https://qa.prasanganiraula.com.np',
      github: 'https://github.com/prasanga73/QA-Portfolio',
      year: '2026',
    },
    {
      title: 'LegalGPT Nepal',
      description: 'AI-powered legal advisory application for Nepali law using Retrieval-Augmented Generation. Served as AI Lead — fine-tuned Mistral 7B Instruct, implemented RAG pipeline with pgvector, and built a citation reference system.',
      tech: ['FastAPI', 'React', 'PostgreSQL', 'pgvector', 'Mistral 7B Instruct', 'RAG'],
      github: 'https://github.com/e-wakil/legalgpt/tree/prasanga73-patch-1',
      year: '2025',
    },
    {
      title: 'ChessSansar',
      description: 'Full-stack chess platform with Stockfish bot play, puzzles, and real-time multiplayer. Built interactive chessboard with Chess.js, Redux Toolkit state management, and user authentication.',
      tech: ['React', 'Vite', 'Tailwind CSS', 'Chess.js', 'Redux Toolkit', 'Stockfish'],
      github: 'https://github.com/prasanga73/chessSansar',
      year: '2024',
    },
  ]

  return (
    <section id="projects" style={{ padding: '120px 24px', borderTop: '1px solid var(--glass-border)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ marginBottom: '64px' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-muted)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
            Projects
          </span>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 800, letterSpacing: '-0.03em', marginTop: '8px' }}>
            Featured Work
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {projects.map((project, idx) => (
            <div key={idx} className="card" style={{ padding: '32px', backdropFilter: 'blur(var(--glass-blur))', WebkitBackdropFilter: 'blur(var(--glass-blur))' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px', flexWrap: 'wrap', gap: '8px' }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700 }}>{project.title}</h3>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-muted)' }}>{project.year}</span>
              </div>

              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '20px', fontSize: '0.95rem' }}>
                {project.description}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                {project.tech.map((t, i) => (
                  <span key={i} className="badge" style={{ backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)' }}>{t}</span>
                ))}
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', fontWeight: 600 }}
                  >
                    View live portfolio ↗
                  </a>
                )}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', fontWeight: 600 }}
                >
                  View on GitHub ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
