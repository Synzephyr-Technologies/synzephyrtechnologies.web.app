"use client"

import { ReactNode } from "react"
import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"
import { Breadcrumbs } from "./breadcrumbs"

interface ServiceLayoutProps {
    title: string
    subtitle: string
    description: string
    benefits: string[]
    currentPath: string
    children?: ReactNode
}

const allServices = [
    { title: "SEO Pollachi", href: "/seo-services-pollachi" },
    { title: "SEO Coimbatore", href: "/seo-services-coimbatore" },
    { title: "Digital Marketing", href: "/digital-marketing-pollachi" },
    { title: "GMB Optimization", href: "/google-business-profile-setup-pollachi" },
    { title: "Graphic Design", href: "/graphic-design-services-pollachi" },
]

export function ServiceLayout({ title, subtitle, description, benefits, currentPath, children }: ServiceLayoutProps) {
    const breadcrumbItems = [
        { label: "Services", href: "/services" },
        { label: title, href: currentPath },
    ]

    const relatedServices = allServices.filter(s => s.href !== currentPath).slice(0, 3)

    return (
        <div className="flex flex-col min-h-screen">
            <section className="bg-muted/30 py-20 lg:py-32">
                <div className="container px-4 md:px-6 mx-auto">
                    <Breadcrumbs items={breadcrumbItems} />
                    <div className="text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl mb-6 bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300"
                        >
                            {title}
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="mx-auto max-w-200 text-muted-foreground text-lg md:text-xl"
                        >
                            {subtitle}
                        </motion.p>
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="container px-4 md:px-6 mx-auto grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold">Why Choose This Service?</h2>
                        <p className="text-lg text-muted-foreground">
                            {description}
                        </p>
                        <ul className="space-y-4 pt-4">
                            {benefits.map((benefit, index) => (
                                <li key={index} className="flex items-start">
                                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 shrink-0" />
                                    <span className="text-lg">{benefit}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="pt-8">
                            <Link
                                href="/contact"
                                className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-transform hover:scale-105 hover:bg-primary/90"
                            >
                                Get Started Now <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </div>
                    </div>
                    <div className="bg-muted/50 rounded-3xl p-8 lg:p-12 border border-border">
                        {/* This area can be used for an image or specific content passed as children */}
                        {children ? children : (
                            <div className="h-64 flex items-center justify-center text-muted-foreground italic">
                                Specific service graphic or details here.
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Internal Interlinking Section */}
            <section className="py-20 bg-muted/20 border-t border-border">
                <div className="container px-4 md:px-6 mx-auto">
                    <h2 className="text-2xl font-bold mb-8 text-center">Other Expert Services</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {relatedServices.map((service, index) => (
                            <Link
                                key={index}
                                href={service.href}
                                className="flex items-center justify-between p-6 bg-background rounded-xl border border-border hover:border-primary hover:shadow-md transition-all group"
                            >
                                <span className="font-semibold">{service.title}</span>
                                <ArrowRight className="h-4 w-4 text-primary transition-transform group-hover:translate-x-1" />
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
