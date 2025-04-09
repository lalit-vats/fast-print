import React from 'react'
import BgImage from "../../../public/Images/vinaylPrint.png"
import SmallImage from "../../../public/Images/vinaylUpperPic.png"
import BigImage from "../../../public/Images/vinaylBigImage.png"
import Image from 'next/image'

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
          <h1 className='text-4xl mt-2 md:text-6xl font-medium bg-gradient-to-r from-purple-600 via-pink-500 to-orange-700 text-transparent bg-clip-text'>We are just better Quality
            For over 12 years</h1>
          <p className=' mt-6 font-medium text-[20px] text-gray-700 '>With more than 12 years of expertise, we have made a name for ourselves as a reliable provider of premium flex printing. 
          </p>
          <p className=' mt-6 font-medium text-[20px] text-gray-700 '>

            ✅ High-Resolution Prints: For optimum effect, use designs that are clear, colorful, and crisp.<br/>
            ✅ Customization at Its Finest: We offer banners, hoardings, backdrops, standees, and more in a variety of sizes and designs.<br/>
            ✅ Quick Turnaround Time: Print quickly and effectively to fulfill your deadlines.
            Competitive pricing offers high-quality prints at affordable prices.
          </p>
        </div>
      </div>
    </div>
  )
}

export default VinaylPrint

