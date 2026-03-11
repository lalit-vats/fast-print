import Image from "next/image";
import Script from "next/script";
import ShinyText from "@/components/ui/shinyText";
import FlexPrintImg from "../../../public/Images/flexPrint.jpg";
import Fp1 from "../../../public/Images/fp-1.png";
import UpperImg from "../../../public/Images/ab3.jpg";
import { Metadata } from "next";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Flex Printing Services in Delhi",
  description:
    "Whether you are showcasing your products, services, or brand story, we offer high-quality flex printing that leaves an impression.",
  keywords: [
    "Fast Print Flex Printing/ Banner Printing/ Hoarding Printing",
    "Flex Printing near me",
    "Flex Printing in Munirka",
    "Flex Printing in Delhi",
    "Flex Printing in Gurgaon",
  ],
};
const Flexprinting = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Flex Printing Service",
    name: "Professional Flex Printing in Delhi",
    description: "Fast Print Delhi offers high-quality flex printing, vinyl banners, and glow sign board printing with same-day delivery in Delhi NCR.",
    provider: {
      "@id": "https://fastprintdelhi.com/#local-business-schema",
      "@type": "PrintingService",
      name: "Fast Print Delhi",
      url: "https://fastprintdelhi.com",
      telephone: "+91 9266822218",
      areaServed: {
        "@type": "City",
        name: "Delhi"
      }
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Flex Printing Solutions",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Star Flex Printing"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Backlit Flex Printing"
          }
        }
      ]
    }
  };

  return (
    <div className="mt-15">
      <Script
        id="flex-printing-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Top Section */}
      <div className="relative">
        <Image
          src={FlexPrintImg}
          alt="Fast Print Flex Printing/ Banner Printing/ Hoarding Printing in delhi"
          className="w-full h-1/2 object-cover "
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        <ShinyText
          text="Flex Printing Services in Delhi"
          disabled={false}
          speed={3}
          className="w-full text-gray-300 absolute z-10 top-1/3 text-center text-6xl font-bold md:text-8xl"
        />
      </div>
      {/* Description section */}
      <div className="container mx-auto md:px-40 grid grid-cols-1 md:grid-cols-2 p-4 md:py-6 gap-3.5">
        <div className="relative">
          <Image
            src={Fp1}
            alt="Flex Printing Services in Delhi - Fast Print Delhi"
            className="rounded-xl"
          />
          <Image
            src={UpperImg}
            alt="Flex Banner and Hoarding Printing in Delhi"
            className="hidden md:block rounded-xl absolute z-20 -bottom-6 right-4 shadow-2xl"
          />
        </div>

        <div className="flex flex-col items-center justify-center">
          <h2 className="text-4xl mt-2 md:text-6xl font-medium bg-gradient-to-r from-purple-600 via-pink-500 to-orange-700 text-transparent bg-clip-text">
            Professional Flex Printing Services in Delhi
          </h2>

          <p className="mt-6 font-medium text-[20px] text-gray-700 text-justify">
            Fast Print Delhi provides high-quality flex printing services for
            businesses, shops, events and advertising campaigns. With over 12
            years of experience in the printing industry, we specialize in
            producing durable and vibrant flex banners that attract attention
            and help promote your brand effectively.
          </p>

          <p className="mt-6 font-medium text-[20px] text-gray-700 text-justify">
            Our flex prints are ideal for outdoor advertising, shop branding,
            promotional banners and exhibition displays. Using advanced printing
            technology, we ensure sharp images, bright colors and long-lasting
            print quality.
          </p>

          <p className="mt-6 font-medium text-[20px] text-gray-700">
            ✔ High-Resolution Flex Printing for clear and vibrant designs <br />
            ✔ Custom Sizes for banners, hoardings, backdrops and standees <br />
            ✔ Durable Material suitable for outdoor and indoor advertising{" "}
            <br />
            ✔ Fast Turnaround Time for urgent printing needs <br />✔ Affordable
            Pricing for bulk and regular orders
          </p>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto md:px-40 py-12 p-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-2 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-700 text-transparent bg-clip-text">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-gray-600 mb-8 text-lg">
          Everything you need to know about our flex printing services
        </p>
        
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg font-semibold">
              What is flex printing used for?
            </AccordionTrigger>
            <AccordionContent className="text-base text-gray-700">
             Flex printing is commonly used for banners, hoardings, shop signage, event promotions and outdoor advertising.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="text-lg font-semibold">
              How long does flex printing typically last?
            </AccordionTrigger>
            <AccordionContent className="text-base text-gray-700">
              High-quality flex prints can last 3-5 years for outdoor use when properly installed and maintained. The durability depends on factors like weather conditions, sun exposure, and the quality of the material used. Our flex prints are made from premium materials designed to resist fading and weathering.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="text-lg font-semibold">
              What sizes can you print flex banners?
            </AccordionTrigger>
            <AccordionContent className="text-base text-gray-700">
              We can print flex banners in any custom size, from small shop signage to large hoardings. Whether you need a 2ft x 3ft banner or a 50ft x 100ft hoarding, we have the capability to fulfill your requirements. Our team will help you determine the best size for your specific needs.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className="text-lg font-semibold">
             Do you provide custom size flex banners?
            </AccordionTrigger>
            <AccordionContent className="text-base text-gray-700">
              Standard turnaround time is 2-3 days for regular orders. For urgent requirements, we offer expedited printing within 24 hours. The exact timeline depends on the size, complexity, and current workload. We recommend contacting us to confirm the specific turnaround time for your project.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger className="text-lg font-semibold">
              Do you offer design services along with printing?
            </AccordionTrigger>
            <AccordionContent className="text-base text-gray-700">
              Yes! We offer professional design services to help you create eye-catching flex banners. Our experienced designers can work with your ideas or create designs from scratch. We also accept ready-made designs in various formats (AI, PSD, PDF, etc.).
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger className="text-lg font-semibold">
              What is your pricing for flex printing?
            </AccordionTrigger>
            <AccordionContent className="text-base text-gray-700">
              Pricing depends on several factors including size, design complexity, and quantity. We offer competitive rates and discounts for bulk orders. For an accurate quote, please provide your specific requirements, and our team will send you a customized pricing proposal.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Flexprinting;
