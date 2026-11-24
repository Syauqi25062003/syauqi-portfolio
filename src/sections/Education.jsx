
import SectionTitle from '../components/SectionTitle'

function Education() {
  return (
    <section
      id="education"
      className="relative overflow-hidden border-y border-slate-800 bg-[#0B1120]"
    >
      <div className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 top-0 h-80 w-80 rounded-full bg-purple-600/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-24">
        <SectionTitle
          eyebrow="Education"
          title="Perjalanan akademis saya."
          description="Landasan akademis di balik perjalanan saya dalam pengembangan perangkat lunak dan web."
        />

        <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-slate-700/70 bg-[#111C31] transition duration-300 hover:border-blue-500/40">
          <div className="h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />

          <div className="p-6 sm:p-8 lg:p-10">
            <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-xs font-semibold text-blue-300">
                  <span className="h-2 w-2 rounded-full bg-blue-400" />
                  2022 — 2026
                </span>

                <h3 className="mt-6 text-2xl font-bold text-white sm:text-3xl">
                  Universitas Sebelas April
                </h3>

                <p className="mt-2 text-lg font-semibold text-blue-400">
                  Sarjana Informatika
                </p>

                <p className="mt-3 text-sm text-slate-400">
                  Sumedang, Jawa Barat, Indonesia
                </p>
              </div>

              <div className="flex items-center gap-4 rounded-xl border border-slate-700 bg-slate-800/40 p-4 sm:min-w-52">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
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

                <div>
                  <p className="text-xs text-slate-400">Degree</p>
                  <p className="mt-1 font-bold text-white">S.Kom.</p>
                  <p className="text-xs text-slate-400">
                    Computer Science
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 grid gap-4 border-t border-slate-700 pt-8 sm:grid-cols-2">
              <div className="rounded-xl border border-slate-700/70 bg-slate-800/30 p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">            
                Indeks Prestasi Kumulatif
                </p>
                <p className="mt-2 text-3xl font-bold text-white">
                  3.54
                  <span className="ml-2 text-sm font-medium text-slate-500">
                    / 4.00
                  </span>
                </p>
              </div>

              <div className="rounded-xl border border-slate-700/70 bg-slate-800/30 p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Status Akademik
                </p>
                <p className="mt-3 text-lg font-bold text-white">
                  Graduated
                </p>
                <p className="mt-1 text-xs text-slate-400">
                  Sarjana Informatika, 2026
                </p>
              </div>
            </div>

            <p className="mt-6 text-sm leading-7 text-slate-400">
              Latar belakang akademis di bidang Informatika, 
              dengan minat pada rekayasa perangkat lunak, pengembangan frontend, 
              serta pembangunan aplikasi web yang fungsional.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
