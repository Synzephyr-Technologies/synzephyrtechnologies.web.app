import type { Metadata, Viewport } from "next";
import { ThirdPartyScripts } from "@/components/third-party-scripts";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://synzephyrtechnologies.web.app/"),
  title: {
    default: "Synzephyr Technologies | Global Digital Growth Agency",
    template: "%s | Synzephyr Technologies",
  },
  description: "Worldwide digital marketing agency specializing in high-performance SEO, global brand growth, and data-driven marketing strategies for businesses everywhere.",
  alternates: {
    canonical: "https://synzephyrtechnologies.web.app/",
    languages: {
      "en": "https://synzephyrtechnologies.web.app/",
      "en-IN": "https://synzephyrtechnologies.web.app/",
      "en-US": "https://synzephyrtechnologies.web.app/",
      "en-GB": "https://synzephyrtechnologies.web.app/",
    },
  },
  keywords: [
    "Synzephyr Technologies worldwide",
    "Synzephyr Digital Marketing Agency",
    "Synzephyr Graphic Design Studio",
    "Synzephyr SEO Experts",
    "Synzephyr Social Media Management",
    "Digital marketing agency",
    "SEO company",
    "Graphic design agency",
    "Social media management services",
    "Web design and development company",
    "Branding and logo design services",
    "Content marketing agency",
    "PPC advertising company",
    "Email marketing services",
    "Creative design studio",
    "Online marketing solutions",
    "Corporate branding agency",
    "Best digital marketing company",
    "Top SEO agency worldwide",
    "Affordable graphic design services",
    "Professional logo design company",
    "Social media experts for businesses",
    "SEO-friendly web design services",
    "Global branding solutions",
    "International digital marketing agency",
    "Creative design services for startups",
    "Best online marketing company",
    "SEO for e-commerce websites",
    "Digital marketing for startups",
    "Social media management for small businesses",
    "Branding for tech companies",
    "Graphic design for corporate identity",
    "Website optimization for global clients",
    "Content marketing for SaaS companies",
    "PPC campaigns for international businesses",
    "Best digital marketing agency for startups",
    "Affordable SEO services for small businesses",
    "Creative graphic design studio for global brands",
    "Social media management for international companies",
    "Professional branding and logo design worldwide",
    "Top-rated SEO experts for e-commerce",
    "Web development company for global clients",
    "Digital marketing solutions for enterprises",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/logo-160.webp", sizes: "160x160", type: "image/webp" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/logo-300.webp", sizes: "300x300", type: "image/webp" },
    ],
  },
  manifest: "/manifest.json",
  verification: {
    google: "JBxZnbNTUf5G2DrRxX9wTMrLPp6EIE2ktdPFqqqUSP0",
    yandex: "2d6da97078bb3c50",
    other: {
      "msvalidate.01": "9e3a6c11f4d84c62b5d7e82b7c6c4493", // Actual Bing validation ID
    },
  },
  openGraph: {
    title: "Synzephyr Technologies | Global Digital Growth & Marketing Agency",
    description: "Expert SEO, digital marketing, and global brand growth strategies for businesses worldwide.",
    url: "https://synzephyrtechnologies.web.app",
    siteName: "Synzephyr Technologies",
    images: [
      {
        url: "https://synzephyrtechnologies.web.app/logo.webp",
        width: 1200,
        height: 630,
        alt: "Synzephyr Technologies – Global Digital Marketing Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Synzephyr Technologies | Global Digital Growth Agency",
    description: "Data-driven SEO, brand growth, and digital marketing for businesses worldwide.",
    images: ["https://synzephyrtechnologies.web.app/logo.webp"],
    site: "@synzephyr_tech",
    creator: "@synzephyr_tech",
  },
  category: "technology",
  other: {
    "revisit-after": "1 days",
    "distribution": "global",
    "rating": "General",
    "p:domain_verify": "YOUR_PINTEREST_VERIFICATION_CODE",
    "bingbot": "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preload critical assets first */}
        <link
          rel="preload"
          as="image"
          href="/logo-300.webp"
          type="image/webp"
          fetchPriority="high"
        />

        {/* Resource hints — establish early connections to critical third-party origins */}
        {/* Only preconnect to absolute essentials; use dns-prefetch for the rest to avoid Lighthouse warnings */}
        <link rel="preconnect" href="https://connect.facebook.net" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />

        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://stats.g.doubleclick.net" />
        <link rel="dns-prefetch" href="https://www.facebook.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <ThirdPartyScripts />

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": ["Organization", "ProfessionalService", "LocalBusiness"],
                  "@id": "https://synzephyrtechnologies.web.app/#organization",
                  "name": "Synzephyr Technologies",
                  "legalName": "Synzephyr Technologies",
                  "alternateName": ["Synzephyr", "Syn Zephyr", "Synzephyr Tech"],
                  "image": "https://synzephyrtechnologies.web.app/logo.webp",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://synzephyrtechnologies.web.app/logo.webp",
                    "width": "512",
                    "height": "512"
                  },
                  "description": "Synzephyr Technologies is a global digital marketing and growth agency headquartered in Pollachi and Coimbatore. We specialize in high-performance SEO, social media marketing, and data-driven branding for businesses worldwide through online collaboration.",
                  "url": "https://synzephyrtechnologies.web.app",
                  "telephone": "+919443449557",
                  "email": "contact.synzephyr@gmail.com",
                  "foundingDate": "2024-01-01",
                  "founders": [
                    {
                      "@type": "Person",
                      "name": "Nithesh Kumar"
                    }
                  ],
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "No:20, 2nd Jeeva Street, Sakthi Nagar, Meenkarai Road",
                    "addressLocality": "Pollachi",
                    "addressRegion": "Tamil Nadu",
                    "postalCode": "642001",
                    "addressCountry": "IN"
                  },
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": "10.6623",
                    "longitude": "77.0065"
                  },
                  "areaServed": [
                    {
                      "@type": "Country",
                      "name": "Worldwide"
                    },
                    {
                      "@type": "ServiceChannel",
                      "name": "Online"
                    }
                  ],
                  "priceRange": "₹250+",
                  "knowsAbout": [
                    "Search Engine Optimization",
                    "Digital Marketing",
                    "Social Media Marketing",
                    "Web Development",
                    "Graphic Design",
                    "Content Creation",
                    "Pay Per Click (PPC)"
                  ],
                  "brand": {
                    "@type": "Brand",
                    "name": "Synzephyr Technologies",
                    "alternateName": "Synzephyr"
                  },
                  "sameAs": [
                    "https://share.google.com/qzAusQ6g4QiP59MeV",
                    "https://www.instagram.com/synzephyr.tech",
                    "https://www.facebook.com/synzephyr.tech",
                    "https://www.linkedin.com/company/synzephyr/",
                    "https://x.com/synzephyr_tech"
                  ],
                  "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Global Growth Services",
                    "itemListElement": [
                      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Global SEO Services", "url": "https://synzephyrtechnologies.web.app/services" } },
                      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Digital Marketing Worldwide", "url": "https://synzephyrtechnologies.web.app/services" } }
                    ]
                  }
                }
              ]
            }),
          }}
        />
      </body>
    </html>
  );
}
