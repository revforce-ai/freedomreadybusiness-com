import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import { GhlChatWidget } from "@/app/components/GhlChatWidget";
import { JsonLd } from "@/app/components/JsonLd";

const inter = Inter({
  variable: "--font-sans-stack",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-serif-stack",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz", "SOFT"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://freedomreadybusiness.com"),
  title: {
    default: "Freedom Ready Business — Build a business that gives you freedom",
    template: "%s · Freedom Ready Business",
  },
  description:
    "Freedom Ready Business is Kurt Baker's R.E.A.D.Y. Framework — built on a CEPA foundation — for building a company with real income, time, and a true exit plan, so you have options, not obligations.",
  keywords: [
    "Freedom Ready Business",
    "exit planning",
    "business value",
    "owner independence",
    "sell my business",
    "Kurt Baker",
    "CEPA",
  ],
  authors: [{ name: "Kurt Baker", url: "https://kurtisbaker.com" }],
  alternates: { canonical: "https://freedomreadybusiness.com" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Freedom Ready Business",
    description:
      "Build a business that creates significant value, runs without you, and is ready for anything — on your terms.",
    url: "https://freedomreadybusiness.com",
    siteName: "Freedom Ready Business",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Freedom Ready Business",
    description: "Build a business that gives you freedom.",
    creator: "@kurtisbaker",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-ink">
        <JsonLd />
        {children}
        <GhlChatWidget />
      </body>
    </html>
  );
}
