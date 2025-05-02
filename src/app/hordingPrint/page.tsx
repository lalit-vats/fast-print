import Image from 'next/image'
import BgImage from "../../../public/Images/hordingDesign.jpg"
import BigImage from "../../../public/Images/bannerPrint.jpg"
import SmallImage from "../../../public/Images/bannerUpperPic.jpg"

const HordingPrint = () => {
    return (
        <div className='mt-15'>
            <div className='relative'>
                <Image src={BgImage} alt='aboutus' className='w-full h-full object-cover ' />
                <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50'>
                </div>
                <h1 className='mb-1.5 w-full text-white absolute  z-10 top-1/3  text-center  text-6xl font-bold md:text-8xl'>Hording Print</h1>
            </div>
            <div className='container mx-auto md:px-40 grid grid-cols-1 md:grid-cols-2 p-4 md:py-6 gap-3.5'>
                <div className='relative'>
                    <Image src={BigImage} alt='image' className='rounded-xl animate__fadeInDown' />
                    <Image src={SmallImage} alt='image' className='hidden md:block rounded-xl absolute z-20 -bottom-6 right-4 shadow-2xl' />
                </div>
                <div className='flex flex-col '>
                    <h1 className='text-4xl mt-2 md:text-6xl font-medium bg-gradient-to-r from-purple-600 via-pink-500 to-orange-700 text-transparent bg-clip-text '> Your Business Deserves Flawless Prints – We Deliver!
                    </h1>
                    <p className=' mt-6 font-medium text-[20px] text-gray-700 text-justify'>With years of experience we can see your vision through powerful Hoarding Prints that are impossible to miss. Whether you are advertising outdoors or want signage for any event, we have expertise in tailor made, weather tough hoardings ideal for branding, promotions and properties.


                    </p>
                    <p className=' mt-6 font-medium text-[20px] text-gray-700  text-justify'>
                        🌟 Stand Out, Rain or Shine

                        Hoardings that are designed to be seen - and last. Whether you are in need of colorful prints for street, construction, or store advertising — our bold designs make a long lasting impression.<br/><br/>
                        ✔️ Over 12 Years of Experience<br/>✔️ Weatherproof & UV-Resistant Prints<br/> ✔️ Custom Sizes & Eye-Catching Designs<br/> ✔️ Always on-time delivery
                    </p>
                </div>
            </div>
        </div>
    )
}

export default HordingPrint