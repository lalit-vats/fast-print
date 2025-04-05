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
        <div className="p-2 font-medium flex">
          {navLinks.map((link: NavProp) => (
            link.name === "Service" ? (
              <NavigationMenu key={link.name}>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="font-medium hover:text-gray-500">
                      Services
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-[150px] flex flex-col p-2 space-y-2 font-medium">
                        {serviceLink.map((link: ServiceProp, i) => (
                          <Link
                            key={i}
                            href={link.href}
                            className="p-0.5 text-[#EF4136] hover:text-gray-500"
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
                className="p-2 text-[#EF4136] hover:text-gray-500"
              >
                {link.name}
              </Link>
            )
          ))}
        </div>
        Call us: +91 1234567890
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
                  <Link
                    key={i}
                    href={link.href}
                    className="p-2 text-[#EF4136] hover:text-gray-500"
                  >
                    {link.name === "Service" ? (
                      <NavigationMenu>
                        <NavigationMenuList>
                          <NavigationMenuItem>
                            <NavigationMenuTrigger className="font-medium text-[#EF4136] hover:text-gray-500 ">
                              Services
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                              <div className="w-[150px] flex flex-col p-2 space-y-2 font-medium">
                                {serviceLink.map((link: ServiceProp, i) => (
                                  <Link
                                    key={i}
                                    href={link.href}
                                    className="p-0.5 text-[#EF4136] hover:text-gray-500"
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
                      link.name
                    )}
                  </Link>
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
