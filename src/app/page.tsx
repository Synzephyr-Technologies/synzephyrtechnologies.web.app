import type { Metadata } from "next"
import { Hero } from "@/components/sections/hero"
import { ServicesSection } from "@/components/sections/services-section"
import { WhyChooseUs } from "@/components/sections/why-choose-us"
import { Process } from "@/components/sections/process"
import { CTA } from "@/components/sections/cta"
import Link from "next/link"
import { CheckCircle, MapPin, ArrowRight } from "lucide-react"

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

const faqs = [
  {
    q: "Do you serve clients outside of India?",
    a: "Absolutely! Synzephyr Technologies is a global digital marketing agency. We serve clients from all over the world, including the US, UK, Europe, and Asia. Our strategies are built to scale brands internationally, regardless of their physical location."
  },
  {
    q: "What digital marketing services do you offer?",
    a: "We offer a full suite of digital growth services including Search Engine Optimization (SEO), Social Media Management, Facebook & Instagram Advertising, Google Ads (PPC), Content Marketing, and Branding. Our focus is on delivering high-ROI results for businesses worldwide."
  },
  {
    q: "How can SEO help my global brand?",
    a: "SEO ensures that your brand appears at the top of search results for international audiences. By targeting competitive global keywords and optimizing for diverse search engines, we drive high-intent organic traffic to your platform, leading to increased conversions and global authority."
  },
  {
    q: "Can you still help with Local SEO in Tamil Nadu?",
    a: "Yes! While we serve global clients, we maintain deep roots in Tamil Nadu. We provide specialized Local SEO and Google Business Profile optimization for businesses in Pollachi, Coimbatore, and surrounding areas who want to dominate their regional market."
  },
  {
    q: "How long does it take to see results from your marketing campaigns?",
    a: "Results vary by service: Paid campaigns (Google/Meta Ads) often show leads within days. SEO and organic brand building typically show meaningful growth within 3–6 months. We provide detailed monthly analytics so you can track your global performance and ROI."
  },
]

const serviceAreas = [
  "Pollachi", "Coimbatore", "Udumalpet", "Tiruppur", "Anaimalai",
  "Valparai", "Palladam", "Kinathukadavu", "Madukarai", "Sulur"
]

