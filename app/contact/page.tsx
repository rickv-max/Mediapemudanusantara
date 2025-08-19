'use client';
// app/contact/page.tsx
export default function Page() {
  const wa = process.env.NEXT_PUBLIC_WHATSAPP_LINK || 'https://wa.me/6285856618965';
  return (
    <main className="py-10">
      <h1 className="text-2xl md:text-3xl font-bold text-teal-700 text-center">Hubungi Kami</h1>
      <form className="max-w-xl mx-auto px-4 mt-6 space-y-4">
        <input
          type="text"
          placeholder="Nama"
          className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
        <textarea
          placeholder="Pesan"
          rows={5}
          className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
        <button
          type="submit"
          className="px-6 py-3 bg-teal-600 hover:bg-teal-700 rounded-lg w-full text-white font-medium"
        >
          Kirim Pesan
        </button>
      </form>
    </main>
  );
}
