import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { navLinks } from '../../data/nav'
import { useContent } from '../../i18n/content'
import { useScrollSpy } from '../../hooks/useScrollSpy'
import { LangToggle } from './LangToggle'
import { ThemeToggle } from './ThemeToggle'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const active = useScrollSpy(navLinks.map((n) => n.id))
  const { t } = useContent()

  const handleNavigate = (id: string) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <nav
        className="glass flex w-full max-w-3xl items-center gap-4 px-4 py-2.5 sm:px-6"
        aria-label={t('a11y.primaryNav')}
      >
        <ul className="hidden flex-1 items-center justify-center gap-1 sm:flex">
          {navLinks.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => handleNavigate(item.id)}
                className={`rounded-full px-3.5 py-1.5 text-sm transition-colors ${
                  active === item.id
                    ? 'text-[var(--text-primary)] bg-[var(--glass-surface-strong)]'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
              >
                {t(`nav.${item.id}`)}
              </button>
            </li>
          ))}
        </ul>

        <div className="ml-auto flex items-center gap-2">
          <LangToggle />
          <ThemeToggle />
          <button
            type="button"
            className="glass flex h-10 w-10 items-center justify-center rounded-full sm:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? t('a11y.closeMenu') : t('a11y.openMenu')}
            aria-expanded={open}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="glass glass-strong absolute left-4 right-4 top-[calc(100%+8px)] z-40 flex flex-col gap-1 p-3 sm:hidden"
          >
            {navLinks.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavigate(item.id)}
                className={`rounded-2xl px-4 py-3 text-left text-sm ${
                  active === item.id ? 'bg-[var(--glass-surface-strong)]' : ''
                }`}
              >
                {t(`nav.${item.id}`)}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
