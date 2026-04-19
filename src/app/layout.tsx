import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "./ThemeProvider";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import FeaturebaseMessenger from "./FeaturebaseMessenger";

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
        <FeaturebaseMessenger />
      </body>
    </html>
  );
}
