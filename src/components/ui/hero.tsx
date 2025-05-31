import React from "react";
import Image from "next/image";
// import Link from "next/link";
import HeroImg from "../../../public/Images/ab1 1.png";
import RotatingText from "../RotatingText";
 const texts = ["T-shirt", "Caps", "Flex", "Vinyl"]
const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center ">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Side - Bold Text */}
          <div className="text-center md:text-left">
            <h1 className=" text-4xl md:text-7xl font-extrabold text-gray-900 leading-tight text-center">
              The Leader In Quality Custom Print Design <br />
            </h1>
            <RotatingText
              texts={texts}
              
              mainClassName="px-2 sm:px-2 md:px-3 bg-transparent text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg text-4xl md:text-7xl font-extrabold"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
            <div className="w-[100%] flex justify-center">
              <p className="mt-4 text-lg text-gray-700 font-semibold w-2/3 text-center">
                We provide high-quality outdoor advertising solutions with premium
                billboards.
              </p>
            </div>
          </div>

          {/* Right Side - Graphic (Replace with an actual image) */}
          <div className="flex justify-center">
            <Image
              src={HeroImg}
              alt="Hero Graphic"
              width={650} // Adjust width as needed
              height={650} // Adjust height as needed
              // className="w-full max-w-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
