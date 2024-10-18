import { LanguageProvider } from "@inlang/paraglide-next"
import { languageTag } from "@/paraglide/runtime.js"
import "./globals.css";
import { Header } from "@/components/nav/header";
import { Footer } from "@/components/nav/footer";
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <LanguageProvider>
      <html lang={languageTag()}> 
        <body className="font-aptos">
          <Header />
          <main>
            {children}
            <SpeedInsights />
          </main>
          <Footer />
        </body>
      </html>
    </LanguageProvider>
  );
}
