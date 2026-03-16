import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TechRangers — Digital Consulting & Product Engineering",
  description:
    "TechRangers is a full-service digital consulting firm — building high-performance web apps, AI integrations, SaaS platforms and automation tools for ambitious businesses.",
  keywords: [
    "web development",
    "mobile apps",
    "SaaS",
    "AI integration",
    "automation",
    "digital consulting",
    "TechRangers",
  ],
  authors: [{ name: "TechRangers", url: "https://techrangers.in" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://techrangers.in",
    siteName: "TechRangers",
    title: "TechRangers — Digital Consulting & Product Engineering",
    description:
      "We build high-performance digital products — web apps, AI tools, SaaS MVPs and automation. Ship faster with TechRangers.",
  },
  twitter: {
    card: "summary_large_image",
    title: "TechRangers — Digital Consulting & Product Engineering",
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
      <body className="antialiased bg-slate-950 text-slate-100">
        {children}
      </body>
    </html>
  );
}
