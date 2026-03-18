"use client"

import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter, Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
    return (
        <footer className="bg-muted/50 border-t border-border">
            <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <img src="/logo-160.webp" alt="Synzephyr Technologies – Global Digital Marketing Agency" width={100} height={100} className="h-10 w-auto max-w-25" loading="lazy" />
                            <span className="font-bold text-lg">Synzephyr Technologies</span>
                        </Link>
                        <p className="mt-4 text-sm text-muted-foreground">
                            Scaling brands globally with data-driven digital growth solutions. Headquartered in India, serving the world.
                        </p>
                        <div className="mt-6 flex space-x-4">
                            <Link href="https://www.facebook.com/synzephyr.tech" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                                <span className="sr-only">Facebook</span>
                                <Facebook className="h-5 w-5" />
                            </Link>
                            <Link href="https://www.instagram.com/synzephyr.tech" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                                <span className="sr-only">Instagram</span>
                                <Instagram className="h-5 w-5" />
                            </Link>
                            <Link href="https://www.linkedin.com/company/synzephyr/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                                <span className="sr-only">LinkedIn</span>
                                <Linkedin className="h-5 w-5" />
                            </Link>
                            <Link href="https://x.com/synzephyr_tech" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                                <span className="sr-only">Twitter</span>
                                <Twitter className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold tracking-wider uppercase text-foreground">Services</h3>
                        <ul className="mt-4 space-y-2">
                            <li><Link href="/seo-services-pollachi" className="text-xs text-muted-foreground hover:text-primary transition-colors">SEO Pollachi</Link></li>
                            <li><Link href="/seo-services-coimbatore" className="text-xs text-muted-foreground hover:text-primary transition-colors">SEO Coimbatore</Link></li>
                            <li><Link href="/digital-marketing-pollachi" className="text-xs text-muted-foreground hover:text-primary transition-colors">Digital Marketing Pollachi</Link></li>
                            <li><Link href="/digital-marketing-coimbatore" className="text-xs text-muted-foreground hover:text-primary transition-colors">Digital Marketing Coimbatore</Link></li>
                            <li><Link href="/graphic-design-services-pollachi" className="text-xs text-muted-foreground hover:text-primary transition-colors">Graphic Design</Link></li>
                            <li><Link href="/google-business-profile-setup-pollachi" className="text-xs text-muted-foreground hover:text-primary transition-colors">GMB Optimization</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold tracking-wider uppercase text-foreground">Quick Links</h3>
                        <ul className="mt-4 space-y-2">
                            <li><Link href="/about" className="text-xs text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="/portfolio" className="text-xs text-muted-foreground hover:text-primary transition-colors">Our Work</Link></li>
                            <li><Link href="/blog" className="text-xs text-muted-foreground hover:text-primary transition-colors">Digital Marketing Blog</Link></li>
                            <li><Link href="/contact" className="text-xs text-muted-foreground hover:text-primary transition-colors">Contact Us</Link></li>
                            <li><Link href="/services" className="text-xs text-muted-foreground hover:text-primary transition-colors">All Services</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold tracking-wider uppercase text-foreground">Our Network</h3>
                        <ul className="mt-4 space-y-2">
                            <li><Link href="/connect" className="text-xs text-muted-foreground hover:text-primary transition-colors">Connect Hub</Link></li>
                            <li><Link href="https://synzephyrtechnologies.blogspot.com/" target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-primary transition-colors">Official Blogger</Link></li>
                            <li><Link href="https://wa.me/919443449557" target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-primary transition-colors">WhatsApp Support</Link></li>
                            <li><Link href="/privacy-policy" className="text-xs text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="text-xs text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link></li>
                        </ul>
                    </div>
                </div>



                <div className="mt-12 border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm text-muted-foreground">
                        &copy; 2024–2025 Synzephyr Technologies. All rights reserved.
                    </p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="/privacy-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
