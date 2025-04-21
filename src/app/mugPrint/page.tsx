import Image from 'next/image'
import BgImage from "../../../public/Images/mugPrintingBg.jpg"
import BigImage from "../../../public/Images/mugPrintBigImage.jpg"
import SmallImage from "../../../public/Images/mugSmallPic.png"

const MugPrinting = () => {
    return (
        <div className='mt-15'>
            <div className='relative'>
                <Image src={BgImage} alt='aboutus' className='w-full h-full object-cover ' />
                <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50'>
                </div>
                <h1 className='mb-1.5 w-full text-white absolute  z-10 top-1/3  text-center  text-6xl font-bold md:text-8xl'>Mug Print</h1>
            </div>
            <div className='container mx-auto md:px-40 grid grid-cols-1 md:grid-cols-2 p-4 md:py-6 gap-3.5'>
                <div className='relative'>
                    <Image src={BigImage} alt='image' className='rounded-xl animate__fadeInDown' />
                    <Image src={SmallImage} alt='image' className='hidden md:block rounded-xl absolute z-20 -bottom-6 right-4 shadow-2xl' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h1 className='text-4xl mt-2 md:text-6xl font-medium bg-gradient-to-r from-purple-600 via-pink-500 to-orange-700 text-transparent bg-clip-text'>Mug Printing – Sip with Style, Gift with Heart
                    </h1>
                    <p className=' mt-6 font-medium text-[20px] text-gray-700 '>We Are Just Better – Quality for Over 12 Years of trusted printing experience, we specialize in custom &apos;Mug Printing&apos; that’s perfect for gifts, branding, and personal keepsakes.
                    </p>
                    <p className=' mt-6 font-medium text-[20px] text-gray-700 '>
                        ✅ Bright & Durable Prints – Superior, non-fading designs that remain vivid with each drink.<br />
                        ✅ Fit for Any Occasion: Perfect for corporate gifts, anniversaries, birthdays, and promotional events.<br />
                        ✅ Complete Customization: We make it uniquely yours by adding your logo, images, sayings, or imaginative artwork.<br />
                        ✅ Vast Variety of Styles: To fit your preferences, we provide classic mugs, magic mugs, color-inside mugs, and more.<br />
                        ✅ Fast turnaround and reasonable prices: You can rely on prompt service with reliable quality at reasonable prices.<br />
                    </p>
                </div>
            </div>
        </div>
    )
}

export default MugPrinting