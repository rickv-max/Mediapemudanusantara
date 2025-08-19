// app/layout.tsx
import "./global.css";
import type { Metadata, Viewport } from "next";
import Script from "next/script";

// ✅ Metadata default Next.js (judul, deskripsi, dll)
export const metadata: Metadata = {
  title: "Media Pemuda Nusantara | Jasa Live Streaming & Dokumentasi",
  description:
    "Media Pemuda Nusantara menyediakan jasa live streaming, dokumentasi, fotografer, videografer, drone, dan proyektor untuk berbagai acara.",
  keywords: [
    "Jasa Live Streaming",
    "Dokumentasi Acara",
    "Fotografer",
    "Videografer",
    "Drone",
    "Sewa Proyektor",
    "Media Pemuda Nusantara",
  ],
  openGraph: {
    title: "Media Pemuda Nusantara",
    description:
      "Jasa Live Streaming & Dokumentasi terbaik untuk pernikahan, seminar, konser, dan acara penting Anda.",
    url: "https://mediapemudanusantara.com",
    siteName: "Media Pemuda Nusantara",
    images: [
      {
        url: "https://mediapemudanusantara.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Media Pemuda Nusantara",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

// ✅ viewport penting untuk mobile
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

// ✅ Layout global
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <head>
        {/* ✅ Schema JSON-LD */}
        <Script
          id="schema-org"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Media Pemuda Nusantara",
              description:
                "Jasa Live Streaming, Dokumentasi, Fotografer, Videografer, Drone, dan Proyektor untuk berbagai acara.",
              url: "https://mediapemudanusantara.com",
              logo: "https://mediapemudanusantara.netlify.app/logo-mpn.png",
              image: "https://mediapemudanusantara.com/og-image.jpg",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+62-858-5661-8965",
                contactType: "customer service",
                areaServed: "ID",
                availableLanguage: ["Indonesian"],
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: "Jl. Contoh No. 123",
                addressLocality: "Jakarta",
                postalCode: "10110",
                addressCountry: "ID",
              },
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-gray-100 text-gray-900 antialiased">
        <div className="container px-4 md:px-6">{children}</div>
      </body>
    </html>
  );
}
