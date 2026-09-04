import { Award, ExternalLink, GraduationCap } from 'lucide-react'
import { useContent } from '../../i18n/content'
import { RevealOnScroll } from '../ui/RevealOnScroll'
import { SectionHeading } from '../ui/SectionHeading'

export function EducationCerts() {
  const { education, certifications, t } = useContent()

  return (
    <section id="education" className="mx-auto max-w-5xl px-4 py-24 sm:px-6">
      <SectionHeading eyebrow={t('section.education.eyebrow')} title={t('section.education.title')} />

      <div className="grid gap-6 lg:grid-cols-2">
        <RevealOnScroll className="glass p-7 sm:p-8">
          <div className="mb-5 flex items-center gap-2.5">
            <GraduationCap size={18} className="text-gradient" />
            <h3 className="text-base font-semibold">{t('edu.education')}</h3>
          </div>
          <div className="space-y-6">
            {education.map((entry) => (
              <div key={entry.degree} className="border-l-2 border-[var(--glass-border)] pl-4">
                <p className="text-sm font-semibold">{entry.degree}</p>
                <p className="mt-1 text-sm text-[var(--text-secondary)]">
                  {entry.institution}, {entry.location}
                </p>
                <p className="mt-1 text-xs text-[var(--text-tertiary)]">
                  {entry.period}
                  {entry.grade ? ` · ${entry.grade}` : ''}
                </p>
                {entry.detail && (
                  <p className="mt-2 text-xs leading-relaxed text-[var(--text-secondary)]">
                    {entry.detail}
                  </p>
                )}
                {entry.thesisUrl && (
                  <a
                    href={entry.thesisUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mono-tag mt-1.5 inline-flex items-center gap-1 text-[11px] text-[var(--accent-solid)] hover:underline"
                  >
                    {t('edu.viewThesis')} <ExternalLink size={11} />
                  </a>
                )}
              </div>
            ))}
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1} className="glass p-7 sm:p-8">
          <div className="mb-5 flex items-center gap-2.5">
            <Award size={18} className="text-gradient" />
            <h3 className="text-base font-semibold">{t('edu.certifications')}</h3>
          </div>
          <div className="space-y-5">
            {certifications.map((cert) => (
              <div key={cert.name} className="flex items-start justify-between gap-3 border-l-2 border-[var(--glass-border)] pl-4">
                <div>
                  <p className="text-sm font-semibold">{cert.name}</p>
                  <p className="mt-1 text-xs text-[var(--text-secondary)]">{cert.issuer}</p>
                  {cert.verifyUrl && (
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mono-tag mt-1.5 inline-flex items-center gap-1 text-[11px] text-[var(--accent-solid)] hover:underline"
                    >
                      {t('edu.verify')} <ExternalLink size={11} />
                    </a>
                  )}
                </div>
                <span className="whitespace-nowrap text-xs text-[var(--text-tertiary)]">{cert.date}</span>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
