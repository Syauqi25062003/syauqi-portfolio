function TechBadge({ children }) {
  return (
    <span className="inline-flex items-center rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm font-medium text-gray-700 transition-colors duration-200 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700">
      {children}
    </span>
  )
}

export default TechBadge