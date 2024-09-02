import type { Metadata } from "next";
import { ContactForm } from "@/components/vosteq/contact-form";

export const metadata: Metadata = {
  title: "Vosteq | Contact",
  description: "Aan het bouwen!",
};

export default function Contact() {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="w-full h-96 flex flex-col items-center justify-center gap-16 bg-gradient-to-br from-paars to-groen from-60%">
        <h1 className="text-wit">Contact</h1>
        <p className="text-wit text-lg w-2/3 text-center">Wij zijn Vosteq, experts in Smart Manufacturing. Met onze kennis en ervaring helpen we jouw bedrijf 
        naar een nieuwe toekomstbestendige horizon. Ontdek hoe we meer uit mens en machine halen.</p>
      </div>
      <div className="w-full flex items-center max-md:container justify-center py-32">
        <ContactForm />
      </div>
    </div>
  );
}