"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { MapPin, ArrowRight, Globe2 } from "lucide-react"

const serviceAreas = [
    "Pollachi", "Coimbatore", "Udumalpet", "Tiruppur", "Anaimalai",
    "Valparai", "Palladam", "Kinathukadavu", "Madukarai", "Sulur"
]

export function LocationFocus() {
    return (
        <section className="py-32 relative overflow-hidden bg-muted/20" aria-labelledby="locations-heading">
            <div className="container px-4 md:px-6 mx-auto relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-20 space-y-4">
                    <motion.span 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide uppercase mb-4 inline-block"
                    >
                        Presence
                    </motion.span>
                    <motion.h2 
                        id="locations-heading" 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl font-black tracking-tight sm:text-5xl md:text-6xl"
                    >
                        Global Reach, <span className="text-gradient">Local Expertise</span>
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
                    >
                        Headquartered in <strong>India</strong>, we provide digital growth services to clients <strong>worldwide</strong>.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="glass rounded-[3rem] border border-border/50 p-10 md:p-14 space-y-8 hover:shadow-2xl hover:border-primary/30 transition-all duration-500 group"
                    >
                        <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                            <MapPin className="h-7 w-7" />
                        </div>
                        <h3 className="text-3xl font-bold tracking-tight">Regional Strength</h3>
                        <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
                            <p>
                                Strategically positioned in <strong>Pollachi</strong> and <strong>Coimbatore</strong>, we understand localized market trends while maintaining global operation standards.
                            </p>
                        </div>
                        <Link href="/digital-marketing-pollachi" className="group/btn inline-flex items-center text-primary font-bold text-lg hover:gap-3 transition-all">
                            Explore Regional Solutions <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover/btn:translate-x-1" />
                        </Link>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="glass rounded-[3rem] border border-border/50 p-10 md:p-14 space-y-8 hover:shadow-2xl hover:border-primary/30 transition-all duration-500 group"
                    >
                        <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                            <Globe2 className="h-7 w-7" />
                        </div>
                        <h3 className="text-3xl font-bold tracking-tight">Worldwide Impact</h3>
                        <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
                            <p>
                                From USA to Europe, we deliver high-performance digital results across time zones, ensuring your brand dominates its niche on the global stage.
                            </p>
                        </div>
                        <Link href="/digital-marketing-coimbatore" className="group/btn inline-flex items-center text-primary font-bold text-lg hover:gap-3 transition-all">
                            Global Growth Strategy <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover/btn:translate-x-1" />
                        </Link>
                    </motion.div>
                </div>

                <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass rounded-[3rem] border border-primary/20 p-10 md:p-16 text-center max-w-4xl mx-auto backdrop-blur-xl relative overflow-hidden"
                >
                    <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/10 blur-[100px] pointer-events-none" />
                    <h3 className="text-2xl font-bold mb-8 flex items-center justify-center gap-3">
                        <Globe2 className="h-6 w-6 text-primary" /> Multi-Region Support Hub
                    </h3>
                    <div className="flex flex-wrap justify-center gap-3 mb-10">
                        {serviceAreas.map(area => (
                            <span key={area} className="text-sm font-bold bg-background/50 border border-border/50 rounded-full px-6 py-2 text-muted-foreground hover:border-primary/40 hover:text-primary transition-all cursor-default">
                                {area}
                            </span>
                        ))}
                    </div>
                    <div className="pt-8 border-t border-border/50">
                        <p className="text-sm font-black text-muted-foreground uppercase tracking-[0.3em] opacity-50">
                            USA · UK · INDIA · MIDDLE EAST · WORLDWIDE
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

