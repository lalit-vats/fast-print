import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import PrintIcon from "../../public/Images/printIcon.png";
import { StaticImageData } from "next/image";
import PrServiceOne from "../../public/Images/best.png";
import PrSrviceTwo from "../../public/Images/ps2.png";
import PrSrviceThree from "../../public/Images/ps3.png";
import Stationery from "../../public/Images/stationery.png";
import Client1 from "../../public/client1.jpg";
import TestImage from "../../public/test.png";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const serviceLink = [
  { name: "Flex Print", href: "/flexPrinting" },
  { name: "T-Shirt Print", href: "/tshirtPrint" },
  { name: "Mug Print", href: "/mugPrint" },
  { name: "Vinayl Print", href: "/vinaylPrint" },
  { name: "Hording-Banner Print", href: "/hordingPrint" },
  { name: "Broucre Print", href: "/broucrePrint" },
];

export const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/aboutUs" },
  { name: "Service", href: "" },
  { name: "Contact Us", href: "/contactUs" },
];

export type ServiceData = {
  img: StaticImageData;
  title: string;
  description: string;
};
export type AnimateServiceData = {
  img: StaticImageData;
  title: string;
  description: string;
};
export const servicesData: ServiceData[] = [
  {
    img: PrintIcon,
    title: "Flex Print",
    description:
      "Top-notch flex printing options customized to meet your requirements!  We employ high-quality materials and cutting-edge printing processes to guarantee brilliant colors, crisp details, and long-lasting durability for banners, hoardings, and signage.  Perfect for business promotions, events, and ads.",
  },
  {
    img: PrintIcon,
    title: "Mug Printing",
    description:
      "Personalized mug printing for all kinds of events!  We provide premium, long-lasting printing with brilliant colors for special occasions, company branding, and presents.  Add images, logos, or imaginative designs to your cups to personalize each drink!",
  },
  {
    img: PrintIcon,
    title: "T-shirt Printing",
    description:
      "Personalized T-shirt printing that makes your ideas come to life! We provide premium prints with vivid colors and long-lasting durability for usage by companies, events, promotions, or individuals. Select from heat transfer, sublimation, or screen printing techniques to create the ideal texture and appearance for your clothing.",
  },
  {
    img: PrintIcon,
    title: "Digital Printing",
    description:
      "Use our cutting-edge digital printing services to produce prints that are crisp, colorful, and high-resolution!  Whether you require flyers, posters, business cards, brochures, or personalized printing, we provide quick, affordable, and high-quality solutions.  Ideal for personal projects, parties, and corporations!",
  },
];

export const testimonials = [
  {
    quote:
      "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
    name: "Sarah Chen",
    designation: "Product Manager at TechFlow",
    src: Client1,
  },
  {
    quote:
      "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
    name: "Michael Rodriguez",
    designation: "CTO at InnovateSphere",
    src: TestImage,
  },
  {
    quote:
      "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
    name: "Emily Watson",
    designation: "Operations Director at CloudScale",
    src: TestImage,
  },
  {
    quote:
      "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
    name: "James Kim",
    designation: "Engineering Lead at DataPro",
    src: TestImage,
  },
  {
    quote:
      "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
    name: "Lisa Thompson",
    designation: "VP of Technology at FutureNet",
    src: TestImage,
  },
];

export const AnimateServices = [
  {
    sno: "1",
    title: "Paper Print Services",
    diccription:
      "For both personal and professional purposes, get top-notch paper printing services.  With brilliant colors and high-quality finishes, we provide flyers, brochures, business cards, posters, and more.  Quick turnaround and reasonable prices are assured!",
    img: PrServiceOne,
  },
  {
    sno: "2",
    title: "Flex Print Services",
    diccription:
      "Get bright, high-quality flex printing for signs, banners, and posters.  Excellent for marketing, events, and ads.  Durable prints that won't fade in the sun at a good price!",
    img: PrSrviceTwo,
  },
  {
    sno: "3",
    title: "Office Stationery Print Services",
    diccription:
      "Obtain premium office stationery printing for your company that features personalized designs.  We provide notepads, envelopes, letterheads, business cards, and more at reasonable costs.  Use high-quality printing services to project a more polished image!",
    img: Stationery,
  },
  {
    sno: "4",
    title: "Vinayl Print Services",
    diccription:
      "Get high-quality vinyl printing for banners, stickers, and signage with vibrant colors and durable materials. Perfect for indoor and outdoor use, our prints are weather-resistant and long-lasting. Customize your design to make a bold statement for your brand or event!",
    img: PrSrviceThree,
  },
];
