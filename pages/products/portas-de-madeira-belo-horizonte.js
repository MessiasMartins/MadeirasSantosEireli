import ProductIntentPage from '@/components/ProductIntentPage'
import { productFaq } from '@/data/productLandingData'

const related = [
  {
    href: '/products/compensado-plastificado-belo-horizonte',
    label: 'Ver compensado plastificado em Belo Horizonte',
  },
  { href: '/products/madeira-para-telhado-belo-horizonte', label: 'Ver madeira para telhado' },
  {
    href: '/products/compensado-resinado-belo-horizonte',
    label: 'Ver compensado resinado em Belo Horizonte',
  },
]

export default function PortasMadeiraPage() {
  return (
    <ProductIntentPage
      title="Portas de madeira em Belo Horizonte | Madeiras Santos"
      description="Portas de madeira em Belo Horizonte e região metropolitana. Fale com a Madeiras Santos para consultar disponibilidade e solicitar orçamento."
      h1="Portas de madeira em Belo Horizonte"
      subtitle="Opções para quem busca praticidade, qualidade e atendimento objetivo em Belo Horizonte e região metropolitana."
      whenTitle="Sobre portas de madeira"
      whenText="Trabalhamos com portas de madeira para diferentes necessidades, com atendimento direto para consulta de disponibilidade, orientação comercial e orçamento."
      usesTitle="Aplicações comuns"
      usesText="Linha voltada para ambientes internos e externos, conforme finalidade, medida e especificação informada no orçamento."
      budgetText="Para facilitar o atendimento, informe o tipo de porta, a medida desejada, a quantidade e se você também precisa consultar itens relacionados, como marcos e ferragens."
      ctaLabel="Solicitar orçamento de portas de madeira"
      faq={productFaq}
      related={related}
      path="/products/portas-de-madeira-belo-horizonte"
    />
  )
}
