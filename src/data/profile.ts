import type { Locale, Profile } from '../types'

const shared = {
  name: 'Kishan Ajudiya',
  avatar: '/images/kishan-avatar.jpg',
  cvUrl: '/Kishan-Ajudiya-CV.pdf',
  email: 'kishanajudiya13@gmail.com',
  phone: '+49 1575 8170716',
}

export const profile: Record<Locale, Profile> = {
  en: {
    ...shared,
    location: 'Flensburg, Germany',
    positions: [
      {
        role: 'AI & MLOps Engineer',
        org: 'kuenstliche-intelligenz.sh',
        href: 'https://kuenstliche-intelligenz.sh/',
      },
      {
        role: 'Scientific Research Associate',
        org: 'Hochschule Flensburg',
        href: 'https://hs-flensburg.de/',
      },
    ],
    tagline: 'Most models never leave the notebook. I ship the ones that do.',
    socials: [
      { label: 'GitHub', href: 'https://github.com/kishan2910', icon: 'github' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/kishan2910', icon: 'linkedin' },
      { label: 'Email', href: 'mailto:kishanajudiya13@gmail.com', icon: 'mail' },
    ],
    bio: [
      'A curious learner passionate about making an impact through technology. More than three years into turning that fascination into production systems.',
      "I hold a Master's in Artificial Intelligence and Data Analytics from Hochschule Neu-Ulm (graduated with distinction), and now work as an AI & MLOps Engineer at Künstliche Intelligenz SH, associated with Hochschule Flensburg.",
      "Outside of work, I'm usually out on a trail, making friends with the nearest dog, or a few episodes into an anime. Always happy to talk shop over coffee.",
    ],
    languages: [
      { name: 'English', level: 'Fluent' },
      { name: 'German', level: 'Advanced (B1–B2)' },
      { name: 'Hindi', level: 'Native' },
      { name: 'Gujarati', level: 'Native' },
    ],
  },

  de: {
    ...shared,
    location: 'Flensburg, Deutschland',
    positions: [
      {
        role: 'KI- & MLOps-Engineer',
        org: 'kuenstliche-intelligenz.sh',
        href: 'https://kuenstliche-intelligenz.sh/',
      },
      {
        role: 'Wissenschaftlicher Mitarbeiter',
        org: 'Hochschule Flensburg',
        href: 'https://hs-flensburg.de/',
      },
    ],
    tagline: 'Die meisten Modelle verlassen nie das Notebook. Ich bringe die anderen in Produktion.',
    socials: [
      { label: 'GitHub', href: 'https://github.com/kishan2910', icon: 'github' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/kishan2910', icon: 'linkedin' },
      { label: 'E-Mail', href: 'mailto:kishanajudiya13@gmail.com', icon: 'mail' },
    ],
    bio: [
      'Ein neugieriger Mensch, der mit Technologie etwas bewegen will. Seit über drei Jahren mache ich aus dieser Faszination Systeme, die in Produktion laufen.',
      'Ich habe einen Master in Artificial Intelligence and Data Analytics von der Hochschule Neu-Ulm (mit Auszeichnung abgeschlossen) und arbeite heute als KI- & MLOps-Engineer bei Künstliche Intelligenz SH, angebunden an die Hochschule Flensburg.',
      'Außerhalb der Arbeit bin ich meistens auf einem Wanderweg unterwegs, freunde mich mit dem nächstbesten Hund an oder stecke ein paar Folgen tief in einem Anime. Ich unterhalte mich jederzeit gern bei einem Kaffee.',
    ],
    languages: [
      { name: 'Englisch', level: 'Fließend' },
      { name: 'Deutsch', level: 'Fortgeschritten (B1–B2)' },
      { name: 'Hindi', level: 'Muttersprache' },
      { name: 'Gujarati', level: 'Muttersprache' },
    ],
  },
}
