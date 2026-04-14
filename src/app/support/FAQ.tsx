"use client";

import { useState } from "react";

const items = [
  {
    q: "Do you take on client work?",
    a: (
      <p className="text-gray-500 dark:text-gray-400">
        No. We focus entirely on building and maintaining our own software products for the Shopify ecosystem. This allows us to put all of our energy into making them the best they can be.
      </p>
    ),
  },
  {
    q: "How can I reach you?",
    a: (
      <p className="text-gray-500 dark:text-gray-400">
        The fastest way is through the live chat — click the chat icon in the bottom right corner of any page. You can also email us at{" "}
        <a href="mailto:support@saulstudio.app" className="font-medium text-indigo-600 dark:text-indigo-500 hover:underline">
          support@saulstudio.app
        </a>
        .
      </p>
    ),
  },
  {
    q: "Where are you based?",
    a: (
      <p className="text-gray-500 dark:text-gray-400">
        Saul Studio is based in Germany. We work remotely and serve merchants worldwide.
      </p>
    ),
  },
  {
    q: "How do I get support for a specific product?",
    a: (
      <p className="text-gray-500 dark:text-gray-400">
        Visit our{" "}
        <a href="https://help.saulstudio.app" className="font-medium text-indigo-600 dark:text-indigo-500 hover:underline">
          Help Center
        </a>{" "}
        for detailed guides and answers to common questions about all of our products. If you can&apos;t find what you need, reach out via chat or email.
      </p>
    ),
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-screen-md">
      {items.map((item, idx) => {
        const isOpen = open === idx;
        return (
          <div key={item.q}>
            <h2>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : idx)}
                className={`flex w-full items-center justify-between border-b border-gray-200 py-5 text-left font-medium dark:border-gray-700 ${
                  isOpen ? "text-gray-900 dark:text-white" : "text-gray-500 dark:text-gray-400"
                }`}
                aria-expanded={isOpen}
              >
                <span>{item.q}</span>
                <svg
                  className={`h-6 w-6 shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </h2>
            {isOpen && (
              <div className="border-b border-gray-200 py-5 dark:border-gray-700">{item.a}</div>
            )}
          </div>
        );
      })}
    </div>
  );
}
