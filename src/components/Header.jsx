import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur border-b border-slate-800">
      <nav className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
          Prasanga
        </h1>
        
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-slate-300 hover:text-white"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <div className={`${isOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row gap-6 absolute md:static top-16 left-0 right-0 bg-slate-900 md:bg-transparent p-6 md:p-0 border-b md:border-0 border-slate-800`}>
          <button onClick={() => scrollToSection('home')} className="text-slate-300 hover:text-primary transition">Home</button>
          <button onClick={() => scrollToSection('about')} className="text-slate-300 hover:text-primary transition">About</button>
          <button onClick={() => scrollToSection('skills')} className="text-slate-300 hover:text-primary transition">Skills</button>
          <button onClick={() => scrollToSection('projects')} className="text-slate-300 hover:text-primary transition">Projects</button>
          <button onClick={() => scrollToSection('contact')} className="text-slate-300 hover:text-primary transition">Contact</button>
        </div>
      </nav>
    </header>
  )
}
