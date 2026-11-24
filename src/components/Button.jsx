
function Button({
  children,
  href,
  variant = 'primary',
  target,
  rel,
  ariaLabel,
}) {
  const baseStyles =
    'inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1120]'

  const variants = {
    primary:
      'bg-blue-600 text-white shadow-lg shadow-blue-950/20 hover:bg-blue-500',

    secondary:
      'border border-slate-600 bg-[#17243A] text-slate-200 hover:border-blue-400/50 hover:bg-blue-500/10 hover:text-blue-300',
  }

  const selectedVariant = variants[variant] || variants.primary

  return (
    <a
      href={href}
      target={target}
      rel={target === '_blank' ? rel || 'noopener noreferrer' : rel}
      aria-label={ariaLabel}
      className={`${baseStyles} ${selectedVariant}`}
    >
      {children}
    </a>
  )
}

export default Button
