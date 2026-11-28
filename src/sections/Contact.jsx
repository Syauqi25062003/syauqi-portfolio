
import SectionTitle from '../components/SectionTitle'
import Button from '../components/Button'

function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-y border-slate-800 bg-[#0B1120]"
    >
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-purple-600/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-24">
        <div className="relative overflow-hidden rounded-3xl border border-slate-700/70 bg-[#111C31] p-8 text-center sm:p-12 lg:p-16">
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />

          <div className="mx-auto max-w-2xl">

            <SectionTitle
              eyebrow="Hubungi Saya"
              title="Ayo terhubung dan bekerja sama."
              description="Saya terbuka terhadap peluang karier di bidang pengembangan web, khususnya Front-End dan Full-Stack Development. Silakan hubungi saya untuk kesempatan kerja, proyek, maupun kolaborasi profesional."
            />

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button href="mailto:zainunnauval@gmail.com">
                Email Saya ↗
              </Button>

              <Button
                href="https://github.com/Syauqi25062003"
                variant="secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub ↗
              </Button>
            </div>

            <div className="mt-10 border-t border-slate-700/70 pt-7">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
                Anda juga dapat menghubungi saya di
              </p>

             <a
              href="mailto:zainunnauval@gmail.com"
              aria-label="Send an email to Syauqi Zainun Nauval"
              className="mt-3 inline-block break-all text-base font-semibold text-slate-200 transition hover:text-blue-400 sm:text-lg"
            >
              zainunnauval@gmail.com
            </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
