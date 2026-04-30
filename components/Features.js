import {
  MapIcon,
  TruckIcon,
  ClipboardDocumentCheckIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Estoque no Local',
    description:
      'Com estoque disponível no local, você pode avaliar a qualidade do material antes do carregamento ou da retirada.',
    icon: ClipboardDocumentCheckIcon,
  },
  {
    name: 'Entrega sob consulta',
    description:
      'Consulte condições de entrega conforme rota, volume, produto e disponibilidade logística.',
    icon: TruckIcon,
  },
  {
    name: 'Fácil Localização',
    description:
      'Próximo aos principais corredores viários de Belo Horizonte, facilitando a visitação e a entrega de materiais.',
    icon: MapIcon,
  },
  {
    name: 'Atendimento Personalizado',
    description:
      'Atendimento no varejo e sob consulta para volumes maiores, com orientação conforme sua necessidade.',
    icon: UserGroupIcon,
  },
]

export default features
