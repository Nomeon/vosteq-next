import 'leaflet/dist/leaflet.css'
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google'
import { LanguageProvider } from "@inlang/paraglide-next"
import { languageTag } from "@/paraglide/runtime.js"
import { Header } from "@/components/nav/header";
import { Footer } from "@/components/nav/footer";
import { ReactNode } from 'react';

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <LanguageProvider>
      <html lang={languageTag()}> 
        <body className="font-aptos">
          <Header />
          <main>
            {children}
          </main>
          <Footer />
        </body>
        <GoogleAnalytics gaId='G-JQWNNG2LK8' />
      </html>
    </LanguageProvider>
  );
}
