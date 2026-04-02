import ProductIntentPage from '@/components/ProductIntentPage'

const faq = [
  {
    question: 'Vocês trabalham com telhas em Belo Horizonte e região?',
    answerLines: [
      'Sim. Trabalhamos com telhas em geral sob consulta de disponibilidade e tipo de demanda.',
    ],
  },
  {
    question: 'Posso consultar madeira para telhado junto com telhas?',
    answerLines: [
      'Sim. É possível consultar materiais relacionados à cobertura no mesmo atendimento pelo WhatsApp.',
    ],
  },
  {
    question: 'Quais dados devo informar no pedido?',
    answerLines: [
      'Informe tipo de telha, quantidade estimada, finalidade de uso e retirada ou entrega para agilizar o orçamento.',
    ],
  },
  {
    question: 'Qual é o horário de atendimento?',
    answerLines: ['Segunda a sexta: 8h às 17h30. Sábado: 8h às 12h. Domingos e feriados: fechado.'],
  },
]

const related = [
  {
    href: '/products/madeira-para-telhado-belo-horizonte',
    label: 'Ver madeira para telhado em Belo Horizonte',
  },
  {
    href: '/products/corte-de-madeira-sob-encomenda-belo-horizonte',
    label: 'Consultar corte de madeira sob encomenda',
  },
  {
    href: '/products/compensado-resinado-belo-horizonte',
    label: 'Ver compensado resinado em Belo Horizonte',
  },
]

export default function TelhasPage() {
  return (
    <ProductIntentPage
      title="Telhas em Belo Horizonte | Orçamento pelo WhatsApp | Madeiras Santos"
      description="Telhas em Belo Horizonte e região metropolitana. Consulte disponibilidade e solicite orçamento com a Madeiras Santos pelo WhatsApp."
      h1="Telhas em Belo Horizonte"
      subtitle="Atendimento para quem busca telhas e itens relacionados à cobertura, com orçamento direto pelo WhatsApp."
      introTitle="Sobre telhas em geral"
      introText="Também trabalhamos com telhas em geral para atender necessidades relacionadas à cobertura e ao telhado, conforme disponibilidade e tipo de demanda."
      whenTitle="Quando esta linha costuma fazer sentido"
      whenText="Essa linha costuma ser buscada quando o cliente precisa complementar ou estruturar demandas ligadas à cobertura, ao telhado ou à reforma da área superior da obra."
      applicationsTitle="Aplicações e contextos comuns"
      applicationsText="As telhas entram em demandas de cobertura nova, manutenção e substituição parcial, com variações conforme tipo de projeto e material buscado."
      applicationsList={[
        'Reposição de cobertura em reformas residenciais.',
        'Complemento de materiais para estrutura de telhado.',
        'Planejamento de compras para obras em etapas.',
      ]}
      budgetText="Informe o tipo de telha que procura, a quantidade estimada, a finalidade de uso e se pretende retirar ou consultar entrega."
      budgetItems={[
        'Tipo de telha desejada.',
        'Quantidade aproximada e local de atendimento.',
        'Retirada local ou consulta de entrega.',
      ]}
      ctaLabel="Solicitar orçamento de telhas"
      faq={faq}
      related={related}
      path="/products/telhas-em-belo-horizonte"
    />
  )
}
