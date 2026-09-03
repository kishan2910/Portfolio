import clsx from 'clsx'
import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'ghost'

const base =
  'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 focus-visible:outline-none disabled:opacity-50 disabled:pointer-events-none'

const variants: Record<Variant, string> = {
  primary:
    'text-white shadow-[0_10px_30px_-10px_rgba(124,107,255,0.6)] bg-[linear-gradient(120deg,var(--accent-from),var(--accent-to))] hover:brightness-110 hover:shadow-[0_14px_36px_-8px_rgba(124,107,255,0.75)] active:scale-[0.98]',
  ghost: 'glass hover:bg-[var(--glass-surface-strong)] active:scale-[0.98] !rounded-full',
}

export function Button({
  children,
  variant = 'primary',
  className,
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant; children: ReactNode }) {
  return (
    <button className={clsx(base, variants[variant], className)} {...rest}>
      {children}
    </button>
  )
}

export function LinkButton({
  children,
  variant = 'primary',
  className,
  ...rest
}: AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: Variant; children: ReactNode }) {
  return (
    <a className={clsx(base, variants[variant], className)} {...rest}>
      {children}
    </a>
  )
}
