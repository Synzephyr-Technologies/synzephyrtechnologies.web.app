import type { Metadata } from "next"
import { ServiceLayout } from "@/components/service-layout"
import { Megaphone, MessageCircle, MousePointerClick } from "lucide-react"

export const metadata: Metadata = {
    title: "Digital Marketing Agency in Pollachi",
    description: "Synzephyr Technologies is the leading digital marketing agency in Pollachi. We offer social media management, Google Ads, and marketing to grow your business.",
    alternates: {
        canonical: "https://synzephyrtechnologies.web.app/digital-marketing-pollachi",
    },
    openGraph: {
        title: "Digital Marketing Agency in Pollachi | Synzephyr Technologies",
        description: "Grow your brand with Pollachi's leading digital marketing agency. Social media, Facebook Ads, Google Ads & more for local businesses.",
        url: "https://synzephyrtechnologies.web.app/digital-marketing-pollachi",
    },
}

const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Digital Marketing in Pollachi",
    "description": "Comprehensive digital marketing services for businesses in Pollachi including social media management, Facebook Ads, Google Ads PPC, email marketing, and content strategy.",
    "provider": { "@id": "https://synzephyrtechnologies.web.app/#localbusiness" },
    "serviceType": "Digital Marketing",
    "areaServed": { "@type": "City", "name": "Pollachi" },
    "url": "https://synzephyrtechnologies.web.app/digital-marketing-pollachi",
}

const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "Which is the best digital marketing agency in Pollachi?",
            "acceptedAnswer": { "@type": "Answer", "text": "Synzephyr Technologies is widely recognized as the best digital marketing agency in Pollachi, offering full-service digital marketing including SEO, social media, Google Ads, and GMB optimization." }
        },
        {
            "@type": "Question",
            "name": "How much does digital marketing cost for a small business in Pollachi?",
            "acceptedAnswer": { "@type": "Answer", "text": "Our digital marketing packages for small businesses in Pollachi start at affordable monthly rates. We customize every plan based on your business goals, target audience, and budget. Contact us for a free consultation." }
        },
        {
            "@type": "Question",
            "name": "Do you run Facebook and Instagram ads for businesses in Pollachi?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes, we manage Meta (Facebook & Instagram) ad campaigns for businesses in Pollachi and Coimbatore. We handle everything from audience targeting and ad creative to budget optimization and performance reporting." }
        }
    ]
}

const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://synzephyrtechnologies.web.app" },
        { "@type": "ListItem", "position": 2, "name": "Digital Marketing Pollachi", "item": "https://synzephyrtechnologies.web.app/digital-marketing-pollachi" }
    ]
}

const benefits = [
    "Social Media Management (Facebook, Instagram, LinkedIn)",
    "Facebook & Instagram Ads with ROI-focused targeting",
    "Google Ads (PPC) Campaigns for Pollachi businesses",
    "YouTube Video Marketing",
    "Email Marketing Automation",
    "WhatsApp Marketing Campaigns",
    "Content Strategy & Creation (Tamil & English)",
    "Influencer Collaborations & Partnerships",
    "Monthly Analytics & Performance Reports",
]

export default function DigitalMarketingPollachiPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
            <ServiceLayout
                title="Premier Digital Marketing Agency in Pollachi"
                subtitle="Build a Powerful Online Presence and Scale Your Brand in the Pollachi Market."
                description="In a rapidly evolving digital landscape, having a social media page isn't enough. You need a comprehensive strategy that connects your brand with the right people at the right time. At Synzephyr Technologies — Pollachi's top digital marketing firm — we specialize in creating data-backed campaigns that drive engagement, visibility, and sales. From expert social media management to precision-targeted advertising on Facebook, Instagram, and Google, we help Pollachi businesses of all sizes stand out and thrive online."
                benefits={benefits}
            >
                <div className="space-y-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="flex flex-col p-6 bg-background rounded-2xl border border-border shadow-sm hover:border-primary/50 transition-colors">
                            <Megaphone className="h-10 w-10 text-red-500 mb-4" />
                            <h3 className="font-bold text-lg mb-2">Social Awareness</h3>
                            <p className="text-sm text-muted-foreground">We help your business in Pollachi become a household name through viral content and consistent social media presence across Major platforms.</p>
                        </div>
                        <div className="flex flex-col p-6 bg-background rounded-2xl border border-border shadow-sm hover:border-primary/50 transition-colors">
                            <MessageCircle className="h-10 w-10 text-blue-400 mb-4" />
                            <h3 className="font-bold text-lg mb-2">Organic Engagement</h3>
                            <p className="text-sm text-muted-foreground">Build a loyal community of customers who truly care about your brand. We manage your comments, reviews, and messages to build trust in Pollachi.</p>
                        </div>
                        <div className="flex flex-col p-6 bg-background rounded-2xl border border-border shadow-sm hover:border-primary/50 transition-colors">
                            <MousePointerClick className="h-10 w-10 text-green-500 mb-4" />
                            <h3 className="font-bold text-lg mb-2">High-ROI Paid Ads</h3>
                            <p className="text-sm text-muted-foreground">Stop wasting money on 'boosted' posts. Our professional ad campaigns focus on conversions, delivering a healthy return on your advertising spend.</p>
                        </div>
                    </div>

                    <div className="prose dark:prose-invert max-w-none">
                        <h2 className="text-2xl font-bold">Comprehensive Marketing Strategy for Tamil Nadu Businesses</h2>
                        <p className="text-muted-foreground">
                            Our approach to digital marketing in Pollachi goes beyond simple posts. We analyze your customer journey from the first impression to the final sale.
                        </p>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
                            <div className="space-y-4">
                                <h4 className="font-bold text-lg text-primary">Strategic Social Media Management</h4>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    We handle your Meta (Facebook & Instagram), LinkedIn, and even regional platforms to ensure your brand voice is consistent and professional. Our content calendars are designed to stay ahead of local Pollachi events and festivals, ensuring your business stays top-of-mind for local shoppers.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <h4 className="font-bold text-lg text-primary">Precision-Targeted Paid Advertising</h4>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    We specialize in hyper-local targeting. Whether you want to reach people within a 10km radius of your shop in Pollachi or expand your reach across the Coimbatore district, we optimize every rupee of your budget for the best possible visibility and lead volume.
                                </p>
                            </div>
                        </div>
                    </div>

                    <section className="p-8 bg-primary/5 rounded-3xl border border-primary/20">
                        <h2 className="text-xl font-bold mb-4">Why Local Expertise Matters</h2>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                            We aren't just an agency; we are residents of the Pollachi and Coimbatore area. We understand the local festivals (like Pollachi Jallikattu or temple festivals), the regional dialect, and the specific needs of the local Tamil population. This cultural intelligence allows us to write copy and design graphics that resonate far more deeply than anything produced by a distant city agency.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            When you choose Synzephyr Technologies, you are choosing a partner that is invested in the economic growth of the Pollachi region. We are committed to helping local retailers, schools, hospitals, and real estate firms dominate the digital space.
                        </p>
                    </section>
                </div>
            </ServiceLayout>
        </>
    )
}
