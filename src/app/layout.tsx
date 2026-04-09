import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Saul Studio",
  description: "We're more than an agency of record, we're an agency of progress",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.documentElement.classList.add('dark');
              } else {
                document.documentElement.classList.remove('dark');
              }
            `,
          }}
        />
      </head>
      <body className="bg-white dark:bg-gray-900">
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.$crisp=[];window.CRISP_WEBSITE_ID="73d48fd0-3722-4dd2-a197-29a4089ca35d";
              (function(){var d=document;var s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();
            `,
          }}
        />
        <script src="/flowbite.min.js" defer></script>
        <script src="/theme-toggle.js" defer></script>
      </body>
    </html>
  );
}
