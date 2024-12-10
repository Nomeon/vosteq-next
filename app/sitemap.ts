import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
        url: 'https://vosteq.nl',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 1,
    },
    {
        url: 'https://vosteq.nl/contact',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 1,
    },
    {
        url: 'https://vosteq.nl/over-vosteq',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.8,
    },
    {
        url: 'https://vosteq.nl/over-vosteq/visie-en-missie',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.5,
    },
    {
        url: 'https://vosteq.nl/over-vosteq/de-veranderexperts',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.5,
    },
    {
        url: 'https://vosteq.nl/over-vosteq/mvo-beleid',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.5,
    },
    {
        url: 'https://vosteq.nl/over-vosteq/waarden-en-normen',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.5,
    },
    {
        url: 'https://vosteq.nl/over-vosteq/werken-bij-vosteq',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.5,
    },
    {
        url: 'https://vosteq.nl/onze-aanpak',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.8,
    },
    {
        url: 'https://vosteq.nl/onze-aanpak/begeleiding',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.5,
    },
    {
        url: 'https://vosteq.nl/onze-aanpak/inspiratie',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.5,
    },
    {
        url: 'https://vosteq.nl/onze-aanpak/inzicht',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.5,
    },
    {
        url: 'https://vosteq.nl/onze-aanpak/resultaat',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.5,
    },
    {
        url: 'https://vosteq.nl/onze-aanpak/strategisch-plan',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.5,
    },
    {
        url: 'https://vosteq.nl/diensten',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.8,
    },
    {
        url: 'https://vosteq.nl/diensten/directieadvies',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.5,
    },
    {
        url: 'https://vosteq.nl/diensten/expertise-on-demand',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.5,
    },
    {
        url: 'https://vosteq.nl/diensten/innovatie-en-verandertrajecten',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.5,
    },
    {
        url: 'https://vosteq.nl/klant-cases',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
    },
    {
        url: 'https://vosteq.nl/klant-cases/hapert',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.5,
    },
    {
        url: 'https://vosteq.nl/klant-cases/repak',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.5,
    },
    {
        url: 'https://vosteq.nl/klant-cases/mcm',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.5,
    }
  ]
}