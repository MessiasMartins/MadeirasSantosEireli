export default function Badge({ children, className = '' }) {
  return (
    <span
      className={`inline-flex min-h-[36px] items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-sm font-bold text-primary-800 ${className}`}
    >
      {children}
    </span>
  )
}
