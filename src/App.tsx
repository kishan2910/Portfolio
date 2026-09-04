import { MotionConfig } from 'framer-motion'
import { CursorGlow } from './components/layout/CursorGlow'
import { Footer } from './components/layout/Footer'
import { Navbar } from './components/layout/Navbar'
import { NoiseOverlay } from './components/layout/NoiseOverlay'
import { Starfield } from './components/layout/Starfield'
import { About } from './components/sections/About'
import { Contact } from './components/sections/Contact/Contact'
import { EducationCerts } from './components/sections/EducationCerts'
import { Hero } from './components/sections/Hero'
import { Skills } from './components/sections/Skills/Skills'
import { Work } from './components/sections/Work/Work'
import { ThemeProvider } from './context/ThemeContext'
import { useContent } from './i18n/content'
import { LocaleProvider } from './i18n/LocaleContext'

function SkipLink() {
  const { t } = useContent()
  return (
    <a href="#main" className="skip-link glass">
      {t('a11y.skip')}
    </a>
  )
}

function App() {
  return (
    <LocaleProvider>
      <ThemeProvider>
        <MotionConfig reducedMotion="user">
          <SkipLink />
          <Starfield />
          <CursorGlow />
          <NoiseOverlay />
          <Navbar />
          <main id="main">
            <Hero />
            <About />
            <Skills />
            <Work />
            <EducationCerts />
            <Contact />
          </main>
          <Footer />
        </MotionConfig>
      </ThemeProvider>
    </LocaleProvider>
  )
}

export default App
