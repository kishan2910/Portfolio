import { lazy, Suspense, useEffect } from 'react'
import { MotionConfig } from 'framer-motion'
import { Route, Routes, useLocation } from 'react-router-dom'
import { CursorGlow } from './components/layout/CursorGlow'
import { Footer } from './components/layout/Footer'
import { Navbar } from './components/layout/Navbar'
import { NoiseOverlay } from './components/layout/NoiseOverlay'
import { Starfield } from './components/layout/Starfield'
import { ThemeProvider } from './context/ThemeContext'
import { useContent } from './i18n/content'
import { LocaleProvider } from './i18n/LocaleContext'
import { Home } from './pages/Home'

const HhsFlensburgPage = lazy(() =>
  import('./pages/HhsFlensburgPage').then((m) => ({ default: m.HhsFlensburgPage })),
)

function SkipLink() {
  const { t } = useContent()
  return (
    <a href="#main" className="skip-link glass">
      {t('a11y.skip')}
    </a>
  )
}

/** Resets scroll position on route changes, except when Home is about to scroll to a section itself. */
function ScrollToTop() {
  const location = useLocation()

  useEffect(() => {
    const scrollingToSection = location.pathname === '/' && Boolean((location.state as { scrollTo?: string } | null)?.scrollTo)
    if (!scrollingToSection) window.scrollTo(0, 0)
  }, [location.pathname, location.state])

  return null
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
          <ScrollToTop />
          <Navbar />
          <main id="main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/hs-flensburg"
                element={
                  <Suspense fallback={null}>
                    <HhsFlensburgPage />
                  </Suspense>
                }
              />
            </Routes>
          </main>
          <Footer />
        </MotionConfig>
      </ThemeProvider>
    </LocaleProvider>
  )
}

export default App
