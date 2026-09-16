export const siteConfig = {
  name: "NTT Startup Challenge",
  organization: "NTT Startup Challenge",
  description:
    "NTT Startup Challenge 2026 is NTT's startup innovation program connecting founders, startups, and ecosystem partners through event information, registration, and collaboration opportunities.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://2026.ntt-startupchallenge.com",
  ogImage: "/social-preview.svg",
  copyright: "© 2026 NTT Startup Challenge",
} as const;

export const eventConfig = {
  name: "NTT Startup Challenge",
  description:
    "NTT Startup Challenge 2026 is a startup challenge by NTT that connects startups and founders with strategic networks, industry insight, event access, and opportunities within the NTT ecosystem.",
  startDate: "2026-11-11",
  endDate: "2026-11-11",
  registrationUrl: "https://www.ntt-startupchallenge.com/register",
  location: {
    name: "Jakarta",
    address: {
      addressLocality: "Jakarta",
      addressRegion: "DKI Jakarta",
      addressCountry: "ID",
    },
  },
} as const;
