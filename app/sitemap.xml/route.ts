import { NextResponse } from "next/server";

const routes = ["/"];

export async function GET(request: Request) {
  const host = request.headers.get("host");
  const base =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    (host ? `https://${host}` : "https://primesitedigital.vercel.app");

  const urls = routes
    .map(
      (path) => `
  <url>
    <loc>${base}${path}</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>`,
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new NextResponse(xml.trim(), {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
