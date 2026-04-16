import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import ThemeProvider from "./ThemeProvider";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";

export const metadata: Metadata = {
  title: "Saul Studio",
  description: "Enterprise-grade software for the Shopify ecosystem.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="bg-white antialiased dark:bg-gray-900">
        <ThemeProvider>
          <SiteHeader />
          {children}
          <SiteFooter />
        </ThemeProvider>
        <Script id="crisp-chat" strategy="afterInteractive">
          {`
            window.$crisp=[];window.CRISP_WEBSITE_ID="73d48fd0-3722-4dd2-a197-29a4089ca35d";
            (function(){var d=document;var s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();
          `}
        </Script>
      </body>
    </html>
  );
}
