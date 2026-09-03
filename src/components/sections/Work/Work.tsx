import { experience } from '../../../data/experience'
import { SectionHeading } from '../../ui/SectionHeading'
import { CompanyTimeline } from './CompanyTimeline'

export function Work() {
  return (
    <section id="journey" className="mx-auto max-w-4xl px-4 py-24 sm:px-6">
      <SectionHeading
        eyebrow="The Journey"
        title="From mechanical drafting to production AI"
        description="Eight years of building — including hands-on AI delivery for SMEs and public bodies across Schleswig-Holstein. Each stop, what I shipped, and who it was for."
      />

      <div>
        {experience.map((entry, index) => (
          <CompanyTimeline key={`${entry.company}-${entry.period}`} entry={entry} index={index} />
        ))}
      </div>
    </section>
  )
}
