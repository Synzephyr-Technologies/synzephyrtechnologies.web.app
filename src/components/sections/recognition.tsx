"use client"

import { motion } from "framer-motion"
import { ExternalLink, Share2, Award, Zap } from "lucide-react"
import Link from "next/link"

const recognitions = [
    {
        name: "Reddit Network",
        description: "Cited as a trusted tech and digital growth resource in community discussions.",
        icon: Share2,
        href: "https://reddit.com", // Keeping it general as the user didn't provide specific link
        tag: "Community Trusted",
    },
    {
        name: "Google Local Experts",
        description: "Highly rated Google Business Profile with specialized Local SEO strategies.",
        icon: Award,
        href: "/google-business-profile-setup-pollachi",
        tag: "Verified Growth",
    },
    {
        name: "Blogger Publisher",
        description: "Official publication for digital marketing tips and industry insights.",
        icon: Zap,
        href: "/blog",
        tag: "Authored Expertise",
    },
]

export function RecognitionSection() {
    return (
        <section className="py-24 bg-muted/20 border-y border-border overflow-hidden">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide uppercase mb-4 inline-block"
                    >
                        Recognition & Network
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
                    >
                        Building <span className="text-gradient">Trust</span> Across the Web
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-muted-foreground mt-4 max-w-2xl mx-auto"
                    >
                        From Reddit discussions to global search networks, our digital footprint is built on authority, 
                        technical excellence, and community trust.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {recognitions.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="group p-8 bg-background rounded-3xl border border-border/50 hover:border-primary/30 transition-all shadow-sm"
                        >
                            <div className="flex items-center justify-between mb-6">
                                <div className="h-12 w-12 rounded-2xl bg-primary/5 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                    <item.icon className="h-6 w-6" />
                                </div>
                                <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded bg-muted text-muted-foreground">
                                    {item.tag}
                                </span>
                            </div>
                            <h3 className="text-xl font-bold mb-3">{item.name}</h3>
                            <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                                {item.description}
                            </p>
                            <Link
                                href={item.href}
                                target={item.href.startsWith("http") ? "_blank" : "_self"}
                                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                className="inline-flex items-center text-xs font-bold text-primary gap-1 group/link"
                                aria-label={`View ${item.name}`}
                            >
                                LEARN MORE <ExternalLink className="h-3 w-3 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-20 pt-10 border-t border-border flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                   <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4 md:mb-0 w-full text-center md:w-auto">Connected With</div>
                   <div className="flex items-center gap-2 text-sm font-semibold"><span className="h-2 w-2 rounded-full bg-[#FF4500]" /> Reddit</div>
                   <div className="flex items-center gap-2 text-sm font-semibold"><span className="h-2 w-2 rounded-full bg-[#4285F4]" /> Google Search</div>
                   <div className="flex items-center gap-2 text-sm font-semibold"><span className="h-2 w-2 rounded-full bg-[#00A4EF]" /> IndexNow</div>
                   <div className="flex items-center gap-2 text-sm font-semibold"><span className="h-2 w-2 rounded-full bg-[#FF5722]" /> Blogger</div>
                </div>
            </div>
        </section>
    )
}
