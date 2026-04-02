import ProductIntentPage from '@/components/ProductIntentPage'

const faq = [
  {
    question: 'Vocês trabalham com portas de madeira para diferentes ambientes?',
    answerLines: [
      'Sim. Atendemos pedidos para diferentes necessidades, conforme medidas, finalidade e disponibilidade.',
    ],
  },
  {
    question: 'Posso consultar marcos, rodapés e ferragens junto com as portas?',
    answerLines: [
      'Sim. Você pode incluir itens complementares no mesmo atendimento para organizar melhor o orçamento.',
    ],
  },
  {
    question: 'Que dados devo enviar para agilizar meu pedido?',
    answerLines: [
      'Informe tipo de porta, medida, quantidade e itens relacionados necessários para receber orientação mais objetiva.',
    ],
  },
  {
    question: 'Qual é o horário de funcionamento?',
    answerLines: ['Segunda a sexta: 8h às 17h30. Sábado: 8h às 12h. Domingos e feriados: fechado.'],
  },
]

const related = [
  { href: '/products', label: 'Ver marcos e rodapés em Belo Horizonte' },
  { href: '/products', label: 'Ver ferragens e itens complementares em Belo Horizonte' },
  {
    href: '/products/bancos-de-madeira-sob-encomenda-belo-horizonte',
    label: 'Consultar bancos de madeira sob encomenda',
  },
  { href: '/products', label: 'Ver madeiras em geral em Belo Horizonte' },
]

export default function PortasMadeiraPage() {
  return (
    <ProductIntentPage
      title="Portas de madeira em Belo Horizonte | Orçamento pelo WhatsApp | Madeiras Santos"
      description="Portas de madeira em Belo Horizonte e região metropolitana. Consulte disponibilidade e solicite orçamento com a Madeiras Santos."
      h1="Portas de madeira em Belo Horizonte"
      subtitle="Opções para quem busca praticidade, qualidade e atendimento objetivo em Belo Horizonte e região metropolitana."
      introTitle="Sobre portas de madeira"
      introText="Trabalhamos com portas de madeira para diferentes necessidades, com atendimento direto para consulta de disponibilidade, orientação comercial e orçamento."
      whenTitle="Quando esta linha costuma fazer sentido"
      whenText="Pode ser a linha adequada para quem busca portas de madeira para diferentes ambientes, conforme a medida, a finalidade e os itens complementares necessários."
      applicationsTitle="Aplicações e demandas comuns"
      applicationsText="Essa linha costuma ser procurada em demandas residenciais, comerciais e de acabamento, conforme o tipo de porta e a necessidade do cliente."
      applicationsList={[
        'Projetos de acabamento com foco em praticidade de instalação.',
        'Obras residenciais e comerciais com necessidade de padronização.',
        'Demandas que incluem itens complementares para finalizar o conjunto.',
      ]}
      budgetText="Para facilitar o atendimento, informe o tipo de porta, a medida desejada, a quantidade e se você também precisa consultar itens relacionados, como marcos e ferragens."
      budgetItems={[
        'Tipo de porta e medida desejada.',
        'Quantidade e cidade de atendimento.',
        'Consulta de marcos, rodapés e ferragens no mesmo pedido.',
      ]}
      ctaLabel="Solicitar orçamento de portas de madeira"
      faq={faq}
      related={related}
      path="/products/portas-de-madeira-belo-horizonte"
    />
  )
}
