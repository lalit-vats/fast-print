"use client"

import Image from 'next/image'
import Logo from '../../../public/Images/logo.png'
import Link from 'next/link'
import { navLinks, serviceLink } from "@/lib/utils";
import { FacebookIcon, Instagram } from 'lucide-react';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const Footer = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    setActiveMenu(pathname);
  }, [pathname]);

  return (
    <div className='bg-gray-100 text-white py-5 px-10 mt-10'>

      <div className='grid  grid-cols-1 md:grid-cols-5 gap-3'>
        {/* Logo */}

        <Link href={"/"}>
          <Image src={Logo} alt='logo' width={200} height={85} />
        </Link>

        {/* Quick Links */}
        <div>
          <h1 className='text-[#EF4136] font-bold text-2xl my-3'>Quick Links</h1>
          <ul className='text-gray-900 font-semibold flex flex-col gap-2'>
            {navLinks.map((link) => (
              <li key={link.name} className='hover:text-gray-500 text-[18px]'>
                <Link 
                  href={link.href}
                  className={`${activeMenu === link.href ? 'text-[#EF4136]' : 'text-gray-900'}`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Services */}
        <div>
          <h1 className='text-[#EF4136] font-bold text-2xl my-3'>Services</h1>
          <ul className='text-gray-900 font-semibold flex flex-col gap-2'>
            {serviceLink.map((link) => (
              <li key={link.name} className='hover:text-gray-500 text-[18px]'>
                <Link 
                  href={link.href}
                  className={`${activeMenu === link.href ? 'text-[#EF4136]' : 'text-gray-900'}`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Contact */}
        <div>
          <h1 className='text-[#EF4136] font-bold text-2xl my-3'>Contact</h1>
          <ul className='text-gray-900 font-semibold flex flex-col gap-2'>
            <li >Phone: <a href="tel:9266822218">+91 9266822218</a>
            </li>
            <li>Email: fastprintdelhi@gmail.com</li>
          </ul>
        </div>
        {/* Social Media */}
        <div>
          <h1 className='text-[#EF4136] font-bold text-2xl my-3'>Social Media</h1>
          <div className=' font-semibold flex  gap-2'>
            
          <FacebookIcon size={18} className='text-[#EF4136]'/>
          <Instagram size={18} className='text-[#EF4136]' />
          </div>
        </div>


      </div>


    </div>
  )
}

export default Footer
