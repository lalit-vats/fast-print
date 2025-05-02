import React from 'react'
import Image from 'next/image'
import AnimatedContent from './animatedContent'


const WhatWeDo = () => {
  return (
    <>

      <div className='container mx-auto md:px-40 my-12'>
        <h2 className='text-4xl font-medium text-center mb-10 text-[#EF4136]'>What We Do</h2>
        <AnimatedContent
          distance={150}
          direction="horizontal"
          reverse={false}
          config={{ tension: 80, friction: 20 }}
          delay={500}
          initialOpacity={0.2}
          animateOpacity
          scale={1.1}
          threshold={0.2}
        >
          <div className='grid grid-cols-1 md:grid-cols-2 p-4 md:py-6 gap-3.5'>
            <div className='relative'>
              <Image src="/Images/whatWeDo.jpg" alt='image' className='rounded-xl' width={500} height={300} />
              {/* <Image src="/Images/vinaylUpperPic.png" alt='image' className='hidden md:block rounded-xl absolute z-20 -bottom-6 right-4 shadow-2xl' width={200} height={150} /> */}
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h1 className='text-4xl mt-2 md:text-6xl font-medium bg-gradient-to-r from-purple-600 via-pink-500 to-orange-700 text-transparent bg-clip-text'>High-Quality Custom Printing for Every Purpose</h1>
         
              <p className=' mt-6 font-medium text-[20px] text-gray-700 text-justify '>
                Whether you need mind-blowing banners, amazing signs, memorable custom t-shirts and apparel or eye-catching promotional products, RESTEK has you covered. We also focus on office stationery printing – you&apos;ll find everything from letterheads and business cards (and everything in between) to printed envelopes and notepads – and you can always be confident that your business identity looks completely professional in every respect. Be it for promotions and events or altogether branding, we have the right means and experience to produce impressive results.
              </p>
            </div>
          </div>
        </AnimatedContent>
      </div>


    </>

  )
}

export default WhatWeDo
