import type { Profile } from '../types'

export const profile: Profile = {
  name: 'Kishan Ajudiya',
  initials: 'KA',
  avatar: '/images/kishan-avatar.jpg',
  cvUrl: '/Kishan-Ajudiya-CV.pdf',
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
  tagline: 'Building AI systems that go from research paper to production — reliably, and at scale.',
  email: 'kishanajudiya13@gmail.com',
  phone: '+49 1575 8170716',
  socials: [
    { label: 'GitHub', href: 'https://github.com/kishan2910', icon: 'github' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/kishan2910', icon: 'linkedin' },
    { label: 'Email', href: 'mailto:kishanajudiya13@gmail.com', icon: 'mail' },
  ],
  bio: [
    'A curious learner passionate about making an impact through technology. Five years into turning that fascination into production systems.',
    "I hold a Master's in Artificial Intelligence and Data Analytics from Hochschule Neu-Ulm (graduated with distinction), and now work as an AI & MLOps Engineer at Künstliche Intelligenz SH, associated with Hochschule Flensburg.",
    "Outside of work, I'm usually out on a trail, making friends with the nearest dog, or a few episodes into an anime. Always happy to talk shop over coffee.",
  ],
  languages: [
    { name: 'English', level: 'Fluent' },
    { name: 'German', level: 'Advanced (B1–B2)' },
    { name: 'Hindi', level: 'Native' },
    { name: 'Gujarati', level: 'Native' },
  ],
}
