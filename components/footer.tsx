import Link from "next/link"
import { Users } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-brown-deer text-withered-leaves py-12">
      <div className="vintage-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">E-Lakbay</h3>
            <p className="text-withered-leaves/80 mb-4">
              Isang virtual na paglalakbay sa mayamang kultura at kasaysayan ng Harian at Renahan sa Vinzons, Camarines
              Norte.
            </p>
            <div className="mt-6">
              <h4 className="text-lg font-bold mb-2 flex items-center">
                <Users className="w-4 h-4 mr-2 text-copper" />
                Mananaliksik
              </h4>
              <ul className="space-y-1 text-withered-leaves/80">
                <li>Juan Dela Cruz - Lead Researcher</li>
                <li>Maria Santos - Cultural Anthropologist</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Mga Link</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-withered-leaves/80 hover:text-withered-leaves transition-colors">
                  Pangunahing Pahina
                </Link>
              </li>
              <li>
                <Link
                  href="/kasaysayan"
                  className="text-withered-leaves/80 hover:text-withered-leaves transition-colors"
                >
                  Kasaysayan
                </Link>
              </li>
              <li>
                <Link
                  href="/gawi-at-paniniwala"
                  className="text-withered-leaves/80 hover:text-withered-leaves transition-colors"
                >
                  Gawi at Paniniwala
                </Link>
              </li>
              <li>
                <Link
                  href="/kultura-at-esperitwalidad"
                  className="text-withered-leaves/80 hover:text-withered-leaves transition-colors"
                >
                  Kultura at Esperitwalidad
                </Link>
              </li>
              <li>
                <Link href="/media" className="text-withered-leaves/80 hover:text-withered-leaves transition-colors">
                  Media
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-withered-leaves/20 mt-8 pt-8 text-center">
          <p className="text-withered-leaves/60">
            © {new Date().getFullYear()} E-Lakbay: Harian at Renahan ng Vinzons, Camarines Norte. Lahat ng karapatan ay
            nakalaan.
          </p>
        </div>
      </div>
    </footer>
  )
}
