import React from 'react'
import Script from 'next/script'
import BgImage from "../../../public/Images/broucrePrint.jpg"
import SmallImage from "../../../public/Images/visitingCardImgTwo.jpg"
import BigImage from "../../../public/Images/visitingCardImg.jpg"
import Image from 'next/image'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Visiting Cards Print",
  description: "Whether you're showcasing your products, services, or brand story, we provide high-quality visiting cards prints that stand out.",
  keywords: [
    "Fast Print visiting cards",
    "Urgent visiting card printing near me",
    "visiting card printing",
    "business card print",
    "custom visiting cards",
    "premium visiting cards",
    "matte finish cards",
    "Delhi print shop",
    "Visiting Card in Munirka",
    "Visiting Card in Gurgaon",
    "Visiting Card Printing in Delhi",
  ],
}

const VinaylPrint
  = () => {
    const visitingCardSchema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Service",
          "@id": "https://fastprintdelhi.com/#printing-service",
          "name": "Visiting Cards Print Delhi",
          "description": "Premium visiting card printing in Delhi. Professional business cards with various finishes and designs, perfect for making lasting impressions. Affordable bulk orders available.",
          "serviceType": "Visiting Cards Printing",
          "provider": {
            "@type": "LocalBusiness",
            "@id": "https://fastprintdelhi.com/#local-business",
            "name": "Fast Print Delhi",
            "url": "https://fastprintdelhi.com",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "bestRating": "5",
              "worstRating": "1",
              "reviewCount": "150"
            }
          },
          "areaServed": {
            "@type": "City",
            "name": "Delhi"
          },
          "offers": {
            "@type": "Offer",
            "priceCurrency": "INR",
            "availability": "https://schema.org/InStock"
          }
        },
        {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is the price of visiting card printing in Delhi?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Visiting card printing is affordable starting from very competitive rates. Prices depend on card stock quality and finishes chosen. Bulk orders receive significant discounts. Contact us for exact pricing."
              }
            },
            {
              "@type": "Question",
              "name": "What finish options are available for business cards?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We offer multiple finish options including matte, glossy, and textured finishes. You can also choose embossing, foil stamping, or die-cutting for premium looks. All options ensure professional appearance and durability."
              }
            }
          ]
        }
      ]
    };
    return (
      <div className='mt-15'>
        <Script
          id="visiting-card-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(visitingCardSchema) }}
        />
        <div className='relative'>
          <Image src={BgImage} alt='aboutus' className='w-full h-full object-cover ' />
          <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50'>
          </div>
          <h1 className='mb-1.5 w-full text-white absolute  z-10 top-1/3  text-center  text-6xl font-bold md:text-8xl'>Visiting Cards Print</h1>
        </div>
        {/* Discription section */}
        <div className='container mx-auto md:px-40 grid grid-cols-1 md:grid-cols-2 p-4 md:py-6 gap-3.5'>
          <div className='relative'>
            <Image src={BigImage} alt='image' className='rounded-xl' />
            <Image src={SmallImage} alt='image' className='hidden md:block rounded-xl absolute z-20 -bottom-6 right-4 shadow-2xl' />
          </div>
          <div className='flex flex-col items-center justify-center'>
            <h1 className='text-4xl mt-2 md:text-6xl font-medium bg-gradient-to-r from-purple-600 via-pink-500 to-orange-700 text-transparent bg-clip-text'>Premium Quality Visiting Cards at Affordable Prices</h1>
            <p className=' mt-6 font-medium text-[20px] text-gray-700 '>Trusted by Professionals for Over a Decade
              Our premium visiting card prints reflect quality, precision, and style.
            </p>
            <p className=' mt-6 font-medium text-[20px] text-gray-700 '>

              ✅ Premium Finish: Select from matte, glossy or textured finish options to give a professional look.<br />
              ✅ Premium Cardstock: Durable, strong material with fantastic quality, has a good feel to it.<br />
              ✅ Custom Designs: Visit cards tailor made to fit your brand and style.<br />
              ✅ Vibrant & Sharp Prints: Clear Text is what we want, and that&apos;s exactly what we will get with these cards.<br />
              ✅ Many Size Options: Standard, square, folded, and custom—just the way you need it.
            </p>
          </div>
        </div>
      </div>
    )
  }

export default VinaylPrint

