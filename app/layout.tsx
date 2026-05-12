import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/blocks/Navbar";
import Footer from "@/components/blocks/Footer";
import FloatingNav from "@/components/FloatingNav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "ABN — Aviation Business News",
    template: "%s · ABN",
  },
  description:
    "Aviation Business News (ABN) — a B2B publishing hub covering Cabin, Cargo, MRO and Regional aviation. Wireframe proposal.",
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
      <body className="min-h-full bg-white text-gray-900">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingNav />
      </body>
    </html>
  );
}
