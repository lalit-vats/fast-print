import Image from 'next/image'
import Script from 'next/script'
import BgImage from "../../../public/Images/canopyBg.jpg"
import BigImage from "../../../public/Images/canopyImg.jpg"
import SmallImage from "../../../public/Images/canopyImgTwo.jpg"
import { Metadata } from 'next'


export const metadata: Metadata = {
    title: "Canopy",
    description: "Whether you're showcasing your products, services, or brand story, we offer high-quality canopy prints that stand out.",
    keywords: [
        " Fast Print Canopy-Promotion table",
        "Canopy Printing in Munirka",
        "Canopy Print in Delhi",
        "Canopy Printing in Gurgaon",
        "Canopy Print near me",
    ],
}

const Canopy = () => {
    const canopySchema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Service",
          "@id": "https://fastprintdelhi.com/#printing-service",
          "name": "Canopy Print Delhi",
          "description": "Premium canopy printing and rental services in Delhi. High-quality custom branded canopies for events, exhibitions, and promotions.",
          "serviceType": "Canopy Printing",
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
              "name": "What is the cost of canopy printing in Delhi?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "At Fast Print Delhi, we offer competitive canopy printing and rental services. Pricing depends on size, material, and customization. We also provide complete rental solutions with setup and breakdown included. Contact us for a customized quote."
              }
            },
            {
              "@type": "Question",
              "name": "Can you provide canopy rentals for events in Delhi?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we offer complete canopy rental solutions for events, exhibitions, and promotions in Delhi NCR. We provide setup, takedown, and all necessary materials. Our canopies are sturdy and weather-resistant. Contact us to book your event canopy."
              }
            }
          ]
        }
      ]
    };
    return (
        <div className='mt-15'>
            <Script
              id="canopy-print-schema"
              type="application/ld+json"
              strategy="beforeInteractive"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(canopySchema) }}
            />
            <div className='relative'>
                <Image src={BgImage} alt='We make Custom Canopy printing in Delhi' className='w-full h-full object-cover ' />
                <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50'>
                </div>
                <h1 className='mb-1.5 w-full text-white absolute  z-10 top-1/3  text-center  text-6xl font-bold md:text-8xl'>Canopy Print Delhi</h1>
            </div>
            <div className='container mx-auto md:px-40 grid grid-cols-1 md:grid-cols-2 p-4 md:py-6 gap-3.5'>
                <div className='relative'>
                    <Image src={BigImage} alt='Canopy print in delhi' className='rounded-xl animate-in fade-in slide-in-from-top-4 duration-500' />
                    <Image src={SmallImage} alt='Canoyprinting fastprint' className='hidden md:block rounded-xl absolute z-20 -bottom-6 right-4 shadow-2xl' />
                </div>
                <div className='flex flex-col '>
                    <h1 className='text-4xl mt-2 md:text-6xl font-medium bg-gradient-to-r from-purple-600 via-pink-500 to-orange-700 text-transparent bg-clip-text'>Elevate Your Event with Premium Canopy Solutions</h1>
                    <p className=' mt-6 font-medium text-[20px] text-gray-700 text-justify '>Whether you&apos;re having a backyard barbie, a festival, a company gathering or a wedding, whatever the event our canopies are the ideal solution for providing shade and shelter.
                    </p>
                    <p className=' mt-6 font-medium text-[20px] text-gray-700 '>
                        ✔ Commercial Quality Canopies – Sturdy wind resistant frames, UV protective materials<br />
                        ✔️ Complete Rentals – Covers setup/break down, lighting and flooring<br />
                        ✔️ Custom Branding – Include logos, colors, or insignia for a personalized flair<br />
                        ✔️ Custom Sizes and Fast Turnaround<br />


                    </p>
                </div>
            </div>
        </div>
    )
}

export default Canopy