"use client";

import { usePathname } from "next/navigation";

const links = [
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/support", label: "Support" },
];

const activeClass =
  "block rounded px-3 py-2 text-blue-700 lg:p-0 dark:text-blue-500";
const normalClass =
  "block rounded px-3 py-2 text-gray-700 hover:bg-gray-100 lg:p-0 lg:hover:bg-transparent lg:hover:text-blue-700 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent";

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium lg:mt-0 lg:flex-row lg:space-x-8 lg:border-0 lg:bg-transparent lg:p-0 dark:border-gray-700 dark:bg-gray-800 lg:dark:bg-transparent">
      {links.map(({ href, label }) => {
        const isActive =
          href === "/"
            ? pathname === "/"
            : pathname.startsWith(href) && href !== "#";

        return (
          <li key={label}>
            <a
              href={href}
              className={isActive ? activeClass : normalClass}
              {...(isActive ? { "aria-current": "page" as const } : {})}
            >
              {label}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
