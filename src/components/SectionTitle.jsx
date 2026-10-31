
function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="mb-12 max-w-2xl">
      <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-400">
        {eyebrow}
      </p>

      <h2 className="text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-base leading-7 text-slate-300">
          {description}
        </p>
      )}
    </div>
  )
}

export default SectionTitle
