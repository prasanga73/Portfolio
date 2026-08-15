export default function Skills() {
  const categories = [
    {
      title: 'Languages',
      skills: ['Python', 'C', 'C++', 'SQL', 'HTML', 'CSS', 'JavaScript'],
    },
    {
      title: 'Frameworks & Tools',
      skills: ['React', 'Vite', 'Node.js', 'FastAPI', 'Tailwind CSS', 'Redux Toolkit', 'Chess.js'],
    },
    {
      title: 'AI & Data Science',
      skills: ['Machine Learning', 'Deep Learning', 'PyTorch', 'TensorFlow', 'Computer Vision', 'RAG Pipeline', 'pgvector'],
    },
    {
      title: 'Databases & Infrastructure',
      skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'GitHub', 'Git', 'REST APIs'],
    },
  ]

  return (
    <section id="skills" style={{ padding: '120px 24px', borderTop: '1px solid var(--glass-border)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ marginBottom: '64px' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-muted)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
            Skills
          </span>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 800, letterSpacing: '-0.03em', marginTop: '8px' }}>
            Technical Expertise
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '20px' }}>
          {categories.map((cat, idx) => (
            <div key={idx} className="card">
              <h3 style={{ fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--text-muted)', marginBottom: '16px' }}>
                {cat.title}
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {cat.skills.map((skill, i) => (
                  <span key={i} className="badge">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
