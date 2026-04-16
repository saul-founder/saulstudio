"use client";

import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";

declare global {
  interface Window {
    $crisp?: { push: (args: unknown[]) => void };
  }
}

function openChat() {
  window.$crisp?.push(["do", "chat:open"]);
}

const faqs: { question: string; answer: React.ReactNode }[] = [
  {
    question: "Do you take on client work?",
    answer: "No. We focus entirely on building and maintaining our own software products for the Shopify ecosystem. This allows us to put all of our energy into making them the best they can be.",
  },
  {
    question: "How can I reach you?",
    answer: (
      <>
        The fastest way is through the live chat — click the chat icon in the bottom right corner of any page. You can also email us at{" "}
        <a href="mailto:support@saulstudio.app" className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300">
          support@saulstudio.app
        </a>
        .
      </>
    ),
  },
  {
    question: "Where are you based?",
    answer: "Saul Studio is based in Germany. We work remotely and serve merchants worldwide.",
  },
  {
    question: "How do I get support for a specific product?",
    answer: (
      <>
        Visit our{" "}
        <button
          type="button"
          onClick={openChat}
          className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
        >
          Help Center
        </button>{" "}
        for detailed guides and answers to common questions about all of our products. If you can&apos;t find what you need, reach out via chat or email.
      </>
    ),
  },
];

export default function Support() {
  return (
    <>
      {/* Support Hero — heroes/08-with-phone-mockup (gleich wie Home, ohne Badge) */}
      <div className="bg-white dark:bg-gray-900">
        <div className="relative isolate">
          <svg
            aria-hidden="true"
            className="absolute inset-0 -z-10 size-full mask-[radial-gradient(100%_100%_at_top_right,white,transparent)] stroke-gray-900/10 dark:stroke-white/10"
          >
            <defs>
              <pattern x="50%" y={-1} id="support-hero-grid" width={200} height={200} patternUnits="userSpaceOnUse">
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50 dark:fill-gray-800/50">
              <path d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z" strokeWidth={0} />
            </svg>
            <rect fill="url(#support-hero-grid)" width="100%" height="100%" strokeWidth={0} />
          </svg>
          <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
              <h1 className="text-5xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-7xl dark:text-white">
                Have a question? We&apos;re <span className="bg-linear-to-r from-indigo-400 to-fuchsia-600 bg-clip-text text-transparent">here to help</span>.
              </h1>
              <p className="mt-8 text-lg font-medium text-pretty text-gray-600 sm:text-xl/8 dark:text-gray-400">
                Browse our help center or reach out directly — we typically respond within a few hours.
              </p>
            </div>
            <div className="mt-16 sm:mt-24 lg:mt-0 lg:shrink-0 lg:grow">
              <img
                alt="Support"
                src="/images/women_04.webp"
                className="mx-auto w-full max-w-md rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* FAQ — faq-sections/02-centered-accordion */}
      <div className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
              Frequently asked questions
            </h2>
            <dl className="mt-16 divide-y divide-gray-900/10 dark:divide-white/10">
              {faqs.map((faq) => (
                <Disclosure key={faq.question} as="div" defaultOpen className="py-6 first:pt-0 last:pb-0">
                  <dt>
                    <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-900 dark:text-white">
                      <span className="text-base/7 font-semibold">{faq.question}</span>
                      <span className="ml-6 flex h-7 items-center">
                        <PlusSmallIcon aria-hidden="true" className="size-6 group-data-open:hidden" />
                        <MinusSmallIcon aria-hidden="true" className="size-6 group-not-data-open:hidden" />
                      </span>
                    </DisclosureButton>
                  </dt>
                  <DisclosurePanel as="dd" className="mt-2 pr-12">
                    <p className="text-base/7 text-gray-600 dark:text-gray-400">{faq.answer}</p>
                  </DisclosurePanel>
                </Disclosure>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </>
  );
}
