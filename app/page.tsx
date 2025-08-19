"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function Home() {
  const [selectedImage, setSelectedImage] = useState("/thumb1.jpg");
  const [portfolio, setPortfolio] = useState<any[]>([]);
  const [photographerPackage, setPhotographerPackage] = useState("1 Rol (30 foto) - Rp 75.000");

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/portfolio/")
      .then((res) => res.json())
      .then((data) => setPortfolio(data))
      .catch(() => {
        // dummy jika API kosong
        setPortfolio([
  { image: "/foto-event1.jpg", title: "Dokumentasi Event 1" },
  { image: "/foto-event2.jpg", title: "Dokumentasi Event 2" },
  { image: "/video-highlight.mp4", title: "Video Highlight" },
  { image: "/foto-event3.jpg", title: "Dokumentasi Event 3" },
]);
      });
  }, []);

  // Auto scroll portfolio
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({ left: 220, behavior: "smooth" });
        if (
          scrollRef.current.scrollLeft + scrollRef.current.clientWidth >=
          scrollRef.current.scrollWidth
        ) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        }
      }
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleOrder = (service: string) => {
    const message = encodeURIComponent(`Halo, saya ingin pesan layanan: ${service}`);
    window.open(`https://wa.me/6285856618965?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 text-gray-900">
      {/* Navbar */}
      <header className="flex justify-between items-center px-2 sm:px-8 py-3 sticky top-0 bg-gray-50/90 backdrop-blur z-50 border-b border-gray-300 shadow-sm">
        <div className="flex items-center gap-2">
          <Image src="/logo-mpn.png" alt="Logo MPN" width={32} height={32} className="rounded-full" />
          <span className="text-xl sm:text-2xl font-bold text-teal-700">Media Pemuda Nusantara</span>
        </div>
        <nav className="hidden sm:flex items-center gap-6">
          <a href="#layanan" className="hover:text-teal-600 transition">Layanan</a>
          <a href="#portofolio" className="hover:text-teal-600 transition">Portofolio</a>
          <a href="#tentang" className="hover:text-teal-600 transition">Tentang</a>
          <a href="#kontak" className="ml-4 px-4 py-2 rounded-lg bg-teal-600 hover:bg-teal-700 transition text-white">Hubungi Kami</a>
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
            <a href="#kontak" className="px-5 py-2 sm:px-6 sm:py-3 rounded-lg bg-teal-600 hover:bg-teal-700 transition text-white">Hubungi Kami</a>
            <a href="#portofolio" className="px-5 py-2 sm:px-6 sm:py-3 rounded-lg border border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white transition">Lihat Portofolio →</a>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-full h-48 sm:h-64 bg-gray-300 rounded-xl flex items-center justify-center mb-4 shadow-md overflow-hidden">
            <Image src={selectedImage} alt="Preview" width={500} height={250} className="object-cover w-full h-full" />
          </div>
          <div className="grid grid-cols-3 gap-2 sm:gap-4 w-full">
            {["/thumb1.jpg", "/thumb2.jpg", "/thumb3.jpg"].map((img, i) => (
              <button key={i} onClick={() => setSelectedImage(img)} className="h-16 sm:h-20 bg-gray-300 rounded-xl shadow overflow-hidden">
                <Image src={img} alt={`Thumbnail ${i + 1}`} width={100} height={80} className="object-cover w-full h-full" />
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
        <h2 className="text-3xl font-bold mb-8 sm:mb-12 text-center text-teal-700">Paket Layanan</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {/* Paket Reguler */}
          <div className="p-6 rounded-xl shadow-lg bg-teal-700 text-white hover:scale-105 transition transform">
            <h3 className="text-xl font-bold mb-3">Rp. 750.000 <span className="text-sm font-normal">/ Paket Reguler</span></h3>
            <ul className="space-y-1 text-teal-100">
              <li>📷 2 Camera</li>
              <li>💻 Capture Card</li>
              <li>▶️ Live Youtube / Facebook</li>
              <li>🎞️ Record Full HD</li>
            </ul>
            <button onClick={() => handleOrder("Paket Reguler - Rp. 750.000")} className="mt-4 px-4 py-2 bg-white text-teal-700 rounded-lg hover:bg-gray-100 transition w-full">Pesan Sekarang</button>
          </div>

          {/* Paket Premium */}
          <div className="p-6 rounded-xl shadow-lg bg-teal-500 text-white hover:scale-105 transition transform">
            <h3 className="text-xl font-bold mb-3">Rp. 1.050.000 <span className="text-sm font-normal">/ Paket Premium</span></h3>
            <ul className="space-y-1 text-teal-50">
              <li>📷 3 Camera</li>
              <li>💻 Capture Card</li>
              <li>▶️ Live Youtube / Facebook</li>
              <li>🎞️ Record Full HD</li>
            </ul>
            <button onClick={() => handleOrder("Paket Premium - Rp. 1.050.000")} className="mt-4 px-4 py-2 bg-white text-teal-700 rounded-lg hover:bg-gray-100 transition w-full">Pesan Sekarang</button>
          </div>

          {/* Jasa Videographer */}
          <div className="p-6 rounded-xl shadow-lg bg-gray-100 hover:scale-105 transition transform">
            <h3 className="text-xl font-bold mb-3 text-gray-800">Jasa Videographer</h3>
            <p className="text-gray-600 mb-3">Rp. 300.000 / 1 Video</p>
            <button onClick={() => handleOrder("Videographer - Rp. 300.000 / 1 Video")} className="mt-2 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition w-full">Pesan Sekarang</button>
          </div>

          {/* Jasa Photographer */}
          <div className="p-6 rounded-xl shadow-lg bg-gray-100 hover:scale-105 transition transform">
            <h3 className="text-xl font-bold mb-3 text-gray-800">Jasa Photographer</h3>
            <select value={photographerPackage} onChange={(e) => setPhotographerPackage(e.target.value)} className="w-full border rounded-lg p-2 mb-3">
              <option>1 Rol (30 foto) - Rp. 75.000</option>
              <option>2 Rol (60 foto) - Rp. 150.000</option>
            </select>
            <button onClick={() => handleOrder(`Photographer - ${photographerPackage}`)} className="mt-2 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition w-full">Pesan Sekarang</button>
          </div>

          {/* Layar + Proyektor */}
          <div className="p-6 rounded-xl shadow-lg bg-gray-100 hover:scale-105 transition transform">
            <h3 className="text-xl font-bold mb-3 text-gray-800">Layar + Proyektor</h3>
            <p className="text-gray-600 mb-3">Rp. 150.000</p>
            <button onClick={() => handleOrder("Layar + Proyektor - Rp. 150.000")} className="mt-2 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition w-full">Pesan Sekarang</button>
          </div>

          {/* Drone */}
          <div className="p-6 rounded-xl shadow-lg bg-gray-100 hover:scale-105 transition transform">
            <h3 className="text-xl font-bold mb-3 text-gray-800">Drone</h3>
            <p className="text-gray-600 mb-3">Rp. 400.000 / per 1 baterai</p>
            <button onClick={() => handleOrder("Drone - Rp. 400.000 / 1 baterai")} className="mt-2 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition w-full">Pesan Sekarang</button>
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
        <h2 className="text-3xl font-bold mb-8 sm:mb-12 text-center text-teal-700">Portofolio</h2>
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4"
        >
          {portfolio.map((item, index) => (
            <div
              key={index}
              className="min-w-[200px] h-40 rounded-lg overflow-hidden shadow snap-start bg-gray-200 flex items-center justify-center"
            >
              <Image src={item.image} alt={item.title} width={300} height={200} className="object-cover w-full h-full" />
            </div>
          ))}
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
        <h2 className="text-3xl font-bold mb-6 sm:mb-10 text-center text-teal-700">Tentang Kami</h2>
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
        <h2 className="text-3xl font-bold mb-6 sm:mb-10 text-center">Hubungi Kami</h2>
        <div className="max-w-xl mx-auto space-y-3 text-center">
          <p>📍 Jakarta, Indonesia</p>
          <p>📞 <a href="tel:+6285856618965">+62 858-5661-8965</a></p>
          <p>✉️ <a href="mailto:mediapemudanusantara@gmail.com">mediapemudanusantara@gmail.com</a></p>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="px-2 sm:px-8 py-4 bg-gray-900 text-gray-400 text-center text-sm">
        © {new Date().getFullYear()} Media Pemuda Nusantara. All rights reserved.
      </footer>
    </div>
  );
}
