import clsx from 'clsx'
import type { HTMLAttributes, ReactNode } from 'react'

interface GlassPanelProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  strong?: boolean
}

export function GlassPanel({ children, className, strong, ...rest }: GlassPanelProps) {
  return (
    <div className={clsx('glass', strong && 'glass-strong', className)} {...rest}>
      {children}
    </div>
  )
}
