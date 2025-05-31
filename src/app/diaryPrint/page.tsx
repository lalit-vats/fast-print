import Image from 'next/image'
import BgImage from "../../../public/Images/pumplateBg.jpg"
import BigImage from "../../../public/Images/diarymg.jpg"
import SmallImage from "../../../public/Images/diaryImgTwo.jpg"
import { Metadata } from 'next'


export const metadata: Metadata = {
  title: "Diary Print",
  description: "Whether you're showcasing your products, services, or brand story, we offer high-quality diary prints that stand out.",
  keywords: [
    "Fast Print Diary Print",
    "Office Diary Print near me",
    "Office Stationery Print near me",
    "Diary Printing in Munirka",
    "Diary Print in Delhi",
    "Diary Printing in Gurgaon",
  ],
}

const DiaryPrint = () => {
    return (
        <div className='mt-15'>
            <div className='relative'>
                <Image src={BgImage} alt='We make Custom | office Diary printing in Delhi' className='w-full h-full object-cover ' />
                <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50'>
                </div>
                <h1 className='mb-1.5 w-full text-white absolute  z-10 top-1/3  text-center  text-6xl font-bold md:text-8xl'>Diary Print</h1>
            </div>
            <div className='container mx-auto md:px-40 grid grid-cols-1 md:grid-cols-2 p-4 md:py-6 gap-3.5'>
                <div className='relative'>
                    <Image src={BigImage} alt='diary printing in delhi' className='rounded-xl animate__fadeInDown' />
                    <Image src={SmallImage} alt='corporate diary printing in delhi' className='hidden md:block rounded-xl absolute z-20 -bottom-6 right-4 shadow-2xl' />
                </div>
                <div className='flex flex-col '>
                    <h1 className='text-4xl mt-2 md:text-6xl font-medium bg-gradient-to-r from-purple-600 via-pink-500 to-orange-700 text-transparent bg-clip-text '> Impressive Personalized Diary Printing
                    </h1>
                    <p className=' mt-6 font-medium text-[20px] text-gray-700 text-justify'>Keep your life in order with custom printed diaries! For corporate gifts, promotional gifts or personal items, our customised notebooks are both functional and professional in design. Brand your thoughts, or you&apos;re company&apos;s by adding your logo, quotes, dates, or even full-color branding that makes these diaries your own.

</p>
                    <p className=' mt-6 font-medium text-[20px] text-gray-700  text-justify'>
                        
                        ✔️ Available in hard and soft coveregan Options<br />✔️ Available in Daily, Weekly or Monthly Layouts<br /> ✔️ Premium Quality Paper & Paper Quality and Perfect Binding<br /> ✔️  Custom page and Company Logo inserts<br/>  ✔️ Great for Gifting, Parties, Promotions & Office Use
                    </p>
                </div>
            </div>
        </div>
    )
}

export default DiaryPrint