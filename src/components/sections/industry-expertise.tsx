import { Building2, Utensils, Stethoscope, ShoppingBag } from "lucide-react"

const industries = [
    {
        title: "Retail & E-commerce",
        description: "From niche local boutiques to global e-commerce platforms, we build high-converting digital storefronts. We specialize in cross-border SEO, international payment integration, and driving global traffic that converts into loyal customers.",
        icon: ShoppingBag,
    },
    {
        title: "Technology & SaaS",
        description: "Software companies require a data-driven approach. We help technical brands build authority globally through strategic content marketing, LinkedIn growth, and precision-targeted Google Ads that reach decision-makers everywhere.",
        icon: Building2,
    },
    {
        title: "Professional Services",
        description: "Whether you are a global consultancy or a regional firm, we establish your expertise online. We build high-DR backlinks and optimize your site for high-intent keywords that attract premium B2B and B2C clients worldwide.",
        icon: Stethoscope,
    },
    {
        title: "Real Estate & Hospitality",
        description: "We help developers and hospitality brands reach international investors and travelers. Our multi-region SEO and immersive digital branding ensure your properties stand out on the global map.",
        icon: Building2,
    },
]

export function IndustryExpertise() {
    return (
        <section className="py-20 bg-background" aria-labelledby="expertise-heading">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="text-center mb-16">
                    <h2 id="expertise-heading" className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        Strategic Industry Expertise
                    </h2>
                    <p className="mt-4 text-muted-foreground text-lg max-w-3xl mx-auto">
                        We deliver world-class digital growth strategies tailored to your industry's specific challenges and global opportunities.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {industries.map((item, index) => (
                        <div key={index} className="flex gap-6 items-start">
                            <div className="mt-1 h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                                <item.icon className="h-6 w-6 text-primary" />
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-xl font-bold">{item.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-20 p-8 md:p-12 bg-primary/5 rounded-3xl border border-primary/20">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                        <div className="lg:col-span-2 space-y-4">
                            <h3 className="text-2xl font-bold">Why Businesses Worldwide Choose Synzephyr</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                We combine the technical precision of a global agency with the personalized attention of a dedicated partner. Our strategies are not generic; they are data-backed and built to compete in the world's most aggressive digital markets. From our headquarters in India, we leverage a deep talent pool to provide world-class SEO, marketing, and design at a competitive price point.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                Our mission is to empower entrepreneurs everywhere with the high-level digital tools needed to dominate their niche. Whether you are scaling locally or expanding internationally, we provide the technical foundation and creative spark to make it happen.
                            </p>
                        </div>
                        <div className="bg-background rounded-2xl p-6 shadow-sm border border-border">
                            <div className="text-4xl font-bold text-primary mb-2">95%</div>
                            <p className="font-semibold mb-1">Success Rate</p>
                            <p className="text-sm text-muted-foreground">Of our long-term campaigns achieve top-page rankings for primary keywords.</p>
                            <hr className="my-4 border-border" />
                            <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                            <p className="font-semibold mb-1">Global Support</p>
                            <p className="text-sm text-muted-foreground">We work across time zones to ensure your digital assets are always performing.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
