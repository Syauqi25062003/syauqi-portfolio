
import SectionTitle from '../components/SectionTitle'
import TechBadge from '../components/TechBadge'
import { skills } from '../Data/Skills'

function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden border-y border-blue-100/70 bg-#F1F5F9"
    >
      {/* Background Accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-blue-100/60 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-24">
        <SectionTitle
          eyebrow="Skills & Technologies"
          title="The tools behind my development workflow."
          description="Technologies and tools I use to build web applications, from user interfaces to backend services and databases."
        />

        {/* Skills Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:gap-6">
          {skills.map((skill, index) => (
            <article
              key={skill.category}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-950/5 sm:p-7"
            >
              {/* Top Accent */}
              <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-blue-600 transition-transform duration-300 group-hover:scale-x-100" />

              {/* Category Header */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-blue-700 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
                    <span className="text-sm font-bold">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </span>

                  <h3 className="text-lg font-bold tracking-tight text-slate-900 sm:text-xl">
                    {skill.category}
                  </h3>
                </div>

                <span
                  aria-hidden="true"
                  className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-200 transition-colors duration-300 group-hover:bg-blue-600"
                />
              </div>

              {/* Description */}
              <p className="mt-5 text-sm leading-7 text-slate-600">
                {skill.description}
              </p>

              {/* Technologies */}
              <div className="mt-6 border-t border-slate-100 pt-5">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.14em] text-slate-400">
                  Technologies
                </p>

                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((technology) => (
                    <TechBadge key={technology}>
                      {technology}
                    </TechBadge>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}     

export default Skills
