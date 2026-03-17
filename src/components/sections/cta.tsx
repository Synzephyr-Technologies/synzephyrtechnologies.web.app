"use client"

import Link from "next/link"
import { ArrowRight, Zap } from "lucide-react"
import { motion } from "framer-motion"

export function CTA() {

    return (
        <section className="py-24 relative overflow-hidden">
            <div className="container px-4 md:px-6 mx-auto relative z-10">
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative rounded-[3rem] overflow-hidden bg-primary px-8 py-16 text-center text-primary-foreground shadow-2xl shadow-primary/20"
                >
                    {/* Background Pattern/Glow */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent)] pointer-events-none" />
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 blur-[80px] rounded-full pointer-events-none" />
                    <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-black/20 blur-[80px] rounded-full pointer-events-none" />

                    <div className="relative z-10 max-w-3xl mx-auto space-y-8">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-sm font-bold uppercase tracking-widest animate-pulse">
                            <Zap className="h-4 w-4 fill-current" />
                            Next Step
                        </div>
                        <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
                            Ready to dominate your <span className="text-blue-200">digital market?</span>
                        </h2>
                        <p className="mx-auto max-w-[600px] text-primary-foreground/80 text-lg md:text-xl leading-relaxed">
                            Let&apos;s discuss how Synzephyr Technologies can help you scale your brand worldwide with data-driven strategies.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link
                                href="/contact"
                                className="group inline-flex h-14 items-center justify-center rounded-full bg-white px-10 text-base font-bold text-primary shadow-xl transition-all hover:scale-105 hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                            >
                                Contact Us Today
                                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </Link>
                            <Link
                                href="tel:+919443449557"
                                className="inline-flex h-14 items-center justify-center font-bold text-white hover:text-white/80 transition-colors"
                            >
                                or Call Us: +91 94434 49557
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
            
            {/* Ambient Background Glows */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-primary/20 blur-[100px] pointer-events-none" />
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 bg-cyan-500/10 blur-[100px] pointer-events-none" />
        </section>
    )
}

