import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host");
  const protocol = requestHeaders.get("x-forwarded-proto") ?? "https";
  const metadataBase = new URL(host ? `${protocol}://${host}` : "https://jamie-ding-lab.sites.openai.com");

  return {
    metadataBase,
    title: "Jamie — Product, Systems & Applied Intelligence",
    description:
      "Turning complex resources into operational systems, then extending them with intelligence and real-world interaction.",
    alternates: {
      canonical: "/",
      languages: {
        en: "/",
        "zh-CN": "/zh",
      },
    },
    icons: {
      icon: "/favicon.svg",
      shortcut: "/favicon.svg",
    },
    openGraph: {
      title: "Jamie — Product, Systems & Applied Intelligence",
      description: "From trusted digital resources to intelligent products and real-world experiences.",
      images: [new URL("/og.png", metadataBase).toString()],
    },
    twitter: {
      card: "summary_large_image",
      title: "Jamie — Product, Systems & Applied Intelligence",
      description: "From trusted digital resources to intelligent products and real-world experiences.",
      images: [new URL("/og.png", metadataBase).toString()],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
