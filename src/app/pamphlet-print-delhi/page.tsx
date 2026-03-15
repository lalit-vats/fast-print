import Image from 'next/image'
import Script from 'next/script'
import BgImage from "../../../public/Images/pumplateBg.jpg"
import BigImage from "../../../public/Images/papheletImg.jpg"
import SmallImage from "../../../public/Images/pemphaleItmgTwo.jpg"
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Pamphlet Print",
  description: "Whether you're showcasing your products, services, or brand story, we provide high-quality pamphlet printing that stand out.",
  keywords: [
    "Pamphlet Print",
    "Pamphlet Print near me",
    "Wholesale pamphlet printing near me",
    "Pamphlet Printing in Munirka",
    "Pamphlet Print in Delhi",
    "Pamphlet Printing in Gurgaon",
  ],
}


const PamphletPrint = () => {
    const pamphletSchema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Service",
          "@id": "https://fastprintdelhi.com/#printing-service",
          "name": "Pamphlet Print Delhi",
          "description": "Professional pamphlet printing services in Delhi. Custom printed pamphlets with various finishes for marketing, events, and promotions at affordable prices.",
          "serviceType": "Pamphlet Printing",
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
              "name": "What is the price of pamphlet printing in Delhi?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Pamphlet printing costs depend on size, paper quality, finishing options, and quantity. We offer competitive rates with special discounts for bulk orders. Contact us for a detailed quote."
              }
            },
            {
              "@type": "Question",
              "name": "What finishes are available for pamphlet printing?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We offer multiple finishing options including glossy, matte, and textured finishes. Choose the one that best suits your brand and marketing goals. All finishes ensure professional appearance and durability."
              }
            }
          ]
        }
      ]
    };
    return (
        <div className='mt-15'>
            <Script
              id="pamphlet-print-schema"
              type="application/ld+json"
              strategy="beforeInteractive"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(pamphletSchema) }}
            />
            <div className='relative'>
                <Image src={BgImage} alt='aboutus' className='w-full h-full object-cover ' />
                <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50'>
                </div>
                <h1 className='mb-1.5 w-full text-white absolute  z-10 top-1/3  text-center  text-6xl font-bold md:text-8xl'>Pamphlet Print</h1>
            </div>
            <div className='container mx-auto md:px-40 grid grid-cols-1 md:grid-cols-2 p-4 md:py-6 gap-3.5'>
                <div className='relative'>
                    <Image src={BigImage} alt='image' className='rounded-xl animate-in fade-in slide-in-from-top-4 duration-500' />
                    <Image src={SmallImage} alt='image' className='hidden md:block rounded-xl absolute z-20 -bottom-6 right-4 shadow-2xl' />
                </div>
                <div className='flex flex-col '>
                    <h1 className='text-4xl mt-2 md:text-6xl font-medium bg-gradient-to-r from-purple-600 via-pink-500 to-orange-700 text-transparent bg-clip-text '> Professional & Reasonably Priced Pamphlet Printing Services
                    </h1>
                    <p className=' mt-6 font-medium text-[20px] text-gray-700 text-justify'>Pamphlet PrintingThe finishing touch that makes your message stand out! Whether you want to create impact marketing materials, eye-catching event handouts or impressive projects, this paper adds a professional, quality look and feel to your print results.


                    </p>
                    <p className=' mt-6 font-medium text-[20px] text-gray-700  text-justify'>
                        
                        ✔️ Custom Sizes & Designs<br />✔️ Fast Turnaround Time<br /> ✔️ Affordable Pricing<br /> ✔️  Bulk Orders Welcome<br/> ✔️ You Get to Choose A Glossy, Matte, or Textured Finish RuntimeObject<br/>  ✔️ Environmentally Friendly Printing Possible
                    </p>
                </div>
            </div>
        </div>
    )
}

export default PamphletPrint