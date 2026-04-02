import ProductIntentPage from '@/components/ProductIntentPage'

const faq = [
  {
    question: 'Vocês atendem pedidos de madeira para estrutura de telhado?',
    answerLines: [
      'Sim. Atendemos sob consulta demandas para estrutura de telhado em Belo Horizonte e região metropolitana.',
    ],
  },
  {
    question: 'Posso consultar telhas e madeira no mesmo orçamento?',
    answerLines: [
      'Sim. Você pode reunir materiais relacionados à cobertura em um único contato para agilizar o atendimento.',
    ],
  },
  {
    question: 'Quais informações ajudam a equipe a orientar melhor?',
    answerLines: [
      'Tipo de estrutura, medidas, quantidade e formato de retirada/entrega ajudam no direcionamento do orçamento.',
    ],
  },
  {
    question: 'Qual é o horário de atendimento?',
    answerLines: ['Segunda a sexta: 8h às 17h30. Sábado: 8h às 12h. Domingos e feriados: fechado.'],
  },
]

const related = [
  { href: '/products/telhas-em-belo-horizonte', label: 'Ver telhas em Belo Horizonte' },
  {
    href: '/products/corte-de-madeira-sob-encomenda-belo-horizonte',
    label: 'Consultar corte de madeira sob encomenda',
  },
  {
    href: '/products/compensado-plastificado-belo-horizonte',
    label: 'Ver compensado plastificado em Belo Horizonte',
  },
  { href: '/products', label: 'Ver madeiras em geral e outras linhas em Belo Horizonte' },
]

export default function MadeiraTelhadoPage() {
  return (
    <ProductIntentPage
      title="Madeira para telhado em Belo Horizonte | Orçamento pelo WhatsApp | Madeiras Santos"
      description="Madeira para telhado em Belo Horizonte e região metropolitana. Solicite orçamento com a Madeiras Santos pelo WhatsApp."
      h1="Madeira para telhado em Belo Horizonte"
      subtitle="Atendimento para quem busca peças para estrutura de telhado, com apoio na escolha dos materiais e orçamento direto pelo WhatsApp."
      introTitle="Sobre madeira para telhado"
      introText="Para estruturas de telhado, é importante ter mais clareza na escolha do material e no tipo de peça necessário. A Madeiras Santos atende com foco em orientação comercial e agilidade no orçamento."
      whenTitle="Quando esta linha costuma fazer sentido"
      whenText="Essa linha costuma ser procurada quando o cliente precisa de peças para cobertura, estrutura ou demandas relacionadas ao telhado, conforme o tipo de projeto."
      applicationsTitle="Aplicações e demandas comuns"
      applicationsText="Pode atender estruturas de cobertura e necessidades relacionadas ao telhado, sempre conforme as medidas, a quantidade e a aplicação informada no orçamento."
      applicationsList={[
        'Estruturas de cobertura para obra nova ou reforma.',
        'Reposição de peças com medidas específicas.',
        'Demandas que precisam alinhar madeira e itens de cobertura.',
      ]}
      budgetText="Informe, se possível, o tipo de estrutura, as medidas, a quantidade e se você pretende retirar ou consultar entrega."
      budgetItems={[
        'Tipo de estrutura de telhado e finalidade do material.',
        'Medidas e quantidades para análise comercial.',
        'Local de atendimento e modalidade de retirada/entrega.',
      ]}
      ctaLabel="Solicitar orçamento de madeira para telhado"
      faq={faq}
      related={related}
      path="/products/madeira-para-telhado-belo-horizonte"
    />
  )
}
