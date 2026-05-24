import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Lokith Duraisamy | SOC Analyst Portfolio",
    template: "%s | Lokith Duraisamy",
  },
  description:
    "Professional cybersecurity portfolio for Lokith Duraisamy, SOC Analyst focused on threat detection, SIEM engineering, and investigation workflows.",
  keywords: [
    "Lokith Duraisamy",
    "SOC Analyst",
    "Threat Detection",
    "SIEM Engineering",
    "Sysmon",
    "Wazuh",
    "Splunk",
    "Cybersecurity Portfolio",
    "Detection Engineering",
  ],
  authors: [{ name: "Lokith Duraisamy" }],
  creator: "Lokith Duraisamy",
  publisher: "Lokith Duraisamy",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Lokith Duraisamy | SOC Analyst Portfolio",
    title: "Lokith Duraisamy | SOC Analyst Portfolio",
    description:
      "Recruiter-ready cybersecurity portfolio featuring SentinelTrace, SOC workflow visualization, and evidence-backed case studies.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Lokith Duraisamy SOC Analyst portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lokith Duraisamy | SOC Analyst Portfolio",
    description:
      "Recruiter-ready cybersecurity portfolio featuring SentinelTrace, SOC workflow visualization, and evidence-backed case studies.",
    images: ["/opengraph-image"],
  },
  icons: {
    icon: "/icon",
    apple: "/apple-icon",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background font-sans text-foreground">
        <a href="#content" className="skip-link">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
