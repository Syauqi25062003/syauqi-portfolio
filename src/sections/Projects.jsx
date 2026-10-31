import SectionTitle from '../components/SectionTitle'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../Data/Projects'

function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden border-y border-slate-700/70 bg-[#111C31]"
    >
      {/* Background Accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-40 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-24">
        <SectionTitle
          eyebrow="Selected Projects"
          title="Building ideas into web applications."
          description="A selection of projects that reflect my experience in web development, from full-stack application development to frontend implementation in team projects."
        />

        {/* Project List */}
        <div className="space-y-6 lg:space-y-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <ProjectCard
                project={project}
                index={index}
              />
            </div>
          ))}
        </div>

        {/* GitHub Footer Link */}
        <div className="mt-10 flex flex-col gap-4 rounded-2xl border border-blue-400/20 bg-blue-500/10 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <p className="text-lg font-bold tracking-tight text-slate-100">
              Want to explore more?
            </p>
            <p className="mt-1 text-sm leading-6 text-slate-300">
              Visit my GitHub profile to see more of my code and projects.
            </p>
          </div>

          <a
            href="https://github.com/Syauqi25062003"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
          >
            Explore GitHub
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects