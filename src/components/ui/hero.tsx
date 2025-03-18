import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import HeroImg from '../../../public/Images/ab1 1.png'


const Hero = () => {
  return (

        <section className="min-h-screen flex items-center justify-center ">
            <div className="container mx-auto px-6 lg:px-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* Left Side - Bold Text */}
                <div className="text-center md:text-left">
                    <h1 className=" text-4xl md:text-7xl font-extrabold text-gray-900 leading-tight">
                    The Leader In Quality Custom Print Design <br /> <span className="text-blue-600"></span>
                    </h1>
                    <p className="mt-4 text-lg text-gray-700 font-semibold">
                    We provide high-quality outdoor advertising solutions with premium billboards.
                    </p>
                    <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
                    Get Started
                    </button>
                </div>

                {/* Right Side - Graphic (Replace with an actual image) */}
                <div className="flex justify-center">
                <Image
                    src={HeroImg}
                    alt="Hero Graphic"
                    width={600} // Adjust width as needed
                    height={600} // Adjust height as needed
                    className="w-full max-w-md"
                    />
                </div>
                </div>
            </div>
        </section>
      
        
  )
}

export default Hero
