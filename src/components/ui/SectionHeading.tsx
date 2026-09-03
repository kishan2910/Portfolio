import { RevealOnScroll } from './RevealOnScroll'

export function SectionHeading({
  eyebrow,
  index,
  title,
  description,
}: {
  eyebrow: string
  index?: string
  title: string
  description?: string
}) {
  return (
    <RevealOnScroll className="mx-auto max-w-2xl text-center mb-14 sm:mb-16">
      <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gradient">
        {index && (
          <span className="mono-tag rounded-full border border-[var(--glass-border)] px-2 py-0.5 text-[10px] text-[var(--text-tertiary)]">
            {index}
          </span>
        )}
        {eyebrow}
      </span>
      <h2 className="mt-3 text-3xl sm:text-4xl font-semibold">{title}</h2>
      {description && (
        <p className="mt-4 text-base sm:text-lg text-[var(--text-secondary)]">{description}</p>
      )}
    </RevealOnScroll>
  )
}
