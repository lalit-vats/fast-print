import Image from 'next/image'
import BgImage from "../../../public/Images/canopyBg.jpg"
import BigImage from "../../../public/Images/canopyImg.jpg"
import SmallImage from "../../../public/Images/canopyImgTwo.jpg"
import { Metadata } from 'next'


export const metadata: Metadata = {
  title: "Canopy",
  description: "Whether you're showcasing your products, services, or brand story, we offer high-quality canopy prints that stand out.",
}

const Canopy = () => {
    return (
        <div className='mt-15'>
            <div className='relative'>
                <Image src={BgImage} alt='aboutus' className='w-full h-full object-cover ' />
                <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50'>
                </div>
                <h1 className='mb-1.5 w-full text-white absolute  z-10 top-1/3  text-center  text-6xl font-bold md:text-8xl'>Canopy</h1>
            </div>
            <div className='container mx-auto md:px-40 grid grid-cols-1 md:grid-cols-2 p-4 md:py-6 gap-3.5'>
                <div className='relative'>
                    <Image src={BigImage} alt='image' className='rounded-xl animate__fadeInDown' />
                    <Image src={SmallImage} alt='image' className='hidden md:block rounded-xl absolute z-20 -bottom-6 right-4 shadow-2xl' />
                </div>
                <div className='flex flex-col '>
                    <h1 className='text-4xl mt-2 md:text-6xl font-medium bg-gradient-to-r from-purple-600 via-pink-500 to-orange-700 text-transparent bg-clip-text'>Elevate Your Event with Premium Canopy Solutions</h1>
                    <p className=' mt-6 font-medium text-[20px] text-gray-700 text-justify '>Whether you&apos;re having a backyard barbie, a festival, a company gathering or a wedding, whatever the event our canopies are the ideal solution for providing shade and shelter.
                    </p>
                    <p className=' mt-6 font-medium text-[20px] text-gray-700 '>
                        ✔ Commercial Quality Canopies – Sturdy wind resistant frames, UV protective materials<br />
                        ✔️ Complete Rentals – Covers setup/break down, lighting and flooring<br />
                        ✔️ Custom Branding – Include logos, colors, or insignia for a personalized flair<br />
                        ✔️ Custom Sizes and Fast Turnaround<br />


                    </p>
                </div>
            </div>
        </div>
    )
}

export default Canopy