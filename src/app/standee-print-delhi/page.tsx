import Image from 'next/image'
import Script from 'next/script'
import BgImage from "../../../public/Images/standeeprintBg.jpg"
import BigImage from "../../../public/Images/standyImg.jpg"
import SmallImage from "../../../public/Images/standyPrint.jpg"
import { Metadata } from 'next'


export const metadata: Metadata = {
    title: "Standee Print",
    description: "Whether you're showcasing your products, services, or brand story, we offer high-quality standee prints that leave an impression.",
    keywords: [
        "Standee Print",
        "Standee printing near delhi",
        "Standee Printing",
        "Best Standee Printing near me",
        "Best Standee Printing in Munirka",
        "Standee Print in Delhi",
        "Standee Printing in Gurgaon",
    ],
}

const Standy = () => {
    const standeeSchema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Service",
          "@id": "https://fastprintdelhi.com/#printing-service",
          "name": "Standee Print Delhi",
          "description": "High-quality roll-up standee printing in Delhi. Lightweight, portable standees with vivid colors and clear images perfect for events, retail, and marketing displays.",
          "serviceType": "Standee Printing",
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
              "name": "What is the cost of roll-up standee printing in Delhi?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Standee printing costs depend on size and material quality. We offer competitive pricing for both single units and bulk orders. Contact us for a customized quote based on your specifications."
              }
            },
            {
              "@type": "Question",
              "name": "Are standees easy to transport and setup?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, our roll-up standees are lightweight and portable, designed for easy transport and quick setup. They're ideal for trade shows, events, retail displays, and on-the-go marketing campaigns."
              }
            }
          ]
        }
      ]
    };
    return (
        <div className='mt-15'>
            <Script
              id="standee-print-schema"
              type="application/ld+json"
              strategy="beforeInteractive"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(standeeSchema) }}
            />
            <div className='relative'>
                <Image src={BgImage} alt='aboutus' className='w-full h-full object-cover ' />
                <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50'>
                </div>
                <h1 className='mb-1.5 w-full text-white absolute  z-10 top-1/3  text-center  text-6xl font-bold md:text-8xl'>Standee Print</h1>
            </div>
            <div className='container mx-auto md:px-40 grid grid-cols-1 md:grid-cols-2 p-4 md:py-6 gap-3.5'>
                <div className='relative'>
                    <Image src={BigImage} alt='image' className='rounded-xl animate-in fade-in slide-in-from-top-4 duration-500' />
                    <Image src={SmallImage} alt='image' className='hidden md:block rounded-xl absolute z-20 -bottom-6 right-4 shadow-2xl' />
                </div>
                <div className='flex flex-col  '>
                    <h1 className='text-4xl mt-2 md:text-6xl font-medium bg-gradient-to-r from-purple-600 via-pink-500 to-orange-700 text-transparent bg-clip-text'>Stand Tall, Stand <br />Out – Roll-Up Standee Printing</h1>
                    <p className=' mt-6 font-medium text-[20px] text-gray-700 text-justify '>Use our high-quality roll-up standees to draw attention at events,
                        exhibits, or in-store promotions. Our prints are ideal for branding on-the-go since they are made to last and have a strong visual impact. They include clear images, vivid colors, and an easy setup process.
                    </p>
                    <p className=' mt-6 font-medium text-[20px] text-gray-700 '>
                        ✔️ Lightweight & Portable<br />
                        ✔️ High-Resolution Printing<br />
                        ✔️ Glossy or Matte Finish Options<br />
                        ✔️ Ideal for Events, Retail & Marketing Displays<br />



                    </p>
                </div>
            </div>
        </div>
    )
}

export default Standy
