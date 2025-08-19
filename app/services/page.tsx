import PricingComparison from '../../components/PricingComparison';
export default function Page() {
  return (
    <main style={{maxWidth:1120, margin:'0 auto', padding:'24px 16px'}}>
      <h1>Paket Layanan</h1>
      <p style={{color:'#555'}}>Pilih paket sesuai kebutuhan, atau request custom.</p>
      <div style={{display:'grid', gap:16, gridTemplateColumns:'repeat(auto-fit, minmax(260px, 1fr))', marginTop:16}}>
        <div style={{border:'1px solid #eee', borderRadius:12, padding:16}}><h3>Basic</h3><p>Talkshow, wawancara, seminar kecil.</p></div>
        <div style={{border:'1px solid #eee', borderRadius:12, padding:16}}><h3>Pro</h3><p>Konser, event besar, webinar skala tinggi.</p></div>
        <div style={{border:'1px solid #eee', borderRadius:12, padding:16}}><h3>Custom</h3><p>Fleksibel penuh mengikuti brief Anda.</p></div>
      </div>
      <PricingComparison />
    </main>
  );
}
