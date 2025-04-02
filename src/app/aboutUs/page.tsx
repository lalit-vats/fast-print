import Image from 'next/image'
import aboutus from '../../../public/Images/aboutUsBg.jpg'
const AboutUs = () => {
  return (
    <div className=' mt-15'>
      <div className='relative'>
      <Image src={aboutus} alt='aboutus' className='w-full h-full object-cover ' />
      <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50'>
      </div>
        <h1 className='text-white absolute  z-50 top-1/2 text-center  text-6xl font-bold md:text-7xl'>About Us</h1>
      </div>
    </div>
  )
}

export default AboutUs
