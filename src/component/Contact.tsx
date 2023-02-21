import { useRef } from "react";
import { getClient } from "../supabase";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: Event) => {
    e.preventDefault();

    const formInputs = formRef.current?.querySelectorAll('input, textarea');
    const send = Array.from(formInputs || []).reduce((col, el) => {
      const { name, value } = el;
      if (value) col[name] = value;

      return col;
    }, {});
    
    console.log('Send:', send);

    getClient().from('contact').insert([send]).then(x => console.log(x));
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
                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
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

