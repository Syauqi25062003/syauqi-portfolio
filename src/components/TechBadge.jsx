
function TechBadge({ children }) {
  return (
    <span className="inline-flex items-center rounded-lg border border-slate-700 bg-slate-800/60 px-3 py-2 text-sm font-medium text-slate-300 transition-all duration-200 hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-blue-300">
      {children}
    </span>
  )
}

export default TechBadge
