
import SectionTitle from '../components/SectionTitle'
import { skills } from '../Data/Skills'

const categoryIcons = {
  Frontend: '🎨',
  Backend: '⚙️',
  Database: '🗄️',
  'Backend Services': '🔗',
  Tools: '🛠️',
  'Additional Technologies': '📚',
}

function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden border-y border-slate-800 bg-[#111C31]"
    >
      <div className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-24">
        <SectionTitle
          eyebrow="My Skills"
          title="Technologies & Tools"
          description="Technologies and tools I have used or explored through projects, coursework, and practical experience."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <article
              key={skill.category}
              style={{ animationDelay: `${index * 100}ms` }}
              className="animate-fade-up group rounded-2xl border border-slate-700/70 bg-[#0B1120] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-xl">
                {categoryIcons[skill.category]}
              </div>

              <h3 className="mt-5 text-lg font-bold text-white transition-colors group-hover:text-blue-400">
                {skill.category}
              </h3>

              <p className="mt-2 min-h-12 text-sm leading-6 text-slate-400">
                {skill.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {skill.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-md border border-slate-700 bg-slate-800/70 px-3 py-1.5 text-xs font-medium text-slate-300 transition hover:border-blue-500/40 hover:text-blue-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
