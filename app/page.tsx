"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react"; // ✅ pakai useEffect untuk fetch API

export default function Home() {
  const [selectedImage, setSelectedImage] = useState("/thumb1.jpg");

  // ✅ state buat portfolio dari backend
  const [portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/portfolio/")
      .then((res) => res.json())
      .then((data) => setPortfolio(data))
      .catch((err) => console.error("Error fetch portfolio:", err));
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 text-gray-900">
      {/* Navbar */}
      <header className="flex justify-between items-center px-8 py-4 sticky top-0 bg-gray-50/90 backdrop-blur z-50 border-b border-gray-300 shadow-sm">
        {/* ✅ Logo kiri atas */}
        <div className="flex items-center gap-2">
          <Image
            src="/logo-mpn.png"
            alt="Logo MPN"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="text-2xl font-bold text-teal-700">
            Media Pemuda Nusantara
          </span>
        </div>

        {/* ✅ Navigasi */}
        <nav className="flex items-center gap-6">
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
        className="grid grid-cols-1 md:grid-cols-2 items-center px-8 py-20 gap-12"
      >
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-teal-800">
            Komunitas Jasa Live Streaming & Dokumentasi
          </h1>
          <p className="mb-8 text-lg text-gray-600">
            MPN membantu brand, event, dan institusi menghadirkan siaran
            langsung berkualitas serta dokumentasi foto/video yang rapi dan
            profesional.
          </p>
          <div className="flex gap-4">
            <a
              href="#kontak"
              className="px-6 py-3 rounded-lg bg-teal-600 hover:bg-teal-700 transition text-white"
            >
              Hubungi Kami
            </a>
            <a
              href="#portofolio"
              className="px-6 py-3 rounded-lg border border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white transition"
            >
              Lihat Portofolio →
            </a>
          </div>
        </div>

        {/* ✅ Thumbnail Preview */}
        <div className="flex flex-col items-center">
          <div className="w-full h-64 bg-gray-300 rounded-xl flex items-center justify-center mb-4 shadow-md overflow-hidden">
            <Image
              src={selectedImage}
              alt="Preview"
              width={500}
              height={250}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="grid grid-cols-3 gap-4 w-full">
            {["/thumb1.jpg", "/thumb2.jpg", "/thumb3.jpg"].map((img, i) => (
              <button
                key={i}
                onClick={() => setSelectedImage(img)}
                className="h-20 bg-gray-300 rounded-xl shadow overflow-hidden"
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

      {/* Section Paket Layanan */}
      <motion.section
        id="paket"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="px-8 py-20 bg-gradient-to-br from-gray-200 to-gray-100 text-gray-900"
      >
        <h2 className="text-3xl font-bold mb-12 text-center text-teal-700">
          Paket Layanan
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Paket Reguler */}
          <div className="p-8 rounded-xl shadow-lg bg-teal-700 text-white hover:scale-105 transition transform cursor-pointer">
            <h3 className="text-2xl font-bold mb-4">
              Rp. 750.000{" "}
              <span className="text-sm font-normal">/ Paket Reguler</span>
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

          {/* Paket Premium */}
          <div className="p-8 rounded-xl shadow-lg bg-teal-500 text-white hover:scale-105 transition transform cursor-pointer">
            <h3 className="text-2xl font-bold mb-4">
              Rp. 1.050.000{" "}
              <span className="text-sm font-normal">/ Paket Premium</span>
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
        <div className="mt-12 grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Videografer */}
          <div className="p-8 rounded-xl shadow-lg bg-gray-100 text-gray-900 hover:scale-105 transition transform cursor-pointer">
            <h3 className="text-2xl font-bold mb-4">Jasa Videografer</h3>
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

          {/* Fotografer */}
          <div className="p-8 rounded-xl shadow-lg bg-gray-100 text-gray-900 hover:scale-105 transition transform cursor-pointer">
            <h3 className="text-2xl font-bold mb-4">Jasa Fotografer</h3>
            <ul className="space-y-3 text-gray-700">
              <li>
                📸 1 Rol (30 Foto) —{" "}
                <span className="font-bold text-gray-900">Rp. 75.000</span>
              </li>
              <li>
                📸 2 Rol (60 Foto) —{" "}
                <span className="font-bold text-gray-900">Rp. 150.000</span>
              </li>
            </ul>
            <div className="mt-6 flex gap-4">
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

      {/* Portofolio */}
      <motion.section
        id="portofolio"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="px-8 py-20 bg-gray-200"
      >
        <h2 className="text-3xl font-bold mb-8 text-center text-teal-700">
          Portofolio
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {portfolio.length === 0 ? (
            <p className="col-span-3 text-center text-gray-600">
              Belum ada portofolio
            </p>
          ) : (
            portfolio.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow p-4 flex flex-col items-center"
              >
                {item.thumbnail ? (
                  <Image
                    src={item.thumbnail}
                    alt={item.title}
                    width={400}
                    height={250}
                    className="rounded-lg object-cover"
                  />
                ) : (
                  <div className="h-40 w-full bg-gray-400 rounded-xl flex items-center justify-center text-gray-700">
                    No Thumbnail
                  </div>
                )}
                <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))
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
