'use client';
export default function Page() {
  const wa = process.env.NEXT_PUBLIC_WHATSAPP_LINK || 'https://wa.me/6285856618965';
  return (
    <main style={{maxWidth:1120, margin:'0 auto', padding:'24px 16px'}}>
      <h1>Kontak</h1>
      <p style={{color:'#555'}}>Hubungi kami via WhatsApp atau isi form (coming soon).</p>
      <a href={wa} target="_blank" style={{display:'inline-block', marginTop:12, padding:'10px 16px', background:'#25D366', color:'#fff', borderRadius:8, textDecoration:'none'}}>Chat WhatsApp</a>
    </main>
  );
}
