import { certifications } from '../data/certifications'
import { education } from '../data/education'
import { experience } from '../data/experience'
import { profile } from '../data/profile'
import { skills } from '../data/skills'
import { useLocale } from './LocaleContext'
import { strings } from './strings'

type Vars = Record<string, string | number>

/** Everything a component needs for the active locale: data bundles + `t()`. */
export function useContent() {
  const { locale } = useLocale()

  const t = (key: string, vars?: Vars) => {
    const table = strings[locale] as Record<string, string>
    let value = table[key] ?? (strings.en as Record<string, string>)[key] ?? key
    if (vars) {
      for (const [k, v] of Object.entries(vars)) {
        value = value.replace(`{${k}}`, String(v))
      }
    }
    return value
  }

  return {
    locale,
    t,
    profile: profile[locale],
    experience: experience[locale],
    skills: skills[locale],
    education: education[locale],
    certifications: certifications[locale],
  }
}
