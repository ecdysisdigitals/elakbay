"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Crown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

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
    { name: "Kultura at Esperitwalidad", href: "/kultura-at-esperitwalidad" },
    { name: "Media", href: "/media" },
    { name: "Mananaliksik", href: "/mananaliksik" },
  ]

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-nutty-brown/90 backdrop-blur-md shadow-md py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="vintage-container flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Crown className={`h-6 w-6 ${isScrolled ? "text-copper" : "text-withered-leaves"}`} />
            <span
              className={`text-2xl font-bold font-playfair ${isScrolled ? "text-withered-leaves" : "text-withered-leaves"}`}
            >
              E-Lakbay
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link ${
                  pathname === link.href ? "active-nav-link" : ""
                } ${isScrolled ? "text-withered-leaves" : "text-withered-leaves"}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <button className="md:hidden text-2xl" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? "text-withered-leaves" : "text-withered-leaves"}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? "text-withered-leaves" : "text-withered-leaves"}`} />
            )}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 bottom-0 z-40 w-full sm:w-80 bg-brown-deer shadow-xl"
          >
            <div className="flex flex-col h-full pt-20 pb-6 px-6">
              <div className="flex items-center gap-2 mb-6">
                <Crown className="h-5 w-5 text-copper" />
                <span className="text-xl font-bold text-withered-leaves">E-Lakbay</span>
              </div>
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-lg py-2 border-b border-copper/30 ${
                      pathname === link.href ? "text-copper font-medium" : "text-withered-leaves"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
              <div className="mt-auto pt-6 text-center">
                <p className="text-sm text-withered-leaves/70">© {new Date().getFullYear()} E-Lakbay</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
