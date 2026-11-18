import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "BBGC | Global Business & Technology Consultancy", template: "%s | BBGC" },
  description: "Global expertise. Real-world impact. BBGC brings together software engineering, cloud, data, and CTRM expertise to solve complex business challenges.",
  openGraph: { type: "website", siteName: "BBGC", title: "BBGC — Global expertise. Real-world impact.", description: "Business and technology consulting, built around your business." },
  icons: { icon: "/favicon.svg" },
};
export const viewport: Viewport = { themeColor: "#0a2244", width: "device-width", initialScale: 1 };
export default function RootLayout({ children }: { children: ReactNode }) {
  return <html lang="en-GB"><head><link rel="preload" href="/fonts/dm-sans-latin.woff2" as="font" type="font/woff2" crossOrigin="anonymous" /></head><body><a className="skip-link" href="#main-content">Skip to content</a><Header /><main id="main-content">{children}</main><Footer /></body></html>;
}
