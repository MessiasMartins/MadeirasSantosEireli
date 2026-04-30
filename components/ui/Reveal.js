import { useEffect, useRef } from 'react'

export default function Reveal({ children, className = '', as: Component = 'div' }) {
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current
    if (!element || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      element?.classList.add('is-visible')
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add('is-visible')
          observer.disconnect()
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.12 }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <Component ref={ref} className={`reveal ${className}`}>
      {children}
    </Component>
  )
}
