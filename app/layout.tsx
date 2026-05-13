import type { Metadata } from "next";
import { Comic_Neue } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/blocks/Navbar";
import Footer from "@/components/blocks/Footer";

const comicNeue = Comic_Neue({
  variable: "--font-geist-sans",
  weight: ["300", "400", "700"],
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
      className={`${comicNeue.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-white text-gray-900">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
