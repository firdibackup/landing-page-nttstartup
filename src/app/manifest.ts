import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "NTT Startup Challenge",
    short_name: "NTTSC",
    description:
      "Static landing page for NTT Startup Challenge built with Next.js and shadcn/ui.",
    start_url: "/",
    display: "standalone",
    background_color: "#050c1f",
    theme_color: "#256fb8",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
