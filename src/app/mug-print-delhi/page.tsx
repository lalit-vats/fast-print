import Image from 'next/image'
import Script from 'next/script'
import BgImage from "../../../public/Images/mugPrintingBg.jpg"
import BigImage from "../../../public/Images/mugPrintBigImage.jpg"
import SmallImage from "../../../public/Images/mugSmallPic.png"
import { Metadata } from 'next'


export const metadata: Metadata = {
  title: "Mug Print",
  description: "Whether you're showcasing your products, services, or brand story, we provide high-quality mug prints that leave an impression.",
  keywords: [
    "Fast Print Mug Print",
    "Mug Printing in Munirka",
    "Mug Print in Delhi",
    "Mug Printing in Gurgaon",
  ],
}

const MugPrinting = () => {
    const mugSchema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Service",
          "@id": "https://fastprintdelhi.com/#printing-service",
          "name": "Mug Print Delhi",
          "description": "Custom mug printing services in Delhi. High-quality, durable personalized mugs perfect for corporate gifts, events, and special occasions with 12+ years of experience.",
          "serviceType": "Mug Printing",
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
              "name": "What is the cost of custom mug printing?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Mug printing costs depend on quantity and print quality. We offer competitive rates starting from affordable prices. Bulk orders receive special discounts. Contact us for a customized quote."
              }
            },
            {
              "@type": "Question",
              "name": "How long do printed mugs last?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our printed mugs are extremely durable with high-quality, fade-resistant prints. They maintain vibrant colors even after multiple washes and years of regular use. Perfect for long-lasting corporate gifts."
              }
            }
          ]
        }
      ]
    };
    return (
        <div className='mt-15'>
            <Script
              id="mug-print-schema"
              type="application/ld+json"
              strategy="beforeInteractive"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(mugSchema) }}
            />
            <div className='relative'>
                <Image src={BgImage} alt='Custom mug printing in Delhi' className='w-full h-full object-cover ' />
                <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50'>
                </div>
                <h1 className='mb-1.5 w-full text-white absolute  z-10 top-1/3  text-center  text-6xl font-bold md:text-8xl'>Mug Print</h1>
            </div>
            <div className='container mx-auto md:px-40 grid grid-cols-1 md:grid-cols-2 p-4 md:py-6 gap-3.5'>
                <div className='relative'>
                    <Image src={BigImage} alt='Custom mug printing in Delhi' className='rounded-xl animate-in fade-in slide-in-from-top-4 duration-500' />
                    <Image src={SmallImage} alt='Custom mug printing in Delhi' className='hidden md:block rounded-xl absolute z-20 -bottom-6 right-4 shadow-2xl' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h1 className='text-4xl mt-2 md:text-6xl font-medium bg-gradient-to-r from-purple-600 via-pink-500 to-orange-700 text-transparent bg-clip-text'>Mug Printing – Sip with Style, Gift with Heart
                    </h1>
                    <p className=' mt-6 font-medium text-[20px] text-gray-700 '>We Are Just Better – Quality for Over 12 Years of trusted printing experience, we specialize in custom &apos;Mug Printing&apos; that’s perfect for gifts, branding, and personal keepsakes.
                    </p>
                    <p className=' mt-6 font-medium text-[20px] text-gray-700 '>
                        ✅ Bright & Durable Prints – Superior, non-fading designs that remain vivid with each drink.<br />
                        ✅ Fit for Any Occasion: Perfect for corporate gifts, anniversaries, birthdays, and promotional events.<br />
                        ✅ Complete Customization: We make it uniquely yours by adding your logo, images, sayings, or imaginative artwork.<br />
                        ✅ Vast Variety of Styles: To fit your preferences, we provide classic mugs, magic mugs, color-inside mugs, and more.<br />
                        ✅ Fast turnaround and reasonable prices: You can rely on prompt service with reliable quality at reasonable prices.<br />
                    </p>
                </div>
            </div>
        </div>
    )
}

export default MugPrinting