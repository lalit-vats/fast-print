import Image from "next/image";
import Script from "next/script";
import BgImage from "../../../public/Images/pumplateBg.jpg";
import BigImage from "../../../public/Images/diarymg.jpg";
import SmallImage from "../../../public/Images/diaryImgTwo.jpg";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Diary Print",
  description:
    "Whether you're showcasing your products, services, or brand story, we offer high-quality diary prints that stand out.",
  keywords: [
    "Fast Print Diary Print",
    "Office Diary Print near me",
    "Office Stationery Print near me",
    "Diary Printing in Munirka",
    "Diary Print in Delhi",
    "Diary Printing in Gurgaon",
  ],
};

const DiaryPrint = () => {
  const diarySchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://fastprintdelhi.com/#printing-service",
        "name": "Diary Print Delhi",
        "description": "Custom corporate diary printing services in Delhi. Professional office diaries and stationery printing with high-quality finishes.",
        "serviceType": "Diary Printing",
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
            "name": "What is the price of corporate diary printing in Delhi?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Corporate diary printing costs depend on size, paper quality, binding, and customization. We offer competitive rates for bulk orders with discounts. Contact us for detailed pricing based on your requirements."
            }
          },
          {
            "@type": "Question",
            "name": "Can you customize diaries with company logos and branding?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we offer complete customization options including embossing, full-color printing, and premium binding. Your company logo and branding can be prominently featured. Perfect for corporate gifts and employee engagement."
            }
          }
        ]
      }
    ]
  };
  return (
    <div className="mt-15">
      <Script
        id="diary-print-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(diarySchema) }}
      />
      <div className="relative">
        <Image
          src={BgImage}
          alt="We make Custom | office Diary printing in Delhi"
          className="w-full h-full object-cover "
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        <h1 className="mb-1.5 w-full text-white absolute  z-10 top-1/3  text-center  text-6xl font-bold md:text-8xl">
          Corporate Diary Printing in Delhi
        </h1>
      </div>
      <div className="container mx-auto md:px-40 grid grid-cols-1 md:grid-cols-2 p-4 md:py-6 gap-3.5">
        <div className="relative">
          <Image
            src={BigImage}
            alt="diary printing in delhi"
            className="rounded-xl animate-in fade-in slide-in-from-top-4 duration-500"
          />
          <Image
            src={SmallImage}
            alt="corporate diary printing in delhi"
            className="hidden md:block rounded-xl absolute z-20 -bottom-6 right-4 shadow-2xl"
          />
        </div>
        <div className="flex flex-col ">
          <h1 className="text-4xl mt-2 md:text-6xl font-medium bg-gradient-to-r from-purple-600 via-pink-500 to-orange-700 text-transparent bg-clip-text ">
            {" "}
            Custom Corporate Diary Printing for Businesses & Promotions
          </h1>
          <p className="mt-6 font-medium text-[20px] text-gray-700 text-justify">
            Fast Print Delhi provides high-quality corporate diary printing in
            Delhi for businesses, offices and promotional campaigns. Our custom
            printed diaries are perfect for corporate gifting, office stationery
            and brand promotions. You can personalize your diaries with company
            logo, brand colors, quotes or full-color designs to create a
            professional and memorable product.
          </p>
          <p className="mt-6 font-medium text-[20px] text-gray-700 text-justify">
            Our diaries are available in multiple styles including hard cover
            and soft cover options with premium paper quality and durable
            binding. Whether you need small quantities or bulk corporate orders,
            we provide reliable diary printing services across Delhi including
            Laxmi Nagar, Preet Vihar and nearby areas.
          </p>
          <p className=" mt-6 font-medium text-[20px] text-gray-700  text-justify">
            ✔️ Available in Hard Cover and Soft Cover Options <br />
            ✔️ Daily, Weekly or Monthly Layout Designs <br />
            ✔️ Premium Quality Paper with Strong Binding <br />
            ✔️ Custom Logo Printing and Branding Options <br />
            ✔️ Perfect for Corporate Gifts, Events and Promotions
          </p>
        </div>
      </div>
    </div>
  );
};

export default DiaryPrint;
