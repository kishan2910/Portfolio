import type { EducationEntry, Locale } from '../types'

const thesisUrl = 'https://github.com/kishan2910/Master_Thesis_AL_KO'

export const education: Record<Locale, EducationEntry[]> = {
  en: [
    {
      degree: 'M.Sc. Artificial Intelligence and Data Analytics',
      institution: 'Hochschule Neu-Ulm',
      location: 'Germany',
      period: 'Sep 2022 – Oct 2024',
      grade: 'Grade: 1.9',
      detail:
        'Master thesis: "Design and Implementation of a Neural Network for Obstacle Avoidance in Robotic Lawn Mowers".',
      thesisUrl,
    },
    {
      degree: 'B.E. Mechanical Engineering',
      institution: 'The Maharaja Sayajirao University of Baroda',
      location: 'India',
      period: 'Jul 2017 – May 2021',
      grade: 'Grade: 1.4',
    },
  ],

  de: [
    {
      degree: 'M.Sc. Artificial Intelligence and Data Analytics',
      institution: 'Hochschule Neu-Ulm',
      location: 'Deutschland',
      period: 'Sep. 2022 – Okt. 2024',
      grade: 'Note: 1,9',
      detail:
        'Masterarbeit: „Design and Implementation of a Neural Network for Obstacle Avoidance in Robotic Lawn Mowers".',
      thesisUrl,
    },
    {
      degree: 'B.Eng. Maschinenbau',
      institution: 'The Maharaja Sayajirao University of Baroda',
      location: 'Indien',
      period: 'Juli 2017 – Mai 2021',
      grade: 'Note: 1,4',
    },
  ],
}
