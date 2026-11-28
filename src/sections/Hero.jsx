
import { useEffect, useState } from 'react'

const roles = [
  'Frontend Development',
  'Backend Development',
  'Database Management',
]

const technologies = [
  'React.js',
  'Node.js',
  'Express.js',
  'MongoDB',
  'PHP',
  'MySQL',
  'JavaScript',
  'Tailwind CSS',
]

function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((current) => (current + 1) % roles.length)
    }, 2500)

    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="home"
      className="relative isolate flex min-h-screen items-center overflow-hidden bg-[#080D1A] pt-24"
    >
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-40 top-10 -z-10 h-96 w-96 rounded-full bg-blue-600/20 blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 -z-10 h-96 w-96 rounded-full bg-purple-600/20 blur-[120px]" />

      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(#64748b_0.7px,transparent_0.7px)] [background-size:32px_32px] opacity-[0.12]" />

      <div className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">

          {/* Main Heading */}
          <h1 className="animate-fade-up text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Hi, I'm
            <span className="mt-2 block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Syauqi Zainun Nauval
            </span>
          </h1>

          {/* Main Role */}
          <h2 className="mt-7 text-xl font-bold text-slate-200 sm:text-2xl">
            Full-Stack Web Developer
          </h2>

          {/* Typing Animation */}
          <div
            className="mt-3 flex min-h-8 items-center justify-center text-base font-medium text-blue-400 sm:text-lg"
            aria-live="off"
          >
            <span>{roles[roleIndex]}</span>
            <span
              className="ml-1 animate-cursor-blink"
              aria-hidden="true"
            >
              |
            </span>
          </div>

          {/* Description */}
          <p className="mx-auto mt-7 max-w-2xl text-sm leading-8 text-slate-400 sm:text-base">
            Lulusan Informatika yang memiliki pengalaman dalam
            membangun aplikasi web, mulai dari pengembangan
            antarmuka pengguna hingga pengelolaan Back-End dan
            database. Tertarik mengembangkan aplikasi web yang
            responsif, fungsional, dan mudah digunakan.
          </p>

          {/* Technology Badges */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium text-slate-300 transition-all duration-300 hover:border-blue-400/40 hover:bg-blue-500/10 hover:text-blue-300 sm:text-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#portfolio"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-900/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-blue-500/30 sm:w-auto"
            >
              Lihat Proyek
              <span aria-hidden="true">↗</span>
            </a>

            <a
              href="#contact"
              className="inline-flex w-full items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-8 py-3.5 text-sm font-semibold text-slate-200 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/50 hover:text-blue-300 sm:w-auto"
            >
              Hubungi Saya
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-10 flex items-center justify-center gap-5">
            <a
              href="https://github.com/Syauqi25062003"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:text-blue-400"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.53v-2.07c-3.1.67-3.76-1.32-3.76-1.32-.5-1.28-1.24-1.62-1.24-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 .1.65 2.17 3.35 1.53.1-.72.39-1.21.7-1.49-2.48-.28-5.09-1.24-5.09-5.53 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.04-1.14 3.04-1.14.61 1.54.23 2.68.12 2.96.71.78 1.14 1.77 1.14 2.99 0 4.3-2.62 5.25-5.11 5.52.4.35.75 1.02.75 2.06V22c0 .29.2.63.77.52A11.1 11.1 0 0 0 12 .9Z" />
              </svg>
            </a>

            <a
              href="mailto:zainunnauval@gmail.com"
              aria-label="Send email"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/40 hover:text-purple-400"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
