import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { CountdownGrid } from "@/components/landing/countdown-grid";
import { siteConfig, eventConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "NTT Startup Challenge 2026",
  description:
    "NTT Startup Challenge 2026 is NTT's startup event and innovation program for founders, startup teams, and partners. Explore event details, startup registration, and collaboration opportunities.",
  alternates: {
    canonical: "/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
      description: siteConfig.description,
    },
    {
      "@type": "Event",
      name: eventConfig.name,
      description: eventConfig.description,
      startDate: eventConfig.startDate,
      endDate: eventConfig.endDate,
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      eventStatus: "https://schema.org/EventScheduled",
      location: {
        "@type": "Place",
        name: eventConfig.location.name,
        address: {
          "@type": "PostalAddress",
          ...eventConfig.location.address,
        },
      },
      organizer: {
        "@type": "Organization",
        name: siteConfig.organization,
        url: siteConfig.url,
      },
      offers: {
        "@type": "Offer",
        url: eventConfig.registrationUrl,
        price: "0",
        priceCurrency: "IDR",
        availability: "https://schema.org/InStock",
      },
      url: siteConfig.url,
      image: [`${siteConfig.url}${siteConfig.ogImage}`],
    },
  ],
};

const infoEventLabel = "Learn More About NTT Startup Challenge 2026";
const registrationLabel = "Startup Registration for NTT Startup Challenge";

const primaryButtonClass = cn(
  buttonVariants({ size: "lg" }),
  "min-h-14 rounded-[1.4rem] border-0 bg-[var(--ntt-blue)] px-6 py-3 text-center text-[0.92rem] font-extrabold leading-tight tracking-[0.02em] whitespace-normal text-white shadow-[0_22px_50px_rgba(37,111,184,0.28)] hover:bg-[var(--ntt-blue)] sm:px-7",
);

const lightButtonClass = cn(
  buttonVariants({ size: "lg" }),
  "min-h-14 rounded-[1.4rem] border border-white/16 bg-white/10 px-6 py-3 text-center text-[0.92rem] font-extrabold leading-tight tracking-[0.02em] whitespace-normal text-white hover:bg-white/10 sm:px-7",
);

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <main className="page-shell min-h-screen">
        <section className="overflow-hidden">
          <header className="border-b border-[color:var(--nav-line)] bg-white/98">
            <div className="mx-auto flex max-w-7xl items-center justify-center px-4  sm:px-6 lg:px-8">
              <Link href="/" aria-label="NTT Startup Challenge home">
                <Image
                  src="/logo-navbar.webp"
                  alt="NTT Startup Challenge Logo"
                  width={48}
                  height={48}
                  className="h-30 w-auto"
                />
              </Link>
            </div>
          </header>

          <div className="hero-placeholder relative border-t border-[color:var(--nav-line)]">
            <video
              className="absolute inset-0 h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              aria-label="NTT Startup Challenge background video"
            >
              <source src="/bg-video-2025.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-black/35" />

            <div className="relative mx-auto flex min-h-[calc(100svh-95px)] max-w-7xl flex-col items-center justify-center px-6 pb-24 pt-20 text-center">
              <div className="max-w-5xl">
                <p className="text-balance text-[2.7rem] leading-none font-extrabold uppercase  text-white sm:text-[4rem] lg:text-[4.65rem]">
                  Your next leap starts at
                </p>
                <h1 className="mt-2 text-balance text-[2.7rem] leading-none font-extrabold uppercase  text-[var(--ntt-blue-200)] sm:text-[4rem] lg:text-[4.65rem]">
                  NTT Startup Challenge
                </h1>
                <p className="mt-2 text-balance text-[2.7rem] leading-none font-extrabold uppercase  text-white sm:text-[4rem] lg:text-[4.65rem]">
                  Bigger, louder,{" "}
                  <span className="text-[var(--ntt-blue-200)]">bolder</span>
                </p>
              </div>

              <div className="mt-14 flex w-full max-w-4xl flex-col gap-4 lg:flex-row lg:justify-center">
                <a
                  href="https://www.ntt-startupchallenge.com"
                  className={cn(lightButtonClass, "w-full lg:flex-1")}
                >
                  {infoEventLabel}
                </a>
                <a
                  href={eventConfig.registrationUrl}
                  className={cn(primaryButtonClass, "w-full lg:flex-1")}
                >
                  {registrationLabel}
                </a>
              </div>
            </div>
          </div>
        </section>

        <section
          id="countdown"
          className="border-t border-white/5 py-20 sm:py-24"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 lg:gap-12 lg:px-8">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <p className="section-eyebrow">Event Countdown</p>
                <h2 className="mt-4 text-balance text-4xl font-extrabold uppercase  text-white sm:text-6xl">
                  Registration Closes in
                </h2>
              </div>
              <p className="max-w-sm text-sm leading-7 text-[var(--text-muted)] sm:text-base">
                Counting down to 11th November 2026
              </p>
            </div>

            <CountdownGrid targetDate={eventConfig.startDate} />
          </div>
        </section>

        <section id="about" className="border-t border-white/5 py-20 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.02fr_0.98fr] lg:items-start lg:gap-16 lg:px-8">
            <div className="max-w-3xl">
              <div className="h-[3px] w-28 bg-[var(--ntt-blue)]" />
              <p className="section-eyebrow mt-5">About Us</p>
              <h2 className="mt-4 text-balance text-4xl font-extrabold uppercase text-white sm:text-6xl">
                Connecting startups with real opportunity
              </h2>
              <p className="mt-10 text-lg leading-9 text-[var(--text-strong)] sm:text-md sm:leading-[1.85]">
                NTT Startup Challenge brings together innovation, collaboration,
                and growth opportunities for promising startups. Through this
                initiative, NTT connects founders with strategic networks,
                industry insight, and a broader innovation ecosystem.
              </p>
            </div>

            <div className="overflow-hidden rounded-[1.25rem] border border-[color:var(--line)] bg-[color:var(--surface-soft)]">
              <Image
                src="/about-us.webp"
                alt="Participants gathered during a previous NTT Startup Challenge event"
                width={1090}
                height={742}
                className="h-full w-full object-cover"
                priority={false}
              />
            </div>
          </div>
        </section>

        <section id="cta" className="border-t border-white/5 py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="rounded-[2rem] border border-[color:var(--line)] bg-[linear-gradient(135deg,#071226_0%,#0A1428_55%,#10284A_100%)] px-8 py-10 sm:px-12 sm:py-12">
              <div className="flex flex-col justify-center items-center gap-10 text-center">
                <div className="max-w-3xl">
                  <p className="section-eyebrow">Ready To Move Forward</p>
                  <h2 className="mt-4 text-balance text-4xl font-extrabold uppercase text-white sm:text-6xl">
                    Step into the NTT Startup Challenge
                  </h2>
                </div>

                <div className="flex w-full flex-col gap-4 lg:max-w-4xl lg:flex-row lg:justify-end">
                  <a
                    href="https://www.ntt-startupchallenge.com"
                    className={cn(lightButtonClass, "w-full lg:flex-1")}
                  >
                    {infoEventLabel}
                  </a>
                  <a
                    href={eventConfig.registrationUrl}
                    className={cn(primaryButtonClass, "w-full lg:flex-1")}
                  >
                    {registrationLabel}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="border-t border-white/5 py-8">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 text-sm text-[var(--text-muted)] sm:flex-row sm:items-center sm:justify-between lg:px-8">
            <p>{siteConfig.copyright}</p>
            <p>
              © Copyright Artworks by NTT Startup Challenge 2026. All rights
              reserved.
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
