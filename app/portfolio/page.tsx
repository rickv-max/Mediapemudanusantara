// app/portfolio/page.tsx
import Image from "next/image";

type PortfolioItem = {
  id: number;
  title: string;
  description: string;
  thumbnail: string | null;
  slug: string;
};

const BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://127.0.0.1:8000";

export const revalidate = 60;

export default async function Page() {
  let items: PortfolioItem[] = [];
  try {
    const res = await fetch(`${BASE_URL}/portfolio/`, { next: { revalidate: 60 } });
    items = await res.json();
  } catch (e) {
    // biarin kosong kalau error
  }

  return (
    <main className="py-10">
      <h1 className="text-2xl md:text-3xl font-bold text-teal-700 text-center">Portofolio</h1>
      <p className="text-center text-gray-600 mt-2">
        Cuplikan beberapa pekerjaan livestream kami.
      </p>

      {items.length === 0 ? (
        <p className="text-center text-gray-600 mt-10">Belum ada item dipublish.</p>
      ) : (
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                <p className="text-sm text-gray-600">{it.description}</p>
              </div>
            </article>
          ))}
        </div>
      )}
    </main>
  );
}
