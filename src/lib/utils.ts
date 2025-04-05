import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import PrintIcon from "../../public/Images/printIcon.png"

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
  img: unknown;
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

