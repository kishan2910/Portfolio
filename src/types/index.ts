export interface SocialLink {
  label: string
  href: string
  icon: 'github' | 'linkedin' | 'mail' | 'phone'
}

export interface Position {
  role: string
  org: string
  href?: string
}

export interface Profile {
  name: string
  initials: string
  location: string
  positions: Position[]
  tagline: string
  email: string
  phone: string
  socials: SocialLink[]
  bio: string[]
  languages: { name: string; level: string }[]
  avatar: string
  cvUrl: string
}

export interface NavLink {
  id: string
  label: string
}

export interface ProjectCard {
  title: string
  description: string
  metrics: string[]
  tech: string[]
  /** Client / partner org this project was delivered for (service engagements). */
  client?: string
  /** External link to a public project page / case study. */
  href?: string
  /** Path under /public to a project image, e.g. "/images/projects/foo.jpg". */
  image?: string
  imageAlt?: string
  /** Small note shown under the description, e.g. "Project report on request". */
  note?: string
}

export interface Testimonial {
  quote: string
  author: string
  role: string
}

export interface ExperienceEntry {
  company: string
  role: string
  location: string
  period: string
  summary: string
  projects: ProjectCard[]
  testimonial?: Testimonial
}

export interface SkillCategory {
  name: string
  skills: string[]
}

export interface EducationEntry {
  degree: string
  institution: string
  location: string
  period: string
  grade?: string
  detail?: string
}

export interface CertificationEntry {
  name: string
  issuer: string
  date: string
  verifyUrl?: string
}
