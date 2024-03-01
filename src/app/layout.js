import "./globals.css";
import { Inter } from "next/font/google";
import React from "react";
const inter = Inter({ subsets: ["latin"] });
import dynamic from "next/dynamic";
const Navbar = dynamic(() => import("../components/Navbar"));
const Footer = dynamic(() => import("../components/Footer"));
import ModeProvider from "@/provider/ModeProvider";
export const metadata = {
  title: "My Portfolio",
  description: "Showcasing code, design and projects.",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="./favicon.ico" />
        {/* <link rel="apple" href="./favicon.ico" /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="This is a nextjs portfolio website with tailwind css. Author :Ashmin Sharma."
        />
      </head>
      <body className={inter.className}>
        <div className="box bg-bg">
          <ModeProvider>
            <Navbar />
            {children}
            <Footer />
          </ModeProvider>
        </div>
      </body>
    </html>
  );
}
