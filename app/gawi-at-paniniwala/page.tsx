"use client"

import { motion } from "framer-motion"
import { BookOpen, Users, Feather, Leaf, Utensils } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import AnimatedBackground from "@/components/animated-background"
import DecorativePattern from "@/components/decorative-pattern"

export default function GawiAtPaniniwala() {
  return (
    <main className="min-h-screen pt-20 relative overflow-hidden">
      <AnimatedBackground />
      <Navbar />

      <section className="py-16 bg-nutty-brown relative">
        <DecorativePattern className="opacity-10" />
        <div className="vintage-container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-withered-leaves mb-4">Gawi at Paniniwala</h1>
            <p className="text-lg max-w-3xl mx-auto">
              Ang mga tradisyonal na gawi at paniniwala ng mga mamamayan sa Harian at Renahan
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="vintage-card relative"
            >
              <div className="absolute -top-3 -left-3 w-10 h-10 border-t-2 border-l-2 border-copper/70"></div>
              <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-2 border-r-2 border-copper/70"></div>

              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <Users className="w-5 h-5 mr-2 text-copper" />
                Mga Tradisyonal na Gawi
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-medium mb-2 flex items-center">
                    <Leaf className="w-4 h-4 mr-2 text-copper" />
                    Pagdiriwang at Tradisyon
                  </h3>
                  <p>
                    Ilan sa mga gawi ng pagdiriwang ay ang pagtatampok at pagpapahalaga sa kasaysayan at tradisyon sa
                    pamamagitan ng mga aktibidad tulad ng misa, motorcade, at grand march, na hindi lamang nagpapakita
                    ng pamana ng kultura kung hindi ng patuloy na pagsasabuhay ng mga kaugalian ng nakaraan.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2 flex items-center">
                    <Users className="w-4 h-4 mr-2 text-copper" />
                    Relihiyosong Gawi
                  </h3>
                  <p>
                    Hindi lamang isang relihiyosong gawi ang misa bilang pambungad ng mga aktibidad kung hindi isang
                    pagkakataon para sa espiritwal na pagninilay at pasasalamat sa Diyos. Sinisimulan ang pagdiriwang sa
                    pamamagitan ng isang banal na misa na dinadaluhan din ng mga kalahok.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2 flex items-center">
                    <BookOpen className="w-4 h-4 mr-2 text-copper" />
                    Bayanihan
                  </h3>
                  <p>
                    Malinaw rin na ipinapakita ang bayanihan o pagtutulungan ng bawat isa sa komunidad sa mga paghahanda
                    at pagsasagawa ng mga aktibidad. Sa pangkalahatan, nagpapakita ng isang malalim na pagpapahalaga sa
                    mga tradisyon, ang mga gawi at paniniwala na nakapaloob sa pagdiriwang ng Harian at Reynahan.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="vintage-card relative"
            >
              <div className="absolute -top-3 -left-3 w-10 h-10 border-t-2 border-l-2 border-copper/70"></div>
              <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-2 border-r-2 border-copper/70"></div>

              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <Feather className="w-5 h-5 mr-2 text-copper" />
                Mga Paniniwala
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-medium mb-2 flex items-center">
                    <BookOpen className="w-4 h-4 mr-2 text-copper" />
                    Pagtanggap at Pagsunod
                  </h3>
                  <p>
                    Isa sa pinakamahalagang paniniwala ang pagtanggap at pagsunod na matutunton sa kasabihang "Ang utos
                    ng hari, hindi puwedeng mabali." Ang mga hari at reyna, bilang mga simbolo ng awtoridad, tinitingala
                    at sinusunod, at my malalim na epekto sa komunidad ang kabuoang mga desisyon at utos.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2 flex items-center">
                    <Feather className="w-4 h-4 mr-2 text-copper" />
                    Pagpapahalaga sa Relihiyon
                  </h3>
                  <p>
                    Sa diwang ito, naisasabuhay hindi lamang ng mga hinihirang na mga hari at reyna, kung hindi maging
                    ng mga taong dumadalo ang aral ng pagpapakumbaba at pagkilala na sa kabila ng kayamanan o kasikatan,
                    iisa lamang ang Diyos na dapat parangalan.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2 flex items-center">
                    <BookOpen className="w-4 h-4 mr-2 text-copper" />
                    Pasasalamat
                  </h3>
                  <p>
                    Ang selebrasyon ay nagsisilbi ring pagkakataon para sa pasasalamat. Sa mga panalangin, pag-aalay, at
                    pagbibigayan, ipinapakita ng komunidad ang kanilang taos-pusong pasasalamat sa mga biyayang
                    natanggap.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="vintage-divider"></div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 flex items-center justify-center">
              <Users className="w-6 h-6 mr-3 text-copper" />
              Mga Tradisyonal na Kasanayan
            </h2>
            <p className="text-lg max-w-3xl mx-auto">
              Ang mga tradisyonal na kasanayan na nagpapatunay sa kahusayan at talino ng mga mamamayan sa Harian at
              Renahan
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="vintage-card text-center relative"
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="absolute -top-3 -left-3 w-10 h-10 border-t-2 border-l-2 border-copper/70"></div>
              <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-2 border-r-2 border-copper/70"></div>

              <div className="mb-4">
                <div className="w-20 h-20 mx-auto rounded-full bg-copper flex items-center justify-center floating-animation">
                  <Feather className="w-8 h-8 text-withered-leaves" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Pagdiriwang ng Pista</h3>
              <p>
                Ang pagdiriwang ng pista ay isang mahalagang bahagi ng kultura ng Harian at Reynahan. Ito ay nagpapakita
                ng mayamang tradisyon at kasaysayan ng lugar, at nagsisilbing pagkakataon para sa pagkakaisa ng
                komunidad.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="vintage-card text-center relative"
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="absolute -top-3 -left-3 w-10 h-10 border-t-2 border-l-2 border-copper/70"></div>
              <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-2 border-r-2 border-copper/70"></div>

              <div className="mb-4">
                <div className="w-20 h-20 mx-auto rounded-full bg-copper flex items-center justify-center floating-animation">
                  <Leaf className="w-8 h-8 text-withered-leaves" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Pagsasama-sama</h3>
              <p>
                Ang Harian at Reynahan ay nagsisilbing espasyo para sa pagkakabuklod at muling pagkikita ng mga
                magkakahiwalay na pamilya. Ang bawat bahagi ng pagdiriwang ay naging pagkakataon para sa pagkakaroon ng
                kasiyahan at pagsasama-sama.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="vintage-card text-center relative"
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="absolute -top-3 -left-3 w-10 h-10 border-t-2 border-l-2 border-copper/70"></div>
              <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-2 border-r-2 border-copper/70"></div>

              <div className="mb-4">
                <div className="w-20 h-20 mx-auto rounded-full bg-copper flex items-center justify-center floating-animation">
                  <Utensils className="w-8 h-8 text-withered-leaves" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Pagbibigayan</h3>
              <p>
                Ipinapaalala ng Harian at Reynahan ang diwa ng pagbibigayan, pagtutulungan, at kababaang-loob na mga
                pagpapahalagang hinango sa halimbawa ng Tatlong Hari nang ialay nila ang kanilang handog sa kapanganakan
                ni Hesus.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
