import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GoogleTagManager } from "@next/third-parties/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://synzephyrtechnologies.web.app"),
  title: {
    default: "Synzephyr Technologies | Digital Marketing Agency Pollachi",
    template: "%s | Synzephyr Technologies",
  },
  description: "Top digital marketing agency in Pollachi & Coimbatore. Expert SEO, GMB optimization & social media marketing to grow your local business.",
  alternates: {
    canonical: "https://synzephyrtechnologies.web.app",
    languages: {
      "en": "https://synzephyrtechnologies.web.app",
      "en-IN": "https://synzephyrtechnologies.web.app",
    },
  },
  keywords: [
    "digital marketing agency in Pollachi",
    "SEO services in Pollachi",
    "digital marketing agency in Coimbatore",
    "GMB optimization Pollachi",
    "GMB optimization Coimbatore",
    "Google Business Profile setup Pollachi",
    "SEO company Pollachi",
    "social media marketing Pollachi",
    "graphic design Pollachi",
    "local SEO Tamil Nadu",
  ],
  // Note: canonical is intentionally NOT set at layout level.
  // Each individual page sets its own correct canonical URL via alternates.canonical.
  // A layout-level canonical would be inherited by all pages, pointing them all to the
  // homepage — which is incorrect and the exact issue SEO tools flag.
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
    icon: "/logo.webp",
    shortcut: "/logo.webp",
    apple: "/logo.webp",
  },
  verification: {
    google: "JBxZnbNTUf5G2DrRxX9wTMrLPp6EIE2ktdPFqqqUSP0",
  },
  openGraph: {
    title: "Synzephyr Technologies | #1 Digital Marketing Agency in Pollachi & Coimbatore",
    description: "Expert SEO, digital marketing, GMB optimization & graphic design services for businesses in Pollachi & Coimbatore, Tamil Nadu.",
    url: "https://synzephyrtechnologies.web.app",
    siteName: "Synzephyr Technologies",
    images: [
      {
        url: "https://synzephyrtechnologies.web.app/logo.webp",
        width: 1200,
        height: 630,
        alt: "Synzephyr Technologies – Digital Marketing Agency in Pollachi",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Synzephyr Technologies | Digital Marketing Agency in Pollachi",
    description: "Expert SEO, GMB optimization & digital marketing for local businesses in Pollachi & Coimbatore.",
    images: ["https://synzephyrtechnologies.web.app/logo.webp"],
    site: "@synzephyr_tech",
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
        {/* Resource hints — establish early connections to critical third-party origins */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        {/* Preload LCP image — the hero logo is the first visible branded element */}
        <link
          rel="preload"
          as="image"
          href="/logo.webp"
          type="image/webp"
          fetchPriority="high"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground transition-colors duration-300`}
      >
        <GoogleTagManager gtmId="GTM-MGN73MG5" />
        {/* Facebook Pixel — deferred until after hydration, zero LCP impact */}
        <Script
          id="fb-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
              n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
              document,'script','https://connect.facebook.net/en_US/fbevents.js');
              fbq('init','1808210129731692');
              fbq('track','PageView');
            `,
          }}
        />

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
              "@type": "LocalBusiness",
              "@id": "https://synzephyrtechnologies.web.app/#localbusiness",
              "name": "Synzephyr Technologies",
              "legalName": "Synzephyr Technologies",
              "image": "https://synzephyrtechnologies.web.app/logo.webp",
              "logo": "https://synzephyrtechnologies.web.app/logo.webp",
              "description": "Synzephyr Technologies is the leading digital marketing agency in Pollachi and Coimbatore, offering SEO services, Google Business Profile optimization, social media marketing, and graphic design to help local businesses grow online.",
              "url": "https://synzephyrtechnologies.web.app",
              "telephone": "+919443449557",
              "email": "contact.synzephyr@gmail.com",
              "priceRange": "₹₹",
              "currenciesAccepted": "INR",
              "paymentAccepted": "Cash, Bank Transfer, UPI",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Pollachi",
                "addressLocality": "Pollachi",
                "addressRegion": "Tamil Nadu",
                "postalCode": "642001",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 10.6601,
                "longitude": 77.0046
              },
              "areaServed": [
                { "@type": "City", "name": "Pollachi" },
                { "@type": "City", "name": "Coimbatore" },
                { "@type": "City", "name": "Udumalpet" },
                { "@type": "City", "name": "Tiruppur" }
              ],
              "sameAs": [
                "https://share.google/qzAusQ6g4QiP59MeV",
                "https://www.instagram.com/synzephyr.tech",
                "https://www.facebook.com/synzephyr.tech",
                "https://www.linkedin.com/company/synzephyr/",
                "https://x.com/synzephyr_tech",
                "https://www.reddit.com/user/SynzephyrTech"
              ],
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday"
                  ],
                  "opens": "09:00",
                  "closes": "18:00"
                }
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Digital Marketing Services",
                "itemListElement": [
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "SEO Services in Pollachi", "url": "https://synzephyrtechnologies.web.app/seo-services-pollachi" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "SEO Services in Coimbatore", "url": "https://synzephyrtechnologies.web.app/seo-services-coimbatore" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Digital Marketing in Pollachi", "url": "https://synzephyrtechnologies.web.app/digital-marketing-pollachi" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Graphic Design Services Pollachi", "url": "https://synzephyrtechnologies.web.app/graphic-design-services-pollachi" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Google Business Profile Setup Pollachi", "url": "https://synzephyrtechnologies.web.app/google-business-profile-setup-pollachi" } }
                ]
              }
            }),
          }}
        />
      </body>
    </html>
  );
}
