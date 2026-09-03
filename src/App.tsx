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

function App() {
  return (
    <ThemeProvider>
      <MotionConfig reducedMotion="user">
        <a href="#main" className="skip-link glass">
          Skip to content
        </a>
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
  )
}

export default App
