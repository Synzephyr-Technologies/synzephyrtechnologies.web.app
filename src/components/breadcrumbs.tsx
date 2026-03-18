"use client"

import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"

interface BreadcrumbItem {
    label: string
    href: string
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[]
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
    return (
        <nav className="flex mb-8 overflow-x-auto no-scrollbar py-1" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3 whitespace-nowrap">
                <li className="inline-flex items-center">
                    <Link
                        href="/"
                        className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                    >
                        <Home className="w-4 h-4 mr-2" />
                        Home
                    </Link>
                </li>
                {items.map((item, index) => (
                    <li key={index}>
                        <div className="flex items-center">
                            <ChevronRight className="w-4 h-4 text-muted-foreground mx-1" />
                            <Link
                                href={item.href}
                                className={`ml-1 text-sm font-medium hover:text-primary transition-colors ${
                                    index === items.length - 1
                                        ? "text-primary font-bold pointer-events-none"
                                        : "text-muted-foreground"
                                }`}
                                aria-current={index === items.length - 1 ? "page" : undefined}
                            >
                                {item.label}
                            </Link>
                        </div>
                    </li>
                ))}
            </ol>
        </nav>
    )
}
