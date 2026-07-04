import type { MetadataRoute } from "next";
import settings from "@/data/settings.json";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: settings.siteName,
    short_name: settings.siteNameShort,
    description: "EduSchool Bali — Sekolah Internasional Modern di Bali",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#377EF9",
    icons: [
      { src: "/favicon.ico", sizes: "any", type: "image/x-icon" },
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
