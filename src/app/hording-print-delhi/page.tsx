import Image from 'next/image'
import Script from 'next/script'
import BgImage from "../../../public/Images/hordingDesign.jpg"
import BigImage from "../../../public/Images/bannerPrint.jpg"
import SmallImage from "../../../public/Images/bannerUpperPic.jpg"
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Hording Print",
  description: "Whether you're showcasing your products, services, or brand story, we provide high-quality hording prints that leave an impression.",
  keywords: [
    "Hording Print near me",
    "Hording Print in Munirka",
    "Hording Printing",
    "Hording Print in Delhi",
    "Hording Printing in Gurgaon",
  ],
}

const HordingPrint = () => {
    const hordingSchema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Service",
          "@id": "https://fastprintdelhi.com/#printing-service",
          "name": "Hording Print Delhi",
          "description": "Professional hoarding printing services in Delhi. Weatherproof, UV-resistant hoarding prints for outdoor advertising and events with 12+ years of experience.",
          "serviceType": "Hoarding Printing",
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
              "name": "What is the cost of hoarding printing per square foot in Delhi?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our hoarding printing is competitively priced starting at affordable rates per square foot. Pricing depends on material quality and design complexity. We also offer bulk discounts. Contact us for a customized quote."
              }
            },
            {
              "@type": "Question",
              "name": "Are your hoardings weather-resistant and UV-protected?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, all our hoardings are printed with UV-resistant inks and weatherproof materials to withstand Delhi's harsh climate. They maintain vibrant colors and durability even after extended outdoor exposure."
              }
            }
          ]
        }
      ]
    };
    return (
        <div className='mt-15'>
            <Script
              id="hording-print-schema"
              type="application/ld+json"
              strategy="beforeInteractive"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(hordingSchema) }}
            />
            <div className='relative'>
                <Image src={BgImage} alt='aboutus' className='w-full h-full object-cover ' />
                <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50'>
                </div>
                <h1 className='mb-1.5 w-full text-white absolute  z-10 top-1/3  text-center  text-6xl font-bold md:text-8xl'>Hording Print</h1>
            </div>
            <div className='container mx-auto md:px-40 grid grid-cols-1 md:grid-cols-2 p-4 md:py-6 gap-3.5'>
                <div className='relative'>
                    <Image src={BigImage} alt='image' className='rounded-xl animate-in fade-in slide-in-from-top-4 duration-500' />
                    <Image src={SmallImage} alt='image' className='hidden md:block rounded-xl absolute z-20 -bottom-6 right-4 shadow-2xl' />
                </div>
                <div className='flex flex-col '>
                    <h1 className='text-4xl mt-2 md:text-6xl font-medium bg-gradient-to-r from-purple-600 via-pink-500 to-orange-700 text-transparent bg-clip-text '> Your Business Deserves Flawless Prints – We Deliver!
                    </h1>
                    <p className=' mt-6 font-medium text-[20px] text-gray-700 text-justify'>With years of experience we can see your vision through powerful Hoarding Prints that are impossible to miss. Whether you are advertising outdoors or want signage for any event, we have expertise in tailor made, weather tough hoardings ideal for branding, promotions and properties.


                    </p>
                    <p className=' mt-6 font-medium text-[20px] text-gray-700  text-justify'>
                        🌟 Stand Out, Rain or Shine

                        Hoardings that are designed to be seen - and last. Whether you are in need of colorful prints for street, construction, or store advertising — our bold designs make a long lasting impression.<br/><br/>
                        ✔️ Over 12 Years of Experience<br/>✔️ Weatherproof & UV-Resistant Prints<br/> ✔️ Custom Sizes & Eye-Catching Designs<br/> ✔️ Always on-time delivery
                    </p>
                </div>
            </div>
        </div>
    )
}

export default HordingPrint