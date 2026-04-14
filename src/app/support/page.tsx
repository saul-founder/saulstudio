import FAQ from "./FAQ";

export default function Support() {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-6 py-12 mx-auto md:px-10 md:py-20 lg:px-4 lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Have a question? We&apos;re <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-fuchsia-600">here to help</span>.</h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Browse our help center or reach out directly — we typically respond within a few hours.</p>
            <a href="https://help.saulstudio.app" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300 dark:focus:ring-indigo-900">
              Visit Help Center
              <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </a>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="/images/women_04.webp" alt="Support" />
          </div>
        </div>
      </section>

      <section className="bg-gray-50 dark:bg-gray-800">
        <div className="py-8 px-6 md:px-10 lg:px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <h2 className="mb-6 lg:mb-8 text-3xl lg:text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Frequently asked questions</h2>
          <div className="mx-auto max-w-screen-md">
            <FAQ />
          </div>
        </div>
      </section>
    </>
  );
}
