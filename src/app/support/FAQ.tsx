"use client";

import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from "flowbite-react";

const items = [
  {
    q: "Do you take on client work?",
    a: <p className="text-gray-500 dark:text-gray-400">No. We focus entirely on building and maintaining our own software products for the Shopify ecosystem. This allows us to put all of our energy into making them the best they can be.</p>,
  },
  {
    q: "How can I reach you?",
    a: <p className="text-gray-500 dark:text-gray-400">The fastest way is through the live chat — click the chat icon in the bottom right corner of any page. You can also email us at <a href="mailto:support@saulstudio.app" className="font-medium text-indigo-600 dark:text-indigo-500 hover:underline">support@saulstudio.app</a>.</p>,
  },
  {
    q: "Where are you based?",
    a: <p className="text-gray-500 dark:text-gray-400">Saul Studio is based in Germany. We work remotely and serve merchants worldwide.</p>,
  },
  {
    q: "How do I get support for a specific product?",
    a: <p className="text-gray-500 dark:text-gray-400">Visit our <a href="https://help.saulstudio.app" className="font-medium text-indigo-600 dark:text-indigo-500 hover:underline">Help Center</a> for detailed guides and answers to common questions about all of our products. If you can&apos;t find what you need, reach out via chat or email.</p>,
  },
];

export default function FAQ() {
  return (
    <Accordion flush>
      {items.map((item) => (
        <AccordionPanel key={item.q}>
          <AccordionTitle>{item.q}</AccordionTitle>
          <AccordionContent>{item.a}</AccordionContent>
        </AccordionPanel>
      ))}
    </Accordion>
  );
}
