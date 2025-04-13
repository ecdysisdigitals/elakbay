"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"

interface InteractiveCardProps {
  children: ReactNode
  className?: string
}

export default function InteractiveCard({ children, className = "" }: InteractiveCardProps) {
  return (
    <motion.div
      className={`vintage-card relative ${className}`}
      whileHover={{
        y: -10,
        boxShadow: "0 10px 25px -5px rgba(58, 31, 18, 0.1), 0 8px 10px -6px rgba(58, 31, 18, 0.1)",
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <div className="absolute -top-3 -left-3 w-10 h-10 border-t-2 border-l-2 border-brown-deer/70"></div>
      <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-2 border-r-2 border-brown-deer/70"></div>
      {children}
    </motion.div>
  )
}
