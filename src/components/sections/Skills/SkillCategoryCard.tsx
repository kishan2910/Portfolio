import type { SkillCategory } from '../../../types'
import { Chip } from '../../ui/Chip'
import { RevealOnScroll } from '../../ui/RevealOnScroll'

export function SkillCategoryCard({ category, delay = 0 }: { category: SkillCategory; delay?: number }) {
  return (
    <RevealOnScroll delay={delay} className="glass p-6">
      <h4 className="text-sm font-semibold uppercase tracking-wide text-[var(--text-secondary)]">
        {category.name}
      </h4>
      <div className="mt-4 flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <Chip key={skill}>{skill}</Chip>
        ))}
      </div>
    </RevealOnScroll>
  )
}
