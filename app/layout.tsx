// app/layout.tsx (o app/layout.jsx)
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dancingScript = localFont({
  src: "../public/fonts/DancingScript-SemiBold.ttf",
  variable: "--font-dancing-script",
  display: "swap",
});

const royaleCoutureSans = localFont({
  src: "../public/fonts/RoyaleCouture-Sans.otf",
  variable: "--font-royale-couture-sans",
  display: "swap",
});

const royaleCoutureScript = localFont({
  src: "../public/fonts/RoyaleCouture-Script_2.otf",
  variable: "--font-royale-couture-script",
  display: "swap",
});

const royaleCoutureSerif = localFont({
  src: "../public/fonts/RoyaleCouture-Serif_2.otf",
  variable: "--font-royale-couture-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hotel Costa de Oro | Mazatlán, Sinaloa",
  description:
    "Disfruta de tus vacaciones en el Hotel Costa de Oro, ubicado en la Zona Dorada de Mazatlán. Hotel familiar frente al mar con alberca, buffet, noches temáticas, shows en vivo y todo incluido. La mejor opción para relajarte y divertirte con toda la familia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${dancingScript.variable} ${royaleCoutureSans.variable} ${royaleCoutureScript.variable} ${royaleCoutureSerif.variable} antialiased`}
      >
        {children}

        {/* Google tag (gtag.js) - cargamos solo una vez */}
        {/* <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-QT6XLVZ2KT"
          strategy="beforeInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            // Google Analytics 4
            gtag('config', 'G-QT6XLVZ2KT');

            // Google Ads
            gtag('config', 'AW-16783817896');
          `}
        </Script> */}
      </body>
    </html>
  );
}
