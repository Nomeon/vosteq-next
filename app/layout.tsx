import "./globals.css";
import { Header } from "@/components/nav/header";
import { Footer } from "@/components/nav/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
  );
}
