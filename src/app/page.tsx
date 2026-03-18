import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { Hero } from "@/components/sections/hero"
const ServicesSection = dynamic(() => import("@/components/sections/services-section").then(mod => mod.ServicesSection))
const IndustryExpertise = dynamic(() => import("@/components/sections/industry-expertise").then(mod => mod.IndustryExpertise))
const WhyChooseUs = dynamic(() => import("@/components/sections/why-choose-us").then(mod => mod.WhyChooseUs))
const Process = dynamic(() => import("@/components/sections/process").then(mod => mod.Process))
const AboutSummary = dynamic(() => import("@/components/sections/about-summary").then(mod => mod.AboutSummary))
const LocationFocus = dynamic(() => import("@/components/sections/location-focus").then(mod => mod.LocationFocus))
const FAQ = dynamic(() => import("@/components/sections/faq").then(mod => mod.FAQ))
const CTA = dynamic(() => import("@/components/sections/cta").then(mod => mod.CTA))
const RecognitionSection = dynamic(() => import("@/components/sections/recognition").then(mod => mod.RecognitionSection))

export const metadata: Metadata = {
  title: "Synzephyr Technologies | Global Digital Growth & Marketing Agency",
  description: "Synzephyr Technologies is a global digital growth agency. Scale your brand worldwide with our expert SEO, digital marketing, and high-performance strategies.",
  alternates: {
    canonical: "https://synzephyrtechnologies.web.app/",
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
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />

      <Hero />
      <ServicesSection />
      <IndustryExpertise />
      <RecognitionSection />
      <WhyChooseUs />
      <Process />
      <AboutSummary />
      <LocationFocus />
      <FAQ />
      <CTA />
    </>
  )
}

