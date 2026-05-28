import { useState } from 'react'

export default function Header({ theme, setTheme }) {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <nav className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          Prasanga
        </h1>
        
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <div className={`${isOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row items-center gap-6 absolute md:static top-16 left-0 right-0 bg-white dark:bg-slate-900 md:bg-transparent p-6 md:p-0 border-b md:border-0 border-slate-200 dark:border-slate-800`}>
          <button onClick={() => scrollToSection('home')} className="text-slate-600 dark:text-slate-300 hover:text-primary transition font-medium cursor-pointer hover:scale-90">Home</button>
          <button onClick={() => scrollToSection('about')} className="text-slate-600 dark:text-slate-300 hover:text-primary transition font-medium cursor-pointer hover:scale-90">About</button>
          <button onClick={() => scrollToSection('skills')} className="text-slate-600 dark:text-slate-300 hover:text-primary transition font-medium cursor-pointer hover:scale-90">Skills</button>
          <button onClick={() => scrollToSection('projects')} className="text-slate-600 dark:text-slate-300 hover:text-primary transition font-medium cursor-pointer hover:scale-90">Projects</button>
          <button onClick={() => scrollToSection('contact')} className="text-slate-600 dark:text-slate-300 hover:text-primary transition font-medium cursor-pointer hover:scale-90">Contact</button>
          
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-colors duration-200 cursor-pointer focus:outline-none"
            aria-label="Toggle dark mode"
          >
            {theme === 'dark' ? (
              <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
        </div>
      </nav>
    </header>
  )
}
