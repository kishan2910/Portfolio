import { motion } from 'framer-motion'
import { ArrowRight, Download, MapPin } from 'lucide-react'
import { profile } from '../../data/profile'
import { GithubIcon, LinkedinIcon } from '../icons/BrandIcons'

export function Hero() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-center justify-center px-4 pb-24 pt-32 sm:px-6"
    >
      <div className="mx-auto grid w-full max-w-5xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center lg:text-left"
        >
          <div className="flex flex-wrap items-center justify-center gap-2 lg:justify-start">
            <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-[var(--text-secondary)]">
              <MapPin size={13} /> {profile.location}
            </span>
          </div>

          <h1 className="mt-6 text-5xl font-normal leading-[1.02] tracking-[-0.02em] sm:text-6xl lg:text-7xl">
            {profile.name.split(' ')[0]}{' '}
            <span className="font-display-italic text-gradient">
              {profile.name.split(' ').slice(1).join(' ')}
            </span>
          </h1>

          <ul className="mx-auto mt-6 flex max-w-xl flex-col gap-1.5 text-base text-[var(--text-secondary)] sm:text-lg lg:mx-0">
            {profile.positions.map((position) => (
              <li key={`${position.role}-${position.org}`}>
                {position.role} at{' '}
                {position.href ? (
                  <a
                    href={position.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-gradient font-medium hover:underline"
                  >
                    {position.org}
                  </a>
                ) : (
                  <span className="text-gradient font-medium">{position.org}</span>
                )}
              </li>
            ))}
          </ul>

          <p className="mx-auto mt-6 max-w-xl text-sm text-[var(--text-tertiary)] sm:text-base lg:mx-0">
            {profile.tagline}
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <button
              type="button"
              onClick={() => scrollTo('journey')}
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-[#1c1a15] shadow-[0_10px_30px_-12px_rgba(230,180,90,0.55)] bg-[linear-gradient(120deg,var(--accent-from),var(--accent-to))] transition-all hover:brightness-105 active:scale-[0.98]"
            >
              View my work <ArrowRight size={15} />
            </button>
            <button
              type="button"
              onClick={() => scrollTo('contact')}
              className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Get in touch
            </button>
          </div>

          <div className="mt-8 flex items-center justify-center gap-3 lg:justify-start">
            <a
              href="https://github.com/kishan2910"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="glass flex h-10 w-10 items-center justify-center rounded-full transition-transform hover:scale-105"
            >
              <GithubIcon size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/kishan2910"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="glass flex h-10 w-10 items-center justify-center rounded-full transition-transform hover:scale-105"
            >
              <LinkedinIcon size={16} />
            </a>
            <a
              href={profile.cvUrl}
              download
              aria-label="Download CV"
              className="glass flex h-10 w-10 items-center justify-center rounded-full transition-transform hover:scale-105"
            >
              <Download size={16} />
            </a>
          </div>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="relative mx-auto flex h-64 w-64 items-center justify-center sm:h-80 sm:w-80"
        >
          <motion.div
            aria-hidden
            className="absolute inset-0 rounded-full opacity-60 blur-3xl"
            style={{ background: 'linear-gradient(135deg, var(--accent-from), var(--accent-to))' }}
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          />
          <div className="glass glass-strong relative flex h-full w-full items-center justify-center overflow-hidden rounded-full p-1.5">
            <img
              src={profile.avatar}
              alt={profile.name}
              className="h-full w-full rounded-full object-cover"
              width={320}
              height={320}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
