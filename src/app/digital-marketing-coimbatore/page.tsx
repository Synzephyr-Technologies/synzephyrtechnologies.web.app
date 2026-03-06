import type { Metadata } from "next"
import Link from "next/link"
import { Search, Globe, MapPin, Palette, ArrowRight, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
    title: "Digital Marketing Agency in Coimbatore",
    description: "Synzephyr Technologies: trusted digital marketing agency for Coimbatore. Expert SEO, GMB optimization, and social media marketing. Get a free consultation!",
    alternates: {
        canonical: "https://synzephyrtechnologies.web.app/digital-marketing-coimbatore",
    },
    openGraph: {
        title: "Digital Marketing Agency in Coimbatore | Synzephyr Technologies",
        description: "Top digital marketing services in Coimbatore: SEO, GMB optimization, social media marketing & graphic design for local businesses.",
        url: "https://synzephyrtechnologies.web.app/digital-marketing-coimbatore",
    },
}

const pageJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Digital Marketing Agency in Coimbatore",
    "description": "Full-service digital marketing in Coimbatore including SEO, Google Business Profile optimization, social media marketing, PPC advertising, and graphic design.",
    "provider": { "@id": "https://synzephyrtechnologies.web.app/#localbusiness" },
    "serviceType": "Digital Marketing",
    "areaServed": { "@type": "City", "name": "Coimbatore" },
    "url": "https://synzephyrtechnologies.web.app/digital-marketing-coimbatore",
}

const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "Which is the best digital marketing agency in Coimbatore?",
            "acceptedAnswer": { "@type": "Answer", "text": "Synzephyr Technologies is a highly rated digital marketing agency serving Coimbatore businesses with proven SEO, GMB optimization, social media marketing and paid advertising services." }
        },
        {
            "@type": "Question",
            "name": "Do you offer SEO services for businesses in Coimbatore?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes, we provide specialized SEO services for businesses in Coimbatore. Our Coimbatore SEO packages include keyword research, on-page optimization, local citation building, Google Business Profile optimization, and monthly reporting." }
        },
        {
            "@type": "Question",
            "name": "Do you provide GMB optimization in Coimbatore?",
            "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. We help Coimbatore businesses set up, verify and optimize their Google Business Profile (GMB) to appear in the local 3-pack on Google Maps, driving more walk-ins, calls, and website visits." }
        }
    ]
}

const services = [
    { title: "SEO Services in Coimbatore", description: "Rank on page 1 of Google for Coimbatore-specific keywords.", icon: Search, href: "/seo-services-coimbatore" },
    { title: "Digital Marketing in Pollachi", description: "Social media, ads & content marketing for Tamil Nadu businesses.", icon: Globe, href: "/digital-marketing-pollachi" },
    { title: "GMB Optimization Coimbatore", description: "Appear in Google Maps local pack for Coimbatore searches.", icon: MapPin, href: "/google-business-profile-setup-pollachi" },
    { title: "Graphic Design Coimbatore", description: "Professional logos, branding & creative designs.", icon: Palette, href: "/graphic-design-services-pollachi" },
]

const benefits = [
    "Complete digital marketing strategy tailored for Coimbatore market",
    "SEO to rank on Google for high-intent Coimbatore keywords",
    "Google Business Profile (GMB) setup & optimization",
    "Facebook, Instagram & Google Ads management",
    "Social media content in Tamil & English",
    "Branding & graphic design services",
    "WhatsApp marketing campaigns",
    "Transparent monthly performance reporting",
]

