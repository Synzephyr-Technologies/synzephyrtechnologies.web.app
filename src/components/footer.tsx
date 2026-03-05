"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Twitter, Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
    return (
        <footer className="bg-muted/50 border-t border-border">
            <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <Image src="/logo.webp" alt="Synzephyr Technologies – Digital Marketing Agency Pollachi" width={160} height={45} className="h-10 w-auto" loading="lazy" />
                            <span className="font-bold text-lg">Synzephyr Technologies</span>
                        </Link>
                        <p className="mt-4 text-sm text-muted-foreground">
                            Empowering businesses in Pollachi & Coimbatore with cutting-edge digital growth solutions.
                        </p>
                        <div className="mt-6 flex space-x-4">
                            <Link href="https://www.facebook.com/synzephyr.tech" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                                <span className="sr-only">Facebook</span>
                                <Facebook className="h-5 w-5" />
                            </Link>
                            <Link href="https://www.instagram.com/synzephyr.tech" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                                <span className="sr-only">Instagram</span>
                                <Instagram className="h-5 w-5" />
                            </Link>
                            <Link href="https://www.linkedin.com/company/synzephyr/" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                                <span className="sr-only">LinkedIn</span>
                                <Linkedin className="h-5 w-5" />
                            </Link>
                            <Link href="https://x.com/synzephyr_tech" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                                <span className="sr-only">Twitter</span>
                                <Twitter className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold tracking-wider uppercase text-foreground">Services</h3>
                        <ul className="mt-4 space-y-2">
                            <li>
                                <Link href="/seo-services-pollachi" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                    SEO Services Pollachi
                                </Link>
                            </li>
                            <li>
                                <Link href="/seo-services-coimbatore" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                    SEO Services Coimbatore
                                </Link>
                            </li>
                            <li>
                                <Link href="/digital-marketing-pollachi" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                    Digital Marketing Pollachi
                                </Link>
                            </li>
                            <li>
                                <Link href="/digital-marketing-coimbatore" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                    Digital Marketing Coimbatore
                                </Link>
                            </li>
                            <li>
                                <Link href="/graphic-design-services-pollachi" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                    Graphic Design
                                </Link>
                            </li>
                            <li>
                                <Link href="/google-business-profile-setup-pollachi" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                    GMB Optimization
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold tracking-wider uppercase text-foreground">Company</h3>
                        <ul className="mt-4 space-y-2">
                            <li>
                                <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/portfolio" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                    Portfolio
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold tracking-wider uppercase text-foreground">Contact</h3>
                        <ul className="mt-4 space-y-2">
                            <li className="flex items-start">
                                <MapPin className="h-5 w-5 text-muted-foreground mr-2 shrink-0 mt-0.5" />
                                <address className="text-sm text-muted-foreground not-italic">
                                    Pollachi, Coimbatore District,<br />
                                    Tamil Nadu – 642001, India
                                </address>
                            </li>
                            <li className="flex items-center">
                                <Phone className="h-5 w-5 text-muted-foreground mr-2 shrink-0" />
                                <a href="tel:+919443449557" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                    +91 94434 49557
                                </a>
                            </li>
                            <li className="flex items-center">
                                <Mail className="h-5 w-5 text-muted-foreground mr-2 shrink-0" />
                                {/* Email obfuscated via HTML entities to deter scrapers */}
                                <a
                                    href="#email"
                                    onClick={(e) => { e.preventDefault(); window.location.href = "mailto:" + "contact.synzephyr" + "@" + "gmail.com"; }}
                                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                    aria-label="Email Synzephyr Technologies"
                                >
                                    contact.synzephyr&#64;gmail&#46;com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>



                <div className="mt-12 border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm text-muted-foreground">
                        &copy; {new Date().getFullYear()} Synzephyr Technologies. All rights reserved.
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
