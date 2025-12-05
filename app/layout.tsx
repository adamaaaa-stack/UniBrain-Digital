import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const heading = Space_Grotesk({
  variable: "--font-prime-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const body = Inter({
  variable: "--font-prime-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://unibrain.app"),
  title: {
    default: "UniBrain Digital — Modern Website Design in Johannesburg",
    template: "%s | UniBrain Digital",
  },
  description:
    "UniBrain Digital builds modern, affordable, mobile-friendly websites for small businesses in Johannesburg and across South Africa. Starter sites from R300. Visit UniBrain.app to get started.",
  keywords: [
    "website design Johannesburg",
    "web developer Johannesburg",
    "small business website",
    "affordable website South Africa",
    "UniBrain Digital",
    "business website design",
  ],
  authors: [{ name: "UniBrain Digital" }],
  openGraph: {
    title: "UniBrain Digital — Modern Websites for Small Businesses",
    description:
      "Get a clean, professional website for your small business. UniBrain Digital builds fast, mobile-friendly sites from just R300.",
    url: "https://unibrain.app",
    siteName: "UniBrain Digital",
    type: "website",
    locale: "en_ZA",
  },
  twitter: {
    card: "summary_large_image",
    title: "UniBrain Digital — Modern Website Design in Johannesburg",
    description:
      "Modern, affordable websites for small businesses in Johannesburg and across South Africa.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="6offM69pD82oFOX5xZB2fp8Mb9TZuU9v-1-_5wwJbqU" />
        <meta name="google-site-verification" content="LzDcr_WxyD_ptFQGuS9aS4Yl0zoC_WnwVEKEGQczTPE" />
      </head>
      <body className={`${heading.variable} ${body.variable} antialiased`}>{children}</body>
    </html>
  );
}
