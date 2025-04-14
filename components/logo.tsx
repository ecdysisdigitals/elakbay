"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export default function Logo() {
  return (
    <Link href="/" className="logo-container group">
      <motion.div className="flex items-center" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Image
          src="/lakbay.png"
          alt="E-Lakbay Logo"
          width={1}
          height={1}
          className="h-auto w-auto object-contain"
          
        />
      </motion.div>
    </Link>
  )
}
