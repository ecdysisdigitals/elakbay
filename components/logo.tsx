"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export default function Logo() {
  return (
    <Link href="/" className="logo-container group">
      <motion.div
        className="flex items-center"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="relative w-28 sm:w-32 md:w-36 lg:w-40 h-auto">
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
