import React from 'react'
import BgImage from "../../../public/Images/vinaylPrint.png"
import SmallImage from "../../../public/Images/vinaylUpperPic.png"
import BigImage from "../../../public/Images/vinaylBigImage.png"
import Image from 'next/image'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Vinayl Print",
  description: "Whether you're showcasing your products, services, or brand story, we provide high-quality vinyl prints that stand out.",
}

const VinaylPrint
  = () => {
    return (
      <div className='mt-15'>
        <div className='relative'>
          <Image src={BgImage} alt='aboutus' className='w-full h-full object-cover ' />
          <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50'>
          </div>
          <h1 className='mb-1.5 w-full text-white absolute  z-10 top-1/3  text-center  text-6xl font-bold md:text-8xl'>Vinayl Print</h1>
        </div>
        {/* Discription section */}
        <div className='container mx-auto md:px-40 grid grid-cols-1 md:grid-cols-2 p-4 md:py-6 gap-3.5'>
          <div className='relative'>
            <Image src={BigImage} alt='image' className='rounded-xl' />
            <Image src={SmallImage} alt='image' className='hidden md:block rounded-xl absolute z-20 -bottom-6 right-4 shadow-2xl' />
          </div>
          <div className='flex flex-col items-center justify-center'>
            <h1 className='text-4xl mt-2 md:text-6xl font-medium bg-gradient-to-r from-purple-600 via-pink-500 to-orange-700 text-transparent bg-clip-text'>Vinyl Printing – Bold, Sleek, and Built to Last</h1>
            <p className=' mt-6 font-medium text-[20px] text-gray-700 '>With more than 12 years of experience, we deliver professional-grade vinyl printing solutions that stick strong and stand out.
            </p>
            <p className=' mt-6 font-medium text-[20px] text-gray-700 '>

              ✅ Premium Finish: For a high-end appearance, use glossy or matte vinyl with gorgeous clarity and a smooth texture.<br />
              ✅ Weather-Resistant: Sturdy prints that can resist exposure to the sun, rain, and the elements.<br />
              ✅ Perfect for Any Surface: It works well on signboards, cars, walls, glass, and more.<br />
              ✅ Custom Cuts & Designs: We realize your ideas with everything from imaginative shapes to slick branding decals.<br />
              ✅ Excellent Prices, Fast Delivery Quick manufacturing and affordable prices for both individuals and companies.
            </p>
          </div>
        </div>
      </div>
    )
  }

export default VinaylPrint

