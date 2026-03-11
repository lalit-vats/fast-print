import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/ui/footer";
import Script from "next/script";
import WhatsappIcon from "@/components/whatsAppIcon";
import FacebookIcon from "@/components/facebookIcon";
import InstaIcon from "@/components/instagramIcon";
import "leaflet/dist/leaflet.css";


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
        {/* Google tag (gtag.js) */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-DD705LNQVH" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
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
    strategy="afterInteractive"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
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
        className="poppins.variable relative overflow-x-hidden"
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
