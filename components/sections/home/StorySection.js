import { ArrowRightIcon, MapPinIcon, SparklesIcon } from '@heroicons/react/24/outline'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import Container from '@/components/ui/Container'
import Reveal from '@/components/ui/Reveal'
import SectionHeader from '@/components/ui/SectionHeader'

const storyPoints = [
  'Tradição familiar no setor madeireiro',
  'Presença física em Belo Horizonte',
  'Atendimento direto para varejo e demandas maiores',
]

export default function StorySection() {
  return (
    <section className="bg-white py-14 sm:py-20">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <Reveal>
            <SectionHeader
              eyebrow="Nossa história"
              title="Uma madeireira de presença real, construída com atendimento próximo."
              description="Desde 2018, a Madeiras Santos atende Belo Horizonte e região metropolitana reunindo a experiência de gestores com mais de 40 anos no setor madeireiro. Nossa rotina é orientar clientes do varejo, construtoras, empreiteiros e empresas em geral na escolha de materiais para obra, reforma e acabamento."
            />
            <Button href="/about" icon={ArrowRightIcon} className="mt-7">
              Conhecer a história
            </Button>
          </Reveal>

          <Reveal>
            <Card className="p-5 sm:p-6">
              <div className="grid gap-3">
                {storyPoints.map((point) => (
                  <div
                    key={point}
                    className="flex gap-3 rounded-md border border-stone-200 bg-stone-50 p-4"
                  >
                    <span className="mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-emerald-50 text-primary-700">
                      {point.includes('Belo Horizonte') ? (
                        <MapPinIcon aria-hidden="true" className="h-5 w-5" />
                      ) : (
                        <SparklesIcon aria-hidden="true" className="h-5 w-5" />
                      )}
                    </span>
                    <p className="text-sm font-bold leading-6 text-brand-graphite">{point}</p>
                  </div>
                ))}
              </div>
            </Card>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
