// app/layout.tsx (o app/layout.jsx)
import type { Metadata } from "next";
import localFont from "next/font/local";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const siteName = "Hotel Costa de Oro";
const defaultTitle = "Bodas en la Playa en Mazatlán | Hotel Costa de Oro";
const defaultDescription =
  "Celebra tu boda en la playa en Mazatlán con Hotel Costa de Oro. Paquetes de boda, wedding planner, banquete, hospedaje frente al mar y atardeceres en la Zona Dorada.";

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
  metadataBase: new URL(SITE_URL),
  title: {
    default: defaultTitle,
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  keywords: [
    "bodas en mazatlán",
    "boda en la playa",
    "hotel costa de oro",
    "wedding planner mazatlán",
    "paquetes de boda mazatlán",
    "banquetes de boda mazatlán",
    "hotel para bodas en sinaloa",
    "boda frente al mar",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: defaultTitle,
    description: defaultDescription,
    siteName,
    locale: "es_MX",
    images: [
      {
        url: `${SITE_URL}/img/costa-hero.webp`,
        width: 1200,
        height: 630,
        alt: "Montaje de boda frente al mar en Hotel Costa de Oro, Mazatlán",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: [`${SITE_URL}/img/costa-hero.webp`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "weddings",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${dancingScript.variable} ${royaleCoutureSans.variable} ${royaleCoutureScript.variable} ${royaleCoutureSerif.variable} antialiased`}
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
