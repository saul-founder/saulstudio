import TechIcons from "./TechIcons";

export default function Home() {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-6 py-12 mx-auto md:px-10 md:py-20 lg:px-4 lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">We build <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-fuchsia-600">enterprise-grade</span> software for the Shopify ecosystem.</h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Precisely engineered. Reliably scalable. For retailers who expect more.</p>
            <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300 dark:focus:ring-indigo-900">
              Get started
              <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </a>
            <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
              Speak to Sales
            </a>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="/images/women_01.webp" alt="Enterprise-grade software for the Shopify ecosystem" />
          </div>
        </div>
      </section>






      <section className="bg-white dark:bg-gray-900">
        <div className="max-w-screen-xl px-6 md:px-10 lg:px-4 py-8 mx-auto sm:py-16 lg:py-24">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              What we make
            </h2>
            <p className="mt-4 text-base font-normal text-gray-500 sm:text-xl dark:text-gray-400">
              Every product we release solves a real problem we've lived ourselves. No guesswork. No hype.
            </p>
          </div>

          <div className="mt-12 space-y-16">
            <div className="flex flex-col lg:items-center lg:flex-row gap-y-8 sm:gap-y-12 lg:gap-x-16 xl:gap-x-24">
              <div>
                <img className="object-cover w-full border border-gray-200 rounded-lg shadow-lg dark:hidden"
                src="/images/case-study/dashboard-mockup.jpg" alt="project image" />
                <img className="hidden object-cover w-full rounded-lg shadow-lg dark:block dark:border dark:border-gray-700"
                src="/images/case-study/dashboard-mockup-dark.jpg" alt="project mockup dark" />
              </div>

              <div className="w-full space-y-6 lg:max-w-lg shrink-0 xl:max-w-2xl">
                <div className="space-y-3">
                  <h3 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl dark:text-white">
                    Smart Emails
                  </h3>
                  <a href="https://smartemails.app" title=""
                    className="inline-flex items-center text-lg font-medium text-primary-700 hover:underline dark:text-primary-500">
                    <svg aria-hidden="true" className="w-5 h-5 mr-2.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                      fill="currentColor">
                      <path
                        d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                      <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                    </svg>
                    smartemails.app
                  </a>
                  <p className="text-base font-normal text-gray-500 sm:text-lg dark:text-gray-400">
                    53 Shopify notification emails. 30 professional design presets. 26 languages with automatic translation. No code, no compromises, no limitations. Change a color, update a text, add a banner — your changes go live instantly across every template.
                  </p>
                </div>

                <TechIcons />

                <a href="#" title=""
                  className="text-white bg-indigo-600 justify-center hover:bg-indigo-700 inline-flex items-center  focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
                  role="button">
                  View case study
                  <svg aria-hidden="true" className="w-5 h-5 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                    fill="currentColor">
                    <path fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="flex flex-col lg:items-center lg:flex-row gap-y-8 sm:gap-y-12 lg:gap-x-16 xl:gap-x-24">
              <div className="lg:order-2">
                <img className="object-cover w-full border border-gray-200 rounded-lg shadow-lg  dark:hidden"
                src="/images/case-study/agency-landing-page.jpg" alt="project image" />
                <img className="hidden object-cover w-full rounded-lg shadow-lg dark:block dark:border dark:border-gray-700"
                src="/images/case-study/agency-landing-page-dark.jpg" alt="project mockup dark" />
              </div>

              <div className="w-full space-y-6 lg:max-w-lg shrink-0 xl:max-w-2xl lg:order-1">
                <div className="space-y-3">
                  <h3 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl dark:text-white">
                    Next up
                  </h3>
                  <p className="text-base font-normal text-gray-500 sm:text-lg dark:text-gray-400">
                    Another problem we've lived ourselves. Another product in the making. Stay tuned.
                  </p>
                </div>

                <TechIcons />

                <a href="#" title=""
                  className="text-white bg-indigo-600 justify-center hover:bg-indigo-700 inline-flex items-center  focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
                  role="button">
                  View case study
                  <svg aria-hidden="true" className="w-5 h-5 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                    fill="currentColor">
                    <path fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
      <section className="bg-gray-50 dark:bg-gray-800">
        <div className="gap-8 items-center py-8 px-6 md:px-10 lg:px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 xl:gap-16 sm:py-16 lg:px-6">
          <img className="mb-4 w-full lg:mb-0" src="/images/women_02.webp" alt="How we build" />
          <div className="text-gray-500 dark:text-gray-400 sm:text-lg">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">How we build</h2>
            <p className="mb-8 font-light lg:text-xl">We take software seriously. Every product we ship follows three non-negotiable principles — what makes us slow down, what makes us wait, and what makes us stay.</p>
            <div className="py-8 mb-6 border-t border-b border-gray-200 dark:border-gray-700">
              <div className="flex">
                <div className="flex justify-center items-center mr-4 w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900 shrink-0">
                  {/* Heroicons Sparkles */}
                  <svg className="w-5 h-5 text-indigo-600 dark:text-indigo-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd"></path></svg>
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">Obsessive details</h3>
                  <p className="mb-2 font-light text-gray-500 dark:text-gray-400">The difference between good and great is invisible until you see it. We see it — and we fix it before anyone notices.</p>
                </div>
              </div>
              <div className="flex pt-8">
                <div className="flex justify-center items-center mr-4 w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900 shrink-0">
                  {/* Heroicons Check Badge */}
                  <svg className="w-5 h-5 text-purple-600 dark:text-purple-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">Ship right, not fast</h3>
                  <p className="mb-2 font-light text-gray-500 dark:text-gray-400">No half-baked releases. No sprint-deadline shortcuts. It ships when it's ready — not a day before.</p>
                </div>
              </div>
              <div className="flex pt-8">
                <div className="flex justify-center items-center mr-4 w-8 h-8 rounded-full bg-fuchsia-100 dark:bg-fuchsia-900 shrink-0">
                  {/* Heroicons Cube */}
                  <svg className="w-5 h-5 text-fuchsia-600 dark:text-fuchsia-300" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11.25 3.432c-.096.055-.19.114-.28.176L3.482 8.23a.75.75 0 00-.027 1.252l7.487 4.681a.75.75 0 00.796 0l7.487-4.68a.75.75 0 00-.027-1.253l-7.487-4.622a3.754 3.754 0 00-.46-.176z"></path><path d="M3.105 10.72l7.496 4.686a.75.75 0 00.798 0l7.496-4.686.89.556a.75.75 0 01.026 1.253l-7.487 4.68a.75.75 0 01-.796 0l-7.487-4.68a.75.75 0 01.026-1.253l.934-.556zM3.105 14.47l7.496 4.686a.75.75 0 00.798 0l7.496-4.686.89.556a.75.75 0 01.026 1.253l-7.487 4.68a.75.75 0 01-.796 0l-7.487-4.68a.75.75 0 01.026-1.253l.934-.556z"></path></svg>
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">Built to last</h3>
                  <p className="mb-2 font-light text-gray-500 dark:text-gray-400">Every line of code is written for the next decade, not the next refactor. Maintainable, scalable, boring in the best way.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-6 md:px-10 lg:px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">Why Saul Studio?</h2>
            <p className="mb-4 font-medium text-xl">A promise, not a pitch.</p>
            <p className="mb-4 font-light">We build software for merchants who take their business seriously — and who expect more than what's already out there. Carefully, with the standard that our products still work the same way years from now as they did on day one.</p>
            <p className="mb-4 font-light">This isn't a slogan.<br />It's how we work.</p>
            <a href="/about" className="inline-flex items-center font-medium text-indigo-600 hover:text-indigo-800 dark:text-indigo-500 dark:hover:text-indigo-700">
              Read more about us
              <svg className="ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
            </a>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-gray-50 dark:bg-gray-800">
        <div className="py-8 px-6 md:px-10 lg:px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-md sm:text-center">
            <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl dark:text-white">Stay in the loop</h2>
            <p className="mx-auto mb-8 max-w-2xl font-light text-gray-500 md:mb-12 sm:text-xl dark:text-gray-400">Get notified when we ship something new. No spam. No fluff. Just updates from the studio.</p>
            <form action="#">
              <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                <div className="relative w-full">
                  <label htmlFor="email" className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                  </div>
                  <input className="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500" placeholder="Enter your email" type="email" id="email" required />
                </div>
                <div>
                  <button type="submit" className="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-indigo-600 border-indigo-600 sm:rounded-none sm:rounded-r-lg hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800">Subscribe</button>
                </div>
              </div>
              <div className="mx-auto max-w-screen-sm text-sm text-left text-gray-500 newsletter-form-footer dark:text-gray-300">We care about the protection of your data. <a href="/privacy" className="font-medium text-indigo-600 dark:text-indigo-500 hover:underline">Read our Privacy Policy</a>.</div>
            </form>
          </div>
        </div>
      </section>


      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-6 md:px-10 lg:px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
            <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Our Blog</h2>
            <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">Thoughts on building software, running a studio, and the Shopify ecosystem.</p>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <div className="flex justify-between items-center mb-5 text-gray-500">
                <span className="bg-indigo-100 text-indigo-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-indigo-200 dark:text-indigo-800">
                  <svg className="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clipRule="evenodd"></path><path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path></svg>
                  Article
                </span>
                <span className="text-sm">Coming soon</span>
              </div>
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><a href="/blog">Why we built Smart Emails</a></h2>
              <p className="mb-5 font-light text-gray-500 dark:text-gray-400">The story behind our first product — why Shopify notification emails deserved better, and what it took to build an editor that handles all 53 of them.</p>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <span className="font-medium dark:text-white">Saul Studio.</span>
                </div>
                <a href="/blog" className="inline-flex items-center font-medium text-indigo-600 dark:text-indigo-500 hover:underline">
                  Read more
                  <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </a>
              </div>
            </article>
            <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <div className="flex justify-between items-center mb-5 text-gray-500">
                <span className="bg-indigo-100 text-indigo-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-indigo-200 dark:text-indigo-800">
                  <svg className="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clipRule="evenodd"></path><path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path></svg>
                  Article
                </span>
                <span className="text-sm">Coming soon</span>
              </div>
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><a href="/blog">How we build software that lasts</a></h2>
              <p className="mb-5 font-light text-gray-500 dark:text-gray-400">Our principles, our process, and why we believe that shipping right is more important than shipping fast. A look behind the scenes at Saul Studio.</p>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <span className="font-medium dark:text-white">Saul Studio.</span>
                </div>
                <a href="/blog" className="inline-flex items-center font-medium text-indigo-600 dark:text-indigo-500 hover:underline">
                  Read more
                  <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
