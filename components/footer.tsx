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
              <Image
                src="/e-lakbay-logo.png"
                alt="E-Lakbay Logo"
                width={150}
                height={50}
                className="h-auto w-auto object-contain"
              />
            </div>
            <p className="text-brown-deer font-medium mb-4">
              Isang virtual na paglalakbay sa mayamang kultura at kasaysayan ng Harian at Reynahan sa Vinzons, Camarines
              Norte.
            </p>
            <div className="mt-6">
              <h4 className="text-lg font-bold mb-2 flex items-center">
                <Users className="w-4 h-4 mr-2 text-copper" />
                Mananaliksik
              </h4>
              <ul className="space-y-1 text-brown-deer font-medium">
                <li>Juan Dela Cruz - Lead Researcher</li>
                <li>Maria Santos - Cultural Anthropologist</li>
              </ul>
            </div>
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
                  Esperitwalidad
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
