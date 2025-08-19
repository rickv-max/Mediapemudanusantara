// app/layout.tsx
import "./global.css";
import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Media Pemuda Nusantara",
  description: "Jasa Live Streaming & Dokumentasi",
};

// ✅ ini penting untuk mobile
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className="min-h-screen bg-gray-100 text-gray-900 antialiased">
        {/* ✅ pembungkus agar lebar maksimal enak di berbagai layar */}
        <div className="container px-4 md:px-6">{children}</div>
      </body>
    </html>
  );
}
