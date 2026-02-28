import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "@/lib/LanguageContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wilfried LAWSON HELLU | Finance Analyst | Asset Management",
  description:
    "Finance professional specializing in Asset Management and Corporate Finance. Experience at BIDC/ECOWAS and SGI-TOGO capital markets. Seeking internship in Paris (March–July 2026).",
  keywords: [
    "finance analyst",
    "asset management",
    "corporate finance",
    "ECOWAS",
    "UEMOA",
    "Paris-Saclay",
    "internship",
    "portfolio optimization",
    "risk management",
    "DCF",
    "LBO",
  ],
  authors: [{ name: "Wilfried LAWSON HELLU" }],
  openGraph: {
    title: "Wilfried LAWSON HELLU | Finance Analyst",
    description:
      "Finance professional with experience at BIDC/ECOWAS and SGI-TOGO. Asset Management & Corporate Finance specialist.",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
