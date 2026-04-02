import ProductIntentPage from '@/components/ProductIntentPage'

const faq = [
  {
    question: 'Vocês trabalham com compensado plastificado em BH e região?',
    answerLines: [
      'Sim. Atendemos Belo Horizonte e região metropolitana sob consulta de disponibilidade para compensado plastificado.',
    ],
  },
  {
    question: 'Que informações ajudam a agilizar o orçamento?',
    answerLines: [
      'Informe espessura, quantidade, finalidade de uso e se será retirada ou entrega sob consulta para um retorno mais rápido.',
    ],
  },
  {
    question: 'Posso comparar com outras linhas no mesmo atendimento?',
    answerLines: [
      'Sim. Você pode solicitar comparação com compensado resinado, OSB e outras linhas relacionadas no mesmo contato.',
    ],
  },
  {
    question: 'Qual é o horário de atendimento?',
    answerLines: ['Segunda a sexta: 8h às 17h30. Sábado: 8h às 12h. Domingos e feriados: fechado.'],
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
  {
    href: '/products/corte-de-madeira-sob-encomenda-belo-horizonte',
    label: 'Consultar corte de madeira sob encomenda',
  },
]

export default function CompensadoPlastificadoPage() {
  return (
    <ProductIntentPage
      title="Compensado plastificado em Belo Horizonte | Orçamento pelo WhatsApp | Madeiras Santos"
      description="Compensado plastificado em Belo Horizonte e região metropolitana. Consulte disponibilidade e solicite orçamento pelo WhatsApp com a Madeiras Santos."
      h1="Compensado plastificado em Belo Horizonte"
      subtitle="Atendimento para quem busca compensado plastificado para obras e outras aplicações, com orçamento direto pelo WhatsApp em Belo Horizonte e região metropolitana."
      introTitle="Sobre o compensado plastificado"
      introText="O compensado plastificado é uma linha procurada por quem busca resistência, durabilidade e melhor acabamento, conforme a aplicação. Na Madeiras Santos, o atendimento é direcionado para clientes de Belo Horizonte e região metropolitana que precisam de orçamento mais rápido e orientação comercial na escolha do material."
      whenTitle="Quando esta linha costuma fazer sentido"
      whenText="Essa linha costuma ser buscada quando o cliente precisa de material com melhor desempenho em aplicações que exigem mais resistência e acabamento, conforme o tipo de uso e a necessidade do projeto."
      applicationsTitle="Aplicações e demandas comuns"
      applicationsText="Pode fazer sentido em diferentes contextos de obra e necessidade estrutural, conforme a especificação técnica, a espessura desejada e a finalidade informada no orçamento."
      applicationsList={[
        'Obras que priorizam resistência e acabamento mais uniforme.',
        'Demandas em que a escolha da espessura impacta o resultado final.',
        'Projetos que precisam alinhar praticidade de compra com atendimento local.',
      ]}
      budgetText="Para facilitar o atendimento, informe a quantidade desejada, a espessura, a finalidade de uso e se haverá retirada ou necessidade de entrega sob consulta."
      budgetItems={[
        'Espessura e quantidade por etapa da obra.',
        'Finalidade de uso para orientar a linha adequada.',
        'Cidade de atendimento e forma de retirada/entrega.',
      ]}
      ctaLabel="Solicitar orçamento de compensado plastificado"
      faq={faq}
      related={related}
      path="/products/compensado-plastificado-belo-horizonte"
    />
  )
}
