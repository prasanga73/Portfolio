import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollBackground from './components/ScrollBackground'
import './App.css'

function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme')
      return savedTheme === 'light' ? 'light' : 'dark'
    }
    return 'dark'
  })

  useEffect(() => {
    const root = window.document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <div className="bg-primary text-primary transition-colors duration-300 min-h-screen" style={{ position: 'relative' }}>
      <ScrollBackground theme={theme} />
      <div style={{ position: 'relative', zIndex: 1 }}>
      <Header theme={theme} setTheme={setTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer theme={theme} setTheme={setTheme} />
      </div>
    </div>
  )
}

export default App
