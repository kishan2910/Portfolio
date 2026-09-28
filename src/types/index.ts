export type Locale = 'en' | 'de'

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
}

export interface ProjectCard {
  title: string
  /** Plain prose, or a list of bullet points for multi-facet projects. */
  description: string | string[]
  /** Client / partner org this project was delivered for (service engagements). */
  client?: string
  /** External link to a public project page / case study. */
  href?: string
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
  /** Plain prose, or a list of bullet points for multi-facet roles. */
  summary: string | string[]
  projects: ProjectCard[]
  testimonial?: Testimonial
  /** Route to a dedicated page listing this entry's client projects, instead of inline. */
  projectsPage?: string
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
  thesisUrl?: string
}

export interface CertificationEntry {
  name: string
  issuer: string
  date: string
  verifyUrl?: string
}
