import SectionTitle from '../components/SectionTitle'

function Education() {
  return (
    <section
      id="education"
      className="relative isolate overflow-hidden border-y border-slate-700/70 bg-[#0B1120]"
    >
      {/* Background Accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 bottom-0 -z-10 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl"
      />

      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-24">
        <SectionTitle
          eyebrow="Education"
          title="My academic background."
          description="The academic foundation behind my journey in web development."
        />

        <div className="group relative overflow-hidden rounded-2xl border border-slate-700/70 bg-[#17243A] shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-950/20">
          {/* Top Accent */}
          <div className="h-1 w-full bg-blue-500" />

          <div className="p-6 sm:p-8 lg:p-10">
            <div className="grid gap-8 sm:grid-cols-[1fr_auto] sm:items-start">
              {/* Education Details */}
              <div>
                <div className="inline-flex items-center gap-2 rounded-lg border border-blue-400/20 bg-blue-500/10 px-3 py-1.5 text-xs font-bold tracking-wide text-blue-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                  2022 — 2026
                </div>

                <h3 className="mt-5 text-2xl font-bold tracking-tight text-slate-100 sm:text-3xl">
                  Universitas Sebelas April
                </h3>

                <p className="mt-2 text-base font-semibold text-blue-400 sm:text-lg">
                  S1 Informatika
                </p>

                <div className="mt-5 flex items-center gap-2 text-sm text-slate-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    className="h-4 w-4 text-blue-400"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"
                    />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                  Sumedang, Jawa Barat
                </div>
              </div>

              {/* Degree */}
              <div className="flex items-start gap-3 sm:min-w-52 sm:justify-end">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/10 text-blue-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    className="h-6 w-6"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3 2.5 8 12 13l9.5-5L12 3Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.5 10.1V15c3.5 2.7 7.5 2.7 11 0v-4.9M21.5 8v6"
                    />
                  </svg>
                </div>

                <div className="sm:text-right">
                  <p className="text-sm font-bold text-slate-100">
                    Sarjana Komputer
                  </p>
                  <p className="mt-1 text-sm text-slate-400">
                    Bachelor of Computer Science
                  </p>
                  <p className="mt-2 inline-flex rounded-md border border-blue-400/20 bg-blue-500/10 px-2 py-1 text-xs font-bold text-blue-300">
                    S.Kom.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Note */}
            <div className="mt-8 border-t border-slate-700/70 pt-5">
              <p className="text-sm leading-7 text-slate-300 sm:text-base">
                Academic background in Informatics, with an interest in
                software engineering and web application development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education