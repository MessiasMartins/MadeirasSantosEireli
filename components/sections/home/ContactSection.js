import companyInfo from '@/data/config/companyInfo'
import PrimaryCtas from '@/components/common/PrimaryCtas'

export default function ContactSection({ mapsEmbedSrc }) {
  return (
    <section className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="pt-6 pb-8 space-y-2 md:space-y-5">
        <h2 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Localização e Contatos
        </h2>
      </div>
      <div>
        <p className="w-full pt-4 pb-2 text-lg text-gray-500 dark:text-gray-400 md:pt-6 md:pb-8">
          {companyInfo.address.full}
          <br />
          CEP: {companyInfo.address.postalCode}
          <br />
          Telefone: {companyInfo.contact.phoneDisplay}
          <br />
          E-mail: {companyInfo.contact.email}
          <br />
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
          <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900">
            <iframe
              title="Mapa da Madeiras Santos em Belo Horizonte"
              src={mapsEmbedSrc}
              className="h-64 w-full md:h-full md:min-h-[320px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              aria-label="Mapa com localização da Madeiras Santos"
              allowFullScreen
            />
          </div>
          <div className="flex h-full flex-col justify-center gap-3">
            <PrimaryCtas stacked />
          </div>
        </div>
      </div>
    </section>
  )
}
