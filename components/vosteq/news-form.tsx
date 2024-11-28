'use client'
const NewsForm = () => {
  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    console.log(e);
  }

  return (
    <div className="w-full bg-paars">
      <div className="flex flex-col items-center container max-md:text-center py-16">
        <h2 className="text-wit font-aktiv-grotesk-extended">Neem contact met ons op</h2>
        <p className="text-wit text-center md:w-2/3 text-lg font-light font-aktiv-grotesk-extended pt-8">Nieuwsgierig hoe wij jouw bedrijf kunnen helpen? Neem vandaag nog contact op voor een vrijblijvende kennismaking met ons innovatieteam. Samen maken we jouw organisatie efficiënter en toekomstbestendig.</p>
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
    </div>
  )
}

export { NewsForm };