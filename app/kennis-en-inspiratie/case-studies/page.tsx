import { datoFetch, PAGE_CONTENT_QUERY } from "@/lib/datocms";
import { Image } from "react-datocms";
import Link from "next/link";

export default async function CaseStudiesPage() {
    const allCases = await datoFetch(PAGE_CONTENT_QUERY);

    return (
        <div className="flex flex-col items-center w-full">
            <div className="w-full h-96 flex flex-col items-center justify-center gap-16 bg-gradient-to-br from-paars to-groen from-60%">
                <h1 className="text-wit">Cases</h1>
                <p className="text-wit text-lg w-2/3 text-center">Wij zijn Vosteq, experts in Smart Manufacturing. Met onze kennis en ervaring helpen we jouw bedrijf 
                naar een nieuwe toekomstbestendige horizon. Ontdek hoe we meer uit mens en machine halen.</p>
            </div>
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 container justify-center py-32">
                {allCases.map((caseData) => (
                    <div key={caseData.id} className="flex flex-col border border-donkergroen p-8 gap-4">
                        <div>
                            <Image 
                                className="object-cover"
                                data={caseData.mainImage.responsiveImage}
                            />
                        </div>
                        <h1 className="text-paars text-lg flex-none">Vosteq bij {caseData.title}</h1>
                        <p className="font-aktiv-grotesk-extended text-paars grow">
                            "{caseData.quote}"
                        </p>
                        <div className="flex-none">
                            <button className="btn-outline"><Link href={`/kennis-en-inspiratie/case-studies/${caseData.slug}`}>Lees verder</Link></button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}