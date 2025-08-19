type Testimonial = { client_name: string; role_or_company: string; quote: string; rating: number; };
async function getData(): Promise<Testimonial[]> {
  const base = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000';
  const res = await fetch(`${base}/api/testimonials/`, { next: { revalidate: 60 } });
  if (!res.ok) return [];
  return res.json();
}
export default async function TestimonialCarousel() {
  const data = await getData();
  const list = data.length ? data : [
    { client_name: "Andi", role_or_company: "Brand Manager", quote: "Tim MPN rapi dan responsif.", rating: 5 },
    { client_name: "Sari", role_or_company: "Event Lead", quote: "Kualitas siaran stabil, audio mantap.", rating: 5 },
    { client_name: "Dion", role_or_company: "YouTuber", quote: "Gak perlu pusing teknis. Mantap!", rating: 5 }
  ];
  return (
    <section style={{maxWidth:1120, margin:'0 auto', padding:'24px 16px'}}>
      <h2>Apa kata klien</h2>
      <div style={{display:'grid', gap:16, gridTemplateColumns:'repeat(auto-fit, minmax(260px, 1fr))', marginTop:12}}>
        {list.map((t, i) => (
          <div key={i} style={{border:'1px solid #eee', borderRadius:12, padding:16}}>
            <p>“{t.quote}”</p>
            <p style={{marginTop:8, color:'#666', fontSize:14}}>{t.client_name} — {t.role_or_company}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
