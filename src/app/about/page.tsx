"use client";

declare global {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  interface Window { $crisp?: any }
}

export default function About() {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-6 py-12 mx-auto md:px-10 md:py-20 lg:px-4 lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">About <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-fuchsia-600">Saul Studio.</span></h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Precisely engineered. Reliably scalable. For retailers who expect more.</p>
            <button onClick={() => { if (typeof window !== 'undefined' && window.$crisp) { window.$crisp.push(["do", "chat:open"]); } }} className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300 dark:focus:ring-indigo-900 cursor-pointer">
              Get in touch
              <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </button>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="/images/founder_04.webp" alt="About Saul Studio" />
          </div>
        </div>
      </section>

      <section className="bg-gray-50 dark:bg-gray-800">
        <div className="gap-16 items-center py-8 px-6 md:px-10 lg:px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">The story behind Saul Studio.</h2>
            <p className="mb-4">Saul Studio started with a simple frustration: the tools available for Shopify merchants weren't good enough. Too many apps that promise everything, deliver templates, and disappear within a year.</p>
            <a href="/blog" className="inline-flex items-center font-medium text-indigo-600 hover:text-indigo-800 dark:text-indigo-500 dark:hover:text-indigo-700">
              Read our blog
              <svg className="ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
            </a>
          </div>
          <div className="mt-4 font-light text-gray-500 sm:text-lg lg:mt-0 dark:text-gray-400">
            <p className="mb-4">So we decided to build our own. Not for clients — for ourselves, and for merchants who take their business as seriously as we take our code. Every product we ship is built with one question in mind: will this still work flawlessly in five years?</p>
            <p>We're a bootstrapped, independent software company based in Germany. No investors, no pressure, no shortcuts. Just one founder, a clear vision, and the discipline to build software that lasts.</p>
          </div>
        </div>
      </section>
    </>
  );
}
