import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Twitter, Mail, Globe, MapPin, MessageCircle, Phone } from "lucide-react"

export const metadata: Metadata = {
    title: "Connect with Synzephyr | Social Media Links",
    description: "Follow Synzephyr Technologies on social media. Stay connected with the best digital marketing agency in Pollachi & Coimbatore.",
    alternates: {
        canonical: "https://synzephyrtechnologies.web.app/connect",
    },
}

const links = [
    {
        name: "Website",
        url: "https://synzephyrtechnologies.web.app",
        icon: Globe,
        color: "bg-blue-500",
        textColor: "text-white"
    },
    {
        name: "Google Business Profile",
        url: "https://share.google/qzAusQ6g4QiP59MeV",
        icon: MapPin,
        color: "bg-blue-400",
        textColor: "text-white"
    },
    {
        name: "Instagram",
        url: "https://www.instagram.com/synzephyr.tech",
        icon: Instagram,
        color: "bg-pink-600",
        textColor: "text-white"
    },
    {
        name: "Facebook",
        url: "https://www.facebook.com/share/1cYS7ZipVY/",
        icon: Facebook,
        color: "bg-blue-700",
        textColor: "text-white"
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/company/synzephyr/",
        icon: Linkedin,
        color: "bg-blue-800",
        textColor: "text-white"
    },
    {
        name: "X (Twitter)",
        url: "https://x.com/synzephyr_tech",
        icon: Twitter,
        color: "bg-black dark:bg-zinc-800",
        textColor: "text-white"
    },
    {
        name: "Reddit",
        url: "https://www.reddit.com/user/SynzephyrTech",
        icon: MessageCircle, // Using MessageCircle as placeholder for Reddit icon if not available, or import specific icon if possible. Lucide might not have Reddit.
        color: "bg-orange-500",
        textColor: "text-white"
    },
    {
        name: "WhatsApp Business",
        url: "https://wa.me/919443449557",
        icon: MessageCircle,
        color: "bg-green-500",
        textColor: "text-white"
    },
    {
        name: "Call Us",
        url: "tel:+919443449557",
        icon: Phone,
        color: "bg-indigo-600",
        textColor: "text-white"
    },
    {
        name: "Email Us",
        url: "mailto:contact.synzephyr@gmail.com",
        icon: Mail,
        color: "bg-red-500",
        textColor: "text-white"
    },
]

export default function ConnectPage() {
    return (
        <div className="flex flex-col min-h-screen items-center justify-center py-20 px-4 bg-muted/20">
            <div className="w-full max-w-4xl text-center">
                <div className="mx-auto mb-6 flex items-center justify-center">
                    <Image src="/logo.webp" alt="Synzephyr Technologies" width={270} height={70} className="h-40 w-auto rounded-xl shadow-lg" />
                </div>
                <h1 className="text-3xl font-extrabold tracking-tight mb-2">Synzephyr Technologies</h1>
                <p className="text-muted-foreground mb-8">Digital Growth Agency | Pollachi & Coimbatore</p>

                <div className="space-y-4 max-w-md mx-auto">
                    {links.map((link, index) => (
                        <Link
                            key={index}
                            href={link.url}
                            target={link.url.startsWith("http") ? "_blank" : "_self"}
                            rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
                            className={`flex items-center p-4 rounded-xl shadow-sm hover:shadow-md hover:scale-[1.02] transition-all bg-background border border-border group`}
                        >
                            <div className={`p-2 rounded-full ${link.color} ${link.textColor} mr-4 group-hover:opacity-90 transition-opacity`}>
                                <link.icon className="h-5 w-5" />
                            </div>
                            <span className="font-semibold flex-1 text-left">{link.name}</span>
                        </Link>
                    ))}
                </div>

                <div className="mt-12 text-sm text-muted-foreground">
                    © {new Date().getFullYear()} Synzephyr Technologies
                </div>
            </div>
        </div>
    )
}
