import { skills } from '../../../data/skills'
import { RevealOnScroll } from '../../ui/RevealOnScroll'
import { SectionHeading } from '../../ui/SectionHeading'

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
      <SectionHeading eyebrow="Skills" title="The tools I reach for" />

      <RevealOnScroll className="grid gap-x-10 sm:grid-cols-2">
        {skills.map((category) => (
          <div
            key={category.name}
            className="border-t border-[var(--glass-border)] py-5 first:border-t-0 sm:[&:nth-child(2)]:border-t-0"
          >
            <h4 className="text-sm font-semibold text-[var(--text-primary)]">{category.name}</h4>
            <p className="mt-1.5 text-sm leading-relaxed text-[var(--text-secondary)]">
              {category.skills.join(' · ')}
            </p>
          </div>
        ))}
      </RevealOnScroll>
    </section>
  )
}
