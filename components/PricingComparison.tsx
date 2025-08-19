export default function PricingComparison() {
  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold text-center mb-6">Paket Layanan</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
        
        {/* Basic */}
        <div className="p-4 rounded-xl shadow bg-white">
          <h3 className="text-lg font-semibold mb-1">Basic</h3>
          <p className="text-gray-600 text-sm mb-3">Untuk event kecil dan sederhana</p>
          <p className="text-xl font-bold mb-3">Rp500.000</p>
          <ul className="text-sm text-gray-600 mb-4 space-y-1">
            <li>✅ 1 Kamera</li>
            <li>✅ Streaming ke YouTube</li>
            <li>❌ Tanpa overlay</li>
          </ul>
          <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
            Pesan
          </button>
        </div>

        {/* Pro */}
        <div className="p-4 rounded-xl shadow bg-blue-50 border border-blue-600">
          <h3 className="text-lg font-semibold mb-1">Pro</h3>
          <p className="text-gray-600 text-sm mb-3">Cocok untuk event menengah</p>
          <p className="text-xl font-bold mb-3">Rp1.500.000</p>
          <ul className="text-sm text-gray-600 mb-4 space-y-1">
            <li>✅ 2 Kamera</li>
            <li>✅ Streaming YouTube & FB</li>
            <li>✅ Overlay branding</li>
          </ul>
          <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
            Pesan
          </button>
        </div>

        {/* Premium */}
        <div className="p-4 rounded-xl shadow bg-white">
          <h3 className="text-lg font-semibold mb-1">Premium</h3>
          <p className="text-gray-600 text-sm mb-3">Untuk event skala besar</p>
          <p className="text-xl font-bold mb-3">Rp3.000.000</p>
          <ul className="text-sm text-gray-600 mb-4 space-y-1">
            <li>✅ 3 Kamera</li>
            <li>✅ Streaming Multi-Platform</li>
            <li>✅ Overlay + Animasi</li>
            <li>✅ Operator Full Support</li>
          </ul>
          <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
            Pesan
          </button>
        </div>

      </div>
    </section>
  );
}
