import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Check, Copy, Download, Home, Moon, Sun } from 'lucide-react'
import { useCallback, useEffect, useMemo, useRef, useState, type ReactNode, type KeyboardEvent } from 'react'
import { useTheme } from '../../context/ThemeContext'
import { useCommandPalette } from '../../context/CommandPaletteContext'
import { navLinks } from '../../data/nav'
import { profile } from '../../data/profile'
import { GithubIcon, LinkedinIcon } from '../icons/BrandIcons'

interface Command {
  id: string
  label: string
  hint: string
  icon: ReactNode
  run: () => void
  keywords?: string
}

export function CommandPalette() {
  const { open, setOpen } = useCommandPalette()
  const { theme, toggleTheme } = useTheme()
  const [query, setQuery] = useState('')
  const [activeIndex, setActiveIndex] = useState(0)
  const [copied, setCopied] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollTo = useCallback(
    (id: string) => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      setOpen(false)
    },
    [setOpen],
  )

  const commands = useMemo<Command[]>(() => {
    const nav: Command[] = [
      { id: 'hero', label: 'Go to top', hint: 'section', icon: <Home size={15} />, run: () => scrollTo('hero') },
      ...navLinks.map((link) => ({
        id: link.id,
        label: link.label,
        hint: 'section',
        icon: <ArrowRight size={15} />,
        run: () => scrollTo(link.id),
        keywords: link.label,
      })),
    ]

    const actions: Command[] = [
      {
        id: 'theme',
        label: theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode',
        hint: 'toggle theme',
        icon: theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />,
        run: () => {
          toggleTheme()
          setOpen(false)
        },
      },
      {
        id: 'email',
        label: `Copy email — ${profile.email}`,
        hint: 'clipboard',
        icon: copied ? <Check size={15} /> : <Copy size={15} />,
        run: () => {
          navigator.clipboard?.writeText(profile.email)
          setCopied(true)
          setTimeout(() => setCopied(false), 1500)
        },
      },
      {
        id: 'cv',
        label: 'Download CV',
        hint: 'PDF',
        icon: <Download size={15} />,
        run: () => {
          const link = document.createElement('a')
          link.href = profile.cvUrl
          link.download = ''
          link.click()
          setOpen(false)
        },
      },
      {
        id: 'github',
        label: 'Open GitHub',
        hint: 'external link',
        icon: <GithubIcon size={15} />,
        run: () => {
          window.open('https://github.com/kishan2910', '_blank', 'noreferrer')
          setOpen(false)
        },
      },
      {
        id: 'linkedin',
        label: 'Open LinkedIn',
        hint: 'external link',
        icon: <LinkedinIcon size={15} />,
        run: () => {
          window.open('https://www.linkedin.com/in/kishan2910', '_blank', 'noreferrer')
          setOpen(false)
        },
      },
    ]

    return [...nav, ...actions]
  }, [theme, copied, toggleTheme, setOpen, scrollTo])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return commands
    return commands.filter((c) =>
      `${c.label} ${c.hint} ${c.keywords ?? ''}`.toLowerCase().includes(q),
    )
  }, [commands, query])

  useEffect(() => {
    if (open) {
      setQuery('')
      setActiveIndex(0)
      requestAnimationFrame(() => inputRef.current?.focus())
    }
  }, [open])

  const handleQueryChange = (value: string) => {
    setQuery(value)
    setActiveIndex(0)
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setActiveIndex((i) => (filtered.length ? (i + 1) % filtered.length : 0))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActiveIndex((i) => (filtered.length ? (i - 1 + filtered.length) % filtered.length : 0))
    } else if (e.key === 'Enter') {
      e.preventDefault()
      filtered[activeIndex]?.run()
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-start justify-center px-4 pt-24 sm:pt-32"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
        >
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            aria-hidden
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Command palette"
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="glass glass-strong relative z-10 w-full max-w-lg overflow-hidden"
          >
            <div className="flex items-center gap-2.5 border-b border-[var(--glass-border)] px-4 py-3.5">
              <span className="mono-tag text-xs text-[var(--text-tertiary)]">$</span>
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => handleQueryChange(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type a command or search sections…"
                className="mono-tag w-full bg-transparent text-sm text-[var(--text-primary)] outline-none placeholder:text-[var(--text-tertiary)]"
              />
              <kbd className="mono-tag rounded-md border border-[var(--glass-border)] px-1.5 py-0.5 text-[10px] text-[var(--text-tertiary)]">
                esc
              </kbd>
            </div>

            <div className="max-h-80 overflow-y-auto p-2">
              {filtered.length === 0 && (
                <p className="px-3 py-6 text-center text-sm text-[var(--text-tertiary)]">No matches.</p>
              )}
              {filtered.map((cmd, i) => (
                <button
                  key={cmd.id}
                  type="button"
                  onClick={() => cmd.run()}
                  onMouseEnter={() => setActiveIndex(i)}
                  className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm transition-colors ${
                    i === activeIndex
                      ? 'bg-[var(--glass-surface-strong)] text-[var(--text-primary)]'
                      : 'text-[var(--text-secondary)]'
                  }`}
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-[var(--glass-border)]">
                    {cmd.icon}
                  </span>
                  <span className="flex-1 truncate">{cmd.label}</span>
                  <span className="mono-tag hidden text-[11px] text-[var(--text-tertiary)] sm:inline">
                    {cmd.hint}
                  </span>
                </button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
