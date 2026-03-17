"use client"

import { CheckCircle2, TrendingUp, Users, ShieldCheck } from "lucide-react"
import { motion } from "framer-motion"

const reasons = [
    {
        title: "Local Market Expertise",
        desc: "Deep knowledge of regional consumer behaviour that national agencies simply don't have.",
    },
    {
        title: "Data-Driven Strategies",
        desc: "Every campaign decision is backed by keyword data and live performance metrics.",
    },
    {
        title: "Transparent Reporting",
        desc: "Monthly reports with clear metrics — rankings, traffic, leads, and ROI.",
    },
    {
        title: "Customized Solutions",
        desc: "No cookie-cutter packages. Every strategy is built specifically for your audience.",
    },
    {
        title: "Dedicated Support Team",
        desc: "A real team available to answer questions and provide real-time updates.",
    },
    {
        title: "Proven Track Record",
        desc: "Helping businesses rank on page 1 of Google and grow their customer base.",
    },
]

export function WhyChooseUs() {
    return (
        <section className="py-32 bg-muted/20 relative overflow-hidden" aria-labelledby="why-heading">
            <div className="container px-4 md:px-6 mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <motion.span 
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide uppercase mb-4 inline-block"
                        >
                            The Synzephyr Advantage
                        </motion.span>
                        <motion.h2 
                            id="why-heading" 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-8 leading-[1.1]"
                        >
                            Why Choose <span className="text-gradient">Synzephyr Technologies?</span>
                        </motion.h2>
                        
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-muted-foreground text-lg mb-10 leading-relaxed"
                        >
                            We deliver measurable business growth. As a specialized digital marketing agency, we create strategies that truly resonate with your target audience and outperform generic approaches.
                        </motion.p>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {reasons.map((reason, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + (index * 0.1) }}
                                    className="flex items-start space-x-4 group"
                                >
                                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                        <CheckCircle2 className="h-4 w-4" />
                                    </div>
                                    <div>
                                        <span className="font-bold text-lg block">{reason.title}</span>
                                        <span className="text-muted-foreground leading-relaxed">{reason.desc}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-primary/10 blur-3xl -rotate-6 scale-95 pointer-events-none" />
                        <div className="relative glass p-8 md:p-12 rounded-[2.5rem] border border-border/50 shadow-2xl space-y-8">
                            <h3 className="text-3xl font-bold tracking-tight">Our Commitment to Growth</h3>
                            <p className="text-muted-foreground leading-relaxed text-lg">
                                We believe that every business deserves access to high-quality digital marketing that drives genuine growth. We focus on results that matter — more leads, more authority, and more revenue.
                            </p>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-6 border-t border-border/50">
                                {[
                                    { stat: "50+", label: "Clients Served", icon: Users },
                                    { stat: "100%", label: "ROI Driven", icon: TrendingUp },
                                    { stat: "24/7", label: "Global Sync", icon: ShieldCheck },
                                ].map((item, i) => (
                                    <div key={i} className="text-center sm:text-left space-y-2">
                                        <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                                            <item.icon className="h-5 w-5 text-primary" />
                                            <p className="text-3xl font-black tracking-tight">{item.stat}</p>
                                        </div>
                                        <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider">{item.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
            {/* Background elements */}
            <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 blur-[100px] pointer-events-none" />
        </section>
    )
}

