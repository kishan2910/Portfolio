import { ArrowLeft, Quote } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ClientProjectRow } from '../components/sections/Work/ProjectDetailCard'
import { RevealOnScroll } from '../components/ui/RevealOnScroll'
import { useContent } from '../i18n/content'

const ROUTE = '/hs-flensburg'

export function HhsFlensburgPage() {
  const { experience, t } = useContent()
  const entry = experience.find((e) => e.projectsPage === ROUTE)

  if (!entry) return null

  return (
    <section className="mx-auto max-w-4xl px-4 py-24 sm:px-6">
      <RevealOnScroll>
        <Link
          to="/"
          state={{ scrollTo: 'journey' }}
          className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
        >
          <ArrowLeft size={14} />
          {t('work.backToJourney')}
        </Link>

        <div className="glass mt-6 p-6 sm:p-7">
          <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
            <h1 className="text-lg font-semibold sm:text-xl">{entry.company}</h1>
            <span className="mono-tag text-xs uppercase tracking-wide text-[var(--text-tertiary)]">
              {entry.period}
            </span>
          </div>
          <p className="mt-1 text-sm text-[var(--text-secondary)]">
            {entry.role} · {entry.location}
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-[var(--text-secondary)]">
            {entry.summary}
          </p>

          {entry.testimonial && (
            <div className="mt-5 flex gap-3 border-t border-[var(--glass-border)] pt-4">
              <Quote size={15} className="mt-0.5 shrink-0 text-[var(--accent-solid)]" />
              <p className="text-xs italic leading-relaxed text-[var(--text-tertiary)]">
                &ldquo;{entry.testimonial.quote}&rdquo; — {entry.testimonial.author},{' '}
                {entry.testimonial.role}
              </p>
            </div>
          )}
        </div>
      </RevealOnScroll>

      <div className="mt-10 flex flex-col gap-6">
        {entry.projects.map((project, index) => (
          <RevealOnScroll key={project.title} delay={index * 0.05}>
            <div className="glass p-6 sm:p-7">
              <ClientProjectRow project={project} t={t} />
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  )
}
