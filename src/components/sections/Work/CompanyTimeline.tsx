import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, ExternalLink, Quote } from 'lucide-react'
import type { ExperienceEntry, ProjectCard } from '../../../types'
import { useContent } from '../../../i18n/content'
import { Chip, MetricChip } from '../../ui/Chip'
import { RevealOnScroll } from '../../ui/RevealOnScroll'

type T = (key: string, vars?: Record<string, string | number>) => string

/**
 * Image slot for a project. Drop a file at `public<project.image>` and it
 * shows automatically; until then a labelled placeholder marks the spot.
 */
function ProjectImage({ src, alt }: { src?: string; alt?: string }) {
  const [failed, setFailed] = useState(false)
  const showPlaceholder = !src || failed

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-[var(--glass-border)] bg-[var(--glass-surface)] sm:aspect-[4/3]">
      {src && !failed && (
        <img
          src={src}
          alt={alt ?? ''}
          loading="lazy"
          onError={() => setFailed(true)}
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}
      {showPlaceholder && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 p-3 text-center">
          <span className="text-xs font-medium text-[var(--text-tertiary)]">Image</span>
          {src && (
            <span className="mono-tag break-all text-[10px] leading-tight text-[var(--text-tertiary)]">
              public{src}
            </span>
          )}
        </div>
      )}
    </div>
  )
}

function ClientProjectRow({ project, t }: { project: ProjectCard; t: T }) {
  return (
    <div className="grid gap-4 sm:grid-cols-[180px_1fr] sm:gap-5">
      <ProjectImage src={project.image} alt={project.imageAlt} />
      <div>
        <h4 className="text-base font-semibold">{project.title}</h4>
        {project.client && (
          <p className="mt-0.5 text-xs font-medium text-[var(--accent-solid)]">{project.client}</p>
        )}
        <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
          {project.description}
        </p>
        {project.note && (
          <p className="mt-2 text-xs italic text-[var(--text-tertiary)]">{project.note}</p>
        )}
        {project.metrics.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {project.metrics.map((metric) => (
              <MetricChip key={metric}>{metric}</MetricChip>
            ))}
          </div>
        )}
        {project.tech.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1.5">
            {project.tech.map((tag) => (
              <Chip key={tag} className="!px-2.5 !py-1 !text-[11px]">
                {tag}
              </Chip>
            ))}
          </div>
        )}
        {project.href && (
          <a
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className="mono-tag mt-3 inline-flex items-center gap-1 text-[11px] text-[var(--accent-solid)] hover:underline"
          >
            {t('work.viewProject')} <ExternalLink size={11} />
          </a>
        )}
      </div>
    </div>
  )
}

export function CompanyTimeline({ entry, index }: { entry: ExperienceEntry; index: number }) {
  const { t } = useContent()
  const detailed = entry.projects.some((p) => p.image || p.href || p.client)
  const [open, setOpen] = useState(false)

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

          <p className="mt-4 text-[15px] leading-relaxed text-[var(--text-secondary)]">
            {entry.summary}
          </p>

          {detailed && (
            <div className="mt-4">
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
              >
                {open
                  ? t('work.hideProjects', { n: entry.projects.length })
                  : t('work.showProjects', { n: entry.projects.length })}
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
                />
              </button>

              <AnimatePresence initial={false}>
                {open && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="mt-4 flex flex-col divide-y divide-[var(--glass-border)]">
                      {entry.projects.map((project) => (
                        <div key={project.title} className="py-6 first:pt-0 last:pb-0">
                          <ClientProjectRow project={project} t={t} />
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
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
