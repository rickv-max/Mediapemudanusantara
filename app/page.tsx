"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

type PortfolioItem = {
  id: number;
  title: string;
  description: string;
  thumbnail: string | null;
  video_url: string | null;
  slug: string;
};

const BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://127.0.0.1:8000";

export default function Home() {
  const [selectedImage, setSelectedImage] = useState("/thumb1.jpg");
  const [items, setItems] = useState<PortfolioItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(`${BASE_URL}/portfolio/`, { cache: "no-store" });
        const data = await res.json();
        setItems(data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <div className="py-6 md:py-10">
      {/* NAVBAR SINGKAT (opsional, kalau ada navbar global bisa hapus) */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200">
        <div className="flex items-center justify-between h-14">
          <div className="flex items-center gap-3">
            <Image src="/logo-mpn.png" alt="Logo MPN" width={36} height={36} />
            <span className="font-semibold text-teal-700">Media Pemuda Nusantara</span>
          </div>
          <nav className="hidden sm:flex items-center gap-4">
            <a href="#layanan" className="hover:text-teal-600">Layanan</a>
            <a href="#portofolio" className="hover:text-teal-600">Portofolio</a>
            <a href="#tentang" className="hover:text-teal-600">Tentang</a>
            <a
              href="#kontak"
              className="ml-2 px-3 py-2 rounded-lg bg-teal-600 text-white hover:bg-teal-700"
            >
              Hubungi Kami
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12 pt-8 md:pt-12"
      >
        <div className="space-y-6">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight text-teal-800">
            Komunitas Jasa Live Streaming & Dokumentasi
          </h1>
          <p className="text-base md:text-lg text-gray-600">
            MPN membantu brand, event, dan institusi menghadirkan siaran langsung
            berkualitas serta dokumentasi foto/video yang rapi dan profesional.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#kontak"
              className="px-5 py-3 rounded-lg bg-teal-600 hover:bg-teal-700 text-white"
            >
              Hubungi Kami
            </a>
            <a
              href="#portofolio"
              className="px-5 py-3 rounded-lg border border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white"
            >
              Lihat Portofolio →
            </a>
          </div>
        </div>

        {/* Thumbnail Preview */}
        <div className="flex flex-col items-stretch gap-4 no-shrink">
          <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow">
            <Image
              src={selectedImage}
              alt="Preview"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>
          <div className="grid grid-cols-3 gap-3">
            {["/thumb1.jpg", "/thumb2.jpg", "/thumb3.jpg"].map((img, i) => (
              <button
                key={i}
                onClick={() => setSelectedImage(img)}
                className="relative h-20 rounded-lg overflow-hidden shadow"
              >
                <Image
                  src={img}
                  alt={`Thumbnail ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 33vw, 10vw"
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </motion.section>

      {/* PAKET LAYANAN */}
      <motion.section
        id="layanan"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-16 md:py-20"
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center text-teal-700">
          Paket Layanan
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          <div className="p-6 md:p-8 rounded-xl shadow-lg bg-teal-700 text-white">
            <h3 className="text-xl md:text-2xl font-bold mb-4">
              Rp. 750.000 <span className="text-sm font-normal">/ Paket Reguler</span>
            </h3>
            <ul className="space-y-2 text-teal-100">
              <li>📷 2 Camera</li>
              <li>💻 Capture Card</li>
              <li>▶️ Live Youtube / Facebook</li>
              <li>🎞️ Record Full HD</li>
            </ul>
            <a
              href="https://wa.me/6285856618965?text=Halo,%20saya%20mau%20pesan%20Paket%20Reguler"
              target="_blank"
              className="mt-6 inline-block px-5 py-2 bg-white text-teal-700 rounded-lg font-medium hover:bg-gray-100"
            >
              Pesan Sekarang
            </a>
          </div>

          <div className="p-6 md:p-8 rounded-xl shadow-lg bg-teal-500 text-white">
            <h3 className="text-xl md:text-2xl font-bold mb-4">
              Rp. 1.050.000 <span className="text-sm font-normal">/ Paket Premium</span>
            </h3>
            <ul className="space-y-2 text-teal-50">
              <li>📷 3 Camera</li>
              <li>💻 Capture Card</li>
              <li>▶️ Live Youtube / Facebook</li>
              <li>🎞️ Record Full HD</li>
            </ul>
            <a
              href="https://wa.me/6285856618965?text=Halo,%20saya%20mau%20pesan%20Paket%20Premium"
              target="_blank"
              className="mt-6 inline-block px-5 py-2 bg-white text-teal-700 rounded-lg font-medium hover:bg-gray-100"
            >
              Pesan Sekarang
            </a>
          </div>
        </div>

        {/* Jasa Tambahan */}
        <div className="mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          <div className="p-6 md:p-8 rounded-xl shadow-lg bg-white">
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900">Jasa Videografer</h3>
            <ul className="space-y-2 text-gray-700">
              <li>🎥 1 Video Full Acara</li>
              <li className="font-bold">Rp. 300.000</li>
            </ul>
            <a
              href="https://wa.me/6285856618965?text=Halo,%20saya%20mau%20pesan%20Jasa%20Videografer"
              target="_blank"
              className="mt-6 inline-block px-5 py-2 bg-teal-600 text-white rounded-lg font-medium hover:bg-teal-700"
            >
              Pesan Sekarang
            </a>
          </div>

          <div className="p-6 md:p-8 rounded-xl shadow-lg bg-white">
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900">Jasa Fotografer</h3>
            <ul className="space-y-3 text-gray-700">
              <li>📸 1 Rol (30 Foto) — <span className="font-bold">Rp. 75.000</span></li>
              <li>📸 2 Rol (60 Foto) — <span className="font-bold">Rp. 150.000</span></li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://wa.me/6285856618965?text=Halo,%20saya%20mau%20pesan%20Fotografer%201%20Rol"
                target="_blank"
                className="px-5 py-2 bg-teal-600 text-white rounded-lg font-medium hover:bg-teal-700"
              >
                Pilih 1 Rol
              </a>
              <a
                href="https://wa.me/6285856618965?text=Halo,%20saya%20mau%20pesan%20Fotografer%202%20Rol"
                target="_blank"
                className="px-5 py-2 bg-teal-600 text-white rounded-lg font-medium hover:bg-teal-700"
              >
                Pilih 2 Rol
              </a>
            </div>
          </div>
        </div>
      </motion.section>

      {/* PORTOFOLIO */}
      <motion.section
        id="portofolio"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-16 md:py-20 bg-gray-200 rounded-2xl"
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-teal-700">
          Portofolio
        </h2>

        {loading ? (
          <p className="text-center text-gray-600">Memuat...</p>
        ) : items.length === 0 ? (
          <p className="text-center text-gray-600">Belum ada item dipublish.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((it) => (
              <article key={it.id} className="bg-white rounded-xl shadow overflow-hidden">
                <div className="relative w-full aspect-video">
                  {it.thumbnail ? (
                    <Image
                      src={it.thumbnail}
                      alt={it.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                      unoptimized
                    />
                  ) : (
                    <div className="absolute inset-0 grid place-items-center bg-gray-100">
                      <span className="text-gray-500 text-sm">Tidak ada thumbnail</span>
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg">{it.title}</h3>
                  <p className="text-sm text-gray-600 line-clamp-2">{it.description}</p>
                </div>
              </article>
            ))}
          </div>
        )}
      </motion.section>

      {/* Tentang Kami */}
      <motion.section
        id="tentang"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="px-8 py-20 bg-white"
      >
        <h2 className="text-3xl font-bold mb-8 text-center text-teal-700">
          Tentang Kami
        </h2>
        <p className="max-w-3xl mx-auto text-center text-lg text-gray-700">
          Media Pemuda Nusantara adalah komunitas kreatif yang bergerak di bidang
          live streaming & dokumentasi. Kami berkomitmen menghadirkan layanan
          terbaik dengan tim profesional.
        </p>
      </motion.section>

      {/* Kontak */}
      <motion.section
        id="kontak"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="px-8 py-20 bg-gray-200"
      >
        <h2 className="text-3xl font-bold mb-8 text-center text-teal-700">
          Hubungi Kami
        </h2>
        <form className="max-w-xl mx-auto space-y-4">
          <input
            type="text"
            placeholder="Nama"
            className="w-full px-4 py-3 rounded-lg text-gray-900 bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded-lg text-gray-900 bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <textarea
            placeholder="Pesan"
            rows={5}
            className="w-full px-4 py-3 rounded-lg text-gray-900 bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-teal-600 hover:bg-teal-700 rounded-lg w-full text-white font-medium"
          >
            Kirim Pesan
          </button>
        </form>
      </motion.section>

      {/* Footer */}
      <footer className="text-center py-6 bg-gray-800 text-gray-200 border-t border-gray-700">
        <p>© 2025 Media Pemuda Nusantara. All rights reserved.</p>
      </footer>
    </div>
  );
}
