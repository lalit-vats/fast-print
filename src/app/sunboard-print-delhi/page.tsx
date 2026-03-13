import React from 'react'
import Script from 'next/script'
import BgImage from "../../../public/Images/sunboardCutoutBg.jpg"
import SmallImage from "../../../public/Images/sunboardCutoutImgTwo.jpg"
import BigImage from "../../../public/Images/vinaylBigImage.png"
import Image from 'next/image'
import { Metadata } from 'next'


export const metadata: Metadata = {
  title: "Sunboard Print",
  description: "Whether you're showcasing your products, services, or brand story, we provide high-quality sunboard prints that stand out.",
  keywords: [
    "sunboard / flyer / ribbons / stickers",
    "Vinyl Sunboard Printing",
    "Sunboard Printing near me",
    "Sunboard Printing in Munirka",
    "Sunboard Print in Delhi",
    "Sunboard Printing in Gurgaon",
  ],
}

const SunboardPrint
  = () => {
    const sunboardSchema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Service",
          "@id": "https://fastprintdelhi.com/#printing-service",
          "name": "Sunboard Print Delhi",
          "description": "Professional sunboard printing services in Delhi. High-quality, durable sunboard prints for retail branding, signage, and promotional standees.",
          "serviceType": "Sunboard Printing",
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
              "name": "What is the cost of sunboard printing per square foot?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Sunboard printing is competitively priced depending on size, material quality, and design complexity. We offer special rates for bulk orders and large installations. Contact us for a customized quote."
              }
            },
            {
              "@type": "Question",
              "name": "How durable are sunboard prints for long-term use?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our sunboard prints are highly durable and designed for long-term indoor and semi-outdoor use. They resist fading and maintain visual appeal for extended periods, making them ideal for permanent branding."
              }
            }
          ]
        }
      ]
    };
    return (
      <div className='mt-15'>
        <Script
          id="sunboard-print-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(sunboardSchema) }}
        />
        <div className='relative'>
          <Image src={BgImage} alt='aboutus' className='w-full h-full object-cover ' />
          <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50'>
          </div>
          <h1 className='mb-1.5 w-full text-white absolute  z-10 top-1/3  text-center  text-6xl font-bold md:text-8xl'>Sunboard Print</h1>
        </div>
        {/* Discription section */}
        <div className='container mx-auto md:px-40 grid grid-cols-1 md:grid-cols-2 p-4 md:py-6 gap-3.5'>
          <div className='relative'>
            <Image src={BigImage} alt='image' className='rounded-xl' />
            <Image src={SmallImage} alt='image' className='hidden md:block rounded-xl absolute z-20 -bottom-6 right-4 shadow-2xl' />
          </div>
          <div className='flex flex-col items-center justify-center'>
            <h1 className='text-4xl mt-2 md:text-6xl font-medium bg-gradient-to-r from-purple-600 via-pink-500 to-orange-700 text-transparent bg-clip-text'>Increase Your Brand Awareness with Superior Sunboard Printed designs.</h1>
            <p className=' mt-6 font-medium text-[20px] text-gray-700 '>Searching for a long-lasting, polished, and eye-catching method to present your message or brand? The ideal answer is our sunboard printing services.
            </p>
            <p className=' mt-6 font-medium text-[20px] text-gray-700 '>

              ✅ Panels for Retail Branding
              Professionally designed sunboard panels that draw attention and support your brand image can help your store stand out.<br />
              ✅ Promotional Standees Use portable, lightweight, custom-designed sunboard standees to highlight sales, debuts, or events.<br />
              ✅ Interior Signage for Businesses
              High-resolution printed sunboards that showcase your company&apos;s identity will give your workplace or showroom a clean, contemporary appearance.<br />
              </p>
          </div>
        </div>
      </div>
    )
  }

export default SunboardPrint

