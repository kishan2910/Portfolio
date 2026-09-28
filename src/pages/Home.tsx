import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { About } from '../components/sections/About'
import { Contact } from '../components/sections/Contact/Contact'
import { EducationCerts } from '../components/sections/EducationCerts'
import { Hero } from '../components/sections/Hero'
import { Skills } from '../components/sections/Skills/Skills'
import { Work } from '../components/sections/Work/Work'

export function Home() {
  const location = useLocation()

  useEffect(() => {
    const target = (location.state as { scrollTo?: string } | null)?.scrollTo
    if (!target) return
    document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' })
  }, [location.state])

  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Work />
      <EducationCerts />
      <Contact />
    </>
  )
}
