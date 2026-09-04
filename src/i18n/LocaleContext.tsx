import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import type { Locale } from '../types'
import { strings } from './strings'

interface LocaleContextValue {
  locale: Locale
  setLocale: (locale: Locale) => void
}

const LocaleContext = createContext<LocaleContextValue | undefined>(undefined)

const STORAGE_KEY = 'portfolio-lang'

function getInitialLocale(): Locale {
  if (typeof window === 'undefined') return 'en'
  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (stored === 'en' || stored === 'de') return stored
  return navigator.language?.toLowerCase().startsWith('de') ? 'de' : 'en'
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(getInitialLocale)

  useEffect(() => {
    document.documentElement.lang = locale
    document.title = strings[locale]['meta.title']
    window.localStorage.setItem(STORAGE_KEY, locale)
  }, [locale])

  return <LocaleContext.Provider value={{ locale, setLocale }}>{children}</LocaleContext.Provider>
}

export function useLocale() {
  const ctx = useContext(LocaleContext)
  if (!ctx) throw new Error('useLocale must be used within LocaleProvider')
  return ctx
}
