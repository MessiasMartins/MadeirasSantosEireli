import ProductIntentPage from '@/components/ProductIntentPage'

const faq = [
  {
    question: 'Vocês trabalham com lenha para lareira e churrasco?',
    answerLines: [
      'Sim. Atendemos sob consulta pedidos de lenha para uso residencial, lareira e churrasco, conforme disponibilidade.',
    ],
  },
  {
    question: 'Posso consultar disponibilidade pelo WhatsApp?',
    answerLines: [
      'Sim. O WhatsApp é o canal mais rápido para consultar disponibilidade e receber orientação de atendimento.',
    ],
    showWhatsappButton: true,
  },
  {
    question: 'Vocês atendem Belo Horizonte e região metropolitana?',
    answerLines: ['Sim. Atendemos BH e região metropolitana, conforme viabilidade do atendimento.'],
  },
  {
    question: 'Qual é o horário de funcionamento?',
    answerLines: ['Segunda a sexta: 8h às 17h30. Sábado: 8h às 12h. Domingos e feriados: fechado.'],
  },
]

const related = [
  { href: '/products/serragem-em-belo-horizonte', label: 'Consultar serragem em Belo Horizonte' },
  { href: '/products/telhas-em-belo-horizonte', label: 'Ver telhas em Belo Horizonte' },
  { href: '/products', label: 'Ver madeiras em geral em Belo Horizonte' },
]

export default function LenhaPage() {
  return (
    <ProductIntentPage
      title="Lenha para lareira e churrasco em Belo Horizonte | Madeiras Santos"
      description="Lenha para lareira e churrasco em Belo Horizonte e região metropolitana. Consulte disponibilidade e solicite orçamento pelo WhatsApp."
      h1="Lenha para lareira e churrasco em Belo Horizonte"
      subtitle="Atendimento sob consulta para quem busca lenha para uso residencial, lareira e churrasco em Belo Horizonte e região metropolitana."
      introTitle="Sobre lenha para lareira e churrasco"
      introText="Também atendemos sob consulta pedidos de lenha para uso residencial, lareira e churrasco, conforme disponibilidade."
      whenTitle="Quando esta linha costuma fazer sentido"
      whenText="Essa opção costuma ser buscada por clientes que precisam de lenha para uso doméstico, encontros, lazer ou outras necessidades residenciais."
      applicationsTitle="Aplicações e contextos comuns"
      applicationsText="A demanda de lenha tende a ser mais prática e direta, normalmente ligada a uso residencial e consumo em períodos específicos do ano."
      applicationsList={[
        'Uso em lareira residencial em períodos mais frios.',
        'Uso em churrasco doméstico e encontros familiares.',
        'Reposição periódica para consumo recorrente sob consulta.',
      ]}
      budgetText="Informe a finalidade de uso, a quantidade desejada e se você pretende retirar ou consultar entrega."
      budgetItems={[
        'Uso principal (lareira, churrasco ou outro contexto residencial).',
        'Volume aproximado da demanda.',
        'Cidade de atendimento e preferência entre retirada ou entrega.',
      ]}
      ctaLabel="Solicitar orçamento de lenha"
      faq={faq}
      related={related}
      path="/products/lenha-para-lareira-e-churrasco-belo-horizonte"
    />
  )
}
