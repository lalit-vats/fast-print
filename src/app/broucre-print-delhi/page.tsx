import Image from 'next/image'
import Script from 'next/script';
import BgImage from "../../../public/Images/broucrePrint.jpg"
import BigImage from "../../../public/Images/broucrePrintOne.jpg"
import SmallImage from "../../../public/Images/brourceUpperPic.jpg"
import { Metadata } from 'next'


export const metadata: Metadata = {
  title: "Broucre Print Delhi",
  description: "Whether you're showcasing your products, services, or brand story, we offer high-quality brochure prints that leave an impression.",
}

const BroucrePrint = () => {
 const broucreSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://fastprintdelhi.com/#printing-service",
      "name": "Premium Brochure Printing Delhi",
      "description": "High-quality bi-fold and tri-fold brochure printing services in Delhi NCR.",
      "serviceType": "Brochure Printing",
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
        "price": "15.00",
        "availability": "https://schema.org/InStock"
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the delivery time for brochures in Delhi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We usually deliver custom brochures within 24-48 hours across Delhi NCR for standard orders. Rush delivery available for urgent requirements."
          }
        },
        {
          "@type": "Question",
          "name": "What brochure folding options do you provide?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer multiple folding styles including bi-fold, tri-fold, z-fold, and more. Choose the format that best suits your content and distribution needs."
          }
        }
      ]
    }
  ]
};
    return (
        <div className='mt-15'>
            {/* SEO Schema Injection */}
            <Script
                id="broucre-print-schema"
                type="application/ld+json"
                strategy="beforeInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(broucreSchema) }}
            />
            <div className='relative'>
                <Image src={BgImage} alt='Custom print orders are delivered by the Fastprint Delhi team.' className='w-full h-full object-cover ' />
                <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50'>
                </div>
                <h1 className='mb-1.5 w-full text-white absolute  z-10 top-1/3  text-center  text-6xl font-bold md:text-8xl'>Broucre Print Delhi</h1>
            </div>
            <div className='container mx-auto md:px-40 grid grid-cols-1 md:grid-cols-2 p-4 md:py-6 gap-3.5'>
                <div className='relative'>
                    <Image src={BigImage} alt='We Make Custom Broucre printing in Delhi' className='rounded-xl animate-in fade-in slide-in-from-top-4 duration-500' />
                    <Image src={SmallImage} alt='Custom Broucre printing in Delhi' className='hidden md:block rounded-xl absolute z-20 -bottom-6 right-4 shadow-2xl' />
                </div>
                <div className='flex flex-col '>
                    <h1 className='text-4xl mt-2 md:text-6xl font-medium bg-gradient-to-r from-purple-600 via-pink-500 to-orange-700 text-transparent bg-clip-text'>Print That Speaks – Premium Brochure Services</h1>
                    <p className=' mt-6 font-medium text-[20px] text-gray-700 text-justify '>We provide premium brochure prints that make an impression, whether you&apos;re presenting your goods, services, or brand narrative. We assist you in communicating clearly and stylishly with everything from elegant corporate profiles to imaginative promotional handouts.
                    </p>
                    <p className=' mt-6 font-medium text-[20px] text-gray-700 '>
                    ✔️ Vibrant, High-Resolution Color Printing<br/>
                        ✔️ Multiple Fold Styles: Bi-Fold, Tri-Fold, Z-Fold & More<br/>
                        ✔️ Glossy, Matte, or Textured Finish Options<br/>
                        ✔️ Custom Sizes and Fast Turnaround<br/>


                    </p>
                </div>
            </div>
        </div>
    )
}

export default BroucrePrint