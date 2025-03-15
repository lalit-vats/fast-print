import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import Logo from "../../public/Images/logo.png";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/lib/utils";
import { serviceLink } from "@/lib/utils";
import { Menu } from "lucide-react"


interface ServiceProp {
  name: string;
  href: string;
}
interface NavProp {
  name: string;
  href: string;
}

const Header = () => {
  return (
    <div className="flex justify-between items-center px-4 py-1.5 shadow-md">
      <Image src={Logo} alt="Logo" height={100} width={200} />
      <div className="hidden md:flex sm:block">
      <div className=" p-2 font-medium flex">
        {navLinks.map((link: NavProp) => {
          return (
            <Link
              key={link.name}
              href={link.href}
              className="p-2 text-[#EF4136] hover:text-gray-500"
            >
              {link.name === "Service" ? (
                <div>
                  <NavigationMenu>
                    <NavigationMenuList>
                      <NavigationMenuItem>
                        <NavigationMenuTrigger className="font-medium hover:text-gray-500">
                          Sevices
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className=" ">
                          <NavigationMenuLink className="w-[150px] flex flex-col p-2 space-y-2  font-medium">
                            {serviceLink.map((link: ServiceProp) => {
                              return (
                                <Link
                                  key={link.name}
                                  href={link.href}
                                  className="p-0.5 text-[#EF4136] hover:text-gray-500"
                                >
                                  {link.name}
                                </Link>
                              );
                            })}
                          </NavigationMenuLink>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    </NavigationMenuList>
                  </NavigationMenu>
                </div>
              ) : (
                link.name
              )}
            </Link>
          );
        })}
      </div>
      </div>
      <div className="md:hidden sm:block">
      <Sheet>
        <SheetTrigger>
          <Menu size={24} />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            
            <div className=" p-2 font-medium flex flex-col">
        {navLinks.map((link: NavProp) => {
          return (
            <Link
              key={link.name}
              href={link.href}
              className="p-2 text-[#EF4136] hover:text-gray-500"
            >
              {link.name === "Service" ? (
                <div>
                  <NavigationMenu>
                    <NavigationMenuList>
                      <NavigationMenuItem>
                        <NavigationMenuTrigger className="font-medium hover:text-gray-500">
                          Sevices
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className=" ">
                          <NavigationMenuLink className="w-[150px] flex flex-col p-2 space-y-2  font-medium">
                            {serviceLink.map((link: ServiceProp) => {
                              return (
                                <Link
                                  key={link.name}
                                  href={link.href}
                                  className="p-0.5 text-[#EF4136] hover:text-gray-500"
                                >
                                  {link.name}
                                </Link>
                              );
                            })}
                          </NavigationMenuLink>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    </NavigationMenuList>
                  </NavigationMenu>
                </div>
              ) : (
                link.name
              )}
            </Link>
          );
        })}
      </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
      </div>
    </div>
  );
};

export default Header;
