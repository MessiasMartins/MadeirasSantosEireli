import ProductIntentPage from '@/components/ProductIntentPage'

const faq = [
  {
    question: 'Vocês têm serragem disponível?',
    answerLines: [
      'A serragem é disponibilizada sob consulta, conforme operação e disponibilidade do momento.',
    ],
  },
  {
    question: 'Posso consultar pelo WhatsApp antes de ir até a loja?',
    answerLines: [
      'Sim. A consulta por WhatsApp ajuda a confirmar disponibilidade e alinhar o atendimento com mais objetividade.',
    ],
    showWhatsappButton: true,
  },
  {
    question: 'Quais informações ajudam no atendimento?',
    answerLines: [
      'Informe finalidade de uso, quantidade estimada e se prefere retirada ou consulta de entrega.',
    ],
  },
  {
    question: 'Qual é o horário de funcionamento?',
    answerLines: ['Segunda a sexta: 8h às 17h30. Sábado: 8h às 12h. Domingos e feriados: fechado.'],
  },
]

const related = [
  { href: '/products/osb-belo-horizonte', label: 'Consultar OSB em Belo Horizonte' },
  {
    href: '/products/corte-de-madeira-sob-encomenda-belo-horizonte',
    label: 'Consultar corte de madeira sob encomenda',
  },
  {
    href: '/products/lenha-para-lareira-e-churrasco-belo-horizonte',
    label: 'Ver lenha para lareira e churrasco',
  },
]

export default function SerragemPage() {
  return (
    <ProductIntentPage
      title="Serragem em Belo Horizonte | Madeiras Santos"
      description="Serragem em Belo Horizonte e região metropolitana. Consulte disponibilidade com a Madeiras Santos pelo WhatsApp."
      h1="Serragem em Belo Horizonte"
      subtitle="Disponibilidade sob consulta para quem busca serragem e residuo de madeira em Belo Horizonte e região metropolitana."
      introTitle="Sobre a serragem"
      introText="A serragem é o residuo de madeira gerado no processamento e pode estar disponível sob consulta, conforme a operação e a disponibilidade do momento."
      whenTitle="Quando esta linha costuma fazer sentido"
      whenText="Essa demanda costuma surgir quando o cliente busca residuo de madeira para necessidades específicas, sempre conforme a finalidade informada."
      applicationsTitle="Aplicações e contextos comuns"
      applicationsText="Por ser um material de disponibilidade variável, a serragem costuma ser buscada para usos pontuais e necessidades específicas informadas no atendimento."
      applicationsList={[
        'Demandas residenciais e operacionais sob consulta prévia.',
        'Pedidos que precisam de confirmação de volume disponível.',
        'Necessidades específicas que dependem do momento da operação.',
      ]}
      budgetTitle="O que informar para agilizar o atendimento"
      budgetText="Informe a finalidade de uso, a quantidade estimada e se você pretende retirar ou consultar disponibilidade e entrega."
      budgetItems={[
        'Finalidade de uso da serragem.',
        'Quantidade estimada desejada.',
        'Modelo de atendimento: retirada ou consulta de entrega.',
      ]}
      ctaLabel="Consultar serragem pelo WhatsApp"
      faq={faq}
      related={related}
      path="/products/serragem-em-belo-horizonte"
    />
  )
}
