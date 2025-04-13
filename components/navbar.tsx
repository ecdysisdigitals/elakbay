"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Logo from "./logo"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Pangunahing Pahina", href: "/" },
    { name: "Kasaysayan", href: "/kasaysayan" },
    { name: "Gawi at Paniniwala", href: "/gawi-at-paniniwala" },
    { name: "Kultura", href: "/kultura" },
    { name: "Esperitwalidad", href: "/esperitwalidad" },
    { name: "Media", href: "/media" },
  ]

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-medium-beige/95 backdrop-blur-md shadow-md py-2" : "bg-light-beige/90 backdrop-blur-sm py-3"
        }`}
      >
        <div className="vintage-container flex items-center justify-between">
          <Logo />

          <nav className="hidden md:flex items-center space-x-4">
            {navLinks.map((link) => (
              <motion.div key={link.href} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href={link.href}
                  className={`nav-link ${
                    pathname === link.href ? "active-nav-link" : ""
                  } text-brown-deer hover:text-brown-deer font-bold`}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </nav>

          <motion.button
            className="md:hidden text-2xl p-2 rounded-full bg-copper/20"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6 text-brown-deer" /> : <Menu className="h-6 w-6 text-brown-deer" />}
          </motion.button>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 bottom-0 z-40 w-full sm:w-80 bg-medium-beige shadow-xl"
          >
            <div className="flex flex-col h-full pt-20 pb-6 px-6">
              <div className="mb-6 flex justify-center">
                <Logo />
              </div>
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <motion.div key={link.href} whileHover={{ x: 5 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      href={link.href}
                      className={`text-lg py-3 px-4 block ${
                        pathname === link.href
                          ? "bg-copper/40 text-brown-deer font-bold rounded-md"
                          : "border-b border-brown-deer/30 text-brown-deer"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <div className="mt-auto pt-6 text-center">
                <p className="text-sm text-brown-deer font-medium">© {new Date().getFullYear()} E-Lakbay</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
