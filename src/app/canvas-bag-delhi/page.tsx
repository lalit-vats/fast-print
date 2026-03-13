import Image from "next/image";
import Script from "next/script";
import BgImage from "../../../public/Images/canvasbag,tote bag.jpg";
import BigImage from "../../../public/Images/canvasbag,toteBigImage.jpg";
import SmallImage from "../../../public/Images/casnvanbagSmall.png";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Canvas Bag Manufacturer & Printing in Delhi | Custom Canvas Bags | Fast Print Delhi",

  description:
    "Fast Print Delhi is a canvas bag manufacturer and printing service provider in Delhi. We produce high-quality custom canvas bags with logo printing for businesses, promotions, events, and wholesale orders.",

  keywords: [
    "canvas bag manufacturer in delhi",
    "canvas bag printing in delhi",
    "custom canvas bag manufacturer",
    "canvas tote bag manufacturer delhi",
    "canvas bag with logo printing",
    "eco friendly canvas bag manufacturer",
    "promotional canvas bags delhi",
    "canvas shopping bag manufacturer",
    "canvas bag printing near me",
    "wholesale canvas bags delhi",
  ],
};

const Canvasbag = () => {
  const canvasBagSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://fastprintdelhi.com/#printing-service",
        "name": "Canvas Bag Manufacturing & Printing Delhi",
        "description": "Custom canvas bag manufacturer and printing service in Delhi. High-quality eco-friendly canvas bags with logo printing for businesses and promotions.",
        "serviceType": "Canvas Bag Printing",
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
            "name": "What is the cost of custom canvas bag printing?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Canvas bag printing costs vary based on bag quality, size, print area, and quantity. We offer competitive rates for both small and bulk orders. Contact us with your specifications for an accurate quote."
            }
          },
          {
            "@type": "Question",
            "name": "Do you manufacture eco-friendly canvas bags?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we specialize in eco-friendly canvas bags that are sustainable and perfect for promoting your brand responsibly. Our bags are durable and available in various sizes and colors with custom logo printing."
            }
          }
        ]
      }
    ]
  };
  return (
    <div className="mt-15">
      <Script
        id="canvas-bag-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(canvasBagSchema) }}
      />
      <div className="relative">
        <Image
          src={BgImage}
          alt="Canvas Bag Printing and Manufacturing in Delhi"
          className="w-full h-full object-cover "
          priority
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        <h1 className="mb-1.5 w-full text-white absolute  z-10 top-1/3  text-center  text-6xl font-bold md:text-8xl">
          Canvas Bag Manufacturer & Printing in Delhi
        </h1>
      </div>
      <div className="container mx-auto md:px-40 grid grid-cols-1 md:grid-cols-2 p-4 md:py-6 gap-3.5">
        <div className="relative">
          <Image
            src={BigImage}
            alt="Printed Canvas Tote Bags Manufacturer Fast Print Delhi"
            className="rounded-xl animate__fadeInDown"
          />
          <Image
            src={SmallImage}
            alt="Canvas Bag printing fastprint"
            className="hidden md:block rounded-xl absolute z-20 -bottom-6 right-4 shadow-2xl"
          />
        </div>
        <div className="flex flex-col ">
          <h1 className="text-4xl mt-2 md:text-6xl font-medium bg-gradient-to-r from-purple-600 via-pink-500 to-orange-700 text-transparent bg-clip-text">
            Custom Canvas Tote Bags – Manufacturing & Printing for Branding and
            Promotions
          </h1>
          <p className=" mt-6 font-medium text-[20px] text-gray-700 text-justify ">
            At Fast Print Delhi, we manufacture and print high-quality canvas
            tote bags in Delhi. You can customize these bags with your logo,
            artwork or promotional message, making them ideal for events,
            corporate gifting, retail stores and brand promotions. Our canvas
            tote bags are made for everyday use, whether it’s a quick grocery
            run, a casual day out or your daily office commute. Crafted from
            premium cotton canvas, these bags feel light in the hand and fold
            easily when not in use, which makes them perfect for travel too. The
            spacious main compartment can hold books, clothes, groceries and
            more, while the slip pocket at the back helps you keep your phone
            and other small items within reach. <br />
            At Fastprint Delhi, you can customize these tote bags with your
            logo, artwork or promotional message, making them ideal for events,
            corporate gifting, retail stores or personal use.
          </p>
          <p className=" mt-6 font-medium text-[20px] text-gray-700 ">
            ✔ Durable cotton canvas that handles everyday wear
            <br />
            ✔️ Lightweight and foldable, easy to carry anywhere
            <br />
            ✔️ Custom printing for branding, gifting and promotions
            <br />
            ✔️ Eco-friendly alternative to plastic bags
            <br />
            ✔️ Perfect for retail, events, offices and personal use
            <br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Canvasbag;
