
import { useEffect, useRef, useState } from 'react'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Education from './sections/Education'
import Contact from './sections/Contact'

function App() {
  const [isCVOpen, setIsCVOpen] = useState(false)
  const closeButtonRef = useRef(null)
  const previousFocusRef = useRef(null)

  const openCV = () => {
    previousFocusRef.current = document.activeElement
    setIsCVOpen(true)
  }

  const closeCV = () => {
    setIsCVOpen(false)
  }

  useEffect(() => {
    if (!isCVOpen) return

    closeButtonRef.current?.focus()

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsCVOpen(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      previousFocusRef.current?.focus()
    }
  }, [isCVOpen])

  return (
    <div className="min-h-screen bg-[#0B1120] text-slate-100">
      <Navbar />

      <main>
        <Hero />
        <About onViewCV={openCV} />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>

      <Footer />

      {/* CV Preview Modal */}
      {isCVOpen && (
        <div
          className="fixed inset-0 z-[120] flex items-center justify-center bg-black/80 p-3 backdrop-blur-sm sm:p-6"
          onClick={closeCV}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="cv-modal-title"
            className="flex h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-slate-700 bg-[#111C31] shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between gap-4 border-b border-slate-700 p-4 sm:p-5">
              <div className="min-w-0">
                <h3
                  id="cv-modal-title"
                  className="text-lg font-bold text-white"
                >
                  Curriculum Vitae
                </h3>
                <p className="mt-1 text-xs text-slate-400 sm:text-sm">
                  Syauqi Zainun Nauval
                </p>
              </div>

              <button
                ref={closeButtonRef}
                type="button"
                onClick={closeCV}
                aria-label="Close CV preview"
                className="shrink-0 rounded-lg px-3 py-1 text-2xl text-slate-400 transition hover:bg-slate-800 hover:text-white"
              >
                ×
              </button>
            </div>

            {/* PDF Preview */}
            <div className="min-h-0 flex-1 bg-slate-900">
              <iframe
                src="/Syauqi_Zainun_Nauval_CV.pdf#toolbar=1&navpanes=0"
                title="CV Syauqi Zainun Nauval"
                className="h-full w-full border-0"
              />
            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-between gap-3 border-t border-slate-700 p-4">
              <p className="text-xs text-slate-400">
                Curriculum Vitae - PDF
              </p>

              <a
                href="/Syauqi_Zainun_Nauval_CV.pdf"
                download
                className="rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-500"
              >
                Download CV ↓
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
