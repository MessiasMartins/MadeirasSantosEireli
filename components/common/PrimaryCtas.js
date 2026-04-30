import {
  ChatBubbleLeftRightIcon,
  MapPinIcon,
  PhoneIcon,
  Squares2X2Icon,
} from '@heroicons/react/24/outline'
import Button from '@/components/ui/Button'
import companyInfo from '@/data/config/companyInfo'

const ctas = [
  {
    label: 'Solicitar orçamento no WhatsApp',
    href: companyInfo.links.whatsapp,
    icon: ChatBubbleLeftRightIcon,
    variant: 'primary',
  },
  {
    label: 'Ver produtos',
    href: '/produtos',
    icon: Squares2X2Icon,
    variant: 'secondary',
  },
  {
    label: 'Visitar loja',
    href: companyInfo.links.routeMap,
    icon: MapPinIcon,
    variant: 'subtle',
    external: true,
  },
  {
    label: 'Ligar',
    href: companyInfo.contact.phoneHref,
    icon: PhoneIcon,
    variant: 'subtle',
  },
]

export default function PrimaryCtas({ stacked = false }) {
  const visibleCtas = stacked ? ctas : ctas.slice(0, 3)

  return (
    <div className={stacked ? 'grid gap-3' : 'flex flex-col gap-3 sm:flex-row'}>
      {visibleCtas.map((cta) => (
        <Button
          key={cta.label}
          href={cta.href}
          icon={cta.icon}
          variant={cta.variant}
          external={cta.external}
          full={stacked}
        >
          {cta.label}
        </Button>
      ))}
    </div>
  )
}
