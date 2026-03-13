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
      "serviceType": "Brochure Printing",
      "name": "Premium Brochure Printing Services in Delhi - Fast Print Delhi",
      "description": "High-quality bi-fold, tri-fold, and custom brochure printing in Delhi. Options include glossy, matte, and textured finishes with fast turnaround.",
      "image": "https://fastprintdelhi.com/_next/static/media/BigImage.jpg", // Replace with actual path to BigImage
      "provider": {
        "@id": "https://fastprintdelhi.com/#printing-service"
      },
      "areaServed": {
        "@type": "City",
        "name": "Delhi"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "150"
      },
      "offers": {
        "@type": "Offer",
        "priceCurrency": "INR",
        "price": "15.00", // Adjusted for brochure pricing
        "availability": "https://schema.org/InStock"
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What types of brochure folds do you offer in Delhi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Fast Print Delhi offers various fold styles including Bi-Fold, Tri-Fold, Z-Fold, and custom gate folds to suit your brand's promotional needs."
          }
        },
        {
          "@type": "Question",
          "name": "What paper finishes are available for brochure printing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We provide several finish options including Premium Glossy for vibrant colors, Matte for a professional look, and Textured finishes for a luxury feel."
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
                    <Image src={BigImage} alt='We Make Custom Broucre printing in Delhi' className='rounded-xl animate__fadeInDown' />
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