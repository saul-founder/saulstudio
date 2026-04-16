"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import {
  Dialog,
  DialogPanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, GlobeAltIcon, MoonIcon, SunIcon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/support", label: "Support" },
];

const languages = [
  { code: "en-US", label: "English (US)" },
  { code: "de", label: "Deutsch" },
  { code: "it", label: "Italiano" },
  { code: "zh-TW", label: "中文 (繁體)" },
];

export default function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md dark:bg-gray-900/80">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Saul Studio</span>
            <img src="/images/logo-dark.webp" className="h-8 w-auto dark:hidden" alt="Saul Studio" />
            <img src="/images/logo-light.webp" className="h-8 w-auto not-dark:hidden" alt="Saul Studio" />
          </Link>
        </div>

        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={
                isActive(item.href)
                  ? "text-sm/6 font-semibold text-indigo-600 dark:text-indigo-400"
                  : "text-sm/6 font-semibold text-gray-900 hover:text-indigo-600 dark:text-white dark:hover:text-indigo-400"
              }
              aria-current={isActive(item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-1 items-center justify-end gap-x-2">
          <button
            type="button"
            aria-label="Toggle dark mode"
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            className="rounded-lg p-2.5 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
          >
            {mounted ? (
              resolvedTheme === "dark" ? (
                <SunIcon className="h-5 w-5" aria-hidden="true" />
              ) : (
                <MoonIcon className="h-5 w-5" aria-hidden="true" />
              )
            ) : (
              <span className="block h-5 w-5" aria-hidden="true" />
            )}
          </button>

          <Menu as="div" className="relative">
            <MenuButton
              aria-label="Change language"
              className="flex items-center rounded-lg p-2.5 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
            >
              <GlobeAltIcon className="h-5 w-5" aria-hidden="true" />
            </MenuButton>
            <MenuItems
              transition
              className="absolute right-0 z-50 mt-2 w-44 origin-top-right rounded-lg bg-white py-2 shadow-lg ring-1 ring-gray-900/5 transition focus:outline-none data-closed:scale-95 data-closed:opacity-0 dark:bg-gray-800 dark:ring-white/10"
            >
              {languages.map((lang) => (
                <MenuItem key={lang.code}>
                  <a
                    href="#"
                    className="block px-3 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 dark:text-gray-300 dark:data-focus:bg-gray-700 dark:data-focus:text-white"
                  >
                    {lang.label}
                  </a>
                </MenuItem>
              ))}
            </MenuItems>
          </Menu>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 lg:hidden dark:text-gray-400"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
      </nav>

      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 dark:bg-gray-900 dark:sm:ring-gray-100/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
              <span className="text-xl font-semibold text-gray-900 dark:text-white">Saul Studio</span>
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-400"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10 dark:divide-white/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={
                      isActive(item.href)
                        ? "-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-indigo-600 dark:text-indigo-400"
                        : "-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-white/5"
                    }
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
