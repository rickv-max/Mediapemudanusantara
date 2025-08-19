import PricingComparison from '../../components/PricingComparison';
// app/services/page.tsx
export default function Page() {
  return (
    <main className="py-10">
      <h1 className="text-2xl md:text-3xl font-bold text-teal-700 text-center">Layanan</h1>
      <p className="text-center text-gray-600 mt-2">
        Pilih paket sesuai kebutuhan acara Anda.
      </p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        <div className="p-6 rounded-xl shadow bg-teal-700 text-white">
          <h3 className="text-xl font-bold mb-3">Paket Reguler</h3>
          <ul className="space-y-2 text-teal-100">
            <li>📷 2 Camera</li>
            <li>💻 Capture Card</li>
            <li>▶️ Live Youtube / Facebook</li>
            <li>🎞️ Record Full HD</li>
          </ul>
        </div>
        <div className="p-6 rounded-xl shadow bg-teal-500 text-white">
          <h3 className="text-xl font-bold mb-3">Paket Premium</h3>
          <ul className="space-y-2 text-teal-50">
            <li>📷 3 Camera</li>
            <li>💻 Capture Card</li>
            <li>▶️ Live Youtube / Facebook</li>
            <li>🎞️ Record Full HD</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
