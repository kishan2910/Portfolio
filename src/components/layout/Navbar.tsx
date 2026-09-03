import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, Search, X } from 'lucide-react'
import { useCommandPalette } from '../../context/CommandPaletteContext'
import { navLinks } from '../../data/nav'
import { profile } from '../../data/profile'
import { useScrollSpy } from '../../hooks/useScrollSpy'
import { ThemeToggle } from './ThemeToggle'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const active = useScrollSpy(navLinks.map((n) => n.id))
  const { setOpen: setPaletteOpen } = useCommandPalette()

  const handleNavigate = (id: string) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <nav
        className="glass flex w-full max-w-3xl items-center justify-between gap-4 px-4 py-2.5 sm:px-6"
        aria-label="Primary"
      >
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault()
            handleNavigate('hero')
          }}
          className="flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold text-gradient border border-[var(--glass-border)]"
        >
          {profile.initials}
        </a>

        <ul className="hidden items-center gap-1 sm:flex">
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
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setPaletteOpen(true)}
            aria-label="Open command palette"
            className="glass hidden h-10 items-center gap-1.5 rounded-full px-3 text-xs text-[var(--text-tertiary)] transition-transform hover:scale-105 sm:flex"
          >
            <Search size={13} /> <kbd className="mono-tag">⌘K</kbd>
          </button>
          <ThemeToggle />
          <button
            type="button"
            className="glass flex h-10 w-10 items-center justify-center rounded-full sm:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
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
                {item.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => {
                setOpen(false)
                setPaletteOpen(true)
              }}
              className="mono-tag rounded-2xl px-4 py-3 text-left text-sm text-[var(--text-tertiary)]"
            >
              ⌘K Command palette
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
