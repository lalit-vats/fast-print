import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact us for any inquiries or to get a quote for our print services.",
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 