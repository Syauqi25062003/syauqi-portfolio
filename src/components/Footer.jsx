
function Footer() {
  const navItems = [
    ['Home', '#home'],
    ['About', '#about'],
    ['Portfolio', '#portfolio'],
    ['Contact', '#contact'],
  ]

  const linkStyles =
    'text-slate-400 transition hover:text-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-4 focus-visible:ring-offset-[#080D1A]'

  return (
    <footer className="border-t border-slate-800 bg-[#080D1A]">
      <div className="mx-auto max-w-6xl px-6 py-10 lg:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <a
              href="#home"
              className="text-xl font-bold tracking-tight text-white"
            >
              Syauqi Zainun Nauval<span className="text-blue-500"></span>
            </a>

            <p className="mt-2 max-w-sm text-sm leading-6 text-slate-400">
            Full-Stack Web Developer interested in building responsive,
            functional, and user-friendly web applications.
          </p>
          </div>

          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap gap-x-6 gap-y-3 text-sm"
          >
            {navItems.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className={linkStyles}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-slate-800 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Syauqi Zainun Nauval. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <a
              href="https://github.com/Syauqi25062003"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-xs font-medium ${linkStyles}`}
            >
              GitHub ↗
            </a>

            <a
              href="#home"
              className={`text-xs font-semibold text-blue-400 hover:text-blue-300 ${linkStyles}`}
            >
              Back to top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
