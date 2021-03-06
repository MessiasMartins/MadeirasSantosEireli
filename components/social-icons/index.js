import Mail from './mail.svg'
//import Github from './github.svg'
//import Facebook from './facebook.svg'
//import Youtube from './youtube.svg'
//import Linkedin from './linkedin.svg'
//import Twitter from './twitter.svg'
import Instagram from './instagram.svg'
import Whatsapp from './whatsapp.svg'
import Google from './google.svg'
import MasterCard from '../other-icons/mastercardlogo.svg'
import Visa from '../other-icons/visa.svg'

// Icons taken from: https://simpleicons.org/ and https://heroicons.com/

const components = {
  mail: Mail,
  //github: Github,
  //facebook: Facebook,
  //youtube: Youtube,
  //linkedin: Linkedin,
  //twitter: Twitter,
  instagram: Instagram,
  whatsapp: Whatsapp,
  google: Google,
  mastercard: MasterCard,
  visa: Visa,
}

const SocialIcon = ({ kind, href, size = 8 }) => {
  if (!href || (kind === 'mail' && !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(href)))
    return null

  const SocialSvg = components[kind]

  return (
    <a
      className="text-sm text-gray-500 transition hover:text-gray-600"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      <span className="sr-only">{kind}</span>
      <SocialSvg
        className={`fill-current text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 h-${size} w-${size}`}
      />
    </a>
  )
}

export default SocialIcon
