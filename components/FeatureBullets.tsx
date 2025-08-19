const items = [
  { title: "Video tajam", desc: "1080p–4K sesuai kebutuhan." },
  { title: "Audio bersih", desc: "Mic & mixing standar broadcast." },
  { title: "Tim berpengalaman", desc: "Berbagai format acara, eksekusi rapi." },
  { title: "Harga transparan", desc: "Paket jelas, opsi custom tersedia." },
];
export default function FeatureBullets() {
  return (
    <section style={{maxWidth:1120, margin:'0 auto', padding:'24px 16px'}}>
      <div style={{display:'grid', gap:16, gridTemplateColumns:'repeat(auto-fit, minmax(220px, 1fr))'}}>
        {items.map((it) => (
          <div key={it.title} style={{border:'1px solid #eee', borderRadius:12, padding:16}}>
            <div style={{fontSize:20, fontWeight:700}}>{it.title}</div>
            <p style={{marginTop:6, color:'#555'}}>{it.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
