import type { Metadata } from "next";
import { LanguageProvider } from "@/lib/LanguageContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wilfried LAWSON HELLU — Finance Analyst",
  description:
    "Finance professional specializing in Asset Management and Corporate Finance. Experience at BIDC/ECOWAS and SGI-TOGO capital markets. Seeking internship in Paris (March–July 2026).",
  keywords: ["finance analyst", "asset management", "corporate finance", "ECOWAS", "UEMOA", "Paris-Saclay", "internship", "portfolio optimization", "risk management", "DCF", "LBO"],
  authors: [{ name: "Wilfried LAWSON HELLU" }],
  openGraph: {
    title: "Wilfried LAWSON HELLU — Finance Analyst",
    description: "Finance professional with experience at BIDC/ECOWAS and SGI-TOGO. Asset Management & Corporate Finance specialist.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Inter:wght@300;400&display=swap" rel="stylesheet" />
      </head>
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
