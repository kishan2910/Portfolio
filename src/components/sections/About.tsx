import { useContent } from '../../i18n/content'
import { Chip } from '../ui/Chip'
import { RevealOnScroll } from '../ui/RevealOnScroll'
import { SectionHeading } from '../ui/SectionHeading'

const SNAPSHOTS = [
  { src: '/images/kishan-hiking.jpg', alt: 'Kishan hiking in the mountains', captionKey: 'about.snapshot1' },
  { src: '/images/kishan-outdoors.jpg', alt: 'Kishan with a dog outdoors', captionKey: 'about.snapshot2' },
]

export function About() {
  const { profile, t } = useContent()

  return (
    <section id="about" className="mx-auto max-w-3xl px-4 py-24 sm:px-6">
      <SectionHeading eyebrow={t('section.about.eyebrow')} title={t('section.about.title')} />

      <RevealOnScroll className="glass p-7 sm:p-9">
        <div className="space-y-4">
          {profile.bio.map((paragraph) => (
            <p key={paragraph} className="text-[15px] leading-relaxed text-[var(--text-secondary)] sm:text-base">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-7 flex flex-wrap gap-2">
          {profile.languages.map((lang) => (
            <Chip key={lang.name}>{`${lang.name} · ${lang.level}`}</Chip>
          ))}
        </div>

        <div className="mt-7 grid grid-cols-2 gap-3">
          {SNAPSHOTS.map((snap) => (
            <div key={snap.src} className="group relative overflow-hidden rounded-2xl">
              <img
                src={snap.src}
                alt={snap.alt}
                className="h-40 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-52"
                loading="lazy"
              />
              <span className="mono-tag absolute bottom-2 left-2 rounded-full border border-white/20 bg-black/40 px-2.5 py-1 text-[10px] text-white backdrop-blur-sm">
                {t(snap.captionKey)}
              </span>
            </div>
          ))}
        </div>
      </RevealOnScroll>
    </section>
  )
}
