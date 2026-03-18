"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { ModeToggle } from "./mode-toggle"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

const navItems = [
    { name: "Home", href: "/", ariaLabel: "Synzephyr Technologies Homepage" },
    { name: "About", href: "/about", ariaLabel: "About Synzephyr Technologies" },
    { name: "Services", href: "/services", ariaLabel: "Our Digital Marketing Services" },
    { name: "Portfolio", href: "/portfolio", ariaLabel: "Our Client Portfolio" },
    { name: "Blog", href: "/blog", ariaLabel: "Digital Marketing Blog" },
    { name: "Contact", href: "/contact", ariaLabel: "Contact Synzephyr Technologies" },
]

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false)
    const pathname = usePathname()

    React.useEffect(() => {
        setIsOpen(false)
    }, [pathname])

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-border/40 glass">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-18 items-center justify-between">
                    <Link href="/" className="flex items-center space-x-3 group">
                        <div className="relative h-9 w-9 overflow-hidden rounded-xl bg-primary/10 flex items-center justify-center p-1.5 group-hover:scale-110 transition-transform duration-300">
                            <img src="/logo-160.webp" alt="Synzephyr Technologies" width={40} height={40} className="h-full w-auto" />
                        </div>
                        <span className="font-bold text-lg tracking-tight">Synzephyr <span className="text-primary">Tech</span></span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="flex items-center space-x-1">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    aria-label={item.ariaLabel}
                                    className={cn(
                                        "relative px-4 py-2 text-sm font-semibold transition-all duration-300 rounded-lg group",
                                        pathname === item.href
                                            ? "text-primary bg-primary/5"
                                            : "text-muted-foreground hover:text-primary hover:bg-muted/50"
                                    )}
                                >
                                    {item.name}
                                    {pathname === item.href && (
                                        <motion.div 
                                            layoutId="nav-active"
                                            className="absolute bottom-1 left-4 right-4 h-0.5 bg-primary rounded-full"
                                        />
                                    )}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center space-x-2">
                        <ModeToggle />

                        {/* Mobile Menu Button */}
                        <div className="flex md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="inline-flex items-center justify-center h-11 w-11 rounded-full text-muted-foreground hover:text-primary hover:bg-muted transition-all"
                                aria-controls="mobile-menu"
                                aria-haspopup="true"
                                {...(isOpen ? { "aria-expanded": "true" } : { "aria-expanded": "false" })}
                                aria-label={isOpen ? "Close menu" : "Open menu"}
                            >

                                {isOpen ? (
                                    <X className="h-6 w-6" />
                                ) : (
                                    <Menu className="h-6 w-6" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div id="mobile-menu" className="md:hidden overflow-hidden">
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="border-t border-border/40 bg-background/95 backdrop-blur-xl"
                        >
                            <div className="space-y-1 px-4 pb-6 pt-4">
                                {navItems.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        aria-label={item.ariaLabel}
                                        className={cn(
                                            "block px-4 py-3 rounded-xl text-base font-bold transition-all",
                                            pathname === item.href
                                                ? "bg-primary/10 text-primary"
                                                : "text-muted-foreground hover:bg-muted hover:text-primary"
                                        )}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    )
}


