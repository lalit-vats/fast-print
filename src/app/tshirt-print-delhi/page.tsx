import React from 'react'
import Script from 'next/script'
import BgImage from "../../../public/Images/tshirtbg.jpg"
import Image from 'next/image'
import BigImage from "../../../public/Images/tshirtconpic.png"
import SmallImage from "../../../public/Images/tshirtUpperPic.png"
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "T-Shirt Print",
  description: "Whether you're showcasing your products, services, or brand story, we provide high-quality t-shirt prints that stand out.",
  keywords: [
    "Fast Print T-Shirt Print",
    "T-Shirt Printing",
    "T-Shirt Print in Delhi",
    "T-Shirt Printing  near me",
    "T-Shirt Printing in Munirka",
    "T-Shirt Printing in Mahipalpur",
    "T-Shirt Print in Gurgaon",
  ],
}

const TshirtPrint = () => {
  const tshirtSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://fastprintdelhi.com/#printing-service",
        "name": "T-Shirt Print Delhi",
        "description": "Professional t-shirt printing services in Delhi. Custom t-shirt printing with vibrant, long-lasting prints for individuals and bulk orders with 12+ years of experience.",
        "serviceType": "T-Shirt Printing",
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
            "name": "What is the price of t-shirt printing per piece?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "T-shirt printing costs depend on design complexity and order quantity. We offer competitive pricing for both single pieces and bulk orders. Special discounts available for larger quantities. Contact us for exact pricing."
            }
          },
          {
            "@type": "Question",
            "name": "How long do printed t-shirts last after washing?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our prints are designed to last for years even with regular washing. The high-quality inks and printing process ensure vibrant colors remain intact through numerous wash cycles. Your designs stay fresh and bold."
            }
          }
        ]
      }
    ]
  };
  return (
    <div className='mt-15'>
      <Script
        id="tshirt-print-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(tshirtSchema) }}
      />
      <div className='relative'>
        <Image src={BgImage} alt='aboutus' className='w-full h-full object-cover ' />
        <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50'>
        </div>
        <h1 className='mb-1.5 w-full text-white absolute  z-10 top-1/3  text-center  text-6xl font-bold md:text-8xl'>T-Shirt Print</h1>
      </div>
      {/* Discription section */}
      <div className='container mx-auto md:px-40 grid grid-cols-1 md:grid-cols-2 p-4 md:py-6 gap-3.5'>
        <div className='relative'>
          <Image src={BigImage} alt='image' className='rounded-xl' />
          <Image src={SmallImage} alt='image' className='hidden md:block rounded-xl absolute z-20 -bottom-6 right-4 shadow-2xl' />
        </div>
        <div className='flex flex-col items-center justify-center'>
          <h1 className='text-4xl mt-2 md:text-6xl font-medium bg-gradient-to-r from-purple-600 via-pink-500 to-orange-700 text-transparent bg-clip-text'>Our quality has been superior for more than 12 years.
          </h1>
          <p className=' mt-6 font-medium text-[20px] text-gray-700 text-justify'>With over 12 years of experience, we&apos;re a trusted name in delivering premium-quality &apos;T-shirt&apos; printing services that bring your ideas to life.
          </p>
          <p className=' mt-6 font-medium text-[20px] text-gray-700 '>

            ✅ Bright & Sturdy Prints: Vibrant, long-lasting prints that hold up well even after several washings.<br />
            ✅ Complete Customization: We can print anything you want on any style of t-shirt, from logos and phrases to full-graphic designs.<br />
            ✅ No Minimum Orders: We can accommodate both single-piece and large orders.<br />
            ✅ Quick Turnaround: Deliveries on time without sacrificing quality.<br />
            ✅ Reasonably priced: High-quality outcomes at costs that fit any budget.
          </p>
        </div>
      </div>
    </div>
  )
}

export default TshirtPrint
