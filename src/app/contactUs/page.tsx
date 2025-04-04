"use client"

import MapComponent from '@/components/ui/map';
import Image from 'next/image';
import React from 'react'
import { useRef } from 'react'
import Swal from 'sweetalert2'
import aboutus from '../../../public/Images/aboutUsBg.jpg'


const ContactUs = () => {


    const formRef = useRef<HTMLFormElement>(null);



    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);

        formData.append("access_key", "b3b95495-b88c-4f0c-8b7b-6ece1ff60472");


        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            formRef.current?.reset();
            Swal.fire({
                title: "Thanks",
                text: "We will contact you soon",
                icon: "success",
                background: '#000',
                color: '#fff',
                didOpen: () => {
                    const popup = Swal.getPopup();
                    if (popup) {
                        popup.style.border = '1px solid #fff';
                    }
                }
            });
        }
    };


    return (
        <div className=' mt-15'>
            <div className='relative'>
                <Image src={aboutus} alt='aboutus' className='w-full h-full object-cover ' />
                <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50'>
                </div>
                <h1 className='w-full text-white absolute  z-10 top-1/3  text-center  text-6xl font-bold md:text-8xl'>Contact Us</h1>
            </div>
            <div className=" flex flex-wrap md:px-24 justify-center">
                <div className="w-full md:w-1/2 p-8">
                    <h3 className="text-center text-[24px] font-bold my-3 text-[#101828]">
                        Get in Touch
                    </h3>

                    <form action="https://api.web3forms.com/submit" onSubmit={onSubmit} ref={formRef}>
                        <input
                            type="hidden"
                            name="access_key"
                            value="b3b95495-b88c-4f0c-8b7b-6ece1ff60472"
                        />
                        <div className="relative mb-4">
                            <label className="flex  items-center mb-2 text-gray-600 text-sm font-medium">
                                Name{" "}
                                <svg
                                    width="7"
                                    height="7"
                                    className="ml-1"
                                    viewBox="0 0 7 7"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M3.11222 6.04545L3.20668 3.94744L1.43679 
                          5.08594L0.894886
                           4.14134L2.77415 3.18182L0.894886 2.2223L1.43679
                            1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 
                            2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838
                             4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z"
                                        fill="#EF4444"
                                    />
                                </svg>
                            </label>
                            <input
                                type="text"
                                // id="default-search"
                                name="name"
                                // value={values.name}
                                // onChange={handleChange}
                                className="block w-full h-11 px-5 py-2.5 leading-7 text-base font-normal 
                      shadow-xs text-gray-900 bg-transparent border border-gray-300 
                      rounded-full placeholder-gray-400 focus:outline-none "
                                placeholder="Name"
                            />
                        </div>
                        <div className="relative mb-4">
                            <label className="flex  items-center mb-2 text-gray-600 text-sm font-medium">
                                Email{" "}
                                <svg
                                    width="7"
                                    height="7"
                                    className="ml-1"
                                    viewBox="0 0 7 7"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M3.11222 6.04545L3.20668 3.94744L1.43679 
                          5.08594L0.894886 4.14134L2.77415 3.18182L0.894886
                           2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 
                           0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838
                            2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 
                            5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z"
                                        fill="#EF4444"
                                    />
                                </svg>
                            </label>
                            <input
                                type="text"
                                // id="default-search"
                                name="email"
                                // value={values.email}
                                // onChange={handleChange}
                                className="block w-full h-11 px-5 py-2.5 leading-7 
                      text-base font-normal shadow-xs text-gray-900 
                      bg-transparent border border-gray-300 rounded-full
                       placeholder-gray-400 focus:outline-none "
                                placeholder="Enter your email"
                            />
                        </div>
                        <div className="relative mb-4">
                            <label className="flex  items-center mb-2 text-gray-600 text-sm font-medium">
                                Mobile{" "}
                                <svg
                                    width="7"
                                    height="7"
                                    className="ml-1"
                                    viewBox="0 0 7 7"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M3.11222 6.04545L3.20668 3.94744L1.43679
                           5.08594L0.894886
                           4.14134L2.77415 3.18182L0.894886 
                          2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 
                          0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 
                          2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 
                          5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z"
                                        fill="#EF4444"
                                    />
                                </svg>
                            </label>
                            <input
                                type="text"
                                // id="default-search"
                                name="phone"
                                // value={values.phone}
                                // onChange={handleChange}
                                className="block w-full h-11 px-5 py-2.5 
                      leading-7 text-base font-normal shadow-xs
                       text-gray-900 bg-transparent border border-gray-300 rounded-full
                        placeholder-gray-400 focus:outline-none "
                                placeholder="Enter your mobile no."
                            />
                        </div>
                        <div className="relative mb-4">
                            <label className="flex  items-center mb-2 text-gray-600 text-sm font-medium">
                                Message{" "}
                                <svg
                                    width="7"
                                    height="7"
                                    className="ml-1"
                                    viewBox="0 0 7 7"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M3.11222 6.04545L3.20668 3.94744L1.43679 
                          5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 
                          2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659
                           2.41619L5.86648 1.2777L6.40838 2.2223L4.52912
                            3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 
                            3.94744L4.19105 6.04545H3.11222Z"
                                        fill="#EF4444"
                                    ></path>
                                </svg>
                            </label>
                            <div className="flex">
                                <div className="relative w-full">
                                    <textarea
                                        name="message"
                                        // value={values.message}
                                        // onChange={handleChange}
                                        className="block w-full h-40 px-4 py-2.5 text-base leading-7 
                          font-normal shadow-xs text-gray-900 bg-transparent border
                           border-gray-300 rounded-2xl placeholder-gray-400 
                           focus:outline-none resize-none"
                                        placeholder="Write a message..."
                                    ></textarea>
                                </div>
                            </div>
                        </div>
                        <button
                            type="submit"
                            // onClick={onSubmit}
                            className="w-full h-12 bg-[#EF4136]
                   hover:bg-orange-500 transition-all duration-
                   700 rounded-full shadow-xs text-white
                    text-base font-semibold leading-6"
                        >
                            Submit
                        </button>
                    </form>
                </div>
                <div className="w-full md:w-1/2 p-8 gap-2">
                    <div>
                        <MapComponent />
                    </div>
                    <div className="rounded-lg shadow-md p-4 mt-1">
                        <p className="mb-2 text-[#101828]">
                            <strong>Address</strong> : Shop No. 14-D, Old, Huda Complex, Huda
                            market, near sadar bazar, Prem Nagar, Roshan Pura, Gurugram,
                            Haryana 122001
                        </p>
                        <p className="mb-2 text-[#101828]">
                            <strong>Contact No</strong> :{" "}
                            <a href="tel:9266822218">+91 9266822218</a>
                        </p>
                        <p className="mb-2 text-[#101828]">
                            <strong>Email</strong> : fastprintdelhi@gmail.com
                        </p>
                        <p className="mb-2 text-[#101828]">
                            <strong>Website</strong> : fast-print.in
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs

