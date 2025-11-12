import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import PrintIcon from "../../public/Images/printIcon.png";
import { StaticImageData } from "next/image";
import PrServiceOne from "../../public/Images/best.png";
import PrSrviceTwo from "../../public/Images/ps2.png";
import PrSrviceThree from "../../public/Images/ps3.png";
import Stationery from "../../public/Images/stationery.png";
import DoctorImage from "../../public/testimonialDoctor.png";
import Arvind from "../../public/Arvind.png";
import Saima from "../../public/saima.png";
import Rahul from "../../public/rahul.jpg";
import ManagerImage from "../../public/manager.png";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const serviceLink = [
  { name: "Flex Print", href: "/flexPrinting" },
  { name: "T-Shirt Print", href: "/tshirtPrint" },
  { name: "Mug Print", href: "/mugPrint" },
  { name: "Vinyl Print", href: "/vinylPrint" },
  { name: "Hording-Banner Print", href: "/hordingPrint" },
  { name: "Broucre Print", href: "/broucrePrint" },
  { name: "Standee Print", href: "/standeePrint" },
  { name: "Canopy", href: "/canopy" },
  { name: "Pamphlet Print", href: "/pamphletPrint" },
  { name: "Letterhead Print", href: "/letterheadPrint" },
  { name: "Diary Print", href: "/diaryPrint" },
  { name: "Visiting Cards Print", href: "/visitingCard" },
  { name: "Sun Board / Foam Board Prints", href: "/sunBoardPrint" },
  { name: "Calender Print", href: "/calenderPrint" },
  { name: "Folder Print", href: "/folderPrint" },
];

export const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/aboutUs" },
  { name: "Blog", href: "https://blog.fastprintdelhi.com/", Target: "_blank" },
  { name: "Gallery", href: "https://works-showcase.vercel.app//", Target: "_blank" },
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
      "“These people gave me the precise flex banner I needed for the grand opening of my Clinic. The quality was excellent, and the colors were brilliant. I will most certainly return for any other printing need!”",
    name: "Dr. Deepti Jain (Physiotherapist)",
    designation: "Physiotherapist,Orthopedic Physiotherapist",
    src: DoctorImage,
  },
  {
    quote:
      "“ We have been employing their services to maintain all of the banners and signboards in our community for more than a year.  They complete everything on schedule and with excellent quality, from festival banners to entrance boards.  The prints are consistently clear, and they even replace or clean old ones without our prompting.  Very trustworthy and professional!”",
    name: "Arvind Kumar",
    designation: "Manager Maintenance B1 Housing Society Vasant Kunj",
    src: Arvind,
  },
  {
    quote:
      "“ For our branding, events, and promotions, we mostly depend on premium flex printing. Fast Print Delhi has continuously produced excellent outcomes.  Their prompt response times, print clarity, and attention to detail have surpassed our expectations.  In order to keep things looking professional at all times, they have also assisted with maintaining our event banners and workplace signage.  Strongly advised for any company searching for trustworthy printing partners.”",
    name: "Saima",
    designation: "Marketing Manager at Pernia's Pop Up Shop",
    src: Saima,
  },
  {
    quote:
      "“Flex printing is essential to our marketing campaigns and business identity. Fast Print Delhi has shown itself to be a trustworthy partner by regularly producing excellent prints on schedule. Their staff is quick to respond, meticulous, and aware of the value of a polished appearance. They also take care of routine maintenance to keep everything appearing crisp and consistent with the brand, from event backgrounds to in-office signs. We appreciate their service and hope to work with them for a long time.”",
    name: "Mr. Kapil",
    designation: "Sr. Manager at Pernia's Pop Up Shop",
    src: ManagerImage,
  },
  {
    quote:
      "“ Being a printing business ourselves, we know how important speed and quality are. For numerous high-volume, urgent flex printing jobs, we have collaborated with Fast Print Service. Their flawless organization, outstanding print clarity, and dedication to deadlines have enabled us to consistently fulfill our client commitments. In fact, Fast Print Service has been a trustworthy addition to our own staff. Highly recommended to anyone searching for a reliable backend support partner in the print sector.”",
    name: "Mr. Kamal",
    designation: "Owner of City Print",
    src: Rahul,
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
