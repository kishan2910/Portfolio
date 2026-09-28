import { Mail, ArrowUp } from 'lucide-react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useContent } from '../../i18n/content'
import { GithubIcon, LinkedinIcon } from '../icons/BrandIcons'

const ICONS = { github: GithubIcon, linkedin: LinkedinIcon, mail: Mail, phone: Mail }

export function Footer() {
  const { profile, t } = useContent()
  const year = new Date().getFullYear()
  const location = useLocation()
  const navigate = useNavigate()

  return (
    <footer className="mx-auto max-w-5xl px-4 pb-10 pt-6 sm:px-6">
      <div className="glass flex flex-col items-center gap-5 px-6 py-8 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="text-sm font-semibold text-[var(--text-primary)]">{profile.name}</p>
          <p className="mt-1 text-xs text-[var(--text-tertiary)]">
            © {year} {profile.name}. {t('footer.rights')}
          </p>
        </div>

        <div className="flex items-center gap-3">
          {profile.socials.map((social) => {
            const Icon = ICONS[social.icon]
            return (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel={social.href.startsWith('http') ? 'noreferrer' : undefined}
                aria-label={social.label}
                className="glass flex h-10 w-10 items-center justify-center rounded-full transition-transform hover:scale-105"
              >
                <Icon size={16} />
              </a>
            )
          })}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault()
              if (location.pathname === '/') {
                document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })
              } else {
                navigate('/', { state: { scrollTo: 'hero' } })
              }
            }}
            aria-label={t('a11y.backToTop')}
            className="glass flex h-10 w-10 items-center justify-center rounded-full transition-transform hover:scale-105"
          >
            <ArrowUp size={16} strokeWidth={1.8} />
          </a>
        </div>
      </div>
    </footer>
  )
}
