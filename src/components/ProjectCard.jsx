import TechBadge from './TechBadge'

function ProjectCard({ project, index = 0 }) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-slate-700/70 bg-[#17243A] p-6 shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-950/20 sm:p-8">
      {/* Project Header */}
      <div className="flex items-start justify-between gap-4">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-400">
          {project.type}
        </p>

        <span className="shrink-0 text-sm font-semibold tabular-nums text-slate-500 transition-colors group-hover:text-blue-400">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      {/* Project Content */}
      <h3 className="mt-5 text-2xl font-bold tracking-tight text-slate-100 transition-colors group-hover:text-blue-300 sm:text-3xl">
        {project.title}
      </h3>

      <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
        {project.description}
      </p>

      {/* Technologies */}
      <div className="mt-6">
        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
          Tech Stack
        </p>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <TechBadge key={technology}>
              {technology}
            </TechBadge>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="mt-7 border-t border-slate-700/70 pt-6">
        <h4 className="text-sm font-semibold text-slate-100">
          Key Features
        </h4>

        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {project.features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-2.5 text-sm leading-6 text-slate-300"
            >
              <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Links */}
      {project.githubUrl && (
        <div className="mt-auto border-t border-slate-700/70 pt-6">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
          >
            View Source Code
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      )}
    </article>
  )
}

export default ProjectCard