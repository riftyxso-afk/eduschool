import type { MetadataRoute } from "next";
import settings from "@/data/settings.json";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = settings.siteUrl;

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/api/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
