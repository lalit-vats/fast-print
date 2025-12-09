import Image from "next/image";
import BgImage from "../../../public/Images/canvasbag,tote bag.jpg";
import BigImage from "../../../public/Images/canvasbag,toteBigImage.jpg";
import SmallImage from "../../../public/Images/casnvanbagSmall.png";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Canvasbag",
  description:
    "Whether you're showcasing your products, services, or brand story, we offer high-quality canopy prints that stand out.",
  keywords: [
    " Fast Print Canopy-Promotion table",
    "Canopy Printing in Munirka",
    "Canopy Print in Delhi",
    "Canopy Printing in Gurgaon",
    "Canopy Print near me",
  ],
};

const Canvasbag = () => {
  return (
    <div className="mt-15">
      <div className="relative">
        <Image
          src={BgImage}
          alt="We make Custom Canopy printing in Delhi"
          className="w-full h-full object-cover "
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        <h1 className="mb-1.5 w-full text-white absolute  z-10 top-1/3  text-center  text-6xl font-bold md:text-8xl">
          Canvas Bag
        </h1>
      </div>
      <div className="container mx-auto md:px-40 grid grid-cols-1 md:grid-cols-2 p-4 md:py-6 gap-3.5">
        <div className="relative">
          <Image
            src={BigImage}
            alt="Canvas Bag print in delhi"
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
            Canvas Tote Bags&apos; Stylish, Practical and Custom-Printed for
            Your Brand
          </h1>
          <p className=" mt-6 font-medium text-[20px] text-gray-700 text-justify ">
            Our canvas tote bags are made for everyday use, whether it’s a quick
            grocery run, a casual day out or your daily office commute. Crafted
            from premium cotton canvas, these bags feel light in the hand and
            fold easily when not in use, which makes them perfect for travel
            too. The spacious main compartment can hold books, clothes,
            groceries and more, while the slip pocket at the back helps you keep
            your phone and other small items within reach. <br />At Fastprint Delhi,
            you can customize these tote bags with your logo, artwork or
            promotional message, making them ideal for events, corporate
            gifting, retail stores or personal use.
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
