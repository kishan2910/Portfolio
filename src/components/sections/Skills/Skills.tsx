import { skills } from '../../../data/skills'
import { SectionHeading } from '../../ui/SectionHeading'
import { SkillCategoryCard } from './SkillCategoryCard'

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-4 py-24 sm:px-6">
      <SectionHeading
        eyebrow="Skills"
        title="The stack behind it all"
        description="What I build with — from model training to production infrastructure."
      />

      <div className="grid gap-5 sm:grid-cols-2">
        {skills.map((category, i) => (
          <SkillCategoryCard key={category.name} category={category} delay={i * 0.05} />
        ))}
      </div>
    </section>
  )
}
