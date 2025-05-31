import CountUp from "@/components/CountUp";
import ScrollVelocity from "@/components/ui/ScrollVelocity";
import WhatWeDo from "@/components/whatWeDo";

import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import Hero from "@/components/ui/hero";
import Services from "@/components/ui/services";
import { testimonials } from "@/lib/utils";
import { Users, Presentation, BadgeCheck } from "lucide-react";


const countUpData = [
  {
    icon: <Users height={40} width={40} color="#EF4136" />,
    count: 100,
    suffix: "+",
    title: "Happy Clients",
  },
  {
    icon: <Presentation height={40} width={40} color="#EF4136" />,
    count: 250,
    suffix: "+",
    title: "Projects Completed",
  },
  {
    icon: <BadgeCheck height={40} width={40} color="#EF4136" />,
    count: 12,
    suffix: "+",
    title: "Years of Experience",
  },
];

export default function Home() {
  const velocity = 100;
  return (
    <div>
      <div className=" top-0 z-[-2] transform bg-white bg-gradient-to-bl from-blue-200 via-yellow-50 to-pink-300 ">
        <Hero />
      </div>

      {/* Services   */}

      <Services />


      <WhatWeDo />
      {/*Testimonials   */}
      <div className="p-4">
          <h4 className="text-4xl text-center font-medium md:mt-14 mb-2.5 text-[#EF4136]">
            Testimonials
          </h4>
          <h1 className="text-center text-3xl text-gray-800 md:text-5xl font-bold">
            What <br />
            Our Clients Say
          </h1>
        </div>
      <div className="container grid grid-cols-1  px-16  items-center">
        
        <AnimatedTestimonials testimonials={testimonials} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4  bg-pink-100">
        {countUpData.map((d, i) => {
          return (
            <div key={i} className="flex  flex-col items-center justify-center gap-3">
              <div
                className=" flex items-center justify-center gap-3"
              >
                <div className="transform transition-transform duration-300 hover:rotate-45">
                  {d.icon}
                </div>
                <div className="flex items-center">
                  <CountUp
                    from={0}
                    to={d.count}
                    separator=","
                    direction="up"
                    duration={1}
                    className="count-up-text text-4xl font-bold text-[#EF4136]"
                  />
                  {d.suffix && <span className="text-4xl font-bold text-[#EF4136]">{d.suffix}</span>}
                </div>
              </div>
              <h1 className=" text-3xl font-bold m-1 text-[#EF4136]">
                {d.title}
              </h1>
            </div>
          );
        })}
      </div>

      <ScrollVelocity
        texts={['Fast Print', 'Print Services']}
        velocity={velocity}
        className="custom-scroll-text bg-gradient-to-r from-pink-600 via-purple-500 to-green-700 text-transparent bg-clip-text"
      />

    </div>
  );
}
