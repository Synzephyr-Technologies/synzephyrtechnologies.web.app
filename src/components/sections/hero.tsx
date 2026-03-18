"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect } from "react"
import { performanceMark } from "@/lib/performance"

export function Hero() {
    useEffect(() => {
        performanceMark("hero-mounted")
    }, [])
    return (
        <section className="relative flex flex-col items-center justify-center min-h-[95vh] overflow-hidden mesh-bg pt-20 pb-16 text-center md:pt-32 md:pb-32">
            <div className="container relative z-10 px-4 md:px-6">
                <motion.div 
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="mx-auto max-w-4xl space-y-6 flex flex-col items-center"
                >
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                        className="mb-6 relative group"
                    >
                        <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full group-hover:bg-primary/30 transition-colors duration-500" aria-hidden="true" />
                        <picture className="relative z-10 block animate-float">
                            <source
                                srcSet="/logo-300.webp 300w, /logo-640.webp 640w, /logo.webp 1280w"
                                sizes="(max-width: 640px) 120px, 144px"
                                type="image/webp"
                            />
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="/logo-300.webp"
                                alt="Synzephyr Technologies – Global Digital Growth Agency"
                                width={300}
                                height={300}
                                className="h-28 md:h-40 w-auto drop-shadow-[0_0_25px_rgba(59,130,246,0.3)]"
                                fetchPriority="high"
                                loading="eager"
                                decoding="async"
                            />
                        </picture>
                    </motion.div>
                    
                    <h1 
                        className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-8xl pb-2 leading-tight animate-lcp"
                    >
                        <span className="block text-foreground mb-2">Elevate Your Brand</span>
                        <span className="text-gradient drop-shadow-sm">Worldwide</span>
                    </h1>

                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="mx-auto max-w-[700px] text-muted-foreground text-lg md:text-xl leading-relaxed"
                    >
                        Your global partner for <strong>expert SEO</strong>, <strong>social media management</strong>, and <strong>high-intent digital marketing</strong>. Scaling brands with data-driven strategies across the globe.
                    </motion.p>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="mx-auto mt-10 flex w-full max-w-sm flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
                    >
                        <Link
                            href="/contact"
                            className="group inline-flex h-14 items-center justify-center rounded-full bg-primary px-8 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:scale-105 hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                        >
                            Get Started
                            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Link>
                        <Link
                            href="/services"
                            className="inline-flex h-14 items-center justify-center rounded-full border-2 border-border bg-background/50 backdrop-blur-sm px-8 text-base font-semibold shadow-sm transition-all hover:scale-105 hover:bg-accent hover:border-primary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                        >
                            View Services
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
            
            {/* Background elements */}
            <div 
                className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none animate-pulse-slow" 
                aria-hidden="true" 
            />
            <div 
                className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none animate-pulse-slower" 
                aria-hidden="true" 
            />
            
            {/* Scroll Indicator */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center p-1">
                    <motion.div 
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        className="w-1.5 h-1.5 bg-primary rounded-full"
                    />
                </div>
            </motion.div>
        </section>
    )
}