export default function DigitalMarketingCoimbatorePage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
            <div className="flex flex-col min-h-screen">
                {/* Hero */}
                <section className="bg-muted/30 py-20 lg:py-32">
                    <div className="container px-4 md:px-6 mx-auto text-center">
                        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">
                            Digital Marketing Agency in Coimbatore
                        </h1>
                        <p className="mx-auto max-w-[800px] text-muted-foreground text-lg md:text-xl mb-8">
                            Synzephyr Technologies delivers results-driven digital marketing, SEO, GMB optimization, and social media marketing to help Coimbatore businesses dominate their local market online.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact" className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-transform hover:scale-105 hover:bg-primary/90">
                                Get Free Consultation <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                            <Link href="/seo-services-coimbatore" className="inline-flex h-12 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-transform hover:scale-105 hover:bg-accent hover:text-accent-foreground">
                                SEO Services in Coimbatore
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Services Grid */}
                <section className="py-20">
                    <div className="container px-4 md:px-6 mx-auto">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-4">Our Services in Coimbatore</h2>
                        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">Full-stack digital marketing solutions for every Coimbatore business — from startups to established enterprises.</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {services.map((service, index) => (
                                <div key={index} className="group relative p-6 bg-background rounded-2xl shadow-sm border border-border hover:shadow-md transition-shadow">
                                    <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                                        <service.icon className="h-6 w-6 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                                    <p className="text-muted-foreground mb-4 text-sm">{service.description}</p>
                                    <Link href={service.href} className="text-primary font-medium text-sm inline-flex items-center hover:underline">
                                        Learn more <ArrowRight className="ml-1 h-3 w-3" />
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why Choose Us */}
                <section className="py-20 bg-muted/30">
                    <div className="container px-4 md:px-6 mx-auto">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <h2 className="text-3xl font-bold">Why Coimbatore Businesses Choose Synzephyr</h2>
                                <p className="text-muted-foreground text-lg">
                                    We understand the Coimbatore business landscape — the industries, the competition, and the digital behaviour of local customers. Our team crafts data-backed digital marketing strategies that deliver real, measurable growth for businesses in Coimbatore.
                                </p>
                                <ul className="space-y-3">
                                    {benefits.map((benefit, i) => (
                                        <li key={i} className="flex items-start">
                                            <CheckCircle className="h-5 w-5 text-green-500 mr-3 shrink-0 mt-0.5" />
                                            <span>{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Link href="/contact" className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-transform hover:scale-105 hover:bg-primary/90 mt-4">
                                    Start Growing in Coimbatore <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </div>
                            <div className="bg-background rounded-3xl p-8 lg:p-12 border border-border space-y-4">
                                <h3 className="text-2xl font-bold">Coimbatore Service Areas</h3>
                                <p className="text-muted-foreground">We serve businesses across all major areas of Coimbatore:</p>
                                <div className="grid grid-cols-2 gap-2 text-sm">
                                    {["RS Puram", "Gandhipuram", "Peelamedu", "Saibaba Colony", "Singanallur", "Ganapathy", "Ukkadam", "Vadavalli", "Kuniyamuthur", "Podanur"].map((area) => (
                                        <span key={area} className="flex items-center gap-2 text-muted-foreground">
                                            <MapPin className="h-3 w-3 text-primary shrink-0" />{area}
                                        </span>
                                    ))}
                                </div>
                                <div className="mt-6 p-4 bg-primary/5 rounded-xl border border-primary/20">
                                    <p className="text-sm font-semibold">📞 Call / WhatsApp: <a href="tel:+919443449557" className="text-primary hover:underline">+91 94434 49557</a></p>
                                    <p className="text-sm text-muted-foreground mt-1">Free digital marketing consultation for Coimbatore businesses.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-20">
                    <div className="container px-4 md:px-6 mx-auto max-w-3xl">
                        <h2 className="text-3xl font-bold text-center mb-12">FAQs — Digital Marketing in Coimbatore</h2>
                        <div className="space-y-6">
                            {faqJsonLd.mainEntity.map((faq, i) => (
                                <div key={i} className="bg-background border border-border rounded-xl p-6">
                                    <h3 className="font-bold text-lg mb-2">{faq.name}</h3>
                                    <p className="text-muted-foreground text-sm">{faq.acceptedAnswer.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
