import type { Metadata } from "next"
import { Hero } from "@/components/sections/hero"
import { ServicesSection } from "@/components/sections/services-section"
import { WhyChooseUs } from "@/components/sections/why-choose-us"
import { Process } from "@/components/sections/process"
import { FAQ } from "@/components/sections/faq"

import { CTA } from "@/components/sections/cta"
import { IndustryExpertise } from "@/components/sections/industry-expertise"
import { AboutSummary } from "@/components/sections/about-summary"
import { LocationFocus } from "@/components/sections/location-focus"

export const metadata: Metadata = {
  title: "Synzephyr Technologies | Global Digital Growth & Marketing Agency",
  description: "Synzephyr Technologies is a global digital growth agency. Scale your brand worldwide with our expert SEO, digital marketing, and high-performance strategies.",
  alternates: {
    canonical: "https://synzephyrtechnologies.web.app",
  },
  openGraph: {
    title: "Global Digital Growth & Marketing Agency | Synzephyr",
    description: "Scale your business worldwide with Synzephyr Technologies. Expert global SEO, digital marketing, and data-driven brand growth strategies.",
    url: "https://synzephyrtechnologies.web.app",
  },
}

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://synzephyrtechnologies.web.app/#website",
  "url": "https://synzephyrtechnologies.web.app",
  "name": "Synzephyr Technologies",
  "description": "Digital marketing agency in Pollachi & Coimbatore",
  "publisher": {
    "@id": "https://synzephyrtechnologies.web.app/#organization"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://synzephyrtechnologies.web.app/services"
    },
    "query-input": "required name=search_term_string"
  }
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />

      <Hero />
      <ServicesSection />
      <IndustryExpertise />
      <WhyChooseUs />
      <Process />
      <AboutSummary />
      <LocationFocus />
      <FAQ />
      <CTA />
    </div>
  )
}

