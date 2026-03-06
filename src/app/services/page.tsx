import type { Metadata } from "next"
import Link from "next/link"
import { Search, Globe, Palette, MapPin, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
    title: "Global Digital Growth & SEO Services",
    description: "Scale your brand with Synzephyr's worldwide digital solutions: International SEO, performance marketing, and high-ROI digital growth strategies.",
    alternates: {
        canonical: "https://synzephyrtechnologies.web.app/services",
    },
}


const services = [
    {
        title: "International SEO",
        description: "Dominate search results globally. Our high-performance SEO strategies are designed to scale businesses across international borders and diverse search engines.",
        icon: Search,
        href: "/seo-services-pollachi", // Keeping these as the primary landing for now but renaming title
    },
    {
        title: "Global Performance Marketing",
        description: "Reach your audience anywhere. We execute precision-targeted PPC and social media campaigns that drive growth in any market worldwide.",
        icon: Globe,
        href: "/digital-marketing-pollachi",
    },
    {
        title: "Strategic Branding & Design",
        description: "Build a world-class brand identity. From pro logos to comprehensive brand style guides that resonate with international audiences.",
        icon: Palette,
        href: "/graphic-design-services-pollachi",
    },
    {
        title: "Local SEO & GMB Power",
        description: "Specialized Local SEO and Google Business Profile optimization for businesses looking to dominate their regional and city-level markets.",
        icon: MapPin,
        href: "/google-business-profile-setup-pollachi",
    },
]

export default function ServicesPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <section className="bg-muted/30 py-20 text-center">
                <div className="container px-4 md:px-6 mx-auto">
                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl mb-6">World-Class Digital Solutions</h1>
                    <p className="mx-auto max-w-[700px] text-muted-foreground text-lg md:text-xl">
                        High-performance digital growth strategies delivered to businesses worldwide, powered by data and driven by results.
                    </p>
                </div>
            </section>

            <section className="py-20">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="group relative flex flex-col justify-between p-8 bg-background rounded-2xl border border-border hover:shadow-lg transition-all hover:scale-[1.02]"
                            >
                                <div>
                                    <div className="h-14 w-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary">
                                        <service.icon className="h-7 w-7" />
                                    </div>
                                    <h2 className="text-2xl font-bold mb-3">{service.title}</h2>
                                    <p className="text-muted-foreground mb-6">{service.description}</p>
                                </div>
                                <Link
                                    href={service.href}
                                    className="inline-flex items-center text-primary font-semibold hover:underline mt-auto"
                                >
                                    Learn more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
