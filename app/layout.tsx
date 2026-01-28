import React from "react";
import type { Metadata, Viewport } from "next";
import { Cinzel, MedievalSharp } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { BackgroundMusic } from "@/components/background-music";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
});

const medievalSharp = MedievalSharp({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-medieval",
});

const cinzelDecorative = Cinzel({ // Declared the missing variable
  subsets: ["latin"],
  variable: "--font-cinzel-decorative",
});

export const metadata: Metadata = {
  title: "The Realm of Six | IIIT Bhagalpur Treasure Hunt",
  description:
    "Six Houses rise. One Victor claims the throne. Join the ultimate treasure hunt at IIIT Bhagalpur on 20th February.",
  generator: "v0.app",
  keywords: [
    "treasure hunt",
    "IIIT Bhagalpur",
    "college event",
    "The Realm of Six",
  ],
  icons: {
    icon: [
      {
        url: "/favicon.jpg"
      }
    ],
    apple: "/favicon.jpg",
  },
};

export const viewport: Viewport = {
  themeColor: "#1a0a0a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${cinzel.variable} ${medievalSharp.variable} font-sans antialiased bg-background text-foreground`}
      >
        <BackgroundMusic />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
