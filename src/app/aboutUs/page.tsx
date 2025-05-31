import Image from 'next/image'
import aboutus from '../../../public/Images/aboutUsBg.jpg'
import FrontImg from "../../../public/Images/ab1.jpg"
import UpperImg from "../../../public/Images/ab3.jpg"
import { Metadata } from 'next'


export const metadata: Metadata = {
  title: "About Us",
  description: "We are a team of dedicated professionals who are passionate about providing the best print services to our clients.",
}


const AboutUs = () => {
  return (
    <div className=' mt-15'>
      <div className='relative'>
        <Image src={aboutus} alt='Team at Fastprint Delhi working on premium printing services' className='w-full h-full object-cover ' />
        <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50'>
        </div>
        <h1 className='w-full text-white absolute  z-10 top-1/3  text-center  text-6xl font-bold md:text-8xl'>About Us</h1>
      </div>
      {/* <div className='container mx-auto grid grid-cols-1 md:grid col-end-4 my-8'>
        <div className='flex flex-col items-center justify-center h-[270px] w-[270px] hover:border-2 border-amber-700 transform transition-colors duration-300 rounded-full'>
          <div className='bg-amber-300 flex flex-col p-2 h-64 w-64 rounded-full '>
            <Image src={}/>
          </div>
        </div>
      </div> */}
      <div className='container mx-auto md:px-40 grid grid-cols-1 md:grid-cols-2 p-4 md:py-6 gap-3.5'>
        <div className='relative'>
        <Image src={FrontImg} alt='Modern printing equipment at Fastprint Delhi office' className='rounded-xl' />
        <Image src={UpperImg} alt='Fastprint Delhi team delivering customized print orders' className='hidden md:block rounded-xl absolute z-20 -bottom-6 right-4 shadow-2xl' />
        </div>
        <div className='flex flex-col items-center justify-center'>
          <h1 className='text-4xl mt-2 md:text-6xl font-medium bg-gradient-to-r from-pink-600 via-purple-500 to-green-700 text-transparent bg-clip-text'>We are just better Quality
            For over 12 years</h1>
          <p className=' mt-6 font-medium text-[20px] text-gray-700 '>We offer a wide selection of brand-name apparel that&apos;s primed for
            personalization. Choose from popular brands like Nike We offer a wide
            selection of brand-name apparel that&apos;s</p>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
