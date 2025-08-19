import "./global.css";
import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'MPN — Media Pemuda Nusantara',
  description: 'Jasa livestreaming YouTube profesional.',
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>
        {children}
        <footer style={{borderTop:'1px solid #eee', marginTop:64}}>
          <div style={{maxWidth:1120, margin:'0 auto', padding:'24px 16px', color:'#666'}}>© {new Date().getFullYear()} MPN</div>
        </footer>
      </body>
    </html>
  );
}
