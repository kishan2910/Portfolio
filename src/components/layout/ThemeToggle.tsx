import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../../context/ThemeContext'
import { useContent } from '../../i18n/content'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const { t } = useContent()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={t('a11y.theme')}
      className="glass relative flex h-10 w-10 items-center justify-center rounded-full transition-transform hover:scale-105 active:scale-95"
    >
      {isDark ? <Sun size={17} strokeWidth={1.8} /> : <Moon size={17} strokeWidth={1.8} />}
    </button>
  )
}
