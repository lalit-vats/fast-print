import Image from 'next/image'
import BgImage from "../../../public/Images/broucrePrint.jpg"
import BigImage from "../../../public/Images/broucrePrintOne.jpg"
import SmallImage from "../../../public/Images/brourceUpperPic.jpg"

const BroucrePrint = () => {
    return (
        <div className='mt-15'>
            <div className='relative'>
                <Image src={BgImage} alt='aboutus' className='w-full h-full object-cover ' />
                <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50'>
                </div>
                <h1 className='mb-1.5 w-full text-white absolute  z-10 top-1/3  text-center  text-6xl font-bold md:text-8xl'>Broucre Print</h1>
            </div>
            <div className='container mx-auto md:px-40 grid grid-cols-1 md:grid-cols-2 p-4 md:py-6 gap-3.5'>
                <div className='relative'>
                    <Image src={BigImage} alt='image' className='rounded-xl animate__fadeInDown' />
                    <Image src={SmallImage} alt='image' className='hidden md:block rounded-xl absolute z-20 -bottom-6 right-4 shadow-2xl' />
                </div>
                <div className='flex flex-col '>
                    <h1 className='text-4xl mt-2 md:text-6xl font-medium bg-gradient-to-r from-purple-600 via-pink-500 to-orange-700 text-transparent bg-clip-text'>Print That Speaks – Premium Brochure Services</h1>
                    <p className=' mt-6 font-medium text-[20px] text-gray-700 text-justify '>We provide premium brochure prints that make an impression, whether you&apos;re presenting your goods, services, or brand narrative. We assist you in communicating clearly and stylishly with everything from elegant corporate profiles to imaginative promotional handouts.
                    </p>
                    <p className=' mt-6 font-medium text-[20px] text-gray-700 '>
                    ✔️ Vibrant, High-Resolution Color Printing<br/>
                        ✔️ Multiple Fold Styles: Bi-Fold, Tri-Fold, Z-Fold & More<br/>
                        ✔️ Glossy, Matte, or Textured Finish Options<br/>
                        ✔️ Custom Sizes and Fast Turnaround<br/>


                    </p>
                </div>
            </div>
        </div>
    )
}

export default BroucrePrint