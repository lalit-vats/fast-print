import Image from 'next/image'
import Script from 'next/script'
import BgImage from "../../../public/Images/letterheadBg.jpg"
import BigImage from "../../../public/Images/letterHeadImg.jpg"
import SmallImage from "../../../public/Images/letterHeadtmgTwo.jpg"
import { Metadata } from 'next'


export const metadata: Metadata = {
    title: "Letterhead Print",
    description: "Whether you're showcasing your products, services, or brand story, we provide high-quality letterhead printing that stand out.",
    keywords: [
        "Fast Print Letterhead Print",
        "Letterhead Printing near me",
        "Letterhead Print in Munirka",
        "Letterhead Print in Delhi",
        "Letterhead Printing in Gurgaon",
    ],
}
const LetterheadPrint = () => {
    const letterheadSchema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Service",
          "@id": "https://fastprintdelhi.com/#printing-service",
          "name": "Letterhead Print Delhi",
          "description": "Professional letterhead printing services in Delhi. Custom branded letterheads with high-quality designs on premium paper for business correspondence.",
          "serviceType": "Letterhead Printing",
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
              "name": "What is the price of letterhead printing in Delhi?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Letterhead printing prices depend on paper quality, design complexity, and order quantity. We offer competitive rates with bulk discounts available. Contact us with your specifications for an accurate quote."
              }
            },
            {
              "@type": "Question",
              "name": "What paper options are available for letterhead printing?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We offer various premium paper options including 100 GSM, 120 GSM, and specialty textured papers. All materials ensure professional appearance and durability. Choose the finish that best represents your brand."
              }
            }
          ]
        }
      ]
    };
    return (
        <div className='mt-15'>
            <Script
              id="letterhead-print-schema"
              type="application/ld+json"
              strategy="beforeInteractive"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(letterheadSchema) }}
            />
            <div className='relative'>
                <Image src={BgImage} alt='aboutus' className='w-full h-full object-cover ' />
                <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50'>
                </div>
                <h1 className='mb-1.5 w-full text-white absolute  z-10 top-1/3  text-center  text-6xl font-bold md:text-8xl'>Letterhead Print</h1>
            </div>
            <div className='container mx-auto md:px-40 grid grid-cols-1 md:grid-cols-2 p-4 md:py-6 gap-3.5'>
                <div className='relative'>
                    <Image src={BigImage} alt='image' className='rounded-xl animate-in fade-in slide-in-from-top-4 duration-500' />
                    <Image src={SmallImage} alt='image' className='hidden md:block rounded-xl absolute z-20 -bottom-6 right-4 shadow-2xl' />
                </div>
                <div className='flex flex-col '>
                    <h1 className='text-4xl mt-2 md:text-6xl font-medium bg-gradient-to-r from-purple-600 via-pink-500 to-orange-700 text-transparent bg-clip-text '> Unique Letterhead for an Impression on Your Clients
                    </h1>
                    <p className=' mt-6 font-medium text-[20px] text-gray-700 text-justify'>В Increase the credibility of your brand with high-quality, professionally-printed letterheads! A well-crafted letterhead adds a certain amount of professionalism and trust to your letters. Whether you are sending proposals, invoices or official letters our letterhead printing service will guarantee you always leave a good impression.


                    </p>
                    <p className=' mt-6 font-medium text-[20px] text-gray-700  text-justify'>

                        ✔️ Customized Designs with Your Logo & Brand Colors<br />✔️ Choose Between 100 GSM, 120 GSM Or Premium Textured Paper<br /> ✔️ High Definition, High Contrast Printing<br /> ✔️  A4 & Custom Sizes Available<br /> ✔️ Bulk Order Discounts<br />  ✔️ Environmentally Friendly Printing Possible
                    </p>
                </div>
            </div>
        </div>
    )
}

export default LetterheadPrint