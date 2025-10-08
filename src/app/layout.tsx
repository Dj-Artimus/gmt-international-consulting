import Footer from "@/components/layout/Footer";
import type { Metadata } from "next";
import { Poppins, Outfit } from "next/font/google";
import Header from "../components/layout/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "GMT International Consulting",
  description: "Consulting services for global businesses",
};

// Configure Poppins
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "900"], // Include the weights you need
  variable: "--font-poppins", // This is the CSS variable name
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "900"], // Include the weights you need
  variable: "--font-outfit", // This is the CSS variable name
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/logo.png" />
      </head>
      <body className={`antialiased ${poppins.variable} ${outfit.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
