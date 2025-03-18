"use client";
import { useState, useEffect } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
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
      className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-3 transition-all duration-300 shadow-lg h-[60px] ${
        isScrolled ? "bg-white/60 backdrop-blur-md" : "bg-white"
      }`}
    >
      <Image src={Logo} alt="Logo" height={50} width={140} />

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center">
        <div className="p-2 font-medium flex">
          {navLinks.map((link: NavProp) => (
            <Link
              key={link.name}
              href={link.href}
              className="p-2 text-[#EF4136] hover:text-gray-500"
            >
              {link.name === "Service" ? (
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger className="font-medium hover:text-gray-500">
                        Services
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <NavigationMenuLink className="w-[150px] flex flex-col p-2 space-y-2 font-medium">
                          {serviceLink.map((link: ServiceProp) => (
                            <Link
                              key={link.name}
                              href={link.href}
                              className="p-0.5 text-[#EF4136] hover:text-gray-500"
                            >
                              {link.name}
                            </Link>
                          ))}
                        </NavigationMenuLink>
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
        Call us: +91 1234567890
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden ">
        <Sheet>
          <SheetTrigger>
            <Menu size={24} />
          </SheetTrigger>
          <SheetContent className="pt-16"> {/* Added padding to prevent overlap */}
            <SheetHeader>
              <div className="p-2 font-medium flex flex-col">
                {navLinks.map((link: NavProp) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="p-2 text-[#EF4136] hover:text-gray-500"
                  >
                    {link.name === "Service" ? (
                      <NavigationMenu>
                        <NavigationMenuList>
                          <NavigationMenuItem>
                            <NavigationMenuTrigger className="font-medium hover:text-gray-500">
                              Services
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                              <NavigationMenuLink className="w-[150px] flex flex-col p-2 space-y-2 font-medium">
                                {serviceLink.map((link: ServiceProp) => (
                                  <Link
                                    key={link.name}
                                    href={link.href}
                                    className="p-0.5 text-[#EF4136] hover:text-gray-500"
                                  >
                                    {link.name}
                                  </Link>
                                ))}
                              </NavigationMenuLink>
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
