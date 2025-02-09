import type { Metadata } from "next";
import localFont from "next/font/local";
import {Montserrat} from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const tanPearl = localFont({
  src: "./fonts/tan-pearl.otf",
  variable: "--font-tanpearl",
  weight: "300",
  display: 'swap',
});

const mont = Montserrat({
  variable: "--font-mont",
  subsets: ['latin'],
  weight: ["400", "600"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Deh do Marketing",
  description: "Marketing com objetivo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${mont.className} ${tanPearl.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
