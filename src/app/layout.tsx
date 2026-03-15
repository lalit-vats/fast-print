import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/ui/footer";
import Script from "next/script";
import WhatsappIcon from "@/components/whatsAppIcon";
import FacebookIcon from "@/components/facebookIcon";
import InstaIcon from "@/components/instagramIcon";
// Leaflet CSS removed - lazy loaded in contact page only


export const metadata: Metadata = {
  title: {
    default: "Fast Print",
    template: "%s | Fast Print",
  },
  description: "We Provide Best Print Services",
  keywords: [
   "flex printing in delhi",
  "banner printing in delhi",
  "standee printing delhi",
  "vinyl printing delhi",
  "sunboard printing delhi",
  "canvas bag printing delhi",
  "printing services in delhi",
  "custom printing delhi",
  "fast print delhi"
  ],
  openGraph: {
    title: "Fastprint",
    description: "We Provide Best Print Services",
    url: "https://fastprintdelhi.com",
    siteName: "Fastprint",
    images: [
      {
        url: "https://fastprintdelhi.com/public/Images/logo.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  facebook: {
    appId: "1234567890",
  },
  twitter: {
    card: "summary_large_image",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preload hero image - critical for LCP */}
        <link rel="preload" as="image" href="/Images/ab1 1.png" fetchPriority="high" />
        {/* Font optimization for FCP improvement */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Google tag (gtag.js) - deferred to lazyOnload for better FCP */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-DD705LNQVH" strategy="lazyOnload" />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DD705LNQVH');
          `}
        </Script>
        <Script
    id="local-business-schema"
    type="application/ld+json"
    strategy="lazyOnload"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "PrintingService",
        "@id": "https://fastprintdelhi.com/#printing-service",
        "name": "Fast Print Delhi",
        "url": "https://fastprintdelhi.com",
        "telephone": "+91 9266822218",
        "description": "Fast Print Delhi provides flex printing, banner printing, standee printing, vinyl printing and custom printing services in Delhi.",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Delhi",
          "addressRegion": "Delhi",
          "addressCountry": "India"
        },
        "areaServed": "Delhi NCR",
        "priceRange": "₹₹",
        "sameAs": [
          "https://www.youtube.com/@fastprintdelhi"
        ]
      })
    }}
  />
      </head>
      <body
        className="relative overflow-x-hidden"
        suppressHydrationWarning
      >
        <Header />
        {children}
        <div className="absolute bottom-5 right-5 z-50">
          <FacebookIcon />
          <InstaIcon />
          <WhatsappIcon />
        </div> 
        <Footer />
      </body>
    </html>
  );
}
