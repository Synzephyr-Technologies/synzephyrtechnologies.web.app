import type { Metadata } from "next"
import { ServiceLayout } from "@/components/service-layout"
import { MapPin, Star, PhoneCall } from "lucide-react"

export const metadata: Metadata = {
    title: "GMB Optimization & Setup Pollachi",
    description: "Expert Google Business Profile (GMB) setup in Pollachi. Appear in Google Maps local pack and get more calls from nearby customers. Trusted by local businesses.",
    alternates: {
        canonical: "https://synzephyrtechnologies.web.app/google-business-profile-setup-pollachi",
    },
    openGraph: {
        title: "GMB Optimization & Setup Pollachi | Synzephyr",
        description: "Professional Google Business Profile setup and GMB optimization in Pollachi. Get into the local 3-pack and drive more customers to your business.",
        url: "https://synzephyrtechnologies.web.app/google-business-profile-setup-pollachi",
    },
}

const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Google Business Profile Setup & GMB Optimization Pollachi",
    "description": "Professional Google Business Profile (formerly Google My Business / GMB) setup, verification, and optimization for businesses in Pollachi. We help you rank in the Google local 3-pack and drive more calls and walk-ins.",
    "provider": { "@id": "https://synzephyrtechnologies.web.app/#localbusiness" },
    "serviceType": "Google Business Profile Optimization",
    "areaServed": [
        { "@type": "City", "name": "Pollachi" },
        { "@type": "City", "name": "Coimbatore" }
    ],
    "url": "https://synzephyrtechnologies.web.app/google-business-profile-setup-pollachi",
}

const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "What is GMB optimization and why do Pollachi businesses need it?",
            "acceptedAnswer": { "@type": "Answer", "text": "GMB (Google My Business / Google Business Profile) optimization is the process of fully setting up and enhancing your business listing on Google. It ensures your business appears in local searches and Google Maps when customers in Pollachi search for your services — leading to more calls, website visits, and walk-ins." }
        },
        {
            "@type": "Question",
            "name": "How long does it take to set up and verify a Google Business Profile in Pollachi?",
            "acceptedAnswer": { "@type": "Answer", "text": "The initial setup can be done within a day. Google verification (via postcard or phone) typically takes 5–14 days. Full optimization with photos, posts, Q&A, and reviews strategy takes about 2–4 weeks for maximum impact." }
        },
        {
            "@type": "Question",
            "name": "Can you help my Pollachi business appear in the Google Maps 3-pack?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes. Our GMB optimization strategy is specifically designed to help Pollachi businesses appear in the Google Maps Local 3-pack — the top 3 business listings shown in local search results. This involves profile completeness, review generation, citation building, and local SEO signals." }
        }
    ]
}

const benefits = [
    "Complete GBP Setup, Verification & Category Selection",
    "Keyword Optimization for Pollachi Local Searches",
    "Review Management & Review Generation Strategy",
    "Regular Google Posts & Offer Updates",
    "Photo & Video Uploads (Products, Team, Location)",
    "Q&A Section Management",
    "Local Citation Building (NAP Consistency)",
    "Google Maps Local 3-Pack Ranking Strategy",
    "Monthly GMB Performance Insights Report",
]

export default function GmbSetupPollachiPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
            <ServiceLayout
                title="GMB Optimization in Pollachi"
                subtitle="Be the First Choice for Local Customers — Dominate Google Maps in Pollachi."
                description="When customers in Pollachi search for services like yours, do they find you on Google Maps? A fully optimized Google Business Profile (GBP) — formerly called Google My Business (GMB) — is the single most powerful tool for local visibility. Synzephyr Technologies helps Pollachi businesses set up, verify, and optimize their GBP to ensure they appear prominently in the coveted 'Local 3-pack', driving maximum foot traffic, phone calls, and website visits. We also handle ongoing management so your profile stays fresh, relevant, and competitive."
                benefits={benefits}
                currentPath="/google-business-profile-setup-pollachi"
            >
                <div className="grid grid-cols-1 gap-6">
                    <div className="flex items-center space-x-4 p-4 bg-background rounded-xl border border-border">
                        <MapPin className="h-8 w-8 text-red-600" />
                        <div>
                            <h3 className="font-bold">Google Maps Local 3-Pack</h3>
                            <p className="text-sm text-muted-foreground">Appear at the top of local searches the moment customers in Pollachi look for your service.</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4 p-4 bg-background rounded-xl border border-border">
                        <Star className="h-8 w-8 text-yellow-400" />
                        <div>
                            <h3 className="font-bold">Reviews & Reputation</h3>
                            <p className="text-sm text-muted-foreground">Build a 5-star reputation with proactive review generation and management.</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4 p-4 bg-background rounded-xl border border-border">
                        <PhoneCall className="h-8 w-8 text-green-600" />
                        <div>
                            <h3 className="font-bold">More Calls & Walk-Ins</h3>
                            <p className="text-sm text-muted-foreground">Make it effortless for local customers to call, get directions, or book an appointment.</p>
                        </div>
                    </div>
                    <section className="p-4 bg-primary/5 rounded-xl border border-primary/20">
                        <h2 className="font-bold text-lg mb-2">GMB Optimization for Coimbatore Too</h2>
                        <p className="text-sm text-muted-foreground">We also provide Google Business Profile optimization services for businesses in Coimbatore, Udumalpet, Tiruppur, and across Tamil Nadu. Contact us to discuss your specific location needs.</p>
                    </section>
                </div>
            </ServiceLayout>
        </>
    )
}
