import Link from "next/link"
import { Users } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-medium-beige text-brown-deer py-12">
      <div className="vintage-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="relative w-36 sm:w-40 md:w-44 h-[50px] md:h-[60px]">
                <Image
                  src="/lakbay.png"
                  alt="E-Lakbay Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
            <p className="text-brown-deer font-medium mb-4">
              Isang birtuwal na paglalakbay sa mayamang kultura at kasaysayan ng Harian at Reynahan sa Vinzons, Camarines
              Norte.
            </p>
            {/* Removed Mananaliksik section */}
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Mga Link</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-brown-deer hover:text-copper transition-colors font-medium">
                  Pangunahing Pahina
                </Link>
              </li>
              <li>
                <Link href="/kasaysayan" className="text-brown-deer hover:text-copper transition-colors font-medium">
                  Kasaysayan
                </Link>
              </li>
              <li>
                <Link
                  href="/gawi-at-paniniwala"
                  className="text-brown-deer hover:text-copper transition-colors font-medium"
                >
                  Gawi at Paniniwala
                </Link>
              </li>
              <li>
                <Link href="/kultura" className="text-brown-deer hover:text-copper transition-colors font-medium">
                  Kultura
                </Link>
              </li>
              <li>
                <Link
                  href="/esperitwalidad"
                  className="text-brown-deer hover:text-copper transition-colors font-medium"
                >
                  Ispirituwalidad
                </Link>
              </li>
              <li>
                <Link href="/media" className="text-brown-deer hover:text-copper transition-colors font-medium">
                  Media
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brown-deer/20 mt-8 pt-8 text-center">
          <p className="text-brown-deer font-medium">
            © {new Date().getFullYear()} E-Lakbay: Harian at Reynahan ng Vinzons, Camarines Norte. Lahat ng karapatan ay
            nakalaan.
          </p>
        </div>
      </div>
    </footer>
  )
}
