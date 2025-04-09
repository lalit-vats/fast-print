import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import PrintIcon from "../../public/Images/printIcon.png"
import { StaticImageData } from "next/image"
import PrServiceOne from "../../public/Images/best.png"
import PrSrviceTwo from "../../public/Images/ps2.png"
import PrSrviceThree from "../../public/Images/ps3.png"
import Stationery from "../../public/Images/stationery.png"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const serviceLink =[
  {name: "Flex Print", href: "flexPrinting"},
  {name: "T-Shirt Print", href: "tshirtPrint"},
  // {name: "Mug Print", href: ""},
  {name: "Vinayl Print", href: "vinaylPrint"},
  ]

export const navLinks =[
  {name: "Home", href: "/"},
  {name: "About Us", href: "aboutUs"},
  {name: "Service", href: ""},
  {name: "Contact Us", href: "contactUs"},
]

export type ServiceData = {
  img: StaticImageData;
  title: string;
  description: string;
}
export type AnimateServiceData = {
  img: StaticImageData;
  title: string;
  description: string;
}
export const servicesData: ServiceData[] =[
  {img: PrintIcon,
  title:"Flex Print",
  description:"Mi donec risus commodo auctor phasellus adipiscing. Faucibus magna cursus sed sodales amet. Nunc."
  },
  {img: PrintIcon,
  title:"Mug Printing",
  description:"Mi donec risus commodo auctor phasellus adipiscing. Faucibus magna cursus sed sodales amet. Nunc."
  },
  {img: PrintIcon,
  title:"T-shirt Printing",
  description:"Mi donec risus commodo auctor phasellus adipiscing. Faucibus magna cursus sed sodales amet. Nunc."
  },
  {img: PrintIcon,
  title:"Digital Printing",
  description:"Mi donec risus commodo auctor phasellus adipiscing. Faucibus magna cursus sed sodales amet. Nunc."
  },
]

export const testimonials = [
  {
    quote:
      "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
    name: "Sarah Chen",
    designation: "Product Manager at TechFlow",
    src: "/client1.jpg",
  },
  {
    quote:
      "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
    name: "Michael Rodriguez",
    designation: "CTO at InnovateSphere",
    src: "/test.png",
  },
  {
    quote:
      "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
    name: "Emily Watson",
    designation: "Operations Director at CloudScale",
    src: "/test.png",
  },
  {
    quote:
      "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
    name: "James Kim",
    designation: "Engineering Lead at DataPro",
    src: "/test.png",
  },
  {
    quote:
      "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
    name: "Lisa Thompson",
    designation: "VP of Technology at FutureNet",
    src: "/test.png",
  },
];

export const AnimateServices =[
  {
    sno:"1",
    title:"Paper Print Services",
    diccription:"For both personal and professional purposes, get top-notch paper printing services.  With brilliant colors and high-quality finishes, we provide flyers, brochures, business cards, posters, and more.  Quick turnaround and reasonable prices are assured!",
    img:PrServiceOne

  },
  {
    sno:"2",
    title:"Flex Print Services",
    diccription:"Get bright, high-quality flex printing for signs, banners, and posters.  Excellent for marketing, events, and ads.  Durable prints that won't fade in the sun at a good price!",
    img:PrSrviceTwo

  },
  {
    sno:"3",
    title:"Office Stationery Print Services",
    diccription:"Obtain premium office stationery printing for your company that features personalized designs.  We provide notepads, envelopes, letterheads, business cards, and more at reasonable costs.  Use high-quality printing services to project a more polished image!",
    img:Stationery

  },
  {
    sno:"4",
    title:"Vinayl Print Services",
    diccription:"Get high-quality vinyl printing for banners, stickers, and signage with vibrant colors and durable materials. Perfect for indoor and outdoor use, our prints are weather-resistant and long-lasting. Customize your design to make a bold statement for your brand or event!",
    img:PrSrviceThree

  },
]
