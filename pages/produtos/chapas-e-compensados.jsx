import CategoryPage from '@/components/sections/products/CategoryPage'
import Link from '@/components/Link'
import pageMetadata from '@/data/config/pageMetadata'
import siteStructure from '@/data/config/siteStructure'

function MadeiriteCuriositySection() {
  return (
    <section
      aria-labelledby="curiosidade-madeirite-title"
      className="rounded-lg border border-stone-200 bg-white p-6 shadow-sm shadow-stone-900/5 sm:p-8"
    >
      <h2
        id="curiosidade-madeirite-title"
        className="text-2xl font-black tracking-tight text-brand-graphite"
      >
        Curiosidade: por que tanta gente chama compensado de madeirite?
      </h2>
      <div className="mt-5 space-y-4 text-base leading-7 text-stone-700">
        <p>
          Você também chama chapa compensada de madeirite? Aqui na Madeiras Santos, esse é um dos
          nomes que mais ouvimos no dia a dia.
        </p>
        <p>
          A Madeirit foi uma marca tão forte no mercado brasileiro de chapas de madeira que o nome
          acabou virando sinônimo popular do produto. É aquele caso em que uma marca fica tão
          conhecida que passa a representar uma categoria inteira. Isso pode ser entendido como uma
          forma de metonímia: quando usamos o nome de uma marca para nos referir ao produto.
        </p>
        <p>
          A história da Madeirit remonta a 1966, quando a Indústrias Madeirit S.A. iniciou suas
          atividades no setor de madeira laminada e chapas compensadas. A empresa teve estrutura
          fabril no Paraná e marcou uma geração da construção civil brasileira com seus painéis
          multilaminados de alta resistência.
        </p>
        <p>
          Mesmo após o processo de falência da empresa em 2009, o nome permaneceu vivo no
          vocabulário das obras.
        </p>
        <p>
          Por isso, até hoje, muita gente chega procurando por “madeirite” quando, tecnicamente,
          está buscando uma chapa de madeira compensada —{' '}
          <Link
            href="/produtos/compensado-resinado"
            className="font-bold text-primary-700 underline decoration-primary-200 underline-offset-4 transition hover:text-primary-900 hover:decoration-primary-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"
          >
            resinada
          </Link>
          ,{' '}
          <Link
            href="/produtos/compensado-plastificado"
            className="font-bold text-primary-700 underline decoration-primary-200 underline-offset-4 transition hover:text-primary-900 hover:decoration-primary-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"
          >
            plastificada
          </Link>{' '}
          ou comum — muito usada em canteiros de obra, fôrmas, tapumes e estruturas provisórias.
        </p>
      </div>
    </section>
  )
}

export default function ChapasCompensadosPage() {
  const category = siteStructure.productCategories.find(
    (item) => item.slug === 'chapas-e-compensados'
  )

  return (
    <CategoryPage
      seo={pageMetadata.chapasCompensados}
      category={category}
      beforeProductList={<MadeiriteCuriositySection />}
    />
  )
}
