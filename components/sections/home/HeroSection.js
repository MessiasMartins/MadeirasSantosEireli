import Image from 'next/image'
import PrimaryCtas from '@/components/common/PrimaryCtas'
import Badge from '@/components/ui/Badge'
import Container from '@/components/ui/Container'
import Reveal from '@/components/ui/Reveal'
import visualAssets from '@/data/config/visualAssets'

const proofPoints = [
  'Estoque no local',
  'Atendimento rápido',
  'Entrega sob consulta',
  'Atacado e varejo',
  'Mais de 35 anos de experiência',
  'Fácil acesso em BH',
]

export default function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-graphite text-white">
      <Image
        src={visualAssets.images.hero}
        alt="Floresta e matéria-prima de madeira em área natural"
        width={1600}
        height={1050}
        sizes="100vw"
        priority
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/70 via-black/55 to-black/75" />

      <Container className="py-14 sm:py-20 lg:py-24">
        <div className="grid min-h-[620px] items-center gap-10 sm:min-h-[640px] lg:min-h-[680px] lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <div className="max-w-3xl">
              <Badge className="border-white/20 bg-white/10 text-white backdrop-blur">
                Madeireira em Belo Horizonte
              </Badge>
              <h1 className="mt-5 text-balance text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Madeiras, telhas, chapas, portas e marcos em Belo Horizonte e região.
              </h1>
              <p className="mt-5 max-w-2xl text-pretty text-lg leading-8 text-white/88 sm:text-xl">
                Estoque no local, atendimento rápido e entrega sob consulta para obra, reforma e
                varejo.
              </p>
              <div className="mt-8">
                <PrimaryCtas />
              </div>
            </div>
          </Reveal>

          <Reveal className="lg:justify-self-end">
            <div className="rounded-lg border border-white/15 bg-white/10 p-4 backdrop-blur-md sm:p-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-100">
                Compra simples
              </p>
              <div className="mt-4 grid grid-cols-2 gap-3">
                {proofPoints.map((proof) => (
                  <div
                    key={proof}
                    className="rounded-md border border-white/15 bg-white/10 px-3 py-3 text-sm font-bold text-white"
                  >
                    {proof}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
