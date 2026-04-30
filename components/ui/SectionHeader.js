export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'left',
  className = '',
}) {
  const centered = align === 'center'

  return (
    <div className={`${centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'} ${className}`}>
      {eyebrow && (
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary-700">{eyebrow}</p>
      )}
      <h2 className="mt-3 text-balance text-3xl font-black tracking-tight text-brand-graphite sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-pretty text-base leading-7 text-stone-700 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  )
}
