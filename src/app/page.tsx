import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import Hero from "@/components/ui/hero";
import Services from "@/components/ui/services";
import { testimonials } from "@/lib/utils";

export default function Home() {
  return (
    <div>
      <div className=" top-0 z-[-2] transform bg-white bg-gradient-to-bl from-blue-200 via-yellow-50 to-pink-300 ">
        <Hero />
      </div>
      <Services />
      <div className="container grid grid-cols-1 md:grid-cols-2  px-16 items-center ">
        <div className="p-4">
          <h4 className="text-4xl text-center font-medium md:mt-14 mb-2.5 text-[#EF4136]">Testimonials</h4>
          <h1 className="text-center text-3xl text-gray-800 md:text-5xl font-bold">
            What <br />
            Our Client Say's
          </h1>
        </div>
        <AnimatedTestimonials testimonials={testimonials} />
      </div>
    </div>
  );
}
