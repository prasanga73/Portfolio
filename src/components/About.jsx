export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-slate-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">Who I Am</h3>
            <p className="text-slate-300 mb-4 leading-relaxed">
              I'm a Bachelor's student in Computer Engineering at the Institute of Engineering, Tribhuvan University, Nepal (2023-2026). Passionate about building full-stack web applications and exploring the intersection of web development and artificial intelligence.
            </p>
            <p className="text-slate-300 mb-4 leading-relaxed">
              My journey has taken me from learning data structures and algorithms to implementing real-world AI solutions. I believe in writing clean, maintainable code and creating user-centric applications.
            </p>
            <p className="text-slate-300 leading-relaxed">
              When I'm not coding, you can find me playing guitar, enjoying a chess match, or diving into a good novel.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">Education</h3>
            <div className="bg-slate-700/50 rounded-lg p-6 border border-slate-600">
              <h4 className="text-xl font-semibold text-purple-400 mb-2">
                Bachelor's in Computer Engineering
              </h4>
              <p className="text-slate-300 mb-4">
                Institute of Engineering, Tribhuvan University, Nepal
              </p>
              <p className="text-slate-400 mb-4">2023 - 2026</p>
              <div className="space-y-2">
                <p className="text-slate-300 text-sm"><strong>Relevant Coursework:</strong></p>
                <ul className="text-slate-400 text-sm space-y-1">
                  <li>• Data Structures and Algorithms</li>
                  <li>• Probability and Statistics</li>
                  <li>• Machine Learning</li>
                  <li>• Database Management Systems</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-white mt-8 mb-6">Certifications</h3>
            <div className="space-y-3">
              <div className="bg-slate-700/50 rounded p-4 border border-slate-600">
                <p className="text-slate-300 font-semibold">Supervised Machine Learning</p>
                <p className="text-slate-400 text-sm">DeepLearning.AI (2024)</p>
              </div>
              <div className="bg-slate-700/50 rounded p-4 border border-slate-600">
                <p className="text-slate-300 font-semibold">Advanced Learning Algorithms</p>
                <p className="text-slate-400 text-sm">DeepLearning.AI (2024)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
