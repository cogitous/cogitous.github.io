import { GlobeAltIcon, RocketLaunchIcon, BeakerIcon, HomeIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Like an in-house team',
    description:
      'We collaborate with you to hire and manage external development teams, who work closely and seamlessly with your in-house team.',
    icon: HomeIcon,
  },
  {
    name: 'Try before you commit',
    description:
      'We offer two weeks of risk-free trial. So you don’t have to waste time and resources on someone who might not be the perfect fit for your team.',
    icon: BeakerIcon,
  },
  {
    name: 'Aligned with your culture',
    description:
      'Our 8-year long experience with European clients has enabled us to align offshore software teams with cultural and business norms for success.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Grows with you',
    description:
      'Growth don’t follow a predictable or linear progression. Whether you’re growing rapidly or scaling back, we adapt to your needs.',
    icon: RocketLaunchIcon,
  },
]

export default function FeatureGrid() {
  return (
    <div  id="why-us" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">Why us?</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            We give you access to top developers
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Think of us as your gateway to an incredibly exciting developer marketplace.
            With our streamlined process and risk-free model, outsourcing has never been easier!
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
