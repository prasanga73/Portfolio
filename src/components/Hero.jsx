import profileImage from '../assets/image.jpeg'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 flex items-center justify-center px-6 py-20 transition-colors duration-300">
      <div className="max-w-4xl text-center">
        <div className="mb-8 animate-fade-in">
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-400 to-pink-600 p-1">
            <div className="w-full h-full rounded-full bg-white dark:bg-slate-900 flex items-center justify-center transition-colors duration-300">
              <img src={profileImage} className="w-full h-full object-cover rounded-full"></img>
            </div>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6 transition-colors duration-300">
          Hi, I'm <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">Prasanga Niraula</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 mb-8 max-w-2xl mx-auto transition-colors duration-300">
          Full-Stack Developer & AI Enthusiast | Computer Engineering Student at Institute of Engineering
        </p>
        
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto transition-colors duration-300">
          Building modern web applications with React, crafting AI solutions with machine learning, and passionate about creating meaningful digital experiences.
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <a href="#projects" className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg hover:opacity-90 transition font-semibold shadow-md hover:shadow-lg transition-all duration-200">
            View My Work
          </a>
          <a href="#contact" className="px-8 py-3 border-2 border-purple-600 dark:border-purple-400 text-purple-650 dark:text-purple-400 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-400/10 transition font-semibold">
            Get In Touch
          </a>
        </div>

        <div className="flex justify-center gap-6 text-slate-500 dark:text-slate-400 transition-colors duration-300">
          <a href="https://github.com/prasanga73" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600 dark:hover:text-primary transition">
            <span className="sr-only">GitHub</span>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/prasanga-niraula-7bb8242a6" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600 dark:hover:text-primary transition">
            <span className="sr-only">LinkedIn</span>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.735-2.004 1.446-.103.25-.129.598-.129.946v5.413h-3.554s.05-8.789 0-9.514h3.554v1.347c.42-.648 1.36-1.573 3.322-1.573 2.429 0 4.25 1.574 4.25 4.963v4.777zM5.337 8.855c-1.144 0-1.915-.758-1.915-1.704 0-.948.77-1.704 1.963-1.704 1.193 0 1.915.756 1.937 1.704 0 .946-.744 1.704-1.985 1.704zm1.582 11.597H3.635V9.438h3.284v10.914zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
            </svg>
          </a>
          <a href="mailto:prasanganiraula2016@gmail.com" className="hover:text-purple-600 dark:hover:text-primary transition">
            <span className="sr-only">Email</span>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
