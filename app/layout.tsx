import type React from "react"
import type { Metadata } from "next/dist/lib/metadata/types/metadata-interface"
import { Playfair_Display, Lora } from "next/font/google"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

const lora = Lora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lora",
})

export const metadata: Metadata = {
  title: "E-Lakbay | Harian at Renahan ng Vinzons, Camarines Norte",
  description:
    "Isang virtual na paglalakbay sa mayamang kultura at kasaysayan ng Harian at Renahan sa Vinzons, Camarines Norte.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fil" className={`${playfair.variable} ${lora.variable}`}>
      <body className="bg-cream text-brown min-h-screen">{children}</body>
    </html>
  )
}


import './globals.css'