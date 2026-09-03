import { usePointerGlow } from '../../hooks/usePointerGlow'

export function CursorGlow() {
  const { x, y, visible } = usePointerGlow()

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 -z-[5] h-[420px] w-[420px] rounded-full transition-opacity duration-500"
      style={{
        transform: `translate3d(${x - 210}px, ${y - 210}px, 0)`,
        opacity: visible ? 0.12 : 0,
        background: 'radial-gradient(circle, var(--accent-solid), transparent 70%)',
        filter: 'blur(40px)',
      }}
    />
  )
}
