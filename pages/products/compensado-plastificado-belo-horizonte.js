import ProductIntentPage from '@/components/ProductIntentPage'

const faq = [
  {
    question: 'Vocês trabalham com compensado plastificado?',
    answerLines: [
      'Sim. Trabalhamos com compensado plastificado e orientamos conforme a aplicação.',
    ],
  },
  {
    question: 'Posso pedir orçamento pelo WhatsApp?',
    answerLines: ['Sim. O orçamento pode ser solicitado diretamente pelo WhatsApp.'],
    showWhatsappButton: true,
  },
  {
    question: 'Vocês atendem BH e região?',
    answerLines: ['Sim. Atendemos Belo Horizonte e região metropolitana, conforme a demanda.'],
  },
]

const related = [
  {
    href: '/products/compensado-resinado-belo-horizonte',
    label: 'Ver compensado resinado em Belo Horizonte',
  },
  { href: '/products/osb-belo-horizonte', label: 'Consultar OSB em Belo Horizonte' },
  {
    href: '/products/madeira-para-telhado-belo-horizonte',
    label: 'Ver madeira para telhado em Belo Horizonte',
  },
]

export default function CompensadoPlastificadoPage() {
  return (
    <ProductIntentPage
      title="Compensado plastificado em Belo Horizonte | Madeiras Santos"
      description="Compensado plastificado em Belo Horizonte e região metropolitana. Fale com a Madeiras Santos para consultar disponibilidade e solicitar orçamento pelo WhatsApp."
      h1="Compensado plastificado em Belo Horizonte"
      subtitle="Atendimento direto para quem busca compensado plastificado para obras, formas e outras aplicações, com orçamento pelo WhatsApp."
      whenTitle="Quando considerar compensado plastificado"
      whenText="O compensado plastificado é uma boa opção para aplicações que exigem resistência, durabilidade e melhor acabamento. Se você busca esse material em Belo Horizonte e região metropolitana, a Madeiras Santos pode ajudar no atendimento e na orientação comercial."
      usesTitle="Aplicações comuns"
      usesText="Pode ser utilizado em diferentes contextos de obra e necessidade estrutural, conforme a aplicação e a especificação do projeto."
      budgetText="Para agilizar o atendimento, informe a quantidade desejada, a espessura, a finalidade de uso e se haverá retirada ou necessidade de entrega sob consulta."
      ctaLabel="Solicitar orçamento de compensado plastificado"
      faq={faq}
      related={related}
      path="/products/compensado-plastificado-belo-horizonte"
    />
  )
}
