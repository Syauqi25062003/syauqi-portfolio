
import profileImage from '../assets/images/profile/profile.jpg'

const highlights = [
  {
    value: 'S.Kom.',
    label: 'Lulusan Informatika',
    description: 'Universitas Sebelas April',
  },
  {
    value: '3.54/4.00',
    label: 'Indeks Prestasi Kumulatif',
    description: 'Sarjana Informatika',
  },
  {
    value: 'Full-Stack',
    label: 'Area Pengembangan',
    description: 'Frontend, Backend, dan Database',
  },
]

function About({ onViewCV }) {
  return (
    <section
      id="about"
      className="relative isolate overflow-hidden bg-[#0B1120] py-24 sm:py-28"
    >
      {/* Background Decorations */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 -z-10 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 -z-10 h-96 w-96 rounded-full bg-purple-600/10 blur-[120px]"
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section Heading */}
        <div className="mb-14 text-center">
          <span className="text-sm font-bold uppercase tracking-[0.25em] text-blue-400">
            Get to Know Me
          </span>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
            About <span className="text-blue-400">Me</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            Sedikit perkenalan tentang latar belakang, minat, dan perjalanan saya di bidang pengembangan web.
          </p>
        </div>

        {/* Main About Content */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* Profile Image */}
          <div className="relative mx-auto w-full max-w-md">

            <div className="absolute -left-5 -top-5 h-28 w-28 rounded-tl-3xl border-l-2 border-t-2 border-blue-500/70" />

            <div className="absolute -bottom-5 -right-5 h-28 w-28 rounded-br-3xl border-b-2 border-r-2 border-purple-500/70" />

            {/* Image Frame */}
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-2 shadow-2xl shadow-blue-950/30">
              <img
                src={profileImage}
                alt="Syauqi Zainun Nauval"
                loading="lazy"
                className="aspect-[4/5] w-full rounded-2xl object-cover object-center"
              />

              {/* Image Overlay */}
              <div className="absolute inset-x-2 bottom-2 rounded-b-2xl bg-gradient-to-t from-[#080D1A]/95 to-transparent px-6 pb-6 pt-16">
                <p className="text-lg font-bold text-white">
                  Syauqi Zainun Nauval
                </p>
                <p className="mt-1 text-sm text-blue-300">
                  Full-Stack Web Developer
                </p>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -right-3 top-8 rounded-xl border border-white/10 bg-[#17243A]/95 px-4 py-3 shadow-xl backdrop-blur sm:-right-8">
              <p className="text-xs text-slate-400">
                Pendidikan
              </p>
              <p className="mt-1 text-sm font-bold text-white">
                S1 Informatika
              </p>
            </div>
          </div>

          {/* Introduction */}
          <div>
            <span className="inline-flex rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-xs font-semibold text-blue-300">
              Halo! Senang bertemu dengan Anda
            </span>

            <h3 className="mt-6 text-2xl font-bold leading-snug text-white sm:text-3xl">
              Halo, saya Syauqi Zainun Nauval, lulusan Informatika yang memiliki minat dalam pengembangan aplikasi web Full-Stack.
            </h3>

            <div className="mt-6 space-y-5 text-sm leading-8 text-slate-400 sm:text-base">
              <p>
                Saya merupakan lulusan S1 Informatika dari Universitas
                Sebelas April. Saya memiliki ketertarikan dalam
                pengembangan web, mulai dari membangun antarmuka
                pengguna hingga mengembangkan proses Back-End dan
                mengelola database. Saya memiliki pengalaman menggunakan
                berbagai teknologi, termasuk React.js, Node.js,
                Express.js, MongoDB, PHP Native, dan MySQL.
              </p>

              <p>
                Salah satu proyek yang saya kembangkan adalah Digital
                Library FTI sebagai tugas akhir, yaitu sistem berbasis
                web untuk mengelola laporan kerja praktik dan skripsi.
                Sistem ini dibangun menggunakan React.js, Node.js,
                Express.js, dan MongoDB, dengan fitur pengunggahan
                dokumen, verifikasi administrator, pencarian dokumen,
                serta deteksi kemiripan judul menggunakan metode TF-IDF
                dan Cosine Similarity.
              </p>

              <p>
                Saya senang mempelajari teknologi baru, membangun
                aplikasi yang fungsional dan responsif, serta
                berkolaborasi dalam tim. Saya terus berusaha
                mengembangkan kemampuan teknis dan siap menghadapi
                tantangan baru di bidang pengembangan web.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={onViewCV}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-900/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-blue-500/20"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-4 w-4"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.5 12s3.5-7 9.5-7 9.5 7 9.5 7-3.5 7-9.5 7-9.5-7-9.5-7Z"
                  />
                  <circle cx="12" cy="12" r="3" />
                </svg>
                Lihat CV
              </button>

              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-slate-200 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/50 hover:text-blue-300"
              >
                Lihat Proyek
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="mt-24 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.label}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-blue-500/[0.05]"
            >
              <p className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-3xl font-extrabold text-transparent">
                {item.value}
              </p>

              <h4 className="mt-3 text-base font-bold text-white">
                {item.label}
              </h4>

              <p className="mt-2 text-sm text-slate-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
