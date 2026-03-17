"use client"

import { Building2, Utensils, Stethoscope, ShoppingBag, CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"

const industries = [
    {
        title: "Retail & E-commerce",
        description: "From niche local boutiques to global e-commerce platforms, we build high-converting digital storefronts. We specialize in cross-border SEO and international growth.",
        icon: ShoppingBag,
    },
    {
        title: "Technology & SaaS",
        description: "Software companies require a data-driven approach. We help technical brands build authority globally through strategic content marketing and precision-targeted ads.",
        icon: Building2,
    },
    {
        title: "Professional Services",
        description: "Whether you are a global consultancy or a regional firm, we establish your expertise online. We attract premium B2B and B2C clients worldwide.",
        icon: Stethoscope,
    },
    {
        title: "Real Estate & Hospitality",
        description: "We help developers and hospitality brands reach international investors and travelers. Our multi-region SEO ensures your properties stand out on the global map.",
        icon: Building2,
    },
]

export function IndustryExpertise() {
    return (
        <section className="py-32 relative overflow-hidden" aria-labelledby="expertise-heading">
            <div className="container px-4 md:px-6 mx-auto relative z-10">
                <div className="text-center mb-20">
                    <motion.span 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide uppercase mb-4 inline-block"
                    >
                        Market Impact
                    </motion.span>
                    <motion.h2 
                        id="expertise-heading" 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
                    >
                        Strategic Industry <span className="text-gradient">Expertise</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                    {industries.map((item, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex gap-6 items-start group"
                        >
                            <div className="mt-1 h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-lg shadow-primary/5">
                                <item.icon className="h-7 w-7 transition-transform duration-500 group-hover:scale-110" />
                            </div>
                            <div className="space-y-3">
                                <h3 className="text-2xl font-bold tracking-tight">{item.title}</h3>
                                <p className="text-muted-foreground leading-relaxed text-base">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-24 p-8 md:p-14 glass rounded-[3rem] border border-border/50 relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-3xl pointer-events-none" />
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center relative z-10">
                        <div className="lg:col-span-2 space-y-6">
                            <h3 className="text-3xl font-bold tracking-tight">Why Businesses Worldwide Choose Synzephyr</h3>
                            <p className="text-muted-foreground leading-relaxed text-lg">
                                We combine the technical precision of a global agency with the personalized attention of a dedicated partner. Our strategies are not generic; they are data-backed and built to compete in the world's most aggressive digital markets.
                            </p>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {["Direct Expert Access", "Data-Driven ROI", "Global Reach", "Custom Strategies"].map((feature) => (
                                    <li key={feature} className="flex items-center gap-3 font-semibold">
                                        <CheckCircle2 className="h-5 w-5 text-primary" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-primary/5 rounded-3xl p-8 border border-primary/10 space-y-8">
                            <div>
                                <div className="text-5xl font-black text-primary mb-2">95%</div>
                                <p className="font-bold text-lg mb-1">Success Rate</p>
                                <p className="text-sm text-muted-foreground leading-relaxed">Campaigns achieving top-page rankings for primary keywords.</p>
                            </div>
                            <div className="pt-8 border-t border-primary/10">
                                <div className="text-5xl font-black text-primary mb-2">24/7</div>
                                <p className="font-bold text-lg mb-1">Global Support</p>
                                <p className="text-sm text-muted-foreground leading-relaxed">Working across time zones for constant asset performance.</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

