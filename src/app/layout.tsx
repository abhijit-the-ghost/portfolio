import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { profile, bioShort } from "@/content/profile";
import { skills } from "@/content/skills";
import { siteUrl } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

const defaultTitle = `${profile.name} — Frontend Engineer`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: `%s — ${profile.name}`,
  },
  description: bioShort,
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  keywords: [
    profile.name,
    "Frontend Engineer",
    "Insight Workshop",
    ...skills.flatMap((group) => group.items),
    profile.location,
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: defaultTitle,
    description: bioShort,
    siteName: profile.name,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: bioShort,
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
  },
};

export const viewport: Viewport = {
  themeColor: "#0B0F14",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <header>
          <Navbar />
        </header>
        <main className="relative z-10 flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
