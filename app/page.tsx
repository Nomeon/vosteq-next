import type { Metadata } from "next";
import { Deskundigen } from "@/components/vosteq/deskundigen";
import { Verbeteren } from "@/components/vosteq/verbeteren";
import { VosteqCarousel } from "@/components/vosteq/vosteq-carousel";
import { HomeHero } from "@/components/vosteq/home-hero";
import { Experts } from "@/components/vosteq/experts";
import { Popup } from "@/components/ui/popup";
import { datoFetch, PAGE_CONTENT_QUERY } from '@/lib/datocms';
import BottomCta from "@/components/vosteq/bottom-cta";
import { WithContext, Organization, WebSite, WebPage } from "schema-dts";

const title = "Optimaliseer jouw MKB-bedrijf | Vosteq";
const description = "Haal meer uit jouw mensen en machines met Vosteq. Met meer dan 25 jaar ervaring helpen wij MKB-maakbedrijven efficiënter, winstgevender en toekomstbestendig te worden. Ontdek onze expertise in procesoptimalisatie en digitalisering.";

export const metadata: Metadata = {
  title: title,
  description: description,
  openGraph: {
    title: title,
    description: description,
    url: "https://vosteq.nl",
    siteName: "Vosteq",
    type: "website",
    locale: "nl_NL",
    images: [
      {
        url: 'https://vosteq.nl/images/Vosteq-Hapert-2018-1.webp',
        width: 1100,
        height: 619,
        alt: "Vosteq bij Hapert 2018 1"
      },
      {
        url: "https://vosteq.nlimages/home2.webp",
        width: 1344,
        height: 896,
        alt: "Maarten bij Hapert"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: title,
    description: description,
    images: [
      {
        url: 'https://vosteq.nl/images/Vosteq-Hapert-2018-1.webp',
        width: 1100,
        height: 619,
        alt: "Vosteq bij Hapert 2018 1"
      }
    ],
    site: "@vosteq",
  }
};

const jsonLd: (WithContext<Organization> | WithContext<WebSite> | WithContext<WebPage>)[] = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Vosteq",
    "url": "https://vosteq.nl",
    "logo": "https://vosteq.nl/logo.svg",
    "image": "https://vosteq.nl/images/Vosteq-Hapert-2018-1.webp",
    "description": description,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Edisonstraat 11",
      "addressLocality": "Almelo",
      "postalCode": "7601 PS",
      "addressCountry": "NL"
    },
    "email": "vdvosse@vosteq.nl",
    "telephone": "+31882500800",
    "sameAs": [
      "https://www.linkedin.com/company/vosteq-veranderexperts-in-smart-manufacturing",
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://vosteq.nl",
    "name": "Vosteq",
    "description": description,
    "publisher": {
      "@type": "Organization",
      "name": "Vosteq",
      "logo": "https://vosteq.nl/logo.svg",
      "url": "https://vosteq.nl"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "url": "https://vosteq.nl",
    "name": title,
    "description": description,
    "publisher": {
      "@type": "Organization",
      "name": "Vosteq",
      "logo": "https://vosteq.nl/logo.svg",
      "url": "https://vosteq.nl"
    },
    "inLanguage": "nl",
    "isPartOf": "https://vosteq.nl",
    "primaryImageOfPage": {
      "@type": "ImageObject",
      "url": "https://vosteq.nl/images/Vosteq-Hapert-2018-1.webp",
      "width": {
        "@type": "QuantitativeValue",
        "value": 1100,
      },
      "height": {
        "@type": "QuantitativeValue",
        "value": 619,
      }
    }
  }
]

export default async function Home() {
  const allCases = await datoFetch(PAGE_CONTENT_QUERY);

  return (
    <div className="flex flex-col items-center">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Popup />
      <HomeHero />
      <Deskundigen />
      <Verbeteren />
      <Experts />
      <VosteqCarousel cases={allCases} />
      <BottomCta titel="Nieuwsgierig hoe wij jouw bedrijf kunnen helpen?" paragraph="Neem vandaag nog contact op voor een vrijblijvende kennismaking met ons innovatieteam. Samen maken we jouw organisatie efficiënter en toekomstbestendig."/>
    </div>
  );
}
