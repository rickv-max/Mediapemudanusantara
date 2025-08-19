export default async function Page() {
  // fetch ke API Django
  const res = await fetch("http://127.0.0.1:8000/api/portfolio/", {
    cache: "no-store", // biar selalu ambil data terbaru
  });

  const data = await res.json();

  return (
    <main style={{ maxWidth: 1120, margin: "0 auto", padding: "24px 16px" }}>
      <h1>Portofolio</h1>
      <p style={{ color: "#555" }}>Cuplikan beberapa pekerjaan livestream kami.</p>
      <div
        style={{
          display: "grid",
          gap: 16,
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          marginTop: 16,
        }}
      >
        {data.map((item: any) => (
          <div
            key={item.id}
            style={{
              border: "1px solid #eee",
              borderRadius: 12,
              padding: 16,
            }}
          >
            <img
              src={item.thumbnail}
              alt={item.title}
              style={{ width: "100%", borderRadius: 8 }}
            />
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
