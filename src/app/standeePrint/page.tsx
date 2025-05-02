import Image from 'next/image'
import BgImage from "../../../public/Images/standeeprintBg.jpg"
import BigImage from "../../../public/Images/standyImg.jpg"
import SmallImage from "../../../public/Images/standyPrint.jpg"

const Standy = () => {
    return (
        <div className='mt-15'>
            <div className='relative'>
                <Image src={BgImage} alt='aboutus' className='w-full h-full object-cover ' />
                <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50'>
                </div>
                <h1 className='mb-1.5 w-full text-white absolute  z-10 top-1/3  text-center  text-6xl font-bold md:text-8xl'>Standee Print</h1>
            </div>
            <div className='container mx-auto md:px-40 grid grid-cols-1 md:grid-cols-2 p-4 md:py-6 gap-3.5'>
                <div className='relative'>
                    <Image src={BigImage} alt='image' className='rounded-xl animate__fadeInDown' />
                    <Image src={SmallImage} alt='image' className='hidden md:block rounded-xl absolute z-20 -bottom-6 right-4 shadow-2xl' />
                </div>
                <div className='flex flex-col  '>
                    <h1 className='text-4xl mt-2 md:text-6xl font-medium bg-gradient-to-r from-purple-600 via-pink-500 to-orange-700 text-transparent bg-clip-text'>Stand Tall, Stand <br />Out – Roll-Up Standee Printing</h1>
                    <p className=' mt-6 font-medium text-[20px] text-gray-700 text-justify '>Use our high-quality roll-up standees to draw attention at events,
                        exhibits, or in-store promotions. Our prints are ideal for branding on-the-go since they are made to last and have a strong visual impact. They include clear images, vivid colors, and an easy setup process.
                    </p>
                    <p className=' mt-6 font-medium text-[20px] text-gray-700 '>
                        ✔️ Lightweight & Portable<br />
                        ✔️ High-Resolution Printing<br />
                        ✔️ Glossy or Matte Finish Options<br />
                        ✔️ Ideal for Events, Retail & Marketing Displays<br />



                    </p>
                </div>
            </div>
        </div>
    )
}

export default Standy
