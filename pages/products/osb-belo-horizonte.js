import ProductIntentPage from '@/components/ProductIntentPage'

const faq = [
  {
    question: 'Vocês trabalham com OSB para fechamento e divisórias?',
    answerLines: [
      'Sim. O OSB é uma linha bastante procurada para fechamentos, divisórias, tapumes e demandas similares.',
    ],
  },
  {
    question: 'Quais dados devo enviar para receber retorno rápido?',
    answerLines: [
      'Informe quantidade, medida, tipo de aplicação e se haverá retirada ou consulta de entrega.',
    ],
  },
  {
    question: 'É possível consultar serragem junto com o OSB?',
    answerLines: [
      'Sim. A serragem fica disponível sob consulta e pode ser avaliada no mesmo atendimento.',
    ],
  },
  {
    question: 'Qual é o horário de funcionamento?',
    answerLines: ['Segunda a sexta: 8h às 17h30. Sábado: 8h às 12h. Domingos e feriados: fechado.'],
  },
]

const related = [
  {
    href: '/products/compensado-resinado-belo-horizonte',
    label: 'Ver compensado resinado em Belo Horizonte',
  },
  {
    href: '/products/compensado-plastificado-belo-horizonte',
    label: 'Ver compensado plastificado em Belo Horizonte',
  },
  {
    href: '/products/corte-de-madeira-sob-encomenda-belo-horizonte',
    label: 'Consultar corte de madeira sob encomenda',
  },
  { href: '/products/serragem-em-belo-horizonte', label: 'Consultar serragem em Belo Horizonte' },
]

export default function OsbPage() {
  return (
    <ProductIntentPage
      title="OSB em Belo Horizonte | Orçamento pelo WhatsApp | Madeiras Santos"
      description="OSB em Belo Horizonte e região metropolitana. Fale com a Madeiras Santos para consultar disponibilidade e solicitar orçamento."
      h1="OSB em Belo Horizonte"
      subtitle="Solução prática para fechamentos, divisórias, tapumes e outras aplicações, com atendimento local e orçamento rápido pelo WhatsApp."
      introTitle="Sobre o OSB"
      introText="O OSB é uma linha bastante buscada para fechamentos, divisórias, tapumes e outras aplicações em obra. A Madeiras Santos atende a região com foco em orçamento rápido e orientação comercial."
      whenTitle="Quando esta linha costuma fazer sentido"
      whenText="Pode ser considerado quando a necessidade envolve fechamento, organização de obra ou outras aplicações compatíveis, conforme a especificação do projeto."
      applicationsTitle="Aplicações e demandas comuns"
      applicationsText="É uma linha bastante procurada em contextos que exigem praticidade, organização de obra e soluções com uso recorrente, sempre conforme a necessidade informada pelo cliente."
      applicationsList={[
        'Fechamentos temporários e organização de canteiro.',
        'Divisórias e estruturas leves, conforme projeto.',
        'Demandas com foco em praticidade operacional da obra.',
      ]}
      budgetText="Para agilizar o retorno, informe a quantidade, a medida desejada, o tipo de aplicação e se há necessidade de retirada ou entrega sob consulta."
      budgetItems={[
        'Quantidade total e dimensões desejadas.',
        'Finalidade de uso para orientar o atendimento.',
        'Retirada local ou consulta de entrega para a região.',
      ]}
      ctaLabel="Solicitar orçamento de OSB"
      faq={faq}
      related={related}
      path="/products/osb-belo-horizonte"
    />
  )
}
