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
    <div className="overflow-hidden bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div className="lg:pr-4 lg:pt-4 col-span-2">
            <div>
              <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">Our story</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">A better way to hire and retain top talents</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Cogitous Technology helps other companies with long-term hires of full-time premium software developers from our offices in Dhaka, Bangladesh.
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Our greatest strength is our ability to attract and retain the best software developers in Dhaka, whom we consider our most valuable asset. We take pride in providing seamless communication, collaboration, and management between our clients and their dedicated offshore teams.
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                If you're looking to expand your software development capabilities with top talent from Bangladesh, we're here to help. Let us connect you with the right team and take your business to the next level.
              </p>
            </div>
          </div>

          <div className="hidden lg:-ml-0 lg:flex lg:items-center">
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
