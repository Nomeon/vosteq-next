'use client'
const ContactForm = () => {
  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    console.log(e);
  }

  return (
    <div className="bg-paars flex flex-col items-center container max-md:text-center py-16">
      <h2 className="text-wit font-aktiv-grotesk-extended">Haal ook meer uit mensen en machine</h2>
      <p className="text-wit text-lg font-light font-aktiv-grotesk-extended pt-8">Ontdek hoe Vosteq jouw bedrijf kan transformeren naar Smart Manufacturing</p>
        <form onSubmit={onSubmit} className="flex flex-col md:flex-row gap-4 pt-8">
          <input
            type="email"
            name="email"
            placeholder="Vul je e-mailadres in"
            className="py-2 px-4 border-2 border-wit font-aptos focus:outline-none focus:border-2 focus:border-groen"
          />
          <div>
            <button className="btn-solid-to-outline">Aanmelden</button>
          </div>
        </form>
      <p className="text-wit pt-4 text-xs font-aktiv-grotesk">Door je aan te melden, bevestig je dat je akkoord gaat met onze Algemene Voorwaarden.</p>
    </div>
  )
}

export { ContactForm };