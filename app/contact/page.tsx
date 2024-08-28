import type { Metadata } from "next";


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
        <form className="flex flex-col gap-8 w-full md:w-2/3 border border-groen px-4 py-8 md:p-16">
          <div className="flex flex-col md:flex-row pb-8 gap-2 md:justify-between md:items-center">
            <h2 className="text-paars md:text-4xl text-3xl font-normal">Neem contact op</h2>
            <p className="font-aktiv-grotesk-extended text-warning text-sm">*Invullen van dit veld is vereist</p>
          </div>
          <div className="flex w-full flex-col md:flex-row justify-between gap-8 md:gap-16">
            <input required className='focus:outline-none py-2 border-b border-black w-full font-aktiv-grotesk-extended' type="text" placeholder="Naam*" />
            <input required className='focus:outline-none py-2 border-b border-black w-full font-aktiv-grotesk-extended' type="text" placeholder="Onderwerp*" />
          </div>
          <input required className='focus:outline-none py-2 border-b border-black w-full font-aktiv-grotesk-extended' type="email" placeholder="E-mailadres*" />
          <input className='focus:outline-none py-2 border-b border-black w-full mb-8 font-aktiv-grotesk-extended' type="tel" placeholder="Telefoonnummer" />
          <h3 className="font-bold text-paars">Bericht</h3>
          <textarea className='focus:outline-none p-2 border border-groen w-full h-36' />
          <div>
            <button className="btn-solid">Verzenden</button>
          </div>
        </form>
      </div>
    </div>
  );
}