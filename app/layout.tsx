"use client"; // for usePathname

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";


export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // List of paths where Navbar/Footer are hidden
  const noNavFooter = ["/login", "/signup"];

  const hideNavFooter = noNavFooter.includes(pathname);

  return (
    <html lang="en">
      <body>
        {!hideNavFooter && <Navbar />}
        <main className="relative overflow-hidden">{children}</main>
        {!hideNavFooter && <Footer />}
      </body>
    </html>
  );
}
