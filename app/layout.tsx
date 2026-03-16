import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TechRangers Consulting Services INC — Digital Product Studio",
  description:
    "TechRangers Consulting Services INC builds high-performance digital products — web apps, AI integrations, SaaS platforms and automation tools.",
  keywords: [
    "web development",
    "mobile apps",
    "SaaS",
    "AI integration",
    "automation",
    "consulting",
    "TechRangers",
    "TechRangers Consulting",
  ],
  authors: [{ name: "TechRangers Consulting Services INC", url: "https://techrangers.in" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://techrangers.in",
    siteName: "TechRangers Consulting Services INC",
    title: "TechRangers Consulting Services INC — Digital Product Studio",
    description:
      "We build high-performance digital products — web apps, AI tools, SaaS MVPs and automation. Ship faster with TechRangers.",
  },
  twitter: {
    card: "summary_large_image",
    title: "TechRangers Consulting Services INC — Digital Product Studio",
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
