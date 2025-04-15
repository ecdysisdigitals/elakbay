"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export default function Logo() {
  return (
    <Link href="/" className="logo-container group">
      <motion.div
        className="flex items-center w-36 sm:w-40 md:w-44" // medium size across breakpoints
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="relative w-full h-[50px] md:h-[60px]"> {/* medium height */}
          <Image
            src="/lakbay.png"
            alt="E-Lakbay Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
      </motion.div>
    </Link>
  )
}
