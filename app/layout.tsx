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
  title: "UniBrain Digital — Portfolio",
  description: "Portfolio of UniBrain Digital: modern product sites with embedded AI chatbots.",
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
      <body className={`${heading.variable} ${body.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
