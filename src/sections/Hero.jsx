
import Button from '../components/Button'
import profileImage from '../assets/images/profile/profile.jpg'

function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-[calc(100vh-73px)] items-center overflow-hidden bg-[#0B1120]"
    >
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -right-24 -top-24 -z-10 h-96 w-96 rounded-full bg-blue-600/15 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-32 -left-24 -z-10 h-80 w-80 rounded-full bg-sky-500/10 blur-3xl" />

      <div className="pointer-events-none absolute inset-y-0 right-0 -z-10 hidden w-[42%] border-l border-slate-700/50 bg-[#111C31] lg:block" />

      <div className="mx-auto w-full max-w-6xl px-6 py-16 sm:py-20 lg:px-8 lg:py-24">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.8fr] lg:gap-20">

          {/* Hero Content */}
          <div className="animate-fade-up">
            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 shadow-sm shadow-blue-950/20">
              <span className="h-2 w-2 rounded-full bg-blue-400" />
              <span className="text-xs font-semibold tracking-wide text-blue-300 sm:text-sm">
                WEB DEVELOPER PORTFOLIO
              </span>
            </div>

            <p className="mb-3 text-base font-semibold text-blue-400">
              Hello, I'm
            </p>

            <h1 className="max-w-2xl text-4xl font-extrabold leading-tight tracking-tight text-slate-50 sm:text-5xl lg:text-6xl">
              Syauqi Zainun
              <span className="mt-1 block text-blue-500">
                Nauval.
              </span>
            </h1>

            <h2 className="mt-6 text-xl font-semibold tracking-tight text-slate-200 sm:text-2xl">
              Web Developer
              <span className="mx-2 text-blue-400">/</span>
              <span className="text-blue-400">MERN Stack</span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
              Fresh graduate S1 Informatika yang berfokus pada pengembangan
              aplikasi web menggunakan MERN Stack. Berpengalaman membangun
              aplikasi web full-stack melalui project Digital Library FTI.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="#projects">
                View Projects
              </Button>

              <Button
                href="https://github.com/Syauqi25062003"
                variant="secondary"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </Button>
            </div>

            {/* Availability */}
            <div className="mt-8 flex items-center gap-3 text-sm text-slate-400">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-500/15">
                <span className="h-2 w-2 rounded-full bg-blue-400" />
              </span>
              Open to Web Development Opportunities
            </div>

            {/* Bottom Accent */}
            <div className="mt-10 flex items-center gap-3">
              <span className="h-1 w-12 rounded-full bg-blue-500" />
              <span className="h-1 w-5 rounded-full bg-blue-400/50" />
              <span className="h-1 w-2 rounded-full bg-blue-300/30" />
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative mx-auto w-full max-w-sm lg:max-w-md">
            {/* Decorative Grid */}
            <div
              aria-hidden="true"
              className="absolute -right-5 -top-5 h-28 w-28 opacity-60"
              style={{
                backgroundImage:
                  'radial-gradient(#60a5fa 1.5px, transparent 1.5px)',
                backgroundSize: '12px 12px',
              }}
            />

            {/* Blue Accent */}
            <div className="absolute -bottom-5 -left-5 h-28 w-28 rounded-3xl bg-blue-600 sm:h-32 sm:w-32" />

            {/* Image */}
            <div className="relative overflow-hidden rounded-3xl border border-slate-600/50 bg-[#17243A] p-2 shadow-2xl shadow-black/30">
              <img
                src={profileImage}
                alt="Syauqi Zainun Nauval"
                className="aspect-[4/5] w-full rounded-2xl object-cover object-center"
              />
            </div>

            {/* Floating Label */}
            <div className="absolute -bottom-3 right-3 rounded-xl border border-slate-600 bg-[#17243A] px-4 py-3 shadow-lg shadow-black/30 sm:-right-5 sm:bottom-6">
              <p className="text-xs font-medium text-slate-400">
                Focused on
              </p>
              <p className="mt-1 text-sm font-bold text-slate-100">
                Web Development
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero
