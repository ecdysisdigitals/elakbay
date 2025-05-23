"use client"

import { motion } from "framer-motion"
import { BookOpen, Users, Feather, Leaf, Utensils } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import AnimatedBackground from "@/components/animated-background"
import DecorativePattern from "@/components/decorative-pattern"
import InteractiveCard from "@/components/interactive-card"

export default function GawiAtPaniniwala() {
  return (
    <main className="min-h-screen pt-20 relative overflow-hidden">
      <AnimatedBackground />
      <Navbar />

      <section className="py-16 bg-light-beige relative">
        <DecorativePattern className="opacity-10" />
        <div className="vintage-container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-brown-deer mb-4">Gawi at Paniniwala</h1>
            <p className="text-lg max-w-3xl mx-auto">
              Ang mga tradisyonal na gawi at paniniwala ng mga mamamayan sa Harian at Reynahan
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <InteractiveCard>
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
                      Ilan sa mga gawi ng pagdiriwang ang pagtatampok at pagpapahalaga sa kasaysayan at tradisyon sa
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
                      pagkakataon para sa espiritwal na pagninilay at pasasalamat sa Diyos. Sinisimulan ang pagdiriwang
                      sa pamamagitan ng isang banal na misa na dinadaluhan din ng mga kalahok.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium mb-2 flex items-center">
                      <BookOpen className="w-4 h-4 mr-2 text-copper" />
                      Bayanihan
                    </h3>
                    <p>
                      Malinaw na ipinapakita rin sa pagdiriwang ang di-matatawarang diwa ng bayanihan o pagtutulungan ng
                      bawat isa sa komunidad sa mga paghahanda at pagsasagawa ng mga aktibidad. Isang katangiang
                      Pilipino na nananatiling buhay at makabuluhan sa mga lokal na komunidad ng Camarines Norte.
                    </p>
                  </div>
                </div>
              </InteractiveCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <InteractiveCard>
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
                      Isang mahalagang paniniwala ang pagtanggap at pagsunod na matutunton sa kasabihang "Ang utos ng
                      hari, hindi puwedeng mabali." Ang mga hari at Reyna, bilang mga simbolo ng awtoridad, tinitingala
                      at sinusunod, at may malalim na epekto sa komunidad ang kanilang kabuoang mga desisyon at utos.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium mb-2 flex items-center">
                      <Feather className="w-4 h-4 mr-2 text-copper" />
                      Pagpapahalaga sa Relihiyon
                    </h3>
                    <p>
                      Sa diwang ito, naisasabuhay hindi lamang ng mga hinihirang na mga hari at reyna, kung hindi maging
                      ng mga taong dumadalo ang aral ng pagpapakumbaba at pagkilala na sa kabila ng kayamanan o
                      kasikatan, iisa lamang ang Diyos na dapat parangalan.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium mb-2 flex items-center">
                      <BookOpen className="w-4 h-4 mr-2 text-copper" />
                      Pasasalamat
                    </h3>
                    <p>
                      Ang selebrasyon nagsisilbi ring pagkakataon para sa pasasalamat. Sa mga panalangin, pag-aalay, at
                      pagbibigayan, ipinapakita ng komunidad ang kanilang taos-pusong pasasalamat sa mga biyayang
                      natanggap.
                    </p>
                  </div>
                </div>
              </InteractiveCard>
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
              Reynahan
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <InteractiveCard className="text-center">
                <div className="mb-4">
                  <div className="w-20 h-20 mx-auto rounded-full bg-copper flex items-center justify-center floating-animation">
                    <Feather className="w-8 h-8 text-light-beige" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">Pagdiriwang ng Pista</h3>
                <p>
                  Isang mahalagang bahagi rin ng pagdiriwang ang pagkakawanggawa, na makikita sa mga aktibidad tulad ng
                  pamimigay ng food packs at mga raffle prizes para sa mga mahihirap. Isang makataong gawaing
                  nagpapakita ng diwa ng malasakit, pakikiisa, at tunay na pagmamahal sa kapwa.
                </p>
              </InteractiveCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <InteractiveCard className="text-center">
                <div className="mb-4">
                  <div className="w-20 h-20 mx-auto rounded-full bg-copper flex items-center justify-center floating-animation">
                    <Leaf className="w-8 h-8 text-light-beige" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">Pagsasama-sama</h3>
                <p>
                  Sa mga panahong ito, hindi lamang kasiyahan ang nangingibabaw, kung hindi ang tunay na diwa ng
                  pagtutulungan, pagkakapit-bisig, at sama-samang pagkilos para sa ikatatagumpay ng selebrasyon. Mula sa
                  mga paunang pulong hanggang sa aktuwal na araw ng pagdiriwang, makikita ang masigasig na partisipasyon
                  ng bawat mamamayan.
                </p>
              </InteractiveCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <InteractiveCard className="text-center">
                <div className="mb-4">
                  <div className="w-20 h-20 mx-auto rounded-full bg-copper flex items-center justify-center floating-animation">
                    <Utensils className="w-8 h-8 text-light-beige" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">Pagbibigayan</h3>
                <p>
                  Sa gitna ng makukulay na parada at masasayang palatuntunan, hindi nawawala ang espasyong inilaan para
                  sa mga gawaing ito na may layuning makapaghatid ng tulong sa mga nangangailangan. Hindi lamang mga
                  kultural na selebrasyon ang mga ito, kung hindi may malalim ding ugnayan sa pananampalataya at
                  ispirituwal na pagninilay.
                </p>
              </InteractiveCard>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
