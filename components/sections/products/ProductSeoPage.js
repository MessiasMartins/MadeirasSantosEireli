import Image from '@/components/Image'
import Link from '@/components/Link'
import FAQSection from '@/components/FAQSection'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import { BreadcrumbSEO, PageSEO, WebPageSEO } from '@/components/SEO'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import Container from '@/components/ui/Container'
import Reveal from '@/components/ui/Reveal'
import pageMetadata from '@/data/config/pageMetadata'
import { getWhatsAppLink } from '@/lib/utils/whatsapp'
import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline'

function ApplicationList({ items = [] }) {
  if (items.length === 0) return null

  return (
    <div className="mt-6">
      <h3 className="text-lg font-black text-brand-graphite">Aplicações comuns</h3>
      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-6 text-stone-700 sm:text-base">
            <span
              aria-hidden="true"
              className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary-600"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function ProductSeoPage({ page }) {
  const seo = pageMetadata[page.metadataKey]
  const breadcrumbs = [
    { name: 'Início', href: '/' },
    { name: 'Produtos', href: '/produtos' },
    { name: page.categoryName, href: page.categoryHref },
    { name: seo.h1, href: page.href },
  ]

  return (
    <>
      <PageSEO title={seo.title} description={seo.description} ogImage={page.heroImage} />
      <BreadcrumbSEO items={breadcrumbs} />
      <WebPageSEO title={seo.title} description={seo.description} />

      <section className="bg-white">
        <Container className="py-8 sm:py-12">
          <Breadcrumbs items={breadcrumbs} />
          <div className="grid min-w-0 gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <Reveal className="min-w-0">
              <div>
                <Badge>{page.eyebrow}</Badge>
                <h1 className="mt-5 text-balance text-4xl font-black tracking-tight text-brand-graphite sm:text-5xl">
                  {seo.h1}
                </h1>
                <p className="mt-5 text-lg leading-8 text-stone-700">{page.subheadline}</p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Button
                    href={getWhatsAppLink(page.whatsappMessage)}
                    icon={ChatBubbleLeftRightIcon}
                  >
                    {page.primaryCtaLabel}
                  </Button>
                  <Button href={page.categoryHref} variant="secondary">
                    {page.secondaryCtaLabel}
                  </Button>
                </div>
              </div>
            </Reveal>

            <Reveal className="min-w-0">
              <Image
                src={page.heroImage}
                width={page.heroImageWidth}
                height={page.heroImageHeight}
                sizes="(min-width: 1024px) 45vw, 100vw"
                alt={page.heroImageAlt}
                preload
                fetchPriority="high"
                quality={78}
                className="aspect-[4/3] w-full max-w-full rounded-lg object-cover shadow-md shadow-stone-900/10"
              />
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-stone-50 py-14 sm:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <Reveal>
              <div className="space-y-6">
                <Card className="p-6 sm:p-8">
                  <div className="space-y-4 text-base leading-7 text-stone-700">
                    {page.openingText.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </Card>

                <Card className="p-6 sm:p-8">
                  <h2 className="text-2xl font-black text-brand-graphite">{page.quote.title}</h2>
                  <p className="mt-4 text-base leading-7 text-stone-700">{page.quote.text}</p>
                  <Button
                    href={getWhatsAppLink(page.whatsappMessage)}
                    icon={ChatBubbleLeftRightIcon}
                    className="mt-6"
                  >
                    {page.primaryCtaLabel}
                  </Button>
                </Card>
              </div>
            </Reveal>

            <div className="space-y-6">
              {page.blocks.map((block) => (
                <Reveal key={block.title}>
                  <Card className="p-6 sm:p-8">
                    <h2 className="text-2xl font-black text-brand-graphite">{block.title}</h2>
                    <p className="mt-4 text-base leading-7 text-stone-700">{block.text}</p>
                    <ApplicationList items={block.applications} />
                    {block.linkHref && (
                      <Link
                        href={block.linkHref}
                        className="mt-5 inline-flex min-h-[44px] items-center justify-center rounded-md border border-stone-300 px-4 py-2 text-center text-sm font-bold text-brand-graphite transition hover:border-primary-500 hover:text-primary-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"
                      >
                        {block.linkLabel}
                      </Link>
                    )}
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-14 sm:py-20">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <Reveal>
              <Card className="h-full p-6 sm:p-8">
                <h2 className="text-2xl font-black text-brand-graphite">{page.delivery.title}</h2>
                <p className="mt-4 text-base leading-7 text-stone-700">{page.delivery.text}</p>
              </Card>
            </Reveal>

            <Reveal>
              <Card className="h-full p-6 sm:p-8">
                <h2 className="text-2xl font-black text-brand-graphite">
                  Produtos e categorias relacionados
                </h2>
                <ul className="mt-5 space-y-3">
                  {page.relatedLinks.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="block rounded-lg border border-stone-200 bg-stone-50 px-4 py-4 text-sm font-black text-brand-graphite transition hover:border-primary-300 hover:bg-emerald-50 hover:text-primary-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          </div>
        </Container>
      </section>

      <FAQSection faqs={page.faqs} />
    </>
  )
}
