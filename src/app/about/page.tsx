import { ClockIcon, CodeBracketIcon, HeartIcon, MapPinIcon } from "@heroicons/react/24/outline";

const definesUsFeatures = [
  {
    name: "Made in Germany",
    description: "Built and operated from Germany. Our engineering standards reflect where we come from — precise, reliable, and built to last.",
    icon: MapPinIcon,
  },
  {
    name: "9 years of building",
    description: "Engineering software since 2017. Every year sharpens the craft — and the conviction that quality takes time.",
    icon: ClockIcon,
  },
  {
    name: "Bootstrapped",
    description: "No investors, no board meetings, no pressure to grow at all costs. We answer only to our customers — and to our own standards.",
    icon: HeartIcon,
  },
  {
    name: "Own products only",
    description: "We don't take on client work. Every product we build is something we'd use ourselves — and support for years to come.",
    icon: CodeBracketIcon,
  },
];

export default function About() {
  return (
    <>
      {/* About Hero — heroes/08-with-phone-mockup (light base + dark: variants) */}
      <div className="bg-white dark:bg-gray-900">
        <div className="relative isolate">
          <svg
            aria-hidden="true"
            className="absolute inset-0 -z-10 size-full mask-[radial-gradient(100%_100%_at_top_right,white,transparent)] stroke-gray-200 dark:stroke-white/10"
          >
            <defs>
              <pattern x="50%" y={-1} id="about-grid" width={200} height={200} patternUnits="userSpaceOnUse">
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50 dark:fill-gray-800/50">
              <path d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z" strokeWidth={0} />
            </svg>
            <rect fill="url(#about-grid)" width="100%" height="100%" strokeWidth={0} />
          </svg>
          <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
              <h1 className="text-5xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-7xl dark:text-white">
                About <span className="bg-linear-to-r from-indigo-400 to-fuchsia-600 bg-clip-text text-transparent">Saul Studio</span>.
              </h1>
              <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8 dark:text-gray-400">
                Precisely engineered. Reliably scalable. For retailers who expect more.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500"
                >
                  Get started
                </a>
                <a href="#" className="text-sm/6 font-semibold text-gray-900 dark:text-white">
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            <div className="mt-16 sm:mt-24 lg:mt-0 lg:shrink-0 lg:grow">
              <img
                alt="Saul Studio founder"
                src="/images/founder_05.webp"
                className="mx-auto w-full max-w-md rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* cta-sections/06-simple-centered-on-brand */}
      <div className="bg-indigo-700">
        <div className="px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
              The story behind Saul Studio.
            </h2>
            <div className="mx-auto mt-6 max-w-2xl space-y-6 text-lg/8 text-pretty text-indigo-200 text-left">
              <p>
                Saul Studio started with a simple frustration: the tools available for Shopify merchants weren&apos;t good enough. Too many apps that promise everything, deliver templates, and disappear within a year.
              </p>
              <p>
                So we decided to build our own. Not for clients — for ourselves, and for merchants who take their business as seriously as we take our code. Every product we ship is built with one question in mind: will this still work flawlessly in five years?
              </p>
              <p>
                We&apos;re a bootstrapped, independent software company based in Germany. No investors, no pressure, no shortcuts. Just one founder, a clear vision, and the discipline to build software that lasts.
              </p>
            </div>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a href="/blog" className="text-sm/6 font-semibold text-white">
                Read our blog <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* What defines us — feature-sections/15.offset-2x2-grid */}
      <div className="bg-white py-24 sm:py-32 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <div className="col-span-2">
              <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl dark:text-white">
                What defines us
              </h2>
              <p className="mt-6 text-lg/8 text-gray-600 dark:text-gray-300">
                Four things that shape everything we do — from the first line of code to the last pixel.
              </p>
            </div>
            <dl className="col-span-3 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2">
              {definesUsFeatures.map((feature) => (
                <div key={feature.name}>
                  <dt className="text-base/7 font-semibold text-gray-900 dark:text-white">
                    <div className="mb-6 flex size-10 items-center justify-center rounded-lg bg-indigo-600 dark:bg-indigo-500">
                      <feature.icon aria-hidden="true" className="size-6 text-white" />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-1 text-base/7 text-gray-600 dark:text-gray-400">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </>
  );
}
