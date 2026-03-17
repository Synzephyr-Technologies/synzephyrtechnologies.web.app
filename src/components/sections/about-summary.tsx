"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { CheckCircle, ArrowRight, Zap } from "lucide-react"

const services = [
    { label: "Advanced SEO Hub", desc: "Rank #1 for high-volume keywords in your industry globally.", href: "/seo-services-pollachi" },
    { label: "Strategic Marketing", desc: "Targeted ads and social management to skyrocket awareness.", href: "/digital-marketing-pollachi" },
    { label: "GMB Optimization", desc: "Dominate local search and drive massive direct engagement.", href: "/google-business-profile-setup-pollachi" },
    { label: "Premium Branding", desc: "Professional identity sets that build instant global authority.", href: "/graphic-design-services-pollachi" },
]

export function AboutSummary() {
    return (
        <section className="py-32 relative overflow-hidden" aria-labelledby="about-heading">
            <div className="container px-4 md:px-6 mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="space-y-10">
                        <motion.span 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold uppercase tracking-wider"
                        >
                            <Zap className="h-4 w-4" />
                            About Synzephyr
                        </motion.span>
                        <motion.h2 
                            id="about-heading" 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl font-black tracking-tight sm:text-5xl md:text-6xl leading-[1.05]"
                        >
                            Global Growth Partner with <span className="text-gradient">Technical Roots</span>
                        </motion.h2>
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="space-y-6 text-muted-foreground text-lg md:text-xl leading-relaxed max-w-xl"
                        >
                            <p>
                                Synzephyr Technologies is a results-driven digital agency serving clients <strong>worldwide</strong>. While we maintain our physical roots in India, our operations are built for global scale.
                            </p>
                            <p>
                                We bridge the gap between technical excellence and creative marketing to help businesses of all sizes scale their online presence with international standards.
                            </p>
                        </motion.div>
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-col sm:flex-row gap-4 pt-4"
                        >
                            <Link href="/about" className="group inline-flex h-14 items-center justify-center rounded-full bg-primary px-10 text-base font-bold text-primary-foreground shadow-xl transition-all hover:scale-105 hover:bg-primary/90">
                                Learn More 
                                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </Link>
                            <Link href="/contact" className="inline-flex h-14 items-center justify-center rounded-full border border-border bg-background px-10 text-base font-bold hover:bg-muted transition-all">
                                Free Consultation
                            </Link>
                        </motion.div>
                    </div>

                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="relative group"
                    >
                        <div className="absolute -inset-10 bg-primary/5 blur-[100px] rounded-full pointer-events-none" />
                        <div className="relative glass p-8 md:p-14 rounded-[3.5rem] border border-border/50 shadow-2xl overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl" />
                            <h3 className="text-3xl font-bold tracking-tight mb-4">Core Ecosystem</h3>
                            <p className="text-muted-foreground mb-10 text-lg">
                                We provide a full-funnel approach to ensure your business stays ahead of the competition globally.
                            </p>
                            <div className="grid grid-cols-1 gap-6">
                                {services.map((s, i) => (
                                    <Link key={i} href={s.href} className="flex items-start gap-5 p-5 rounded-3xl hover:bg-primary/5 transition-all border border-transparent hover:border-primary/20 group/item">
                                        <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover/item:bg-primary group-hover/item:text-white transition-all duration-300">
                                            <CheckCircle className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg group-hover/item:text-primary transition-colors">{s.label}</h4>
                                            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

