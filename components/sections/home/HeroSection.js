import PrimaryCtas from '@/components/common/PrimaryCtas'

export default function HeroSection() {
  return (
    <div className="relative overflow-hidden divide-y divide-gray-200 dark:divide-gray-300">
      <section className="relative min-h-[72vh] lg:hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="/static/images/wood.jpg"
          alt="Pátio com estoque de madeiras da Madeiras Santos em Belo Horizonte"
          width="1000"
          height="1000"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-white/70" />
        <main className="relative z-10 px-4 pt-4 pb-8">
          <h1 className="max-w-[20ch] text-4xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-5xl">
            <span className="block">Madeiras Santos</span>
            <span className="block text-primary-600">Madeiras de qualidade para o seu projeto</span>
          </h1>
          <p className="mt-4 max-w-[28ch] text-lg leading-relaxed text-gray-800 sm:text-2xl">
            O conhecimento de mais de 40 anos de experiência no setor madeireiro aliado a uma
            administração dinâmica e atendimento intimista.
          </p>
          <p className="mt-3 text-xl font-bold text-gray-900 sm:text-2xl">Conte conosco!</p>
          <div className="mt-6">
            <PrimaryCtas stacked />
          </div>
        </main>
      </section>

      <div className="hidden lg:block max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-gray-100 dark:bg-gray-900 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="#059669"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>
          <main className="mx-auto max-w-7xl px-4 sm:mt-0 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-3xl pt-10 font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                <span className="block xl:inline">Madeiras Santos</span>{' '}
                <span className="block text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 xl:inline">
                  Madeiras de qualidade para o seu projeto
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                O conhecimento de mais de 40 anos de experiência no setor madeireiro aliado a uma
                administração dinâmica e atendimento intimista.
                <br />
                <br />
                <b>Conte conosco!</b>
              </p>
              <div className="mt-5 sm:mt-8 sm:justify-center lg:justify-start">
                <PrimaryCtas />
              </div>
            </div>
          </main>
        </div>
      </div>

      <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-100">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="/static/images/wood.jpg"
          alt="Pátio com estoque de madeiras da Madeiras Santos em Belo Horizonte"
          width="1000"
          height="1000"
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>
  )
}
