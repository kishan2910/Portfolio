import clsx from 'clsx'

export function Chip({ children, className }: { children: string; className?: string }) {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full border px-3.5 py-1.5 text-xs font-medium tracking-wide',
        'border-[var(--glass-border)] bg-[var(--glass-surface)] text-[var(--text-secondary)]',
        className,
      )}
    >
      {children}
    </span>
  )
}

export function MetricChip({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center rounded-full px-3.5 py-1.5 text-xs font-semibold text-gradient border border-[var(--glass-border)] bg-[var(--glass-surface)]">
      {children}
    </span>
  )
}
