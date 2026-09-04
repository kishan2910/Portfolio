import type { Locale } from '../types'

/** UI-chrome strings (everything that isn't in the data files). */
const en = {
  'meta.title': 'Kishan Ajudiya — AI & MLOps Engineer',

  'nav.about': 'About',
  'nav.skills': 'Skills',
  'nav.journey': 'Journey',
  'nav.education': 'Education',
  'nav.contact': 'Contact',

  'a11y.skip': 'Skip to content',
  'a11y.primaryNav': 'Primary',
  'a11y.openMenu': 'Open menu',
  'a11y.closeMenu': 'Close menu',
  'a11y.theme': 'Toggle theme',
  'a11y.lang': 'Switch language',
  'a11y.github': 'GitHub',
  'a11y.linkedin': 'LinkedIn',
  'a11y.downloadCv': 'Download CV',
  'a11y.backToTop': 'Back to top',

  'hero.viewWork': 'View my work',
  'hero.getInTouch': 'Get in touch',
  'hero.at': 'at',

  'section.about.eyebrow': 'The Self',
  'section.about.title': 'From notebook to production, and everything that breaks in between',
  'section.skills.eyebrow': 'Skills',
  'section.skills.title': 'The tools I reach for',
  'section.journey.eyebrow': 'The Journey',
  'section.journey.title': 'Each stop, what I shipped and who it was for',
  'section.education.eyebrow': 'Education',
  'section.education.title': 'Where the fundamentals came from',
  'section.contact.eyebrow': 'Contact',
  'section.contact.title': "Let's build something",

  'about.snapshot1': 'Trail time',
  'about.snapshot2': 'Making friends',

  'edu.education': 'Education',
  'edu.certifications': 'Certifications',
  'edu.verify': 'Verify',
  'edu.certificate': 'View certificate',
  'edu.viewThesis': 'View thesis & code',

  'work.showProjects': 'View {n} client projects',
  'work.hideProjects': 'Hide {n} client projects',
  'work.viewProject': 'View project',

  'contact.email': 'Email',
  'contact.phone': 'Phone',
  'contact.location': 'Location',

  'footer.built': 'Built with love.',
}

export type StringKey = keyof typeof en

const de: Record<StringKey, string> = {
  'meta.title': 'Kishan Ajudiya — KI- & MLOps-Engineer',

  'nav.about': 'Über mich',
  'nav.skills': 'Fähigkeiten',
  'nav.journey': 'Werdegang',
  'nav.education': 'Ausbildung',
  'nav.contact': 'Kontakt',

  'a11y.skip': 'Zum Inhalt springen',
  'a11y.primaryNav': 'Hauptnavigation',
  'a11y.openMenu': 'Menü öffnen',
  'a11y.closeMenu': 'Menü schließen',
  'a11y.theme': 'Thema wechseln',
  'a11y.lang': 'Sprache wechseln',
  'a11y.github': 'GitHub',
  'a11y.linkedin': 'LinkedIn',
  'a11y.downloadCv': 'Lebenslauf herunterladen',
  'a11y.backToTop': 'Nach oben',

  'hero.viewWork': 'Meine Arbeit ansehen',
  'hero.getInTouch': 'Kontakt aufnehmen',
  'hero.at': 'bei',

  'section.about.eyebrow': 'Über mich',
  'section.about.title': 'Vom Notebook in die Produktion – und alles, was dazwischen kaputtgeht',
  'section.skills.eyebrow': 'Fähigkeiten',
  'section.skills.title': 'Womit ich arbeite',
  'section.journey.eyebrow': 'Werdegang',
  'section.journey.title': 'Jede Station, was ich gebaut habe und für wen',
  'section.education.eyebrow': 'Ausbildung',
  'section.education.title': 'Woher die Grundlagen kommen',
  'section.contact.eyebrow': 'Kontakt',
  'section.contact.title': 'Lass uns etwas bauen',

  'about.snapshot1': 'Auf dem Trail',
  'about.snapshot2': 'Neue Freunde',

  'edu.education': 'Ausbildung',
  'edu.certifications': 'Zertifikate',
  'edu.verify': 'Verifizieren',
  'edu.certificate': 'Zertifikat ansehen',
  'edu.viewThesis': 'Masterarbeit & Code ansehen',

  'work.showProjects': '{n} Kundenprojekte anzeigen',
  'work.hideProjects': '{n} Kundenprojekte ausblenden',
  'work.viewProject': 'Projekt ansehen',

  'contact.email': 'E-Mail',
  'contact.phone': 'Telefon',
  'contact.location': 'Standort',

  'footer.built': 'Mit Liebe gebaut.',
}

export const strings: Record<Locale, Record<StringKey, string>> = { en, de }
