import ProductIntentPage from '@/components/ProductIntentPage'

const faq = [
  {
    question: 'Vocês fazem corte de madeira sob encomenda?',
    answerLines: [
      'Sim. O serviço é atendido sob consulta, conforme viabilidade técnica e comercial de cada pedido.',
    ],
  },
  {
    question: 'O que preciso informar para consultar o serviço?',
    answerLines: [
      'Material desejado, medidas, quantidade, tipo de corte e contexto do pedido ajudam na análise inicial.',
    ],
  },
  {
    question: 'O corte depende da compra do material?',
    answerLines: [
      'A viabilidade é avaliada caso a caso. Informe no WhatsApp se a demanda está vinculada a outro produto.',
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
  {
    href: '/products/compensado-resinado-belo-horizonte',
    label: 'Ver compensado resinado em Belo Horizonte',
  },
  { href: '/products/osb-belo-horizonte', label: 'Consultar OSB em Belo Horizonte' },
]

export default function CorteMadeiraPage() {
  return (
    <ProductIntentPage
      title="Corte de madeira sob encomenda em Belo Horizonte | Madeiras Santos"
      description="Serviço de corte de madeira sob encomenda em Belo Horizonte e região metropolitana. Consulte viabilidade e solicite atendimento pelo WhatsApp."
      h1="Corte de madeira sob encomenda em Belo Horizonte"
      subtitle="Serviço sob consulta para pedidos que exigem preparação ou adequação do material antes da retirada ou atendimento."
      introTitle="Sobre o serviço de corte"
      introText="A Madeiras Santos também atende sob consulta demandas de corte de madeiras sob encomenda, para apoiar pedidos que exigem preparação ou adequação do material."
      whenTitle="Quando esse serviço costuma fazer sentido"
      whenText="Esse serviço tende a ser útil quando o cliente já tem mais clareza sobre a medida, o tipo de material e a necessidade de adequação antes da retirada ou continuidade do projeto."
      applicationsTitle="Aplicações e contextos comuns"
      applicationsText="O corte sob encomenda costuma apoiar pedidos que precisam de material mais preparado para instalação, organização de obra ou continuidade de etapas específicas."
      applicationsList={[
        'Adequação de medidas para encaixe no projeto.',
        'Preparação prévia do material antes da retirada.',
        'Pedidos vinculados a outras linhas compradas na mesma demanda.',
      ]}
      budgetTitle="O que informar para agilizar a análise"
      budgetText="Informe o material desejado, as medidas, a quantidade, o tipo de corte necessário e se a demanda está vinculada a outro produto adquirido."
      budgetItems={[
        'Tipo de madeira e quantidade.',
        'Medidas com o maior nível de detalhe possível.',
        'Tipo de corte e prazo estimado da demanda.',
      ]}
      ctaLabel="Consultar corte de madeira pelo WhatsApp"
      faq={faq}
      related={related}
      path="/products/corte-de-madeira-sob-encomenda-belo-horizonte"
    />
  )
}
