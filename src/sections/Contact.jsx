import SectionTitle from '../components/SectionTitle'
import Button from '../components/Button'

function Contact() {
  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden border-y border-slate-700/70 bg-[#111C31]"
    >
      {/* Background Accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 -z-10 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl"
      />

      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-24">
        <div className="relative overflow-hidden rounded-3xl border border-slate-700/70 bg-[#17243A] p-7 shadow-xl shadow-black/10 sm:p-10 lg:p-14">
          {/* Top Accent */}
          <div className="absolute inset-x-0 top-0 h-1 bg-blue-500" />

          {/* Decorative Shape */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-12 bottom-0 hidden h-64 w-64 rounded-full border-[32px] border-blue-500/10 sm:block"
          />

          <div className="relative max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1.5 text-xs font-semibold text-blue-300">
              <span className="h-2 w-2 rounded-full bg-blue-400" />
              Open to Opportunities
            </div>

            <SectionTitle
              eyebrow="Contact"
              title="Let's build something meaningful together."
              description="I'm open to opportunities in Web Development, Front-End Development, and Full-Stack Development. Feel free to reach out to discuss a job opportunity or collaboration."
            />

            {/* Contact Actions */}
            <div className="flex flex-wrap gap-3">
              <Button href="mailto:zainunnauval@gmail.com">
                Email Me
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

            {/* Email Information */}
            <div className="mt-8 flex flex-col gap-3 border-t border-slate-700/70 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-400">
                  Prefer email?
                </p>

                <a
                  href="mailto:zainunnauval@gmail.com"
                  className="mt-2 inline-block break-all text-sm font-semibold text-slate-100 transition-colors hover:text-blue-400 sm:text-base"
                >
                  zainunnauval@gmail.com
                </a>
              </div>

              <a
                href="https://github.com/Syauqi25062003"
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-blue-400 transition-colors hover:text-blue-300"
              >
                Explore my GitHub
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact