import type { Metadata } from "next";
import { Playfair_Display, Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Healthcare Copper — Handcrafted in Kashmir",
  description:
    "Premium copper utensils and crockery rooted in centuries of Kashmiri craftsmanship. Each piece is hand-engraved using traditional Kandkari techniques by master artisans of the Valley.",
  keywords: [
    "Kashmir copper utensils",
    "Kashmiri handicrafts",
    "copper crockery",
    "Samovar Kashmir",
    "Kandkari copper",
    "handmade copper vessels",
    "Healthcare Copper",
    "pure copper kitchenware",
  ],
  openGraph: {
    title: "Healthcare Copper — Handcrafted in Kashmir",
    description:
      "Premium copper utensils and crockery rooted in centuries of Kashmiri craftsmanship.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${inter.variable} ${cormorant.variable}`}>
        {children}
      </body>
    </html>
  );
}
