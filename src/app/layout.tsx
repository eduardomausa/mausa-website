import type { Metadata } from "next";
import { Comfortaa, Montserrat } from "next/font/google";
import "./global.scss";
import PrismicProviders from "@/context/PrismicProviders/PrismicProviders";

const comfortaa = Comfortaa({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-comfortaa",
});

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Eduardo Mausa",
  description: "Eduardo Mausa personal website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon-white.ico" type="image/png" />
      </head>
      <body className={`${comfortaa.variable} ${montserrat.variable}`}>
        <PrismicProviders>{children}</PrismicProviders>
      </body>
    </html>
  );
}
