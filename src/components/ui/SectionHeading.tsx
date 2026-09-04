import { RevealOnScroll } from './RevealOnScroll'

export function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <RevealOnScroll className="mx-auto mb-14 max-w-2xl text-center sm:mb-16">
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gradient">{eyebrow}</span>
      <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">{title}</h2>
    </RevealOnScroll>
  )
}
