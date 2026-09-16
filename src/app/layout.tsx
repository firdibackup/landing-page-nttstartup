import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "NTT Startup Challenge",
    template: "%s | NTT Startup Challenge",
  },
  description: siteConfig.description,
  applicationName: "NTT Startup Challenge",
  authors: [{ name: siteConfig.organization }],
  creator: siteConfig.organization,
  publisher: siteConfig.organization,
  keywords: [
    "NTT Startup Challenge",
    "NTT Startup Challenge 2026",
    "NTT Startup Challange",
    "NTT Startup Challange 2026",
    "startup NTT",
    "NTT startup",
    "NTT startup event",
    "NTT startup program",
    "startup challenge NTT",
    "startup event",
    "startup challenge",
    "NTT innovation",
    "startup registration",
    "startup program",
    "ntt.com",
  ],
  category: "technology",
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: "NTT Startup Challenge",
    title: "NTT Startup Challenge",
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "NTT Startup Challenge social preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NTT Startup Challenge",
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  verification: {
    google: "c63lEJAOlR-uG-339zEGKwe1Z4_DiENwOFJDzQZreLo",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
