import ProductIntentPage from '@/components/ProductIntentPage'
import { productFaq } from '@/data/productLandingData'

const related = [
  {
    href: '/products/compensado-plastificado-belo-horizonte',
    label: 'Ver compensado plastificado em Belo Horizonte',
  },
  { href: '/products/osb-belo-horizonte', label: 'Consultar OSB em Belo Horizonte' },
  {
    href: '/products/portas-de-madeira-belo-horizonte',
    label: 'Solicitar orçamento de portas de madeira',
  },
]

export default function MadeiraTelhadoPage() {
  return (
    <ProductIntentPage
      title="Madeira para telhado em Belo Horizonte | Madeiras Santos"
      description="Madeira para telhado em Belo Horizonte e região metropolitana. Solicite orçamento com a Madeiras Santos pelo WhatsApp."
      h1="Madeira para telhado em Belo Horizonte"
      subtitle="Atendimento para quem busca peças para estrutura de telhado, com apoio na escolha dos materiais e orçamento direto pelo WhatsApp."
      whenTitle="Quando considerar madeira para telhado"
      whenText="Para estruturas de telhado, é importante ter mais clareza na escolha do material e no tipo de peça necessário. A Madeiras Santos atende clientes de Belo Horizonte e região metropolitana com foco em orientação comercial e agilidade no orçamento."
      usesTitle="Aplicações comuns"
      usesText="Indicada para estruturas de cobertura e contextos relacionados ao telhado, conforme necessidades de cada projeto."
      budgetText="Informe, se possível, o tipo de estrutura, as medidas, a quantidade e se você pretende retirar ou consultar entrega."
      ctaLabel="Solicitar orçamento de madeira para telhado"
      faq={productFaq}
      related={related}
      path="/products/madeira-para-telhado-belo-horizonte"
    />
  )
}