import { IndustryExpertise } from "@/components/sections/industry-expertise"

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

      {/* ── About Section ─────────────────────────────────────────── */}
      <section className="py-20 bg-background" aria-labelledby="about-heading">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <h2 id="about-heading" className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Global Digital Growth Partner with Deep Technical Roots
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Synzephyr Technologies is a results-driven digital marketing agency serving clients worldwide. Headquartered in Pollachi, India, we bridge the gap between technical excellence and creative marketing to help businesses of all sizes scale their online presence globally. Our approach is built on a foundation of data, transparency, and high-performance strategies that work across borders.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Founded with a mission to make world-class digital growth strategies accessible to everyone, we serve a diverse range of international industries—from e-commerce and SaaS to professional services. Our team combines international standards with a personalized touch, ensuring that every campaign we run is optimized for both global reach and high-intent conversions.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Whether you are a startup in San Francisco, an e-commerce brand in London, or a local powerhouse in Coimbatore, our customized solutions are designed to connect you with your audience exactly where they are. From dominating search results with expert SEO to building unforgettable brands through strategic design, Synzephyr Technologies is your end-to-end global growth partner.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                In a digital-first world, your geography shouldn&apos;t limit your growth. We implement the latest AI-driven SEO techniques, conversion-optimized web designs, and precision-targeted advertising that speaks to global audiences while respecting local cultural nuances.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/about" className="inline-flex h-11 items-center justify-center rounded-md border border-input bg-background px-6 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors">
                  About Us <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link href="/contact" className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">
                  Free Consultation
                </Link>
              </div>
            </div>
            <div className="space-y-5">
              <div className="bg-muted/40 rounded-2xl border border-border p-6 space-y-4">
                <h3 className="text-xl font-bold">Comprehensive Growth Services</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  We provide a full-funnel digital marketing approach to ensure your business stays ahead of the curve in the Coimbatore district business ecosystem.
                </p>
                {[
                  { label: "Advanced SEO Hub", desc: "Rank #1 for high-volume keywords in Pollachi and Coimbatore search results.", href: "/seo-services-pollachi" },
                  { label: "Strategic Digital Marketing", desc: "Targeted ads and social media management to skyrocket your brand awareness.", href: "/digital-marketing-pollachi" },
                  { label: "GMB Power Optimization", desc: "Dominate the Local 3-Pack and drive massive phone calls and store visits.", href: "/google-business-profile-setup-pollachi" },
                  { label: "Premium Graphic Design", desc: "Pro logos, brand kits, and marketing materials that build instant authority.", href: "/graphic-design-services-pollachi" },
                ].map((s, i) => (
                  <Link key={i} href={s.href} className="flex items-start gap-3 group">
                    <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold group-hover:text-primary transition-colors">{s.label}</span>
                      <p className="text-sm text-muted-foreground">{s.desc}</p>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="bg-primary/5 rounded-2xl border border-primary/20 p-6">
                <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" /> Global Reach, Local Roots
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Headquartered in India, we deliver world-class digital solutions to organizations across the globe, maintaining a strong network in our home regional hubs.
                </p>
                <div className="flex flex-wrap gap-2">
                  {serviceAreas.map(area => (
                    <span key={area} className="text-sm bg-background border border-border rounded-full px-3 py-1 text-muted-foreground">
                      {area}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-3">
                  Serving Clients in USA · UK · India · Worldwide
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Location Sections ──────────────────────────────────────── */}
      <section className="py-20 bg-muted/30" aria-labelledby="locations-heading">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 id="locations-heading" className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-4">
            Specialized Digital Marketing in Pollachi &amp; Coimbatore
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-12 max-w-3xl mx-auto">
            We are the local experts. Our region-specific knowledge gives our clients a decisive advantage over businesses using generic national agencies who don&apos;t understand the local nuances of Tamil Nadu.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-background rounded-2xl border border-border p-8 space-y-4 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold">Local Digital Agency in Pollachi</h3>
              <p className="text-muted-foreground leading-relaxed">
                Pollachi is a thriving agricultural and commercial hub in the Coimbatore district. With an increasing number of traditional businesses going digital, the competition for online visibility is intensifying. Synzephyr Technologies works with businesses across virtually every local industry — from major furniture retailers and organic farms to restaurants, medical clinics, and service professionals — helping them outrank competitors on Google Search and Maps.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our Pollachi-centric SEO strategies target high-intent local search queries like &quot;best restaurant in Pollachi&quot; or &quot;hardware shop in Pollachi&quot;, ensuring your business appears exactly when potential customers are ready to buy. We combine technical SEO, local content writing, and aggressive GMB optimization to make you the #1 choice in the area.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                By choosing a local agency like Synzephyr instead of a large firm in Bangalore or Mumbai, you benefit from consultants who actually know the local landscape, culture, and business environment. We are just a phone call or a short drive away from your office in Pollachi.
              </p>
              <Link href="/digital-marketing-pollachi" className="inline-flex items-center text-primary font-semibold hover:underline text-sm">
                Digital Marketing in Pollachi <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="bg-background rounded-2xl border border-border p-8 space-y-4 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold">Strategic Marketing in Coimbatore</h3>
              <p className="text-muted-foreground leading-relaxed">
                Coimbatore — often called the &quot;Manchester of South India&quot; — is one of the most competitive business markets in the country. With a massive industrial sector, a booming IT landscape, and thousands of SMEs, ranking on page 1 of Google in Coimbatore requires a professional, data-driven SEO approach. Synzephyr Technologies brings this high-level expertise to Coimbatore businesses, providing them with a clear path to dominate both organic search and local map listings.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                From RS Puram to Gandhipuram, Peelamedu to Saravanampatti — we build hyper-local digital marketing strategies that target your specific service areas within the city. Our approach combines rigorous technical auditing, high-authority backlink building, and conversion-optimized web design to deliver results that impact your bottom line.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We understand that Coimbatore businesses aren&apos;t just competing locally, but often nationally and globally. Our digital strategies are built to scale, ensuring that your brand is positioned as a leader in its industry, whether you are catering specifically to the Coimbatore market or expanding across South India.
              </p>
              <Link href="/digital-marketing-coimbatore" className="inline-flex items-center text-primary font-semibold hover:underline text-sm">
                Digital Marketing in Coimbatore <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ───────────────────────────────────────────── */}
      <section className="py-20 bg-background" aria-labelledby="faq-heading">
        <div className="container px-4 md:px-6 mx-auto max-w-4xl">
          <h2 id="faq-heading" className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Common questions from businesses in Pollachi &amp; Coimbatore about digital marketing.
          </p>

          {/* FAQ JSON-LD */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": faqs.map(f => ({
                  "@type": "Question",
                  "name": f.q,
                  "acceptedAnswer": { "@type": "Answer", "text": f.a }
                }))
              })
            }}
          />

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-muted/40 border border-border rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer font-semibold text-lg list-none hover:bg-muted/60 transition-colors">
                  {faq.q}
                  <span className="ml-4 shrink-0 text-primary text-2xl group-open:rotate-45 transition-transform duration-200">+</span>
                </summary>
                <div className="px-6 pb-6 text-muted-foreground leading-relaxed border-t border-border pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </div>
  )
}
