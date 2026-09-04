import type { CertificationEntry, Locale } from '../types'

export const certifications: Record<Locale, CertificationEntry[]> = {
  en: [
    {
      name: 'AWS Certified Machine Learning Engineer (Associate)',
      issuer: 'Amazon Web Services',
      date: 'Nov 2025',
      verifyUrl: '/certs/aws-ml-engineer-associate.pdf',
    },
    {
      name: 'Open Source LLMOps Solutions',
      issuer: 'Duke University · Coursera',
      date: 'Jan 2025',
      verifyUrl: 'https://coursera.org/verify/WKQSS8VYHAYZ',
    },
    {
      name: 'Generative AI with Large Language Models',
      issuer: 'DeepLearning.AI · AWS · Coursera',
      date: 'Jan 2024',
      verifyUrl: 'https://coursera.org/verify/SHMZD63LX7UQ',
    },
  ],

  de: [
    {
      name: 'AWS Certified Machine Learning Engineer (Associate)',
      issuer: 'Amazon Web Services',
      date: 'Nov. 2025',
      verifyUrl: '/certs/aws-ml-engineer-associate.pdf',
    },
    {
      name: 'Open Source LLMOps Solutions',
      issuer: 'Duke University · Coursera',
      date: 'Jan. 2025',
      verifyUrl: 'https://coursera.org/verify/WKQSS8VYHAYZ',
    },
    {
      name: 'Generative AI with Large Language Models',
      issuer: 'DeepLearning.AI · AWS · Coursera',
      date: 'Jan. 2024',
      verifyUrl: 'https://coursera.org/verify/SHMZD63LX7UQ',
    },
  ],
}
