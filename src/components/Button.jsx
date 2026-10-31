function Button({
  children,
  href,
  variant = 'primary',
  target,
  rel,
}) {
  const baseStyles =
    'inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0'

  const variants = {
    primary:
      'bg-blue-600 text-white shadow-lg shadow-blue-950/20 hover:bg-blue-500',

    secondary:
      'border border-slate-600 bg-[#17243A] text-slate-200 hover:border-blue-400/50 hover:bg-blue-500/10 hover:text-blue-300',
  }

  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={`${baseStyles} ${variants[variant]}`}
    >
      {children}
    </a>
  )
}

export default Button