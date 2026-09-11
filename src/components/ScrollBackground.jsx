import { useEffect, useRef } from 'react'

const CHAR = 'प्र'
const SIZES = [8, 10, 12, 16, 20]
const WEIGHTS = [300, 400, 500, 600, 700]
const STYLES = ['normal', 'italic']
const FONTS = ['"Outfit"', '"Inter"', '"JetBrains Mono"', 'sans-serif', 'serif']

export default function ScrollBackground({ theme }) {
  const canvasRef = useRef(null)
  const mouseRef = useRef({ x: -1000, y: -1000 })
  const animRef = useRef(null)
  const particlesRef = useRef([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    let w, h

    const resize = () => {
      w = canvas.width = window.innerWidth
      h = canvas.height = window.innerHeight
    }

    const handleMouse = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }

      // Spawn subtle particle on mousemove
      particlesRef.current.push({
        x: e.clientX,
        y: e.clientY,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        alpha: 1.0,
        fading: false,
        size: SIZES[Math.floor(Math.random() * SIZES.length)],
        color: theme === 'dark' ? '#ffffff' : '#000000',
        text: CHAR,
        weight: WEIGHTS[Math.floor(Math.random() * WEIGHTS.length)],
        style: STYLES[Math.floor(Math.random() * STYLES.length)],
        fontFamily: FONTS[Math.floor(Math.random() * FONTS.length)],
        rotation: (Math.random() - 0.5) * 0.4,
      })
    }

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 }
    }

    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', handleMouse, { passive: true })
    document.addEventListener('mouseleave', handleMouseLeave)

    resize()

    // Ambient subtle random spawner
    let randomSpawnTimer = null
    function scheduleRandomSpawn() {
      randomSpawnTimer = setTimeout(() => {
        const burstCount = 1 + Math.floor(Math.random() * 2)
        for (let b = 0; b < burstCount; b++) {
          const rx = Math.random() * w
          const ry = Math.random() * h
          const clusterSize = 2 + Math.floor(Math.random() * 3)
          for (let i = 0; i < clusterSize; i++) {
            particlesRef.current.push({
              x: rx + (Math.random() - 0.5) * 40,
              y: ry + (Math.random() - 0.5) * 40,
              vx: (Math.random() - 0.5) * 2,
              vy: (Math.random() - 0.5) * 2,
              alpha: 0.3 + Math.random() * 0.2,
              fading: false,
              size: SIZES[Math.floor(Math.random() * SIZES.length)],
              color: theme === 'dark' ? '#ffffff' : '#000000',
              text: CHAR,
              weight: WEIGHTS[Math.floor(Math.random() * WEIGHTS.length)],
              style: STYLES[Math.floor(Math.random() * STYLES.length)],
              fontFamily: FONTS[Math.floor(Math.random() * FONTS.length)],
              rotation: (Math.random() - 0.5) * 0.5,
            })
          }
        }
        scheduleRandomSpawn()
      }, 5000 + Math.random() * 5000)
    }
    scheduleRandomSpawn()

    const draw = () => {
      ctx.clearRect(0, 0, w, h)

      // Update and Draw Particles
      const particles = particlesRef.current
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]

        p.vx *= 0.99
        p.vy *= 0.99
        p.x += p.vx
        p.y += p.vy

        const speed = Math.abs(p.vx) + Math.abs(p.vy)
        if (speed < 0.5 && !p.fading) {
          p.fading = true
        }
        if (p.fading) {
          p.alpha -= 0.008
        }

        if (p.alpha <= 0) {
          particles.splice(i, 1)
          continue
        }

        ctx.save()
        ctx.globalAlpha = p.alpha
        ctx.font = `${p.style} ${p.weight} ${p.size}px ${p.fontFamily}`
        ctx.fillStyle = p.color
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        if (p.rotation) {
          ctx.translate(p.x, p.y)
          ctx.rotate(p.rotation)
          ctx.fillText(p.text, 0, 0)
        } else {
          ctx.fillText(p.text, p.x, p.y)
        }
        ctx.restore()
      }

      animRef.current = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMouse)
      document.removeEventListener('mouseleave', handleMouseLeave)
      if (animRef.current) cancelAnimationFrame(animRef.current)
      if (randomSpawnTimer) clearTimeout(randomSpawnTimer)
    }
  }, [theme])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  )
}
