import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const serviceLink =[
  {name: "Flex Print", href: "/"},
  {name: "T-Shirt Print", href: "/"},
  {name: "Mug Print", href: "/"},
  {name: "Vinayl Print", href: "aboutUs"},
  ]

export const navLinks =[
  {name: "Home", href: "/"},
  {name: "About Us", href: "/"},
  {name: "Service", href: "/"},
  {name: "Contact Us", href: "/"},
]