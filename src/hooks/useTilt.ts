import { useRef } from 'react'
import { useMotionValue, useSpring, useTransform, type MotionValue } from 'framer-motion'

interface TiltResult {
  ref: React.RefObject<HTMLDivElement | null>
  rotateX: MotionValue<number>
  rotateY: MotionValue<number>
  onMouseMove: (e: React.MouseEvent<HTMLDivElement>) => void
  onMouseLeave: () => void
}

const isFinePointer = () =>
  typeof window !== 'undefined' && window.matchMedia('(pointer: fine)').matches

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

export function useTilt(maxDeg = 6): TiltResult {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [maxDeg, -maxDeg]), {
    stiffness: 220,
    damping: 20,
  })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-maxDeg, maxDeg]), {
    stiffness: 220,
    damping: 20,
  })

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current || !isFinePointer() || prefersReducedMotion()) return
    const rect = ref.current.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    x.set(px)
    y.set(py)
    ref.current.style.setProperty('--mx', `${(px + 0.5) * 100}%`)
    ref.current.style.setProperty('--my', `${(py + 0.5) * 100}%`)
  }

  const onMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return { ref, rotateX, rotateY, onMouseMove, onMouseLeave }
}
