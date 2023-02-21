import { CheckBadgeIcon, XCircleIcon } from "@heroicons/react/20/solid";
import { useRef, useState } from "react";
import { getClient } from "../supabase";

const SuccessIcon =
  <CheckBadgeIcon className="absolute top-2.7 left-0 h-5 w-5 text-indigo-600" aria-hidden="true" />;
const FailureIcon =
  <XCircleIcon className="absolute top-2.7 left-0 h-5 w-5 text-orange-600" aria-hidden="true" />;

export default function ContactUs() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formSubmitState, setFormSubmitState] = useState<{ message?: string, icon?: unknown }>({});
  const [inflight, setInflight] = useState(false);

  const handleSubmit = (e: Event) => {
    e.preventDefault();

    const formInputs: HTMLInputElement[] = Array.from(formRef.current?.querySelectorAll('input, textarea') || []);
    const send = formInputs.reduce((object, input) => {
      const { name, value } = input;
      if (value) object[name] = value;

      return object;
    }, {} as Record<string, string>);
    
    setInflight(true);
    getClient()
      .from('contact')
      .insert([send])
      .then(({ error, data }) => {
        setInflight(false);
        if (error) {
          setFormSubmitState({
            ...formSubmitState,
            message: 'Could not send your message. Please try later.',
            icon: FailureIcon,
          })
        } else {
          setFormSubmitState({
            ...formSubmitState,
            message: 'Your message has been devilered.',
            icon: SuccessIcon,
          })
        }
      });
  };

  return (
    <div id="contact-us" className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="md:grid md:grid-cols-5 md:gap-6">
          <div className="md:col-span-2">
            <div className="lg:max-w-lg">
              <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">Contact us</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Want to extend your team?</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                We would love to help you!
                Fill out the form - and you will hear from us shortly.
              </p>
            </div>
          </div>
          <div className="mt-5 md:col-span-3 md:mt-0">
            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="overflow-hidden shadow sm:rounded-md">
                <div className="bg-white px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                        First name
                      </label>
                      <input
                        type="text"
                        name="first_name"
                        autoComplete="given-name"
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                        Last name
                      </label>
                      <input
                        type="text"
                        name="last_name"
                        autoComplete="family-name"
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                        Email address
                      </label>
                      <input
                        type="text"
                        name="email"
                        autoComplete="email"
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6">
                      <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                        Message
                      </label>
                      <div className="mt-1">
                        <textarea
                          name="message"
                          rows={3}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          placeholder="Your message..."
                          required
                          defaultValue={''}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6 flex justify-between">
                  <div className="relative pl-7 flex items-center">
                    { formSubmitState.icon }
                    <span className="inline text-left font-base">{formSubmitState.message}</span>
                  </div>
 
                  <button
                    type="submit"
                    disabled={inflight}
                    className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-indigo-400"
                  >
                    Send
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

