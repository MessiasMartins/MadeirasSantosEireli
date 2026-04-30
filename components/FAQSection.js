import siteMetadata from '@/data/siteMetadata'
import Container from '@/components/ui/Container'
import Reveal from '@/components/ui/Reveal'
import SectionHeader from '@/components/ui/SectionHeader'

const FAQSection = ({ faqs = [] }) => {
  return (
    <section id="faq" className="bg-white py-14 sm:py-20">
      <Container>
        <SectionHeader
          eyebrow="Perguntas frequentes"
          title="Dúvidas rápidas antes de falar com a loja."
          description="Respostas diretas sobre produtos, entrega, retirada e orçamento pelo WhatsApp."
        />
        <Reveal className="mt-8">
          <dl className="space-y-3">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-lg border border-stone-200 bg-stone-50">
                <dt>
                  <details className="faq-item group">
                    <summary className="faq-summary flex cursor-pointer list-none items-center justify-between px-4 py-4 text-left text-sm font-black text-brand-graphite sm:text-base">
                      <span>{faq.question}</span>
                      <span className="faq-chevron ml-3 text-xl leading-none text-primary-700">
                        +
                      </span>
                    </summary>
                    <div className="faq-answer">
                      <dd className="space-y-2 px-4 pb-4 text-sm leading-6 text-stone-700 sm:text-base">
                        {(faq.answerLines || [faq.answer]).filter(Boolean).map((line) => (
                          <p key={line}>{line}</p>
                        ))}
                        {faq.showWhatsappButton && (
                          <a
                            href={siteMetadata.whatsapp}
                            className="inline-flex min-h-[48px] items-center justify-center rounded-md border border-transparent bg-primary-600 px-4 py-2 text-sm font-bold text-white transition hover:bg-primary-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"
                          >
                            WhatsApp
                          </a>
                        )}
                      </dd>
                    </div>
                  </details>
                </dt>
              </div>
            ))}
          </dl>
        </Reveal>
      </Container>
    </section>
  )
}

export default FAQSection
