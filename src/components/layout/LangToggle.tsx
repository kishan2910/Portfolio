import { useContent } from '../../i18n/content'
import { useLocale } from '../../i18n/LocaleContext'
import type { Locale } from '../../types'

const OPTIONS: Locale[] = ['en', 'de']

export function LangToggle() {
  const { locale, setLocale } = useLocale()
  const { t } = useContent()

  return (
    <div
      role="group"
      aria-label={t('a11y.lang')}
      className="glass flex h-10 items-center gap-0.5 rounded-full p-1"
    >
      {OPTIONS.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => setLocale(option)}
          aria-pressed={locale === option}
          className={`rounded-full px-2.5 py-1 text-xs font-semibold uppercase tracking-wide transition-colors ${
            locale === option
              ? 'bg-[var(--accent-solid)] text-[#1c1a15]'
              : 'text-[var(--text-tertiary)] hover:text-[var(--text-primary)]'
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  )
}
