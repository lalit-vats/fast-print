"use client";
import { useState, useEffect } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Logo from "../../public/Images/logo.png";
import Image from "next/image";
import Link from "next/link";
import { navLinks, serviceLink } from "@/lib/utils";
import { Menu } from "lucide-react";
import { usePathname } from 'next/navigation';

interface ServiceProp {
  name: string;
  href: string;
}
interface NavProp {
  name: string;
  href: string;
}

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isServiceSelected, setIsServiceSelected] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Check if any service link is active
    const isAnyServiceActive = serviceLink.some(link => link.href === pathname);
    setIsServiceSelected(isAnyServiceActive);
  }, [pathname]);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-3 transition-all duration-300 shadow-lg h-[60px] ${isScrolled ? "bg-white/60 backdrop-blur-md" : "bg-white"
        }`}
    >
      <Link href={"/"}>
        <Image src={Logo} alt="Logo" height={50} width={140} />
      </Link>
      {/* Desktop Menu */}
      <div className="hidden md:flex items-center">
        <div className="p-2 font-medium flex gap-6">
          {navLinks.map((link: NavProp) => (
            link.name === "Service" ? (
              <NavigationMenu key={link.name} onValueChange={(value) => setIsServicesOpen(!!value)}>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger 
                      className={`font-medium hover:text-gray-500 ${isServicesOpen || isServiceSelected ? 'text-[#EF4136]' : 'text-[#393939]'}`}
                    >
                      Services
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-[150px] flex flex-col p-2 space-y-2 font-medium">
                        {serviceLink.map((link: ServiceProp, i) => (
                          <Link
                            key={i}
                            href={link.href}
                            className={`p-0.5 hover:text-gray-500 ${pathname === link.href ? 'text-[#EF4136]' : 'text-[#393939]'}`}
                          >
                            {link.name}
                          </Link>
                        ))}
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            ) : (
              <Link
                key={link.name}
                href={link.href}
                className={`p-2 hover:text-gray-500 ${pathname === link.href ? 'text-[#EF4136]' : 'text-[#393939]'}`}
              >
                {link.name}
              </Link>
            )
          ))}
        </div>
        <div className=" relative p-2">
          <a className="cursor-pointer" href="tel:+91 9266822218">

            <p className="font-bold text-[#EF4136]">Call us: <span className="text-[#EF4136]">+91 9266822218</span> </p>
          </a>

          <span className="absolute flex size-3 top-0 left-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#EF4136] opacity-75"></span>
            <span className="relative inline-flex size-3 rounded-full bg-[#EF4136]"></span>
          </span>
        </div>

      </div>

      {/* Mobile Menu */}
      <div className="md:hidden ">
        <Sheet>
          <SheetTrigger>
            <Menu size={24} />
          </SheetTrigger>
          <SheetContent className=""> {/* Added padding to prevent overlap */}
            <SheetHeader>
              <SheetTitle>
                <Link href={"/"}>
                  <Image src={Logo} alt="Logo" height={50} width={140} />
                </Link>
              </SheetTitle>
              <div className="p-2 font-medium flex flex-col">
                {navLinks.map((link: NavProp, i) => (
                  link.name === "Service" ? (
                    <div key={i} className="p-2">
                      <NavigationMenu>
                        <NavigationMenuList>
                          <NavigationMenuItem>
                            <NavigationMenuTrigger className="font-medium text-[#393939] hover:text-gray-500">
                              Services
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                              <div className="w-[150px] flex flex-col p-2 space-y-2 font-medium">
                                {serviceLink.map((service: ServiceProp, j) => (
                                  <Link
                                    key={j}
                                    href={service.href}
                                    className={`p-0.5 ${pathname === service.href ? 'text-[#EF4136]' : 'text-[#393939]'} hover:text-gray-500`}
                                  >
                                    {service.name}
                                  </Link>
                                ))}
                              </div>
                            </NavigationMenuContent>
                          </NavigationMenuItem>
                        </NavigationMenuList>
                      </NavigationMenu>
                    </div>
                  ) : (
                    <Link
                      key={i}
                      href={link.href}
                      className={`p-2 ${pathname === link.href ? 'text-[#EF4136]' : 'text-[#393939]'} hover:text-gray-500`}
                    >
                      {link.name}
                    </Link>
                  )
                ))}
              </div>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Header;
