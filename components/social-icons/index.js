// Icons taken from: https://simpleicons.org/ and https://heroicons.com/
import Image from 'next/image'

const components = {
  mail: '/social-icons/mail.svg',
  instagram: '/social-icons/instagram.svg',
  whatsapp: '/social-icons/whatsapp.svg',
  google: '/social-icons/google.svg',
  mastercard: '/other-icons/mastercardlogo.svg',
  visa: '/other-icons/visa.svg',
}

const sizeClasses = {
  5: 'h-5 w-5',
  6: 'h-6 w-6',
  8: 'h-8 w-8',
}

const SocialIcon = ({ kind, href, size = 8 }) => {
  if (!href || (kind === 'mail' && !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(href)))
    return null

  const iconSrc = components[kind]
  if (!iconSrc) return null

  return (
    <a
      className="text-sm text-gray-500 transition hover:text-gray-600"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      <span className="sr-only">{kind}</span>
      <Image
        src={iconSrc}
        alt=""
        aria-hidden="true"
        width={24}
        height={24}
        className={`${sizeClasses[size] || sizeClasses[8]} opacity-80 transition hover:opacity-100 dark:invert`}
      />
    </a>
  )
}

export default SocialIcon
