import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  metadataBase: new URL("https://veyor.org"),

  title: {
    default: "VEYOR | Wood Works & Construction Solutions Chennai",
    template: "%s | VEYOR",
  },

  description:
    "VEYOR provides professional Wood Works, Metal Works, PVC Works, UPVC Works, Welding & Fabrication, False Ceiling, Aluminium Works, and Interior Solutions in Chennai with over 7 years of experience.",

  keywords: [
    "Wood Works Chennai",
    "Metal Works Chennai",
    "False Ceiling Chennai",
    "PVC Works Chennai",
    "UPVC Works Chennai",
    "Aluminium Works Chennai",
    "Interior Contractor Chennai",
    "Fabrication Works Chennai",
    "Construction Company Chennai",
    "Modular Kitchen Chennai",
    "Wardrobe Works Chennai",
    "VEYOR",
  ],

  authors: [{ name: "VEYOR" }],
  creator: "VEYOR",
  publisher: "VEYOR",

  openGraph: {
    title: "VEYOR | Build • Renovate • Create",
    description:
      "Professional Wood, Metal and Construction Solutions in Chennai.",
    url: "https://veyor.in",
    siteName: "VEYOR",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "VEYOR Construction Solutions",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "VEYOR | Build • Renovate • Create",
    description:
      "Professional Wood, Metal and Construction Solutions in Chennai.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },

  category: "Construction",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Navbar />

        {children}

        <Footer />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "VEYOR",
              image: "https://veyor.in/logo.png",
              address: {
                "@type": "PostalAddress",
                streetAddress: "No. 1/236, Bajanai Koil Street",
                addressLocality: "Padiyanallur",
                addressRegion: "Tamil Nadu",
                postalCode: "600052",
                addressCountry: "IN",
              },
              telephone: "+91 63697 49294",
              email: "kishoreharish6369@gmail.com",
              areaServed: "Chennai",
            }),
          }}
        />

        <SpeedInsights />
      </body>
    </html>
  );
}
