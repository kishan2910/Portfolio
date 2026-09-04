import { useContent } from '../../../i18n/content'
import { SectionHeading } from '../../ui/SectionHeading'
import { CompanyTimeline } from './CompanyTimeline'

export function Work() {
  const { experience, t } = useContent()

  return (
    <section id="journey" className="mx-auto max-w-4xl px-4 py-24 sm:px-6">
      <SectionHeading eyebrow={t('section.journey.eyebrow')} title={t('section.journey.title')} />

      <div>
        {experience.map((entry, index) => (
          <CompanyTimeline key={`${entry.company}-${entry.period}`} entry={entry} index={index} />
        ))}
      </div>
    </section>
  )
}
