import siteMetadata from '@/data/siteMetadata'
import features from '@/components/Features'

export default function WhyChooseSection() {
  return (
    <section className="grid-cols-2 divide-y divide-gray-200 dark:divide-gray-700">
      <div className="pt-6 pb-8 space-y-2 md:space-y-5">
        <h2 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Por que a Madeiras Santos?
        </h2>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">{siteMetadata.description}</p>
        <div className="mt-8 rounded-2xl bg-emerald-50 p-4 dark:bg-gray-800/60 sm:p-6">
          <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="rounded-2xl bg-green-600 p-5 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md"
              >
                <dt>
                  <div className="mb-3 inline-flex rounded-full bg-white/15 p-3">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <p className="text-xl font-bold leading-7 text-white">{feature.name}</p>
                </dt>
                <dd className="mt-2 text-base leading-7 text-white/95">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
