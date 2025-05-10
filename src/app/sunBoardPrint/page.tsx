import React from 'react'
import BgImage from "../../../public/Images/broucrePrint.jpg"
import SmallImage from "../../../public/Images/visitingCardImgTwo.jpg"
import BigImage from "../../../public/Images/visitingCardImg.jpg"
import Image from 'next/image'

const VinaylPrint
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
            <h1 className='text-4xl mt-2 md:text-6xl font-medium bg-gradient-to-r from-purple-600 via-pink-500 to-orange-700 text-transparent bg-clip-text'>Premium Quality Visiting Cards at Affordable Prices</h1>
            <p className=' mt-6 font-medium text-[20px] text-gray-700 '>Trusted by Professionals for Over a Decade
            Our premium visiting card prints reflect quality, precision, and style.
            </p>
            <p className=' mt-6 font-medium text-[20px] text-gray-700 '>

              ✅ Premium Finish: Select from matte, glossy or textured finish options to give a professional look.<br />
              ✅ Premium Cardstock: Durable, strong material with fantastic quality, has a good feel to it.<br />
              ✅ Custom Designs: Visit cards tailor made to fit your brand and style.<br />
              ✅ Vibrant & Sharp Prints: Clear Text is what we want, and that&apos;s exactly what we will get with these cards.<br />
              ✅ Many Size Options: Standard, square, folded, and custom—just the way you need it.
              </p>
          </div>
        </div>
      </div>
    )
  }

export default VinaylPrint

