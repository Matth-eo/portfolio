import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500"],
});
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["700"],
});

export const metadata: Metadata = {
  title: "Matt Manamtam | Portfolio",
  description: "Full-stack developer – React • Next.js • MERN",
  authors: [{ name: "Matt Manamtam" }],
  keywords: [
    "Matt Manamtam",
    "portfolio",
    "Next.js",
    "React",
    "MERN",
    "web developer",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${playfair.variable} bg-neutral-900 text-gray-100 antialiased`}
      >
        <Navbar />
        <main className="mx-auto max-w-6xl px-4">{children}</main>
      </body>
    </html>
  );
}
