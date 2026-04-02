import ProductIntentPage from '@/components/ProductIntentPage'

const faq = [
  {
    question: 'Compensado resinado atende quais tipos de demanda?',
    answerLines: [
      'É uma linha versátil para diferentes contextos de obra, conforme finalidade, espessura e especificações do pedido.',
    ],
  },
  {
    question: 'Posso pedir orçamento com retirada ou entrega?',
    answerLines: [
      'Sim. Você pode consultar retirada e também possibilidade de entrega para Belo Horizonte e região metropolitana.',
    ],
  },
  {
    question: 'Consigo incluir telhas ou corte sob encomenda na mesma consulta?',
    answerLines: [
      'Sim. No mesmo atendimento você pode consultar linhas e serviços relacionados, conforme disponibilidade.',
    ],
  },
  {
    question: 'Qual é o horário de atendimento?',
    answerLines: ['Segunda a sexta: 8h às 17h30. Sábado: 8h às 12h. Domingos e feriados: fechado.'],
  },
]

const related = [
  {
    href: '/products/compensado-plastificado-belo-horizonte',
    label: 'Ver compensado plastificado em Belo Horizonte',
  },
  { href: '/products/osb-belo-horizonte', label: 'Consultar OSB em Belo Horizonte' },
  {
    href: '/products/corte-de-madeira-sob-encomenda-belo-horizonte',
    label: 'Consultar corte de madeira sob encomenda',
  },
  { href: '/products/telhas-em-belo-horizonte', label: 'Ver telhas em Belo Horizonte' },
]

export default function CompensadoResinadoPage() {
  return (
    <ProductIntentPage
      title="Compensado resinado em Belo Horizonte | Orçamento pelo WhatsApp | Madeiras Santos"
      description="Compensado resinado em Belo Horizonte e região metropolitana. Consulte disponibilidade e solicite orçamento com a Madeiras Santos."
      h1="Compensado resinado em Belo Horizonte"
      subtitle="Atendimento para obras, reformas e diferentes necessidades com compensado resinado em Belo Horizonte e região metropolitana."
      introTitle="Sobre o compensado resinado"
      introText="O compensado resinado é uma linha versátil para diferentes usos na obra e costuma ser buscado por quem procura bom custo-benefício e aplicação recorrente, conforme a necessidade."
      whenTitle="Quando esta linha costuma fazer sentido"
      whenText="Pode ser uma boa alternativa para diferentes contextos de obra e uso estrutural, dependendo da finalidade, da espessura e das especificações necessárias."
      applicationsTitle="Aplicações e demandas comuns"
      applicationsText="Essa linha pode atender diferentes necessidades de obra, fechamento e uso recorrente, conforme a demanda do cliente e a aplicação informada."
      applicationsList={[
        'Obras com necessidade de material versátil para etapas diferentes.',
        'Demandas que equilibram desempenho e custo-benefício.',
        'Pedidos que exigem orientação comercial para definir espessura.',
      ]}
      budgetText="Informe a espessura, a quantidade, a finalidade do uso e se você pretende retirar ou consultar entrega, para facilitar o atendimento."
      budgetItems={[
        'Espessura e quantidade total estimada.',
        'Tipo de aplicação para orientar melhor a linha.',
        'Cidade de atendimento e formato de retirada/entrega.',
      ]}
      ctaLabel="Solicitar orçamento de compensado resinado"
      faq={faq}
      related={related}
      path="/products/compensado-resinado-belo-horizonte"
    />
  )
}
