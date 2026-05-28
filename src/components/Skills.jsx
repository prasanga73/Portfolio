export default function Skills() {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['Python', 'C', 'C++', 'SQL', 'HTML', 'CSS', 'JavaScript']
    },
    {
      title: 'Technologies & Frameworks',
      skills: ['React', 'Vite', 'Node.js', 'FastAPI', 'Tailwind CSS', 'Redux Toolkit', 'Chess.js']
    },
    {
      title: 'AI & Data Science',
      skills: ['Machine Learning', 'Deep Learning', 'PyTorch', 'TensorFlow', 'Computer Vision', 'RAG Pipeline', 'pgvector']
    },
    {
      title: 'Databases & Tools',
      skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'GitHub', 'Git', 'REST APIs']
    }
  ]

  return (
    <section id="skills" className="py-20 px-6 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-12 text-center transition-colors duration-300">Skills & Expertise</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="bg-slate-50 dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700 hover:border-purple-500/50 dark:hover:border-purple-500/50 shadow-sm dark:shadow-none transition-all duration-300">
              <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-400 mb-4 transition-colors duration-300">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-purple-50 dark:bg-purple-500/20 text-purple-700 dark:text-purple-300 rounded-full text-sm border border-purple-200 dark:border-purple-500/50 hover:bg-purple-100 dark:hover:bg-purple-500/30 transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
