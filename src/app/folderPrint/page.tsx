import React from 'react'
import BgImage from "../../../public/Images/calenderPrintBg.jpg"
import SmallImage from "../../../public/Images/folderPrintTwo.jpg"
import BigImage from "../../../public/Images/folderBigImage.jpg"
import Image from 'next/image'
import { Metadata } from 'next'


export const metadata: Metadata = {
  title: "Folder Print",
  description: "We provide high-quality folder prints that stand out whether you're showcasing your products, services, or brand story.",
}


const FolderPrint
  = () => {
    return (
      <div className='mt-15'>
        <div className='relative'>
          <Image src={BgImage} alt='aboutus' className='w-full h-full object-cover ' />
          <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50'>
          </div>
          <h1 className='mb-1.5 w-full text-white absolute z-10 top-1/3 text-center text-6xl font-bold md:text-8xl'>Folder Print</h1>
        </div>
        {/* Discription section */}
        <div className='container mx-auto md:px-40 grid grid-cols-1 md:grid-cols-2 p-4 md:py-6 gap-3.5'>
          <div className='relative'>
            <Image src={BigImage} alt='image' className='rounded-xl' />
            <Image src={SmallImage} alt='image' className='hidden md:block rounded-xl absolute z-20 -bottom-6 right-4 shadow-2xl' />
          </div>
          <div className='flex flex-col items-center justify-center'>
            <h1 className='text-4xl mt-2 md:text-6xl font-medium bg-gradient-to-r from-purple-600 via-pink-500 to-orange-700 text-transparent bg-clip-text'>Make a Memorable First Impression with Personalized Folders.</h1>
            <p className=' mt-6 font-medium text-[20px] text-gray-700 '>Professionally printed folders that blend design and practicality will enhance the way your brand is presented. Our personalized folders are perfect for business meetings, client proposals, marketing kits, and events. They keep you organized and present your brand in a polished, businesslike manner.
            </p>
            <p className=' mt-6 font-medium text-[20px] text-gray-700 '>

              ✅ Perfect for use in business, education, and advertising.<br />
              ✅ Full-color printing of designs, branding, and logos.<br />
              ✅ Custom pockets, business card slots, and sizes Superior paper and long-lasting laminating<br />
              </p>
          </div>
        </div>
      </div>
    )
  }

export default FolderPrint

