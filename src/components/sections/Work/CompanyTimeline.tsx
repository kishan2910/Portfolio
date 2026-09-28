import { ArrowRight, Quote } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { ExperienceEntry } from '../../../types'
import { useContent } from '../../../i18n/content'
import { RevealOnScroll } from '../../ui/RevealOnScroll'

export function CompanyTimeline({ entry, index }: { entry: ExperienceEntry; index: number }) {
  const { t } = useContent()

  return (
    <div className="relative pl-9 sm:pl-12">
      <div className="absolute left-0 top-1.5 flex h-6 w-6 items-center justify-center sm:h-7 sm:w-7">
        <span className="h-2.5 w-2.5 rounded-full bg-[linear-gradient(120deg,var(--accent-from),var(--accent-to))] shadow-[0_0_0_5px_var(--glass-surface)]" />
      </div>
      <div className="absolute left-[11px] top-7 h-[calc(100%+2.5rem)] w-px bg-[var(--glass-border)] last:hidden sm:left-[13px]" />

      <RevealOnScroll delay={index * 0.05} className="mb-14 last:mb-0">
        <div className="glass p-6 sm:p-7">
          <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
            <h3 className="text-lg font-semibold sm:text-xl">{entry.company}</h3>
            <span className="mono-tag text-xs uppercase tracking-wide text-[var(--text-tertiary)]">
              {entry.period}
            </span>
          </div>
          <p className="mt-1 text-sm text-[var(--text-secondary)]">
            {entry.role} · {entry.location}
          </p>

          {Array.isArray(entry.summary) ? (
            <ul className="mt-4 flex flex-col gap-2 text-[15px] leading-relaxed text-[var(--text-secondary)]">
              {entry.summary.map((point) => (
                <li key={point} className="flex gap-2">
                  <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-[var(--accent-solid)]" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-4 text-[15px] leading-relaxed text-[var(--text-secondary)]">
              {entry.summary}
            </p>
          )}

          {entry.projectsPage && entry.projects.length > 0 && (
            <Link
              to={entry.projectsPage}
              className="glass mt-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
            >
              {t('work.showProjects', { n: entry.projects.length })}
              <ArrowRight size={14} />
            </Link>
          )}

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
    </div>
  )
}
