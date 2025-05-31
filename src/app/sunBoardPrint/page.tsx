import React from 'react'
import BgImage from "../../../public/Images/sunboardCutoutBg.jpg"
import SmallImage from "../../../public/Images/sunboardCutoutImgTwo.jpg"
import BigImage from "../../../public/Images/vinaylBigImage.png"
import Image from 'next/image'
import { Metadata } from 'next'


export const metadata: Metadata = {
  title: "Sunboard Print",
  description: "Whether you're showcasing your products, services, or brand story, we provide high-quality sunboard prints that stand out.",
  keywords: [
    "sunboard / flyer / ribbons / stickers",
    "Vinyl Sunboard Printing",
    "Sunboard Printing near me",
    "Sunboard Printing in Munirka",
    "Sunboard Print in Delhi",
    "Sunboard Printing in Gurgaon",
  ],
}

const SunboardPrint
  = () => {
    return (
      <div className='mt-15'>
        <div className='relative'>
          <Image src={BgImage} alt='aboutus' className='w-full h-full object-cover ' />
          <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50'>
          </div>
          <h1 className='mb-1.5 w-full text-white absolute  z-10 top-1/3  text-center  text-6xl font-bold md:text-8xl'>Sunboard Print</h1>
        </div>
        {/* Discription section */}
        <div className='container mx-auto md:px-40 grid grid-cols-1 md:grid-cols-2 p-4 md:py-6 gap-3.5'>
          <div className='relative'>
            <Image src={BigImage} alt='image' className='rounded-xl' />
            <Image src={SmallImage} alt='image' className='hidden md:block rounded-xl absolute z-20 -bottom-6 right-4 shadow-2xl' />
          </div>
          <div className='flex flex-col items-center justify-center'>
            <h1 className='text-4xl mt-2 md:text-6xl font-medium bg-gradient-to-r from-purple-600 via-pink-500 to-orange-700 text-transparent bg-clip-text'>Increase Your Brand Awareness with Superior Sunboard Printed designs.</h1>
            <p className=' mt-6 font-medium text-[20px] text-gray-700 '>Searching for a long-lasting, polished, and eye-catching method to present your message or brand? The ideal answer is our sunboard printing services.
            </p>
            <p className=' mt-6 font-medium text-[20px] text-gray-700 '>

              ✅ Panels for Retail Branding
              Professionally designed sunboard panels that draw attention and support your brand image can help your store stand out.<br />
              ✅ Promotional Standees Use portable, lightweight, custom-designed sunboard standees to highlight sales, debuts, or events.<br />
              ✅ Interior Signage for Businesses
              High-resolution printed sunboards that showcase your company&apos;s identity will give your workplace or showroom a clean, contemporary appearance.<br />
              </p>
          </div>
        </div>
      </div>
    )
  }

export default SunboardPrint

