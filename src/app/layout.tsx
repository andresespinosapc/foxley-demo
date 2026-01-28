import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { OrganizationJsonLd } from "@/components/seo/JsonLd";
import { companyData } from "@/data/company";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://foxley.cl"),
  title: {
    default: `${companyData.name} | Soluciones de Cartelería Digital`,
    template: `%s | ${companyData.name}`,
  },
  description: companyData.description,
  keywords: [
    "digital signage",
    "cartelería digital",
    "pantallas LED",
    "señalización digital",
    "videowalls",
    "tótems interactivos",
    "publicidad digital",
    "Chile",
  ],
  authors: [{ name: companyData.name }],
  creator: companyData.name,
  publisher: companyData.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "https://foxley.cl",
    siteName: companyData.name,
    title: companyData.name,
    description: companyData.description,
    images: [
      {
        url: "/images/og-default.jpg",
        width: 1200,
        height: 630,
        alt: companyData.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: companyData.name,
    description: companyData.description,
    images: ["/images/og-default.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <OrganizationJsonLd />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-slate-950`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
