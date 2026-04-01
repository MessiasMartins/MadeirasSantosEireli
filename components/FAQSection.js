import siteMetadata from '@/data/siteMetadata'

const FAQSection = ({ faqs = [] }) => {
  return (
    <section className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="pt-6 pb-8 space-y-2 md:space-y-5">
        <h2 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Perguntas Frequentes
        </h2>
        <p className="text-base leading-7 text-gray-500 dark:text-gray-400 sm:text-lg">
          Tire suas dúvidas sobre produtos, entrega e orçamento com respostas rápidas.
        </p>
      </div>

      <div className="pb-8">
        <dl className="space-y-3">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-lg border border-gray-200 dark:border-gray-700"
            >
              <dt>
                <details className="group">
                  <summary className="cursor-pointer list-none px-4 py-4 text-left text-sm font-semibold text-gray-900 dark:text-gray-100 sm:text-base">
                    {faq.question}
                  </summary>
                  <dd className="space-y-2 px-4 pb-4 text-sm leading-6 text-gray-600 dark:text-gray-300 sm:text-base">
                    {faq.answerLines?.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                    {faq.showWhatsappButton && (
                      <a
                        href={siteMetadata.whatsapp}
                        className="inline-flex min-h-[48px] items-center justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700"
                      >
                        WhatsApp
                      </a>
                    )}
                  </dd>
                </details>
              </dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

export default FAQSection
