import { useEffect, useState } from 'react'

interface PointerPosition {
  x: number
  y: number
  visible: boolean
}

export function usePointerGlow(): PointerPosition {
  const [pos, setPos] = useState<PointerPosition>({ x: 0, y: 0, visible: false })

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)').matches
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!finePointer || reducedMotion) return

    const handleMove = (e: PointerEvent) => {
      setPos({ x: e.clientX, y: e.clientY, visible: true })
    }
    const handleLeave = () => setPos((p) => ({ ...p, visible: false }))

    window.addEventListener('pointermove', handleMove)
    window.addEventListener('pointerleave', handleLeave)
    return () => {
      window.removeEventListener('pointermove', handleMove)
      window.removeEventListener('pointerleave', handleLeave)
    }
  }, [])

  return pos
}
