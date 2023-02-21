import { ShieldCheckIcon, DevicePhoneMobileIcon, ServerIcon, ServerStackIcon, SwatchIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Full-stack engineer',
    icon: ServerStackIcon,
  },
  {
    name: 'Front-end engineer',
    icon: SwatchIcon,
  },
  {
    name: 'Back-end engineer',
    icon: ServerIcon,
  },
  {
    name: 'Mobile app developer',
    icon: DevicePhoneMobileIcon,
  },
  {
    name: 'Dev-ops engineer',
    icon: ShieldCheckIcon,
  },
]

export default function OurStory() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div className="lg:pr-4 lg:pt-4 col-span-2">
            <div>
              <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">Our story</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">A better workflow</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Our greatest strength is our ability to attract and retain some of the best software developers in Dhaka - a large and hugely interesting labor market. We are their employer of choice, something we take great pride in.
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Our speciality is to recruit experienced full-time developers carefully tailored to what our clients need. Which in return provide our clients with the resources to innovate - by increasing software development capacity in a cost efficient way.
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Feel free to challenge us, and we will probably surprise you.
              </p>
            </div>
          </div>

          <div className="hidden lg:-ml-0 lg:flex lg:items-end">
            <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <feature.icon className="absolute top-1 left-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                    {feature.name}
                  </dt>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}
