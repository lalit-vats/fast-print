import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/ui/footer";
import Script from "next/script";
import WhatsappIcon from "@/components/whatsAppIcon";
import FacebookIcon from "@/components/facebookIcon";
import InstaIcon from "@/components/instagramIcon";


export const metadata: Metadata = {
  title: {
    default: "Fast Print",
    template: "%s | Fast Print",
  },
  description: "We Provide Best Print Services",
  keywords: [
    "printing shop",
    "flex printing",
    "printing services",
    "digital printing",
    "mug printing",
    "custom t-shirt print",
    "banner printing",
    "Fast Print Delhi"
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
