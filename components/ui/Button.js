import Link from '@/components/Link'

const variants = {
  primary:
    'border-transparent bg-primary-600 text-white shadow-sm shadow-emerald-900/10 hover:bg-primary-700',
  secondary:
    'border-stone-300 bg-white text-brand-graphite hover:border-primary-500 hover:text-primary-700',
  subtle: 'border-transparent bg-emerald-50 text-primary-800 hover:bg-emerald-100',
  graphite: 'border-transparent bg-brand-graphite text-white hover:bg-black',
}

export default function Button({
  href,
  children,
  variant = 'primary',
  icon: Icon,
  className = '',
  external = false,
  full = false,
  ...props
}) {
  const classes = [
    'inline-flex min-h-[48px] items-center justify-center gap-2 rounded-md border px-5 py-3 text-center text-sm font-bold leading-none transition duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2 active:translate-y-px',
    variants[variant] || variants.primary,
    full ? 'w-full' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const content = (
    <>
      {Icon && <Icon aria-hidden="true" className="h-5 w-5 shrink-0" />}
      <span>{children}</span>
    </>
  )

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        {...props}
      >
        {content}
      </Link>
    )
  }

  return (
    <button type="button" className={classes} {...props}>
      {content}
    </button>
  )
}
