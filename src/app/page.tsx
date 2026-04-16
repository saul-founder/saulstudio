import { ArrowLongRightIcon, ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";
import { CheckBadgeIcon, CubeIcon, StarIcon } from "@heroicons/react/24/solid";
import { CalendarDaysIcon, HandRaisedIcon } from "@heroicons/react/24/outline";

const howWeBuildFeatures = [
  {
    name: "Obsessive details",
    description: "The difference between good and great is invisible until you see it. We see it — and we fix it before anyone notices.",
    icon: StarIcon,
  },
  {
    name: "Ship right, not fast",
    description: "No half-baked releases. No sprint-deadline shortcuts. It ships when it's ready — not a day before.",
    icon: CheckBadgeIcon,
  },
  {
    name: "Built to last",
    description: "Every line of code is written for the next decade, not the next refactor. Maintainable, scalable, boring in the best way.",
    icon: CubeIcon,
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <div className="bg-white dark:bg-gray-900">
        <div className="relative isolate">
          <svg
            aria-hidden="true"
            className="absolute inset-0 -z-10 size-full mask-[radial-gradient(100%_100%_at_top_right,white,transparent)] stroke-gray-900/10 dark:stroke-white/10"
          >
            <defs>
              <pattern x="50%" y={-1} id="hero-grid" width={200} height={200} patternUnits="userSpaceOnUse">
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50 dark:fill-gray-800/50">
              <path d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z" strokeWidth={0} />
            </svg>
            <rect fill="url(#hero-grid)" width="100%" height="100%" strokeWidth={0} />
          </svg>
          <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
              <h1 className="text-5xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-7xl dark:text-white">
                We build <span className="bg-linear-to-r from-indigo-400 to-fuchsia-600 bg-clip-text text-transparent">enterprise-grade</span> software for the Shopify ecosystem.
              </h1>
              <p className="mt-8 text-lg font-medium text-pretty text-gray-600 sm:text-xl/8 dark:text-gray-400">
                Precisely engineered. Reliably scalable. For retailers who expect more.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <a href="#" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500">
                  Get started
                </a>
                <a href="#" className="text-sm/6 font-semibold text-gray-900 dark:text-white">
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            <div className="mt-16 sm:mt-24 lg:mt-0 lg:shrink-0 lg:grow">
              {/* Desktop: women_01 (ab lg = 1024px) */}
              <img
                alt="Enterprise-grade software for the Shopify ecosystem"
                src="/images/women_01.webp"
                className="mx-auto hidden w-full max-w-md rounded-2xl object-cover lg:block"
              />
              {/* Mobile/Tablet: women012 (unter lg) */}
              <img
                alt="Enterprise-grade software for the Shopify ecosystem"
                src="/images/women_012.webp"
                className="mx-auto block w-full max-w-md rounded-2xl object-cover lg:hidden"
              />
            </div>
          </div>
        </div>
      </div>

      {/* cta-sections/08-simple-justified-on-subtle-brand (mit Subtitle-p, reduziertes Spacing für Zwischen-CTA) */}
      <div className="bg-indigo-100 dark:bg-indigo-950">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:flex lg:items-center lg:justify-between lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
              What we build
            </h2>
            <p className="mt-4 text-lg/8 text-gray-700 dark:text-gray-300">
              We build products we&apos;d actually use ourselves — because we do. Every release solves a real problem we&apos;ve faced, not one we&apos;ve imagined. No guesswork. No hype.
            </p>
          </div>
        </div>
      </div>

      {/* Smart Emails — feature-sections/01 (image RIGHT) */}
      <div className="overflow-hidden bg-white py-24 sm:py-32 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pt-4 lg:pr-8">
              <div className="lg:max-w-lg">
                <h2 className="text-base/7 font-semibold">
                  <a
                    href="https://smartemails.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-x-2 text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
                  >
                    <ArrowTopRightOnSquareIcon aria-hidden="true" className="size-5" />
                    smartemails.app
                  </a>
                </h2>
                <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl dark:text-white">
                  Smart Emails
                </p>
                <p className="mt-6 text-lg/8 text-gray-700 dark:text-gray-300">
                  53 Shopify notification emails. 30 professional design presets. 26 languages with automatic translation. No code, no compromises, no limitations. Change a color, update a text, add a banner — your changes go live instantly across every template.
                </p>
                <div className="mt-8 flex items-center gap-6 text-gray-500 dark:text-gray-400">
                  <img src="/images/techicons/react-2.svg" alt="React" className="h-6 w-6 brightness-0 opacity-50 dark:opacity-100 dark:invert" />
                  <img src="/images/techicons/typescript-2.svg" alt="TypeScript" className="h-6 w-6 brightness-0 opacity-50 dark:opacity-100 dark:invert" />
                  <img src="/images/techicons/remix-3.svg" alt="Remix" className="h-6 w-6 brightness-0 opacity-50 dark:opacity-100 dark:invert" />
                  <img src="/images/techicons/shopify-2.svg" alt="Shopify" className="h-6 w-6 brightness-0 opacity-50 dark:opacity-100 dark:invert" />
                  <img src="/images/techicons/supabase-2.svg" alt="Supabase" className="h-6 w-6 brightness-0 opacity-50 dark:opacity-100 dark:invert" />
                  <img src="/images/techicons/vercel-3.svg" alt="Vercel" className="h-6 w-6 brightness-0 opacity-50 dark:opacity-100 dark:invert" />
                  <img src="/images/techicons/deepl.svg" alt="DeepL" className="h-6 w-6 brightness-0 opacity-50 dark:opacity-100 dark:invert" />
                </div>
                <div className="mt-10">
                  <a
                    href="https://smartemails.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-x-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500"
                  >
                    Smart Emails
                    <ArrowLongRightIcon aria-hidden="true" className="size-5" />
                  </a>
                </div>
              </div>
            </div>
            <img
              alt="Smart Emails editor screenshot"
              src="/images/dark-project-app-screenshot.png"
              width={2432}
              height={1442}
              className="w-3xl max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-228 md:-ml-4 lg:-ml-0 dark:ring-white/10"
            />
          </div>
        </div>
      </div>

      {/* Next up — light, image right (reduziertes Spacing für Teaser) */}
      <div className="overflow-hidden bg-white py-16 sm:py-24 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:ml-auto lg:pt-4 lg:pl-4">
              <div className="lg:max-w-lg">
                <p className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl dark:text-white">
                  Next up
                </p>
                <p className="mt-6 text-lg/8 text-gray-600 dark:text-gray-300">
                  Another problem we&apos;ve lived ourselves. Another product in the making. Stay tuned.
                </p>
                <div className="mt-8 flex items-center gap-6 text-gray-500 dark:text-gray-400">
                  <img src="/images/techicons/react-2.svg" alt="React" className="h-6 w-6 brightness-0 opacity-50 dark:opacity-100 dark:invert" />
                  <img src="/images/techicons/typescript-2.svg" alt="TypeScript" className="h-6 w-6 brightness-0 opacity-50 dark:opacity-100 dark:invert" />
                  <img src="/images/techicons/remix-3.svg" alt="Remix" className="h-6 w-6 brightness-0 opacity-50 dark:opacity-100 dark:invert" />
                  <img src="/images/techicons/shopify-2.svg" alt="Shopify" className="h-6 w-6 brightness-0 opacity-50 dark:opacity-100 dark:invert" />
                  <img src="/images/techicons/supabase-2.svg" alt="Supabase" className="h-6 w-6 brightness-0 opacity-50 dark:opacity-100 dark:invert" />
                  <img src="/images/techicons/vercel-3.svg" alt="Vercel" className="h-6 w-6 brightness-0 opacity-50 dark:opacity-100 dark:invert" />
                  <img src="/images/techicons/deepl.svg" alt="DeepL" className="h-6 w-6 brightness-0 opacity-50 dark:opacity-100 dark:invert" />
                </div>
              </div>
            </div>
            <div className="flex items-start justify-end lg:order-first">
              <img
                alt="Smart Emails editor screenshot"
                src="/images/dark-project-app-screenshot.png"
                width={2432}
                height={1442}
                className="w-3xl max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-228 dark:ring-white/10"
              />
            </div>
          </div>
        </div>
      </div>

      {/* feature-sections/13.with-product-screenshot-panel */}
      <div className="overflow-hidden bg-white py-24 sm:py-32 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
            <div className="px-6 lg:px-0 lg:pt-4 lg:pr-4">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
                <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl dark:text-white">
                  How we build
                </p>
                <p className="mt-6 text-lg/8 text-gray-600 dark:text-gray-300">
                  We take software seriously. Every product we ship follows three non-negotiable principles — what makes us slow down, what makes us wait, and what makes us stay.
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none dark:text-gray-400">
                  {howWeBuildFeatures.map((feature) => (
                    <div key={feature.name} className="relative pl-9">
                      <dt className="font-semibold text-gray-900 dark:text-white">
                        <feature.icon aria-hidden="true" className="absolute top-1 left-1 size-5 text-indigo-600 dark:text-indigo-400" />
                        {feature.name}
                      </dt>
                      <dd className="mt-1">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <div className="px-6 sm:px-6 lg:px-0">
              <img
                alt="How we build"
                src="/images/women_02.webp"
                className="mx-auto w-full max-w-2xl rounded-2xl object-cover lg:mx-0 lg:max-w-none"
              />
            </div>
          </div>
        </div>
      </div>

      {/* cta-sections/03-centered-on-dark-panel (Light + Dark kombiniert) */}
      <div className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16 dark:bg-gray-800 dark:shadow-none dark:after:pointer-events-none dark:after:absolute dark:after:inset-0 dark:after:inset-ring dark:after:inset-ring-white/10 dark:after:sm:rounded-3xl">
            <h2 className="text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
              Why Saul Studio?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-2xl font-semibold text-pretty text-indigo-300">
              A promise, not a pitch.
            </p>
            <p className="mx-auto mt-8 max-w-2xl text-lg/8 text-pretty text-gray-300">
              We build software for merchants who take their business seriously — and who expect more than what&apos;s already out there. Carefully, with the standard that our products still work the same way years from now as they did on day one.
            </p>
            <p className="mx-auto mt-8 max-w-xl text-lg/8 text-pretty text-gray-400">
              This isn&apos;t a slogan.
              <br />
              It&apos;s how we work.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-xs hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white dark:bg-white/10 dark:text-white dark:shadow-none dark:inset-ring dark:inset-ring-white/5 dark:hover:bg-white/15"
              >
                Get started
              </a>
              <a href="#" className="text-sm/6 font-semibold text-white">
                Learn more
                <span aria-hidden="true">→</span>
              </a>
            </div>
            <svg
              viewBox="0 0 1024 1024"
              aria-hidden="true"
              className="absolute top-1/2 left-1/2 -z-10 size-256 -translate-x-1/2 mask-[radial-gradient(closest-side,white,transparent)]"
            >
              <circle r={512} cx={512} cy={512} fill="url(#cta-03-gradient)" fillOpacity="0.7" />
              <defs>
                <radialGradient id="cta-03-gradient">
                  <stop stopColor="#7775D6" />
                  <stop offset={1} stopColor="#E935C1" />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>

      {/* newsletter-sections/01-side-by-side-with-details */}
      <div className="relative isolate overflow-hidden bg-white py-16 sm:py-24 lg:py-32 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            <div className="max-w-xl lg:max-w-lg">
              <h2 className="text-4xl font-semibold tracking-tight text-gray-900 dark:text-white">
                Stay in the loop
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                Get notified when we ship something new. No spam. No fluff. Just updates from the studio.
              </p>
              <div className="mt-6 flex max-w-md gap-x-4">
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  name="email"
                  type="email"
                  required
                  placeholder="Enter your email"
                  autoComplete="email"
                  className="min-w-0 flex-auto rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:focus:outline-indigo-500"
                />
                <button
                  type="submit"
                  className="flex-none rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500"
                >
                  Subscribe
                </button>
              </div>
              <p className="mt-4 text-sm/6 text-gray-600 dark:text-gray-400">
                We care about your data. Read our{" "}
                <a href="/privacy" className="font-semibold text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300">
                  privacy policy
                </a>
                .
              </p>
            </div>
            <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
              <div className="flex flex-col items-start">
                <div className="rounded-md bg-white/50 p-2 ring-1 ring-gray-200 dark:bg-white/5 dark:ring-white/10">
                  <CalendarDaysIcon aria-hidden="true" className="size-6 text-gray-600 dark:text-white" />
                </div>
                <dt className="mt-4 text-base font-semibold text-gray-900 dark:text-white">Weekly articles</dt>
                <dd className="mt-2 text-base/7 text-gray-600 dark:text-gray-400">
                  Non laboris consequat cupidatat laborum magna. Eiusmod non irure cupidatat duis commodo amet.
                </dd>
              </div>
              <div className="flex flex-col items-start">
                <div className="rounded-md bg-white/50 p-2 ring-1 ring-gray-200 dark:bg-white/5 dark:ring-white/10">
                  <HandRaisedIcon aria-hidden="true" className="size-6 text-gray-600 dark:text-white" />
                </div>
                <dt className="mt-4 text-base font-semibold text-gray-900 dark:text-white">No spam</dt>
                <dd className="mt-2 text-base/7 text-gray-600 dark:text-gray-400">
                  Officia excepteur ullamco ut sint duis proident non adipisicing. Voluptate incididunt anim.
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div aria-hidden="true" className="absolute top-0 left-1/2 -z-10 -translate-x-1/2 blur-3xl xl:-top-6">
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="aspect-1155/678 w-288.75 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 dark:opacity-30"
          />
        </div>
      </div>
    </>
  );
}
