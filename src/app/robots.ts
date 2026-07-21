import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/:secret*", "/api/"],
      },
    ],
    sitemap: "https://kumarprince.is-a.dev/sitemap.xml",
  };
}
