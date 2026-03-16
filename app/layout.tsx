import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TechRangers — A Dexzen Labs Initiative",
  description:
    "TechRangers builds high-performance digital products — web apps, AI integrations, SaaS platforms and automation tools. A Dexzen Labs initiative.",
  keywords: [
    "web development",
    "mobile apps",
    "SaaS",
    "AI integration",
    "automation",
    "Dexzen Labs",
    "TechRangers",
  ],
  authors: [{ name: "Dexzen Labs", url: "https://dexzenlabs.com" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://techrangers.com",
    siteName: "TechRangers",
    title: "TechRangers — A Dexzen Labs Initiative",
    description:
      "We build high-performance digital products — web apps, AI tools, SaaS MVPs and automation. Ship faster with TechRangers.",
  },
  twitter: {
    card: "summary_large_image",
    title: "TechRangers — A Dexzen Labs Initiative",
    description:
      "We build high-performance digital products — web apps, AI tools, SaaS MVPs and automation.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`antialiased bg-slate-950 text-slate-100`}
      >
        {children}
      </body>
    </html>
  );
}
