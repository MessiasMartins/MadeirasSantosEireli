import { ChatBubbleLeftRightIcon, HomeIcon } from '@heroicons/react/24/outline'
import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'
import companyInfo from '@/data/config/companyInfo'

export default function FourZeroFour() {
  return (
    <Container className="py-20 sm:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-black uppercase tracking-[0.2em] text-primary-700">Erro 404</p>
        <h1 className="mt-4 text-4xl font-black tracking-tight text-brand-graphite sm:text-5xl">
          Página não encontrada.
        </h1>
        <p className="mt-5 text-lg leading-8 text-stone-700">
          O endereço pode ter mudado. Continue pelo catálogo ou fale com a loja para encontrar o
          produto certo.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href="/" icon={HomeIcon} variant="secondary">
            Voltar para o início
          </Button>
          <Button href={companyInfo.links.whatsapp} icon={ChatBubbleLeftRightIcon}>
            Falar no WhatsApp
          </Button>
        </div>
      </div>
    </Container>
  )
}
