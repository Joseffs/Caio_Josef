import type { Metadata } from "next";
import { Header } from "@/components/Nav/Header";
import { Footer } from "@/components/Footer/Footer";

import "./globals.css";
import Nav from "@/components/Nav/Nav";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="overflow-hidden">
        <Header />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
