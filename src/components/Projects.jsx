export default function Projects() {
  const projects = [
    {
      title: 'LegalGPT Nepal',
      subtitle: 'AI Legal Advisory System',
      year: '2025',
      description: 'Developed an AI-powered legal advisory application for Nepali law using Retrieval-Augmented Generation (RAG). Served as AI Lead: fine-tuned Mistral Nemo 12B model, implemented RAG pipeline with pgvector, and integrated citation system.',
      tech: ['FastAPI', 'React', 'PostgreSQL', 'pgvector', 'Mistral 12B', 'RAG'],
      github: 'https://github.com/e-wakil/legalgpt',
      icon: '⚖️'
    },
    {
      title: 'ChessSansar',
      subtitle: 'Online Chess Platform',
      year: '2024',
      description: 'Full-stack web-based chess application featuring play against Stockfish bot, chess puzzles, and real-time multiplayer. Implemented interactive chessboard and user authentication features.',
      tech: ['React', 'Vite', 'Tailwind CSS', 'Chess.js', 'Redux Toolkit', 'Stockfish'],
      github: 'https://github.com/prasanga73/chessSansar',
      icon: '♟️'
    }
  ]

  return (
    <section id="projects" className="py-20 px-6 bg-slate-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Featured Projects</h2>
        
        <div className="space-y-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group bg-slate-700/50 rounded-lg p-8 border border-slate-600 hover:border-purple-500/50 transition duration-300 hover:shadow-lg hover:shadow-purple-500/10"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-4">
                  <span className="text-4xl">{project.icon}</span>
                  <div>
                    <div className="flex items-baseline gap-2">
                      <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                      <span className="text-purple-400 font-semibold">{project.year}</span>
                    </div>
                    <p className="text-slate-400">{project.subtitle}</p>
                  </div>
                </div>
              </div>

              <p className="text-slate-300 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-purple-500/10 text-purple-300 rounded text-sm border border-purple-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-semibold transition"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
