import { useEffect, useRef } from 'react'

interface Star {
  x: number
  y: number
  z: number
  r: number
  tw: number
  twSpeed: number
}

/**
 * Cosmic background — a drifting, twinkling starfield on a canvas, with two soft
 * nebula glows behind it. Star colour and overall opacity come from the
 * `--star` / `--starfield-opacity` theme tokens, so it dims automatically in the
 * light theme. Falls back to a static field when the user prefers reduced motion.
 */
export function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    let width = 0
    let height = 0
    let stars: Star[] = []
    let raf = 0
    let starColor = '244, 241, 232'

    const readColor = () => {
      const raw = getComputedStyle(document.documentElement).getPropertyValue('--star').trim()
      const hex = raw.replace('#', '')
      if (hex.length === 6) {
        const n = parseInt(hex, 16)
        starColor = `${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}`
      }
    }

    const build = () => {
      const count = Math.round(Math.min(width, 1600) / 7)
      stars = Array.from({ length: count }, () => {
        const z = Math.random()
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          z,
          r: (z * 1.4 + 0.3) * dpr,
          tw: Math.random() * Math.PI * 2,
          twSpeed: 0.004 + Math.random() * 0.012,
        }
      })
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)
      for (const s of stars) {
        if (!reduce) {
          s.x -= (s.z * 0.12 + 0.02) * dpr
          if (s.x < 0) s.x = width
          s.tw += s.twSpeed
        }
        const depth = s.z * 0.7 + 0.3
        const a = reduce ? 0.55 * depth : (0.35 + 0.4 * (Math.sin(s.tw) * 0.5 + 0.5)) * depth
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${starColor}, ${a.toFixed(3)})`
        ctx.fill()
      }
    }

    const tick = () => {
      draw()
      raf = requestAnimationFrame(tick)
    }

    const resize = () => {
      width = canvas.clientWidth * dpr
      height = canvas.clientHeight * dpr
      canvas.width = width
      canvas.height = height
      build()
      draw()
    }

    const onVisibility = () => {
      cancelAnimationFrame(raf)
      if (!document.hidden && !reduce) raf = requestAnimationFrame(tick)
    }

    const themeObserver = new MutationObserver(readColor)
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    })

    readColor()
    resize()
    window.addEventListener('resize', resize)
    document.addEventListener('visibilitychange', onVisibility)
    if (!reduce) raf = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      document.removeEventListener('visibilitychange', onVisibility)
      themeObserver.disconnect()
    }
  }, [])

  return (
    <div
      aria-hidden
      className="fixed inset-0 -z-10 overflow-hidden bg-[var(--bg-base)] transition-colors duration-500"
    >
      <div
        className="absolute -left-[15%] -top-[20%] h-[55vmax] w-[55vmax] rounded-full opacity-[0.22] blur-[130px]"
        style={{ background: 'var(--blob-1)' }}
      />
      <div
        className="absolute -right-[20%] top-1/3 h-[50vmax] w-[50vmax] rounded-full opacity-[0.16] blur-[130px]"
        style={{ background: 'var(--blob-2)' }}
      />
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full"
        style={{ opacity: 'var(--starfield-opacity)' }}
      />
    </div>
  )
}
