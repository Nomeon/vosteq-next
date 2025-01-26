import 'leaflet/dist/leaflet.css'
import "./globals.css";
import { LanguageProvider } from "@inlang/paraglide-next"
import { languageTag } from "@/paraglide/runtime.js"
import { Header } from "@/components/nav/header";
import { Footer } from "@/components/nav/footer";
import { ReactNode } from 'react';

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {  
  const isPreview = process.env.VERCEL_ENV !== 'production';
  console.log(isPreview, process.env.VERCEL_ENV);
  
  return (
    <LanguageProvider>
      {isPreview && (
        <meta name="robots" content="noindex, nofollow" />
      )}
      <html lang={languageTag()}> 
        <body className="font-aptos">
          <Header />
          <main>
            {children}
          </main>
          <Footer />
        </body>
      </html>
    </LanguageProvider>
  );
}
