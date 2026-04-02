const sharedCities = [
  'Belo Horizonte',
  'Contagem',
  'Betim',
  'Nova Lima',
  'Vespasiano',
  'Lagoa Santa',
  'Santa Luzia',
  'Sabará',
  'Ribeirão das Neves',
  'Pedro Leopoldo',
  'e outras cidades da região',
]

const sharedHours = [
  'Segunda a sexta: 8h às 17h30',
  'Sábado: 8h às 12h',
  'Domingos e feriados: fechado',
]

const productFaq = [
  {
    question: 'Posso pedir orçamento pelo WhatsApp?',
    answerLines: [
      'Sim. O WhatsApp é um dos principais canais de atendimento para agilizar o orçamento e tirar dúvidas sobre os materiais.',
    ],
    showWhatsappButton: true,
  },
  {
    question: 'Vocês atendem Belo Horizonte e região metropolitana?',
    answerLines: [
      'Sim. Atendemos Belo Horizonte e também cidades da região metropolitana, conforme a demanda e a viabilidade de entrega.',
    ],
  },
  {
    question: 'Vocês trabalham com compensado plastificado, compensado resinado e OSB?',
    answerLines: [
      'Sim. Trabalhamos com compensado plastificado, compensado resinado e OSB. Fale com a equipe para consultar disponibilidade e a aplicação mais adequada.',
    ],
  },
  {
    question: 'Vocês fazem entrega?',
    answerLines: [
      'Sim, a entrega está disponível sob consulta, de acordo com a região e a disponibilidade operacional.',
    ],
  },
  {
    question: 'Qual é o horário de funcionamento?',
    answerLines: [
      'Atendemos de segunda a sexta, das 8h às 17h30, e aos sábados, das 8h às 12h. Domingos e feriados, estamos fechados.',
    ],
  },
]

export { sharedCities, sharedHours, productFaq }
