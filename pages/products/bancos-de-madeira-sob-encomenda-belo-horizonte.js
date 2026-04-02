import ProductIntentPage from '@/components/ProductIntentPage'

const faq = [
  {
    question: 'Vocês fabricam bancos de madeira sob encomenda?',
    answerLines: [
      'Sim. Atendemos sob consulta pedidos de bancos de madeira conforme viabilidade, medidas e proposta desejada.',
    ],
  },
  {
    question: 'O que preciso informar para pedir orçamento?',
    answerLines: [
      'Medida desejada, finalidade de uso, quantidade e referências do projeto ajudam a acelerar o atendimento.',
    ],
  },
  {
    question: 'Vocês atendem Belo Horizonte e região?',
    answerLines: [
      'Sim. Atendemos Belo Horizonte e região metropolitana, conforme viabilidade operacional.',
    ],
  },
  {
    question: 'Qual é o horário de funcionamento?',
    answerLines: ['Segunda a sexta: 8h às 17h30. Sábado: 8h às 12h. Domingos e feriados: fechado.'],
  },
]

const related = [
  {
    href: '/products/portas-de-madeira-belo-horizonte',
    label: 'Solicitar orçamento de portas de madeira',
  },
  { href: '/products', label: 'Ver madeiras em geral em Belo Horizonte' },
  {
    href: '/products/corte-de-madeira-sob-encomenda-belo-horizonte',
    label: 'Consultar corte de madeira sob encomenda',
  },
]

export default function BancosMadeiraPage() {
  return (
    <ProductIntentPage
      title="Bancos de madeira sob encomenda em Belo Horizonte | Madeiras Santos"
      description="Bancos de madeira sob encomenda em Belo Horizonte e região metropolitana. Consulte viabilidade e solicite orçamento com a Madeiras Santos."
      h1="Bancos de madeira sob encomenda em Belo Horizonte"
      subtitle="Produto fabricado sob encomenda para quem busca uma solução em madeira com proposta mais personalizada."
      introTitle="Sobre bancos de madeira sob encomenda"
      introText="A Madeiras Santos também fabrica bancos de madeira sob encomenda, conforme viabilidade, medidas e proposta desejada pelo cliente."
      whenTitle="Quando essa solução costuma fazer sentido"
      whenText="Essa demanda costuma aparecer quando o cliente busca uma peça em madeira sob medida ou com proposta mais personalizada para determinado espaço."
      applicationsTitle="Aplicações e contextos comuns"
      applicationsText="Bancos sob encomenda são buscados em contextos residenciais e comerciais quando existe necessidade de personalização, adequação de medidas e alinhamento com o uso do ambiente."
      applicationsList={[
        'Projetos com necessidade de peça em medida específica.',
        'Ambientes que exigem solução personalizada em madeira.',
        'Pedidos que combinam funcionalidade e proposta estética do espaço.',
      ]}
      budgetText="Informe, se possível, a medida desejada, a finalidade de uso, a quantidade e qualquer referência relevante para o atendimento."
      budgetItems={[
        'Dimensões e quantidade de peças.',
        'Local e finalidade de uso.',
        'Referências visuais ou contexto da proposta desejada.',
      ]}
      ctaLabel="Solicitar orçamento de banco de madeira"
      faq={faq}
      related={related}
      path="/products/bancos-de-madeira-sob-encomenda-belo-horizonte"
    />
  )
}
