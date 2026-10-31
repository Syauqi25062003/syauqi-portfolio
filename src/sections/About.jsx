
import SectionTitle from '../components/SectionTitle'

function About() {
  const focusAreas = [
    {
      number: '01',
      title: 'Web Applications',
      description:
        'Building responsive and functional web applications.',
    },
    {
      number: '02',
      title: 'Frontend Development',
      description:
        'Creating clean and user-friendly interfaces with React.',
    },
    {
      number: '03',
      title: 'Full-Stack Development',
      description:
        'Connecting frontend, backend, APIs, and databases into complete applications.',
    },
  ]

  const technologies = [
    'JavaScript',
    'React',
    'Node.js',
    'Express.js',
    'MongoDB',
  ]

  return (
    <section
      id="about"
      className="relative isolate overflow-hidden border-y border-slate-700/60 bg-[#111C31]"
    >
      {/* Background Accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-28 top-16 -z-10 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl"
      />

      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-24">
        <SectionTitle
          eyebrow="About Me"
          title="A web developer focused on building useful and well-structured digital experiences."
        />

        <div className="grid items-start gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16">
          {/* About Content */}
          <div className="space-y-6">
            <p className="text-base leading-8 text-slate-300 sm:text-lg">
              Saya adalah fresh graduate S1 Informatika Universitas Sebelas
              April yang memiliki ketertarikan pada pengembangan aplikasi
              web. Saya menikmati proses mengubah ide dan kebutuhan menjadi
              aplikasi yang dapat digunakan secara nyata.
            </p>

            <p className="text-base leading-8 text-slate-300 sm:text-lg">
              Saya berfokus pada pengembangan web menggunakan{' '}
              <span className="font-semibold text-blue-300">
                JavaScript, React, Node.js, Express.js, dan MongoDB
              </span>
              . Saya tertarik mempelajari bagaimana frontend, backend, dan
              database dapat bekerja bersama untuk membangun aplikasi yang
              fungsional dan terstruktur.
            </p>

            <p className="text-base leading-8 text-slate-300 sm:text-lg">
              Sebagai seorang fresh graduate, saya terus mengembangkan
              kemampuan melalui project dan eksplorasi teknologi baru. Saya
              terbuka untuk belajar, bekerja dalam tim, serta menghadapi
              tantangan baru dalam pengembangan aplikasi web.
            </p>

            {/* Profile Highlight */}
            <div className="flex items-center gap-4 border-t border-slate-700 pt-6">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-sm font-bold text-white shadow-md shadow-blue-600/20">
                S.Kom.
              </div>

              <div>
                <p className="font-semibold text-slate-100">
                  Informatics Graduate
                </p>
                <p className="mt-1 text-sm text-slate-400">
                  Universitas Sebelas April · 2022–2026
                </p>
              </div>
            </div>
          </div>

          {/* Developer Focus Card */}
          <aside className="relative h-fit overflow-hidden rounded-2xl border border-slate-700 bg-[#17243A] p-6 shadow-xl shadow-black/20 sm:p-7">
            {/* Card Accent */}
            <div className="absolute inset-x-0 top-0 h-1 bg-blue-500" />

            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-400">
              Developer Focus
            </p>

            <h3 className="mt-4 text-xl font-bold tracking-tight text-slate-100">
              What I enjoy building.
            </h3>

            <div className="mt-6 space-y-5">
              {focusAreas.map((area, index) => (
                <div
                  key={area.number}
                  className="flex gap-4"
                >
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-xs font-bold ${
                      index === 0
                        ? 'bg-blue-600 text-white'
                        : 'border border-blue-400/20 bg-blue-500/10 text-blue-300'
                    }`}
                  >
                    {area.number}
                  </span>

                  <div className="pt-0.5">
                    <h4 className="text-sm font-semibold text-slate-100">
                      {area.title}
                    </h4>

                    <p className="mt-1.5 text-sm leading-6 text-slate-400">
                      {area.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Core Stack */}
            <div className="mt-7 border-t border-slate-700 pt-5">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400">
                Core Stack
              </p>

              <div className="mt-3 flex flex-wrap gap-2">
                {technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-lg border border-blue-400/20 bg-blue-500/10 px-3 py-1.5 text-xs font-semibold text-blue-300 transition-colors hover:border-blue-400/50 hover:bg-blue-500/20"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}

export default About
