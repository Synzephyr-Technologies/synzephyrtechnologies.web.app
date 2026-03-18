import type { Metadata } from "next"
import { ServiceLayout } from "@/components/service-layout"
import { PenTool, Image as ImageIcon, Layers } from "lucide-react"

export const metadata: Metadata = {
    title: "Graphic Design Services Pollachi",
    description: "Professional graphic design in Pollachi. Custom logo design, brand identity, and marketing materials by Synzephyr Technologies. Make your brand unforgettable!",
    alternates: {
        canonical: "https://synzephyrtechnologies.web.app/graphic-design-services-pollachi",
    },
    openGraph: {
        title: "Graphic Design Services in Pollachi | Logo & Branding | Synzephyr",
        description: "Professional logo design, branding & marketing materials in Pollachi. Creative designs that captivate your audience and drive business growth.",
        url: "https://synzephyrtechnologies.web.app/graphic-design-services-pollachi",
    },
}

const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Graphic Design Services in Pollachi",
    "description": "Professional graphic design and branding services for businesses in Pollachi. We offer logo design, brand identity, social media creatives, brochures, packaging design, and UI/UX design.",
    "provider": { "@id": "https://synzephyrtechnologies.web.app/#localbusiness" },
    "serviceType": "Graphic Design",
    "areaServed": { "@type": "City", "name": "Pollachi" },
    "url": "https://synzephyrtechnologies.web.app/graphic-design-services-pollachi",
}

const benefits = [
    "Custom Logo Design & Complete Brand Identity",
    "Social Media Post Creatives (Instagram, Facebook, LinkedIn)",
    "Brochure, Flyer & Pamphlet Design",
    "Business Card & Visiting Card Design",
    "Product Packaging Design",
    "Banner & Hoarding Design",
    "Presentation & Pitch Deck Design",
    "UI/UX Design for Web & Mobile Apps",
    "Marketing Collateral & Print Materials",
]

export default function GraphicDesignPollachiPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
            <ServiceLayout
                title="Graphic Design Services in Pollachi"
                subtitle="Visual Storytelling that Captures Your Brand Essence & Drives Action."
                description="First impressions matter. For businesses in Pollachi and Coimbatore, a strong visual identity is the difference between being remembered and being ignored. Our creative graphic design team at Synzephyr Technologies helps you craft a compelling visual identity that resonates deepl  with your target customers. From memorable logos and stunning social media creatives to marketing brochures, packaging, and website UI — every design we create aligns with your brand's message, goals, and audience. We work with businesses across all industries in Pollachi, Coimbatore, and Tamil Nadu."
                benefits={benefits}
                currentPath="/graphic-design-services-pollachi"
            >
                <div className="grid grid-cols-1 gap-6">
                    <div className="flex items-center space-x-4 p-4 bg-background rounded-xl border border-border">
                        <PenTool className="h-8 w-8 text-pink-500" />
                        <div>
                            <h3 className="font-bold">Unique Brand Identity</h3>
                            <p className="text-sm text-muted-foreground">Stand out in the Pollachi market with custom, professional branding.</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4 p-4 bg-background rounded-xl border border-border">
                        <ImageIcon className="h-8 w-8 text-purple-500" />
                        <div>
                            <h3 className="font-bold">High-Quality Visuals</h3>
                            <p className="text-sm text-muted-foreground">Capture attention on social media and offline with stunning creative work.</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4 p-4 bg-background rounded-xl border border-border">
                        <Layers className="h-8 w-8 text-indigo-500" />
                        <div>
                            <h3 className="font-bold">Consistent Brand Presence</h3>
                            <p className="text-sm text-muted-foreground">Maintain a cohesive look across all online and offline platforms.</p>
                        </div>
                    </div>
                    <section className="p-4 bg-primary/5 rounded-xl border border-primary/20">
                        <h2 className="font-bold text-lg mb-2">Graphic Design + Digital Marketing Bundle</h2>
                        <p className="text-sm text-muted-foreground">Pair our graphic design services with social media management or digital marketing for a complete brand growth solution. We create the content and market it to the right audience in Pollachi and Coimbatore.</p>
                    </section>
                </div>
            </ServiceLayout>
        </>
    )
}
