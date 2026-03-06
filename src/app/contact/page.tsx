import type { Metadata } from "next"
import { ContactPageClient } from "./contact-client"

export const metadata: Metadata = {
    title: "Contact Us | Digital Marketing Pollachi",
    description: "Get in touch with Synzephyr Technologies — your global digital marketing partner. Call, WhatsApp, or fill the form for a free consultation and brand audit.",
    alternates: {
        canonical: "https://synzephyrtechnologies.web.app/contact",
    },
}

export default function ContactPage() {
    return <ContactPageClient />
}
