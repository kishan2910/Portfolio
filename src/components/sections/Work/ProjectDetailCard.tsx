import { ExternalLink } from 'lucide-react'
import type { ProjectCard } from '../../../types'

type T = (key: string, vars?: Record<string, string | number>) => string

export function ClientProjectRow({ project, t }: { project: ProjectCard; t: T }) {
  return (
    <div>
      <h4 className="text-base font-semibold">{project.title}</h4>
      {project.client && (
        <p className="mt-0.5 text-xs font-medium text-[var(--accent-solid)]">{project.client}</p>
      )}
      {Array.isArray(project.description) ? (
        <ul className="mt-2 flex flex-col gap-1.5 text-sm leading-relaxed text-[var(--text-secondary)]">
          {project.description.map((point) => (
            <li key={point} className="flex gap-2">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--accent-solid)]" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
          {project.description}
        </p>
      )}
      {project.note && (
        <p className="mt-2 text-xs italic text-[var(--text-tertiary)]">{project.note}</p>
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
  )
}
