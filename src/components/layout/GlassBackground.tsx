import { motion } from 'framer-motion'

const blobTransition = (duration: number) => ({
  duration,
  repeat: Infinity,
  repeatType: 'mirror' as const,
  ease: 'easeInOut' as const,
})

export function GlassBackground() {
  return (
    <div
      aria-hidden
      className="fixed inset-0 -z-10 overflow-hidden bg-[var(--bg-base)] transition-colors duration-500"
    >
      <motion.div
        className="absolute -left-1/4 -top-1/4 h-[60vmax] w-[60vmax] rounded-full opacity-40 blur-[120px]"
        style={{ background: 'var(--blob-1)' }}
        animate={{ x: ['0%', '10%', '-5%', '0%'], y: ['0%', '8%', '-6%', '0%'] }}
        transition={blobTransition(26)}
      />
      <motion.div
        className="absolute -right-1/4 top-1/3 h-[55vmax] w-[55vmax] rounded-full opacity-30 blur-[120px]"
        style={{ background: 'var(--blob-2)' }}
        animate={{ x: ['0%', '-8%', '6%', '0%'], y: ['0%', '-10%', '4%', '0%'] }}
        transition={blobTransition(32)}
      />
      <motion.div
        className="absolute bottom-[-20%] left-1/4 h-[50vmax] w-[50vmax] rounded-full opacity-25 blur-[120px]"
        style={{ background: 'var(--blob-3)' }}
        animate={{ x: ['0%', '6%', '-8%', '0%'], y: ['0%', '6%', '-4%', '0%'] }}
        transition={blobTransition(24)}
      />
    </div>
  )
}
