import clsx from 'clsx'
import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { useTilt } from '../../hooks/useTilt'

interface GlassCardProps {
  children: ReactNode
  className?: string
  tilt?: boolean
}

export function GlassCard({ children, className, tilt = true }: GlassCardProps) {
  const { ref, rotateX, rotateY, onMouseMove, onMouseLeave } = useTilt(5)

  return (
    <motion.div
      ref={ref}
      onMouseMove={tilt ? onMouseMove : undefined}
      onMouseLeave={tilt ? onMouseLeave : undefined}
      style={tilt ? { rotateX, rotateY, transformStyle: 'preserve-3d' } : undefined}
      whileHover={{ scale: 1.015 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      className={clsx('glass card-spotlight relative overflow-hidden p-6 sm:p-7', className)}
    >
      {children}
    </motion.div>
  )
}
