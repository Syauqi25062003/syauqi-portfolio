function Footer() {
  return (
    <footer className="border-t border-slate-700/70 bg-[#0B1120]">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        {/* Copyright */}
        <div>
          <p className="text-sm font-semibold text-slate-100">
            Syauqi Zainun Nauval<span className="text-blue-500">.</span>
          </p>

          <p className="mt-1 text-xs text-slate-400">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Technology & Back to Top */}
        <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
          <p className="text-xs text-slate-400">
            Built with{' '}
            <span className="font-medium text-slate-300">
              React · Vite · Tailwind CSS
            </span>
          </p>

          <a
            href="#home"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 transition-colors hover:text-blue-300"
          >
            Back to top
            <span aria-hidden="true">↑</span>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer