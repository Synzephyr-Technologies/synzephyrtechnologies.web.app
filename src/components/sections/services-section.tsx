"use client"

import { Search, Globe, Palette, MapPin, ArrowRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import type { Variants } from "framer-motion"

const services = [
    {
        title: "SEO Optimization",
        description: "Dominate search results with our global SEO experts. We scale your business with high-intent keywords and international ranking strategies.",
        icon: Search,
        href: "/seo-services-pollachi",
        color: "from-blue-500 to-cyan-500"
    },
    {
        title: "Digital Marketing",
        description: "Professional social media management and high-ROI ad campaigns (Facebook, Instagram, Google Ads) for global brands and startups.",
        icon: Globe,
        href: "/digital-marketing-pollachi",
        color: "from-purple-500 to-pink-500"
    },
    {
        title: "Graphic Design",
        description: "Creative graphic design studio delivering professional logo design and corporate branding worldwide. We build visual identities that command authority.",
        icon: Palette,
        href: "/graphic-design-services-pollachi",
        color: "from-orange-500 to-red-500"
    },
    {
        title: "GMB Optimization",
        description: "Local dominance combined with global standards. We optimize your Google Business Profile to rank in the Local 3-Pack and drive immediate trust.",
        icon: MapPin,
        href: "/google-business-profile-setup-pollachi",
        color: "from-green-500 to-emerald-500"
    },
]

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
}

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeInOut"
        }
    }
}

export function ServicesSection() {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="container px-4 md:px-6 mx-auto relative z-10">
                <div className="text-center mb-20">
                    <motion.span 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide uppercase mb-4 inline-block"
                    >
                        Our Expertise
                    </motion.span>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6"
                    >
                        Solutions specialized for <span className="text-gradient">Growth</span>
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed"
                    >
                        Comprehensive digital solutions designed to help your business scale across borders and dominate your industry.
                    </motion.p>
                </div>

                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -10 }}
                            className="group relative p-8 glass rounded-3xl border border-border/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/30"
                        >
                            <div className={`h-14 w-14 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-black/5 group-hover:scale-110 transition-transform duration-500`}>
                                <service.icon className="h-7 w-7 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold mb-3 tracking-tight">{service.title}</h3>
                            <p className="text-muted-foreground mb-6 text-base leading-relaxed">{service.description}</p>
                            <Link
                                href={service.href}
                                className="inline-flex items-center text-primary font-bold text-sm tracking-wide group/link uppercase"
                            >
                                Learn more
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/link:translate-x-1.5" />
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Background Decoration */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-primary/5 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/5 blur-[100px] rounded-full pointer-events-none" />
        </section>
    )
}

