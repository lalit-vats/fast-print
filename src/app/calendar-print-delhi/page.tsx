import React from 'react'
import Script from 'next/script'
import BgImage from "../../../public/Images/calenderPrintBg.jpg"
import SmallImage from "../../../public/Images/calendePrintTwo.jpg"
import BigImage from "../../../public/Images/calenderBigImage.jpg"
import Image from 'next/image'
import { Metadata } from 'next'


export const metadata: Metadata = {
  title: "Calender Print",
  description: "Whether you're showcasing your products, services, or brand story, we offer high-quality calendar prints that leave an impression.",
}

const CalenderPrint
  = () => {
    const calendarSchema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Service",
          "@id": "https://fastprintdelhi.com/#printing-service",
          "name": "Calendar Print Delhi",
          "description": "Custom calendar printing services in Delhi. High-quality, personalized calendars perfect for marketing and gifts throughout the year.",
          "serviceType": "Calendar Printing",
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
              "name": "What is the price of calendar printing in Delhi?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "At Fast Print Delhi, we offer competitive calendar printing services starting at affordable rates. Pricing varies based on size, material quality, and order quantity. Contact us for a detailed quote tailored to your specific requirements."
              }
            },
            {
              "@type": "Question",
              "name": "Do you offer custom calendar designs and printing?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we offer fully customizable calendar printing with your own designs, branding, and photos. Our team can help you create personalized calendars perfect for corporate gifts and marketing. Contact us to get started."
              }
            }
          ]
        }
      ]
    };
    return (
      <div className='mt-15'>
        <Script
          id="calendar-print-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(calendarSchema) }}
        />
        <div className='relative'>
          <Image src={BgImage} alt='Custom Calender print orders are delivered by the Fastprint Delhi team.' className='w-full h-full object-cover ' />
          <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50'>
          </div>
          <h1 className='mb-1.5 w-full text-white absolute  z-10 top-1/3  text-center  text-6xl font-bold md:text-8xl'>Calender Print Delhi</h1>
        </div>
        {/* Discription section */}
        <div className='container mx-auto md:px-40 grid grid-cols-1 md:grid-cols-2 p-4 md:py-6 gap-3.5'>
          <div className='relative'>
            <Image src={BigImage} alt='We make Custom calender printing in Delhi' className='rounded-xl' />
            <Image src={SmallImage} alt='Custom calender printing in Delhi' className='hidden md:block rounded-xl absolute z-20 -bottom-6 right-4 shadow-2xl' />
          </div>
          <div className='flex flex-col items-center justify-center'>
            <h1 className='text-4xl mt-2 md:text-6xl font-medium bg-gradient-to-r from-purple-600 via-pink-500 to-orange-700 text-transparent bg-clip-text'>Custom calendar printing will help you stay in the spotlight throughout the year.</h1>
            <p className=' mt-6 font-medium text-[20px] text-gray-700 '>Searching for an innovative approach to market your business while providing a practical service? The ideal answer is our personalized calendar printing service. Calendars are a useful marketing tool that maintains your company&apos;s presence throughout the year in homes, workplaces, and businesses.
            </p>
            <p className=' mt-6 font-medium text-[20px] text-gray-700 '>

              ✅ Give individualized calendar presents to your partners and clients to wow them and maintain brand awareness throughout the year..<br />
              ✅ Superior Print and Finishing Quality
              printed with choices for gloss, matte, or textured finishes on premium paper. For a polished appearance, spiral or wiro-binding options are offered.<br />
              ✅ Create anticipation by using personalized event countdown calendars that keep your audience interested every day.<br />
              </p>
          </div>
        </div>
      </div>
    )
  }

export default CalenderPrint

