import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";
export const metadata: Metadata = {
  title: "Matt | Full-Stack Developer",
  description:
    "Junior full-stack developer building modern web applications with Next.js, React, and Node.js. Explore ApplyFlow, Bug Tracker, and Likhamat.",
  authors: [{ name: "Matt" }],
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
