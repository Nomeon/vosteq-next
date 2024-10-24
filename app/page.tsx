import type { Metadata } from "next";
import { Deskundigen } from "@/components/vosteq/deskundigen";
import { Verbeteren } from "@/components/vosteq/verbeteren";
import { VosteqCarousel } from "@/components/vosteq/vosteq-carousel";
import { HomeHero } from "@/components/vosteq/home-hero";
import { NewsForm } from "@/components/vosteq/news-form";
import { Experts } from "@/components/vosteq/experts";
import { fetchCases } from '@/lib/datocms';

export const metadata: Metadata = {
  title: "Vosteq | De Veranderexperts",
  description: "Aan het bouwen!",
};

const PAGE_CONTENT_QUERY = `
  query {
    allCases {
      id
      title
      quote
      slug
      mainImage {
        responsiveImage {
          src
          srcSet  
          width
          height
        }
      }
      _status
      _firstPublishedAt
    }
  }`;

export default async function Home() {
  const allCases = await fetchCases(PAGE_CONTENT_QUERY);

  return (
    <div className="flex flex-col items-center">
      <HomeHero />
      <Deskundigen />
      <Verbeteren />
      <Experts />
      <VosteqCarousel cases={allCases} />
      <NewsForm />
    </div>
  );
}
