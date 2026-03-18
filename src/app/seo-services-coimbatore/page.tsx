import type { Metadata } from "next"
import { ServiceLayout } from "@/components/service-layout"
import { Globe, Users, Trophy } from "lucide-react"

export const metadata: Metadata = {
    title: "Best SEO Services in Coimbatore",
    description: "Grow your business in Coimbatore with Synzephyr's advanced SEO services. Rank local and e-commerce brands on page 1 of Google. Get your free SEO audit today!",
    alternates: {
        canonical: "https://synzephyrtechnologies.web.app/seo-services-coimbatore",
    },
    openGraph: {
        title: "SEO Services in Coimbatore | Top Rated SEO Agency | Synzephyr",
        description: "Expert SEO services in Coimbatore. We help businesses dominate Google search with proven local and enterprise SEO strategies.",
        url: "https://synzephyrtechnologies.web.app/seo-services-coimbatore",
    },
}

const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "SEO Services in Coimbatore",
    "description": "Advanced SEO services for businesses in Coimbatore, Tamil Nadu. We specialize in local SEO, content optimization, link building, and technical SEO to help you rank higher on Google.",
    "provider": { "@id": "https://synzephyrtechnologies.web.app/#localbusiness" },
    "serviceType": "Search Engine Optimization",
    "areaServed": { "@type": "City", "name": "Coimbatore" },
    "url": "https://synzephyrtechnologies.web.app/seo-services-coimbatore",
}

const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "Which is the best SEO agency in Coimbatore?",
            "acceptedAnswer": { "@type": "Answer", "text": "Synzephyr Technologies is one of the top-rated digital marketing and SEO agencies serving Coimbatore, with proven results across multiple industries including retail, healthcare, and manufacturing." }
        },
        {
            "@type": "Question",
            "name": "Do you provide SEO services for small businesses in Coimbatore?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes! We offer affordable, results-driven SEO packages especially designed for small and medium businesses in Coimbatore. We tailor every strategy to your industry, competition level, and budget." }
        }
    ]
}

const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://synzephyrtechnologies.web.app" },
        { "@type": "ListItem", "position": 2, "name": "SEO Services Coimbatore", "item": "https://synzephyrtechnologies.web.app/seo-services-coimbatore" }
    ]
}

const benefits = [
    "Comprehensive SEO Audit for Coimbatore Businesses",
    "Enterprise-grade Keyword Strategy for competitive markets",
    "Content Marketing & Blog Optimization",
    "High-Quality Backlink Building from authority sites",
    "E-commerce SEO for Coimbatore online stores",
    "Conversion Rate Optimization (CRO)",
    "Google Business Profile optimization for Coimbatore",
    "Technical SEO: Core Web Vitals & page speed optimization",
]

export default function SeoCoimbatorePage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
            <ServiceLayout
                title="SEO Services in Coimbatore"
                subtitle="Dominate the Competitive Coimbatore Market with Expert SEO."
                description="Coimbatore is a bustling hub of industry, commerce, and textiles. Standing out in this market requires more than just a website — it requires a strategic, data-backed digital presence. Synzephyr Technologies provides cutting-edge SEO services tailored for the Coimbatore market, helping businesses across sectors like manufacturing, retail, healthcare, education, and hospitality outrank competitors and capture significant market share. Our team understands the local search landscape and builds campaigns that deliver consistent, measurable growth."
                benefits={benefits}
                currentPath="/seo-services-coimbatore"
            >
                <div className="grid grid-cols-1 gap-6">
                    <div className="flex items-center space-x-4 p-4 bg-background rounded-xl border border-border">
                        <Globe className="h-8 w-8 text-cyan-500" />
                        <div>
                            <h3 className="font-bold">Wider Reach in Coimbatore</h3>
                            <p className="text-sm text-muted-foreground">Target customers across the entire Coimbatore district and beyond.</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4 p-4 bg-background rounded-xl border border-border">
                        <Users className="h-8 w-8 text-orange-500" />
                        <div>
                            <h3 className="font-bold">Quality Leads</h3>
                            <p className="text-sm text-muted-foreground">Attract high-intent users in Coimbatore who are ready to purchase or inquire.</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4 p-4 bg-background rounded-xl border border-border">
                        <Trophy className="h-8 w-8 text-yellow-500" />
                        <div>
                            <h3 className="font-bold">Industry Authority</h3>
                            <p className="text-sm text-muted-foreground">Establish your brand as the trusted leader in your Coimbatore niche.</p>
                        </div>
                    </div>
                    <section className="p-4 bg-primary/5 rounded-xl border border-primary/20">
                        <h2 className="font-bold text-lg mb-2">Our Coimbatore SEO Process</h2>
                        <p className="text-sm text-muted-foreground">We start with a deep competitor and keyword analysis specific to Coimbatore, build a content roadmap, implement on-page and technical fixes, and execute an off-page authority-building strategy — with monthly reporting every step of the way.</p>
                    </section>
                </div>
            </ServiceLayout>
        </>
    )
}
