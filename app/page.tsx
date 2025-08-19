"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function Home() {
  const [selectedImage, setSelectedImage] = useState("/thumb1.jpg");
  const [portfolio, setPortfolio] = useState<any[]>([]);
  const portfolioRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/portfolio/")
      .then((res) => res.json())
      .then((data) => setPortfolio(data))
      .catch(() => {
        // fallback placeholder
        setPortfolio([
          { image: "/thumb1.jpg", title: "Placeholder 1" },
          { image: "/thumb2.jpg", title: "Placeholder 2" },
          { image: "/thumb3.jpg", title: "Placeholder 3" },
          { image: "/thumb1.jpg", title: "Placeholder 4" },
          { image: "/thumb2.jpg", title: "Placeholder 5" },
        ]);
      });
  }, []);

  // Auto scroll portfolio
useEffect(() => {
  const interval = setInterval(() => {
    if (portfolioRef.current) {
      portfolioRef.current.scrollBy({ left: 220 }); // tidak smooth

      // reset ke awal jika sudah mentok
      if (
        portfolioRef.current.scrollLeft + portfolioRef.current.clientWidth >=
        portfolioRef.current.scrollWidth
      ) {
        portfolioRef.current.scrollTo({ left: 0 }); // langsung lompat
      }
    }
  }, 3000);

  return () => clearInterval(interval);
}, []);

  // Fungsi redirect WhatsApp
  const pesanWhatsApp = (layanan: string) => {
    const noWa = "6285856618965";
    const pesan = encodeURIComponent(`Halo, saya ingin pesan layanan: ${layanan}`);
    window.open(`https://wa.me/${noWa}?text=${pesan}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 text-gray-900">
      {/* Navbar */}
      <header className="flex justify-between items-center px-2 sm:px-8 py-3 sticky top-0 bg-gray-50/90 backdrop-blur z-50 border-b border-gray-300 shadow-sm">
        <div className="flex items-center gap-2">
          <Image
            src="/logo-mpn.png"
            alt="Logo MPN"
            width={32}
            height={32}
            className="rounded-full"
          />
          <span className="text-xl sm:text-2xl font-bold text-teal-700">
            Media Pemuda Nusantara
          </span>
        </div>

        <nav className="hidden sm:flex items-center gap-6">
          <a href="#layanan" className="hover:text-teal-600 transition">
            Layanan
          </a>
          <a href="#portofolio" className="hover:text-teal-600 transition">
            Portofolio
          </a>
          <a href="#tentang" className="hover:text-teal-600 transition">
            Tentang
          </a>
          <a
            href="#kontak"
            className="ml-4 px-4 py-2 rounded-lg bg-teal-600 hover:bg-teal-700 transition text-white"
          >
            Hubungi Kami
          </a>
        </nav>
      </header>

      {/* Hero */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 items-center px-2 sm:px-8 py-16 sm:py-20 gap-8 sm:gap-12"
      >
        <div>
          <h1 className="text-3xl sm:text-5xl font-bold leading-tight mb-4 sm:mb-6 text-teal-800">
            Komunitas Jasa Live Streaming & Dokumentasi
          </h1>
          <p className="mb-6 sm:mb-8 text-lg text-gray-600">
            MPN membantu brand, event, dan institusi menghadirkan siaran langsung
            berkualitas serta dokumentasi foto/video yang rapi dan profesional.
          </p>
          <div className="flex gap-3 sm:gap-4">
            <a
              href="#kontak"
              className="px-5 py-2 sm:px-6 sm:py-3 rounded-lg bg-teal-600 hover:bg-teal-700 transition text-white"
            >
              Hubungi Kami
            </a>
            <a
              href="#portofolio"
              className="px-5 py-2 sm:px-6 sm:py-3 rounded-lg border border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white transition"
            >
              Lihat Portofolio →
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-full h-48 sm:h-64 bg-gray-300 rounded-xl flex items-center justify-center mb-4 shadow-md overflow-hidden">
            <Image
              src={selectedImage}
              alt="Preview"
              width={500}
              height={250}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="grid grid-cols-3 gap-2 sm:gap-4 w-full">
            {["/thumb1.jpg", "/thumb2.jpg", "/thumb3.jpg"].map((img, i) => (
              <button
                key={i}
                onClick={() => setSelectedImage(img)}
                className="h-16 sm:h-20 bg-gray-300 rounded-xl shadow overflow-hidden"
              >
                <Image
                  src={img}
                  alt={`Thumbnail ${i + 1}`}
                  width={100}
                  height={80}
                  className="object-cover w-full h-full"
                />
              </button>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Paket Layanan */}
      <motion.section
        id="layanan"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="px-2 sm:px-8 py-16 sm:py-20 bg-gradient-to-br from-gray-200 to-gray-100 text-gray-900"
      >
        <h2 className="text-3xl font-bold mb-8 sm:mb-12 text-center text-teal-700">
          Paket Layanan
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 max-w-6xl mx-auto">
          {/* Paket Reguler */}
          <div className="aspect-[4/5] p-4 rounded-xl shadow-lg bg-teal-700 text-white flex flex-col justify-between hover:scale-105 transition transform">
            <div>
              <h3 className="text-lg font-bold mb-2">
                Rp. 750.000 <span className="text-sm font-normal">/ Paket Reguler</span>
              </h3>
              <ul className="space-y-1 text-teal-100 text-sm">
                <li>📷 2 Camera</li>
                <li>💻 Capture Card</li>
                <li>▶️ Live Youtube / Facebook</li>
                <li>🎞️ Record Full HD</li>
              </ul>
            </div>
            <button
              onClick={() => pesanWhatsApp("Paket Reguler")}
              className="mt-4 px-4 py-2 bg-white text-teal-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition w-fit"
            >
              Pesan Sekarang
            </button>
          </div>

          {/* Paket Premium */}
          <div className="aspect-[4/5] p-4 rounded-xl shadow-lg bg-teal-700 text-white flex flex-col justify-between hover:scale-105 transition transform">
            <div>
              <h3 className="text-lg font-bold mb-2">
                Rp. 1.050.000{" "}
                <span className="text-sm font-normal">/ Paket Premium</span>
              </h3>
              <ul className="space-y-1 text-teal-50 text-sm">
                <li>📷 3 Camera</li>
                <li>💻 Capture Card</li>
                <li>▶️ Live Youtube / Facebook</li>
                <li>🎞️ Record Full HD</li>
              </ul>
            </div>
            <button
              onClick={() => pesanWhatsApp("Paket Premium")}
              className="mt-4 px-4 py-2 bg-white text-teal-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition w-fit"
            >
              Pesan Sekarang
            </button>
          </div>

          {/* Jasa Videographer */}
          <div className="aspect-[4/5] p-4 rounded-xl shadow-lg bg-teal-700 text-white flex flex-col justify-between hover:scale-105 transition transform">
            <div>
              <h3 className="text-lg font-bold mb-2 text-gray-800">Jasa Videographer</h3>
              <p className="text-gray-600 text-sm">1 Video Rp. 300.000</p>
            </div>
            <button
              onClick={() => pesanWhatsApp("Jasa Videographer")}
              className="mt-4 px-4 py-2 bg-teal-600 text-white rounded-lg text-sm font-medium hover:bg-teal-700 transition w-fit"
            >
              Pesan Sekarang
            </button>
          </div>

          {/* Jasa Photographer */}
          <div className="aspect-[4/5] p-4 rounded-xl shadow-lg bg-teal-700 text-white flex flex-col justify-between hover:scale-105 transition transform">
            <div>
              <h3 className="text-lg font-bold mb-2 text-gray-800">Jasa Photographer</h3>
              <select
                className="w-full border rounded-lg p-2 text-sm"
                onChange={(e) => pesanWhatsApp(`Photographer - ${e.target.value}`)}
              >
                <option>Pilih Paket</option>
                <option>1 Rol isi 30 Foto - Rp. 75.000</option>
                <option>2 Rol isi 60 Foto - Rp. 150.000</option>
              </select>
            </div>
            <button
              onClick={() => pesanWhatsApp("Jasa Photographer")}
              className="mt-4 px-4 py-2 bg-teal-600 text-white rounded-lg text-sm font-medium hover:bg-teal-700 transition w-fit"
            >
              Pesan Sekarang
            </button>
          </div>

          {/* Layar + Proyektor */}
          <div className="aspect-[4/5] p-4 rounded-xl shadow-lg bg-teal-700 text-white flex flex-col justify-between hover:scale-105 transition transform">
            <div>
              <h3 className="text-lg font-bold mb-2 text-gray-800">Layar + Proyektor</h3>
              <p className="text-gray-600 text-sm">Rp. 150.000</p>
            </div>
            <button
              onClick={() => pesanWhatsApp("Layar + Proyektor")}
              className="mt-4 px-4 py-2 bg-teal-600 text-white rounded-lg text-sm font-medium hover:bg-teal-700 transition w-fit"
            >
              Pesan Sekarang
            </button>
          </div>

          {/* Drone */}
          <div className="aspect-[4/5] p-4 rounded-xl shadow-lg bg-teal-700 text-white flex flex-col justify-between hover:scale-105 transition transform">
            <div>
              <h3 className="text-lg font-bold mb-2 text-gray-800">Drone</h3>
              <p className="text-gray-600 text-sm">Rp. 400.000 / per 1 baterai</p>
            </div>
            <button
              onClick={() => pesanWhatsApp("Drone")}
              className="mt-4 px-4 py-2 bg-teal-600 text-white rounded-lg text-sm font-medium hover:bg-teal-700 transition w-fit"
            >
              Pesan Sekarang
            </button>
          </div>
        </div>
      </motion.section>

      {/* Portofolio */}
      <motion.section
        id="portofolio"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="px-2 sm:px-8 py-16 sm:py-20"
      >
        <h2 className="text-3xl font-bold mb-8 sm:mb-12 text-center text-teal-700">
          Portofolio
        </h2>
        <div
          ref={portfolioRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth"
        >
          {portfolio.length > 0 ? (
            portfolio.map((item, index) => (
              <div
                key={index}
                className="min-w-[200px] sm:min-w-[250px] rounded-lg overflow-hidden shadow"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={300}
                  className="object-cover w-full h-40 sm:h-48"
                />
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 w-full">
              Belum ada data portofolio.
            </p>
          )}
        </div>
      </motion.section>

      {/* Tentang Kami */}
      <motion.section
        id="tentang"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="px-2 sm:px-8 py-16 sm:py-20 bg-gray-50"
      >
        <h2 className="text-3xl font-bold mb-6 sm:mb-10 text-center text-teal-700">
          Tentang Kami
        </h2>
        <p className="max-w-3xl mx-auto text-center text-lg text-gray-600">
          Media Pemuda Nusantara adalah komunitas kreatif yang bergerak di bidang
          live streaming, dokumentasi acara, fotografi, dan videografi.
          <br />
          Kami membantu menghadirkan momen berharga dengan hasil terbaik untuk
          setiap klien.
        </p>
      </motion.section>

      {/* Kontak */}
      <motion.section
        id="kontak"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="px-2 sm:px-8 py-16 sm:py-20 bg-gradient-to-r from-teal-600 to-teal-500 text-white"
      >
        <h2 className="text-3xl font-bold mb-6 sm:mb-10 text-center">
          Hubungi Kami
        </h2>
        <div className="max-w-xl mx-auto space-y-3 text-center">
          <p>📍 Jakarta, Indonesia</p>
          <p>
            📞 <a href="tel:+6285856618965">+62 858-5661-8965</a>
          </p>
          <p>
            ✉️{" "}
            <a href="mailto:mediapemudanusantara@gmail.com">
              mediapemudanusantara@gmail.com
            </a>
          </p>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="px-2 sm:px-8 py-4 bg-gray-900 text-gray-400 text-center text-sm">
        © {new Date().getFullYear()} Media Pemuda Nusantara. All rights reserved.
      </footer>
    </div>
  );
}
