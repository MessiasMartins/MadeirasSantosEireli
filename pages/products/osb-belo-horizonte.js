import ProductIntentPage from '@/components/ProductIntentPage'
import { productFaq } from '@/data/productLandingData'

const related = [
  {
    href: '/products/compensado-resinado-belo-horizonte',
    label: 'Ver compensado resinado em Belo Horizonte',
  },
  { href: '/products/madeira-para-telhado-belo-horizonte', label: 'Ver madeira para telhado' },
  {
    href: '/products/compensado-plastificado-belo-horizonte',
    label: 'Ver compensado plastificado em Belo Horizonte',
  },
]

export default function OsbPage() {
  return (
    <ProductIntentPage
      title="OSB em Belo Horizonte | Madeiras Santos"
      description="OSB em Belo Horizonte e região metropolitana. Fale com a Madeiras Santos para consultar disponibilidade e solicitar orçamento pelo WhatsApp."
      h1="OSB em Belo Horizonte"
      subtitle="Solução prática para fechamentos, divisórias, tapumes e outras aplicações, com atendimento local e orçamento pelo WhatsApp."
      whenTitle="Quando considerar OSB"
      whenText="O OSB é uma solução prática para fechamentos, divisórias, tapumes e outras aplicações, sendo uma linha muito buscada em obras e demandas recorrentes."
      usesTitle="Aplicações comuns"
      usesText="Pode ser considerado para aplicações de fechamento e organização de obra, conforme necessidade técnica de cada projeto."
      budgetText="Para agilizar o retorno, informe a quantidade, a medida desejada, o tipo de aplicação e se há necessidade de retirada ou entrega sob consulta."
      ctaLabel="Solicitar orçamento de OSB"
      faq={productFaq}
      related={related}
      path="/products/osb-belo-horizonte"
    />
  )
}
