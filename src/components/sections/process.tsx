"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle2 } from "lucide-react"

const steps = [
    {
        number: "01",
        title: "Discover",
        description: "We analyze your business, goals, and local market to understand your unique opportunities.",
    },
    {
        number: "02",
        title: "Strategy",
        description: "We develop a tailored roadmap designed to achieve your specific growth objectives.",
    },
    {
        number: "03",
        title: "Execute",
        description: "Our team implements the strategy with precision, using the latest tools and techniques.",
    },
    {
        number: "04",
        title: "Grow",
        description: "We monitor performance, optimize continuously, and scale your success for maximum ROI.",
    },
]

export function Process() {
    return (
        <section className="py-32 relative overflow-hidden bg-background">
            <div className="container px-4 md:px-6 mx-auto relative z-10">
                <div className="text-center mb-20">
                    <motion.span 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide uppercase mb-4 inline-block"
                    >
                        Our Workflow
                    </motion.span>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6"
                    >
                        A Proven Path to <span className="text-gradient">Growth</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative p-8 glass rounded-[2.5rem] border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5"
                        >
                            <div className="text-6xl font-black text-primary/5 absolute top-6 right-8 group-hover:text-primary/10 transition-colors duration-500 select-none">
                                {step.number}
                            </div>
                            <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                <CheckCircle2 className="h-6 w-6" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 tracking-tight">{step.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="text-center mt-16"
                >
                    <Link 
                        href="/contact" 
                        className="group inline-flex h-14 items-center justify-center rounded-full bg-primary px-10 text-base font-bold text-primary-foreground shadow-xl transition-all hover:scale-105 hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    >
                        Start Your Free Consultation
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                </motion.div>
            </div>
            
            {/* Background pattern */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent -z-10" />
        </section>
    )
}

