"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function Hero() {
    return (
        <section className="relative flex flex-col items-center justify-center min-h-[90vh] overflow-hidden bg-background pt-20 pb-16 text-center md:pt-32 md:pb-32">
            <div className="container relative z-10 px-4 md:px-6">
                <div className="mx-auto max-w-4xl space-y-4 flex flex-col items-center animate-fade-in-up">
                    <div className="mb-4">
                        <picture>
                            <source
                                srcSet="/logo-300.webp 300w, /logo-640.webp 640w, /logo.webp 1280w"
                                sizes="(max-width: 640px) 120px, 144px"
                                type="image/webp"
                            />
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="/logo.webp"
                                alt="Synzephyr Technologies – Global Digital Growth Agency"
                                width={300}
                                height={300}
                                className="h-28 md:h-36 w-auto"
                                fetchPriority="high"
                                loading="eager"
                                decoding="async"
                            />
                        </picture>
                    </div>
                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300 pb-2">
                        Global Digital Solutions for High-Growth Brands
                    </h1>
                    <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                        Elevate your business with data-driven SEO, cutting-edge digital marketing, and strategic growth campaigns delivered worldwide.
                    </p>
                </div>
                <div className="mx-auto mt-8 flex w-full max-w-sm flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 animate-fade-in-up delay-200">
                    <Link
                        href="/contact"
                        className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-transform hover:scale-105 hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    >
                        Get Started
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                    <Link
                        href="/services"
                        className="inline-flex h-12 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-transform hover:scale-105 hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    >
                        View Services
                    </Link>
                </div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/20 blur-[100px] rounded-full pointer-events-none dark:bg-blue-500/10" aria-hidden="true" />
        </section>
    )
}
