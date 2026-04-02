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

export default function CompensadoResinadoPage() {
  return (
    <ProductIntentPage
      title="Compensado resinado em Belo Horizonte | Madeiras Santos"
      description="Compensado resinado em Belo Horizonte e região metropolitana. Consulte disponibilidade e solicite orçamento com a Madeiras Santos pelo WhatsApp."
      h1="Compensado resinado em Belo Horizonte"
      subtitle="Atendimento para obras, reformas e diferentes necessidades com compensado resinado em Belo Horizonte e região metropolitana."
      whenTitle="Quando considerar compensado resinado"
      whenText="O compensado resinado é uma opção versátil para diferentes usos na obra, com bom custo-benefício e ampla aplicação, conforme a necessidade do cliente."
      usesTitle="Aplicações comuns"
      usesText="Linha indicada para demandas recorrentes de obra com foco em resistência e versatilidade de aplicação."
      budgetText="Informe a espessura, a quantidade, a finalidade do uso e se você pretende retirar ou consultar entrega, para facilitar o atendimento."
      ctaLabel="Solicitar orçamento de compensado resinado"
      faq={productFaq}
      related={related}
      path="/products/compensado-resinado-belo-horizonte"
    />
  )
}
