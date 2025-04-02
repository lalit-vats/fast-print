import Image from 'next/image'
import Logo from '../../../public/Images/logo.png'
import Link from 'next/link'
import { navLinks, serviceLink } from "@/lib/utils";

const Footer = () => {
  return (
    <div className='bg-gray-100 text-white py-5 px-10 mt-10'>

      <div className='grid  grid-cols-1 md:grid-cols-5 gap-3'>
        {/* Logo */}
        <div>
          <Image src={Logo} alt='logo' width={200} height={85} />
        </div>
        {/* Quick Links */}
        <div>
          <h1 className='text-gray-900 font-bold text-2xl my-3'>Quick Links</h1>
          <ul className='text-gray-900 font-semibold flex flex-col gap-2'>
            {navLinks.map((link) => (
              <li key={link.name} className='hover:text-gray-500 text-[18px]'>
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Services */}
        <div>
          <h1 className='text-gray-900 font-bold text-2xl my-3'>Services</h1>
          <ul className='text-gray-900 font-semibold flex flex-col gap-2'>
            {serviceLink.map((link) => (
              <li key={link.name} className='hover:text-gray-500 text-[18px]'>
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Contact */}
        <div>
          <h1 className='text-gray-900 font-bold text-2xl my-3'>Contact</h1>
          <ul className='text-gray-900 font-semibold flex flex-col gap-2'>
            <li>Phone: +123 456 7890</li>
            <li>Email: info@example.com</li>
          </ul>
        </div>
        {/* Social Media */}
        <div>
          <h1 className='text-gray-900 font-bold text-2xl my-3'>Social Media</h1>
          <ul className='text-gray-900 font-semibold flex flex-col gap-2'>
            <li>Facebook</li>
            <li>Twitter</li>  
            <li>Instagram</li>
            <li>LinkedIn</li>
          </ul>
        </div>
        
        
      </div>


    </div>
  )
}

export default Footer
