import { useEffect, useRef } from 'react'

const EMOJIS = ['ℼ', 'π', '𝛑', '𝜋', '𝝅', '𝝿']
const SIZES = [8, 10, 12, 16, 20]

export default function ScrollBackground({ theme }) {
  const canvasRef = useRef(null)
  const mouseRef = useRef({ x: -1000, y: -1000 })
  const scrollRef = useRef(0)
  const nodesRef = useRef([])
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
      initNodes()
    }

    const NODE_COUNT = Math.min(Math.floor((window.innerWidth * window.innerHeight) / 18000), 90)
    const CONNECT_DIST = 140
    const MOUSE_RADIUS = 180

    function initNodes() {
      nodesRef.current = []
      for (let i = 0; i < NODE_COUNT; i++) {
        nodesRef.current.push({
          x: Math.random() * w,
          y: Math.random() * h,
          baseX: Math.random() * w,
          baseY: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          radius: Math.random() * 1.5 + 0.8,
        })
      }
    }

    const handleMouse = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }

      // 3o14.com spawns exactly 1 particle per mousemove event.
      // Density comes from particles lingering a long time, not from multi-spawn.
      particlesRef.current.push({
        x: e.clientX,
        y: e.clientY,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        alpha: 1.0,
        fading: false,
        size: SIZES[Math.floor(Math.random() * SIZES.length)],
        color: theme === 'dark' ? '#ffffff' : '#000000',
        text: EMOJIS[Math.floor(Math.random() * EMOJIS.length)]
      })
    }

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 }
    }

    const handleScroll = () => {
      scrollRef.current = window.scrollY
    }

    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', handleMouse, { passive: true })
    document.addEventListener('mouseleave', handleMouseLeave)
    window.addEventListener('scroll', handleScroll, { passive: true })

    resize()

    // 3o14.com random spawner: every ~3.5s, spawn 5 particles at a random spot
    let randomSpawnTimer = null
    function scheduleRandomSpawn() {
      randomSpawnTimer = setTimeout(() => {
        const rx = Math.random() * w
        const ry = Math.random() * h
        for (let i = 0; i < 5; i++) {
          particlesRef.current.push({
            x: rx,
            y: ry,
            vx: (Math.random() - 0.5) * 2,
            vy: (Math.random() - 0.5) * 2,
            alpha: 1.0,
            fading: false,
            size: SIZES[Math.floor(Math.random() * SIZES.length)],
            color: theme === 'dark' ? '#ffffff' : '#000000',
            text: EMOJIS[Math.floor(Math.random() * EMOJIS.length)]
          })
        }
        scheduleRandomSpawn()
      }, Math.random() * 3500)
    }
    scheduleRandomSpawn()

    const draw = () => {
      ctx.clearRect(0, 0, w, h)

      const isDark = theme === 'dark'
      const scroll = scrollRef.current
      const mouse = mouseRef.current
      const nodes = nodesRef.current

      // Scroll parallax offset
      const scrollOffsetY = -(scroll * 0.12) % h

      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i]

        // Gentle autonomous drift
        n.x += n.vx
        n.y += n.vy

        // Wrap around edges
        if (n.x < -20) n.x = w + 20
        if (n.x > w + 20) n.x = -20
        if (n.y < -20) n.y = h + 20
        if (n.y > h + 20) n.y = -20

        // Slight bounce off drift boundaries
        if (Math.random() < 0.002) {
          n.vx = (Math.random() - 0.5) * 0.3
          n.vy = (Math.random() - 0.5) * 0.3
        }
      }

      // Render Y with scroll parallax applied
      const getDrawY = (node) => {
        let y = node.y + scrollOffsetY
        // Wrap
        if (y < -20) y += h + 40
        if (y > h + 20) y -= h + 40
        return y
      }

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i]
        const ay = getDrawY(a)

        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j]
          const by = getDrawY(b)

          const dx = a.x - b.x
          const dy = ay - by
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < CONNECT_DIST) {
            // Check if mouse is near this connection midpoint
            const mx = (a.x + b.x) / 2
            const my = (ay + by) / 2
            const mouseDx = mouse.x - mx
            const mouseDy = mouse.y - my
            const mouseDist = Math.sqrt(mouseDx * mouseDx + mouseDy * mouseDy)
            const mouseProximity = Math.max(0, 1 - mouseDist / (MOUSE_RADIUS * 1.5))

            const baseAlpha = isDark ? 0.04 : 0.07
            const hoverAlpha = isDark ? 0.18 : 0.25
            const alpha = baseAlpha + mouseProximity * hoverAlpha
            const falloff = 1 - dist / CONNECT_DIST

            ctx.beginPath()
            ctx.moveTo(a.x, ay)
            ctx.lineTo(b.x, by)
            ctx.strokeStyle = isDark
              ? `rgba(161,161,170,${(alpha * falloff).toFixed(4)})`
              : `rgba(79,70,229,${(alpha * falloff).toFixed(4)})`
            ctx.lineWidth = 0.6
            ctx.stroke()
          }
        }
      }

      // Draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i]
        const ny = getDrawY(n)

        // Mouse interaction — push nodes gently & brighten
        const mdx = mouse.x - n.x
        const mdy = mouse.y - ny
        const mDist = Math.sqrt(mdx * mdx + mdy * mdy)
        const mProximity = Math.max(0, 1 - mDist / MOUSE_RADIUS)

        // Gently attract nodes toward mouse
        if (mProximity > 0) {
          n.x += mdx * 0.003 * mProximity
          n.y += mdy * 0.003 * mProximity
        }

        const baseAlpha = isDark ? 0.1 : 0.15
        const hoverAlpha = isDark ? 0.6 : 0.7
        const alpha = baseAlpha + mProximity * hoverAlpha
        const radius = n.radius + mProximity * 2

        ctx.beginPath()
        ctx.arc(n.x, ny, radius, 0, Math.PI * 2)
        ctx.fillStyle = isDark
          ? `rgba(161,161,170,${alpha.toFixed(3)})`
          : `rgba(79,70,229,${alpha.toFixed(3)})`
        ctx.fill()

        // Mouse-proximate glow ring
        if (mProximity > 0.3) {
          ctx.beginPath()
          ctx.arc(n.x, ny, radius + 4, 0, Math.PI * 2)
          ctx.strokeStyle = isDark
            ? `rgba(99,102,241,${(mProximity * 0.2).toFixed(3)})`
            : `rgba(79,70,229,${(mProximity * 0.15).toFixed(3)})`
          ctx.lineWidth = 0.5
          ctx.stroke()
        }
      }

      // Update and Draw Pi Particles
      const particles = particlesRef.current
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]

        // 3o14.com exact physics: damping * 0.99, no gravity
        p.vx *= 0.99
        p.vy *= 0.99
        p.x += p.vx
        p.y += p.vy

        // 3o14.com: when speed drops below 0.5, trigger fade.
        // Original uses CSS `transition: opacity 2s ease`, so we fade over ~120 frames.
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

        // Draw particle — plain text, no rotation, no glow (matching 3o14.com)
        ctx.save()
        ctx.globalAlpha = p.alpha
        ctx.font = `${p.size}px "JetBrains Mono", "Outfit", "Inter", sans-serif`
        ctx.fillStyle = p.color
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        ctx.fillText(p.text, p.x, p.y)
        ctx.restore()
      }

      animRef.current = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMouse)
      document.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('scroll', handleScroll)
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
