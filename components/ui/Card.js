export default function Card({ children, className = '', as: Component = 'div', ...props }) {
  return (
    <Component
      className={`rounded-lg border border-stone-200 bg-white shadow-sm shadow-stone-900/5 transition duration-200 ease-out hover:-translate-y-0.5 hover:border-primary-200 hover:shadow-md hover:shadow-stone-900/10 ${className}`}
      {...props}
    >
      {children}
    </Component>
  )
}
