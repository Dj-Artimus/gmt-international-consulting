import Footer from "@/components/layout/Footer";
import type { Metadata } from "next";
import Header from "../components/layout/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "GMT International Consulting",
  description: "Consulting services for global businesses",
};

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
      <body className={`antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
