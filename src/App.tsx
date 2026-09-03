import { MotionConfig } from 'framer-motion'
import { CommandPalette } from './components/layout/CommandPalette'
import { CursorGlow } from './components/layout/CursorGlow'
import { Footer } from './components/layout/Footer'
import { GlassBackground } from './components/layout/GlassBackground'
import { Navbar } from './components/layout/Navbar'
import { NoiseOverlay } from './components/layout/NoiseOverlay'
import { About } from './components/sections/About'
import { Contact } from './components/sections/Contact/Contact'
import { EducationCerts } from './components/sections/EducationCerts'
import { Hero } from './components/sections/Hero'
import { Skills } from './components/sections/Skills/Skills'
import { Work } from './components/sections/Work/Work'
import { CommandPaletteProvider } from './context/CommandPaletteContext'
import { ThemeProvider } from './context/ThemeContext'

function App() {
  return (
    <ThemeProvider>
      <CommandPaletteProvider>
        <MotionConfig reducedMotion="user">
          <a href="#main" className="skip-link glass">
            Skip to content
          </a>
          <GlassBackground />
          <CursorGlow />
          <NoiseOverlay />
          <Navbar />
          <CommandPalette />
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
      </CommandPaletteProvider>
    </ThemeProvider>
  )
}

export default App
