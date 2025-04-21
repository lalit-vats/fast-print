import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/ui/footer";
import Script from "next/script";



// const poppins = Poppins({
//   subsets: ["latin"],
//   weight: ["300", "400", "700"], // Choose font weights
//   variable: "--font-poppins", // Add CSS variable
// });

export const metadata: Metadata = {
  title: "Fast Print",
  description: "We Provide Best Print Services",
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
        className="poppins.variable"
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
