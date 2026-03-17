"use client"

import { motion } from "framer-motion"

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

export function FAQ() {
  return (
    <section className="py-32 relative overflow-hidden bg-muted/10" aria-labelledby="faq-heading">
      <div className="container px-4 md:px-6 mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide uppercase mb-4 inline-block"
          >
            FAQ
          </motion.span>
          <motion.h2 
            id="faq-heading" 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6"
          >
            Frequently Asked <span className="text-gradient">Questions</span>
          </motion.h2>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="space-y-4"
        >
          {faqs.map((faq, i) => (
            <details key={i} className="group glass rounded-[2rem] border border-border/50 overflow-hidden transition-all duration-300">
              <summary className="flex items-center justify-between p-8 cursor-pointer font-bold text-xl list-none transition-colors group-open:bg-primary/5">
                {faq.q}
                <span className="ml-4 shrink-0 h-10 w-10 rounded-full border border-primary/20 flex items-center justify-center text-primary text-2xl group-open:rotate-45 transition-transform duration-500 bg-primary/5">
                  +
                </span>
              </summary>
              <div className="px-8 pb-8 text-muted-foreground text-lg leading-relaxed pt-2 bg-primary/5 group-open:fade-in group-open:slide-in-from-top-2">
                {faq.a}
              </div>
            </details>
          ))}
        </motion.div>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
    </section>
  )
}
