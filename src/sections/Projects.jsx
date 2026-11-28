import { useEffect, useRef, useState } from 'react'
import SectionTitle from '../components/SectionTitle'
import { projects } from '../Data/Projects'
import { certificates } from '../Data/certificates'

const tabs = ['Projects', 'Certificates', 'Tech Stack']



const technologies = [
  { name: 'HTML5', icon: 'devicon-html5-plain colored' },
  { name: 'CSS3', icon: 'devicon-css3-plain colored' },
  { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
  { name: 'React.js', icon: 'devicon-react-original colored' },
  { name: 'Vite', icon: 'devicon-vitejs-plain colored' },
  { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-original colored' },
  { name: 'Node.js', icon: 'devicon-nodejs-plain colored' },
  { name: 'Express.js', icon: 'devicon-express-original' },
  { name: 'PHP', icon: 'devicon-php-plain colored' },
  { name: 'Laravel', icon: 'devicon-laravel-original colored' },
  { name: 'MongoDB', icon: 'devicon-mongodb-plain colored' },
  { name: 'Mongoose', icon: 'devicon-mongoose-original' },
  { name: 'MySQL', icon: 'devicon-mysql-plain colored' },
  { name: 'Java', icon: 'devicon-java-plain colored' },
  { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
  { name: 'Bootstrap', icon: 'devicon-bootstrap-plain colored' },
  { name: 'Git', icon: 'devicon-git-plain colored' },
  { name: 'GitHub', icon: 'devicon-github-original' },
  { name: 'Postman', icon: 'devicon-postman-plain colored' },
  { name: 'Vercel', icon: 'devicon-vercel-original' },
  { name: 'Figma', icon: 'devicon-figma-plain colored' },
]


function Projects() {
  const [activeTab, setActiveTab] = useState('Projects')
  const [selectedProject, setSelectedProject] = useState(null)
  const [selectedCertificate, setSelectedCertificate] = useState(null)

  const closeButtonRef = useRef(null)
  const previousFocusRef = useRef(null)

  const openProjectDetails = (project) => {
    previousFocusRef.current = document.activeElement
    setSelectedProject(project)
  }

  const closeProjectDetails = () => {
    setSelectedProject(null)
  }

  const openCertificate = (certificate) => {
    previousFocusRef.current = document.activeElement
    setSelectedCertificate(certificate)
  }

  const closeCertificate = () => {
    setSelectedCertificate(null)
  }

  useEffect(() => {
    if (!selectedProject && !selectedCertificate) return

    closeButtonRef.current?.focus()

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSelectedProject(null)
        setSelectedCertificate(null)
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      previousFocusRef.current?.focus()
    }
  }, [selectedProject, selectedCertificate])

  return (
    <section
      id="portfolio"
      className="relative overflow-hidden border-y border-slate-800 bg-[#0B1120]"
    >
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-purple-600/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-24">
        <SectionTitle
          eyebrow="My Portfolio"
          title="Proyek & Keahlian Teknis"
         description="Explore my development projects, certificates, and the technologies and tools I have worked with."
        />

        {/* Tabs */}
        <div
          role="tablist"
          aria-label="Portfolio sections"
          className="mb-10 flex flex-wrap justify-center gap-2"
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              role="tab"
              aria-selected={activeTab === tab}
              onClick={() => setActiveTab(tab)}
              className={`rounded-lg px-5 py-3 text-sm font-semibold transition-all duration-200 ${
                activeTab === tab
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20'
                  : 'border border-slate-700 bg-slate-900/70 text-slate-400 hover:border-blue-500/50 hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Projects Tab */}
        {activeTab === 'Projects' && (
          <div
            role="tabpanel"
            className="grid gap-6 md:grid-cols-2"
          >
            {projects.map((project, index) => (
              <article
                key={project.title}
                className="group flex flex-col rounded-2xl border border-slate-700/70 bg-[#111C31] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 sm:p-8"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-400">
                    {project.type}
                  </span>

                  <span className="text-sm font-semibold text-slate-500">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <h3 className="mt-6 text-2xl font-bold text-white transition-colors group-hover:text-blue-300">
                  {project.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-400">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-6">
                  <p className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-500">
                    Technologies
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-md border border-slate-700 bg-slate-800/70 px-3 py-1.5 text-xs text-slate-300"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Actions */}
                <div className="mt-auto flex flex-wrap gap-3 border-t border-slate-700/70 pt-6">
                  <button
                    type="button"
                    onClick={() => openProjectDetails(project)}
                    aria-label={`View details for ${project.title}`}
                    className="rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-500"
                  >
                    Details
                  </button>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg border border-slate-600 px-4 py-2.5 text-sm font-semibold text-slate-300 transition hover:border-blue-400 hover:text-white"
                    >
                      GitHub Repo ↗
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}

{/* Certificates Tab */}
{activeTab === 'Certificates' && (
  <div
    role="tabpanel"
    className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
  >
    {certificates.map((certificate, index) => (
      <article
        key={certificate.title}
        className="group flex flex-col rounded-2xl border border-slate-700/70 bg-[#111C31] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50"
      >
        {/* Certificate Icon */}

      {/* Certificate Thumbnail */}
      <div className="relative overflow-hidden rounded-xl border border-slate-700 bg-white">
        <div className="aspect-[4/3]">
          <img
            src={certificate.thumbnail}
            alt={`Certificate: ${certificate.title}`}
            loading="lazy"
            className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        <span className="absolute right-3 top-3 rounded-md bg-[#0B1120]/80 px-2 py-1 text-xs font-semibold text-white">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>


        {/* Certificate Information */}
        <div className="mt-6 flex-1">
          <h3 className="text-lg font-bold leading-7 text-white transition-colors group-hover:text-blue-300">
            {certificate.title}
          </h3>

          <p className="mt-2 text-sm font-medium text-blue-400">
            {certificate.issuer}
          </p>

          <div className="mt-4 space-y-2 text-sm text-slate-400">
            <p>
              <span className="text-slate-500">Completed:</span>{' '}
              {certificate.date}
            </p>

            {certificate.duration && (
              <p>
                <span className="text-slate-500">Duration:</span>{' '}
                {certificate.duration}
              </p>
            )}
          </div>
        </div>

        {/* Certificate Actions */}
        <div className="mt-6 flex flex-wrap gap-2 border-t border-slate-700/70 pt-5">
          <button
            type="button"
            onClick={() => openCertificate(certificate)}
            className="inline-flex flex-1 items-center justify-center rounded-lg bg-blue-600 px-3 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-500"
          >
            View Certificate
          </button>

          {certificate.verifyUrl && (
            <a
              href={certificate.verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Verify ${certificate.title}`}
              className="inline-flex items-center justify-center rounded-lg border border-slate-600 px-3 py-2.5 text-sm font-semibold text-slate-300 transition hover:border-blue-400 hover:text-white"
            >
              Verify
            </a>
          )}
        </div>
      </article>
    ))}
  </div>
)}


        
{/* Tech Stack Tab */}
{activeTab === 'Tech Stack' && (
  <div
    role="tabpanel"
    className="rounded-2xl border border-slate-700/70 bg-[#111C31] p-6 sm:p-8"
  >
    <h3 className="mb-2 text-xl font-bold text-white">
      Technologies & Tools
    </h3>

    <p className="mb-8 text-sm text-slate-400">
      Technologies and tools I use to build web applications.
    </p>

    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {technologies.map((technology) => (
        <div
          key={technology.name}
          className="group flex flex-col items-center justify-center gap-4 rounded-xl border border-slate-700 bg-slate-800/50 px-3 py-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:bg-blue-500/10"
        >
          <i
            className={`${technology.icon} text-4xl transition-transform duration-300 group-hover:scale-110`}
            aria-hidden="true"
          />

          <span className="text-center text-sm font-semibold text-slate-300 transition-colors group-hover:text-white">
            {technology.name}
          </span>
        </div>
      ))}
    </div>
  </div>
)}


        {/* GitHub CTA */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 rounded-2xl border border-blue-500/20 bg-blue-500/5 p-6 sm:flex-row sm:p-8">
          <div>
            <h3 className="text-lg font-bold text-white">
              Ingin menjelajahi lebih lanjut?
            </h3>

            <p className="mt-1 text-sm text-slate-400">
              Kunjungi profil GitHub saya untuk melihat lebih banyak kode dan proyek.
            </p>
          </div>

          <a
            href="https://github.com/Syauqi25062003"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
          >
            Jelajahi GitHub ↗
          </a>
        </div>
      </div>

      {/* Project Details Modal */}

{/* Certificate Preview Modal */}
{selectedCertificate && (
  <div
    className="fixed inset-0 z-[110] flex items-center justify-center bg-black/80 p-3 backdrop-blur-sm sm:p-6"
    onClick={closeCertificate}
  >
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="certificate-modal-title"
      className="flex h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-slate-700 bg-[#111C31] shadow-2xl"
      onClick={(event) => event.stopPropagation()}
    >
      {/* Modal Header */}
      <div className="flex items-center justify-between gap-4 border-b border-slate-700 p-4 sm:p-5">
        <div className="min-w-0">
          <h3
            id="certificate-modal-title"
            className="truncate text-base font-bold text-white sm:text-lg"
          >
            {selectedCertificate.title}
          </h3>

          <p className="mt-1 text-xs text-slate-400 sm:text-sm">
            {selectedCertificate.issuer}
          </p>
        </div>

        <button
        ref={closeButtonRef}
        type="button"
        onClick={closeCertificate}
        aria-label="Close certificate preview"
        className="shrink-0 rounded-lg px-3 py-1 text-2xl text-slate-400 transition hover:bg-slate-800 hover:text-white"
      >
        ×
      </button>
      </div>

      {/* PDF Preview */}
      <div className="min-h-0 flex-1 bg-slate-900">
        <iframe
          src={`${selectedCertificate.file}#toolbar=1&navpanes=0`}
          title={`Certificate: ${selectedCertificate.title}`}
          className="h-full w-full border-0"
        />
      </div>

      {/* Modal Footer */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-700 p-4">
        <p className="text-xs text-slate-400">
          {selectedCertificate.date}
        </p>

        <a
          href={selectedCertificate.file}
          download
          className="rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-500"
        >
          Download Certificate ↓
        </a>
      </div>
    </div>
  </div>
)}

      {selectedProject && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={closeProjectDetails}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            aria-describedby="project-modal-description"
            className="max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-slate-700 bg-[#111C31] p-6 shadow-2xl sm:p-8"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-blue-400">
                  {selectedProject.type}
                </p>

                <h3
                  id="project-modal-title"
                  className="mt-2 text-2xl font-bold text-white"
                >
                  {selectedProject.title}
                </h3>
              </div>

              <button
                ref={closeButtonRef}
                type="button"
                onClick={closeProjectDetails}
                aria-label="Close project details"
                className="rounded-lg px-3 py-1 text-2xl text-slate-400 transition hover:bg-slate-800 hover:text-white"
              >
                ×
              </button>
            </div>

            {/* Description */}
            <p
              id="project-modal-description"
              className="mt-5 text-sm leading-7 text-slate-300"
            >
              {selectedProject.description}
            </p>

            {/* Key Features */}
            {selectedProject.features?.length > 0 && (
              <div className="mt-7">
                <h4 className="font-semibold text-white">
                  Key Features
                </h4>

                <ul className="mt-4 space-y-3">
                  {selectedProject.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm leading-6 text-slate-300"
                    >
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tech Stack */}
            <div className="mt-7">
              <h4 className="font-semibold text-white">
                Tech Stack
              </h4>

              <div className="mt-3 flex flex-wrap gap-2">
                {selectedProject.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-md border border-slate-700 bg-slate-800 px-3 py-1.5 text-xs text-slate-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>

            {/* GitHub Link */}
            {selectedProject.githubUrl && (
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
              >
                View GitHub Repository ↗
              </a>
            )}
          </div>
        </div>
      )}
    </section>
  )
}

export default Projects
