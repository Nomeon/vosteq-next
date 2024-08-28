import { LanguageProvider } from "@inlang/paraglide-next"
import { languageTag } from "@/paraglide/runtime.js"
import "./globals.css";
import { Header } from "@/components/nav/header";
import { Footer } from "@/components/nav/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <LanguageProvider>
      <html lang={languageTag()}>
        <head>
          <link rel="preload" href="https://use.typekit.net/cwv3jes.css" as="style" />
          <link rel="stylesheet" href="https://use.typekit.net/cwv3jes.css" />
        </head> 
        <body className="md:container font-aptos">
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
