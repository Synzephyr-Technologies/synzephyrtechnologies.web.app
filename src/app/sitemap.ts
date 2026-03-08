import type { MetadataRoute } from 'next'

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://synzephyrtechnologies.web.app'
    const lastMod = new Date()

    return [
        {
            url: baseUrl,
            lastModified: lastMod,
            changeFrequency: 'weekly',
            priority: 1.0,
        },
        {
            url: `${baseUrl}/services`,
            lastModified: lastMod,
            changeFrequency: 'weekly',
            priority: 0.95,
        },
        {
            url: `${baseUrl}/seo-services-pollachi`,
            lastModified: lastMod,
            changeFrequency: 'weekly',
            priority: 1.0,
        },
        {
            url: `${baseUrl}/seo-services-coimbatore`,
            lastModified: lastMod,
            changeFrequency: 'weekly',
            priority: 1.0,
        },
        {
            url: `${baseUrl}/digital-marketing-pollachi`,
            lastModified: lastMod,
            changeFrequency: 'weekly',
            priority: 1.0,
        },
        {
            url: `${baseUrl}/digital-marketing-coimbatore`,
            lastModified: lastMod,
            changeFrequency: 'weekly',
            priority: 1.0,
        },
        {
            url: `${baseUrl}/google-business-profile-setup-pollachi`,
            lastModified: lastMod,
            changeFrequency: 'weekly',
            priority: 1.0,
        },
        {
            url: `${baseUrl}/graphic-design-services-pollachi`,
            lastModified: lastMod,
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: lastMod,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/portfolio`,
            lastModified: lastMod,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: lastMod,
            changeFrequency: 'weekly',
            priority: 0.75,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: lastMod,
            changeFrequency: 'yearly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/connect`,
            lastModified: lastMod,
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: `${baseUrl}/privacy-policy`,
            lastModified: lastMod,
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        {
            url: `${baseUrl}/terms`,
            lastModified: lastMod,
            changeFrequency: 'yearly',
            priority: 0.3,
        },
    ]
}
