"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { MapPin, Calendar, BookOpen, Clock, Users } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import AnimatedBackground from "@/components/animated-background"
import DecorativePattern from "@/components/decorative-pattern"

export default function Kasaysayan() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-withered-leaves mb-4">Kasaysayan</h1>
            <p className="text-lg max-w-3xl mx-auto">
              Ang mayamang kasaysayan ng Harian at Renahan sa Vinzons, Camarines Norte
            </p>
          </motion.div>

          <div className="vintage-card mb-12 relative">
            <div className="absolute -top-3 -left-3 w-10 h-10 border-t-2 border-l-2 border-copper/70"></div>
            <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-2 border-r-2 border-copper/70"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-copper" />
                  Ang Pinagmulan ng Harian
                </h2>
                <p className="mb-4">
                  Ang Harian ay nagsimula noong 1951 sa isang hindi inaasahan at masayang pagkakataon nang ang tatlong
                  magkaibigang sina Francisco Balce, Victorio Cereno, at ang kanilang kaibigang Instik ay nagpasya na
                  gawing natatangi at makulay ang kanilang selebrasyon ng pista ng Tatlong Hari.
                </p>
                <p className="mb-4">
                  Habang sila'y nag-iinuman at nagdiriwang, isang puting manok ang dumaan sa kanilang harapan, na siyang
                  nagbunsod sa isang hindi inaasahang pangyayari. Napagpasyahan nilang hulihin ito at gawing pulutan,
                  isang hakbang na nagbigay daan sa pagsilang ng kanilang samahan.
                </p>
                <div className="mt-4 flex items-center text-sm text-withered-leaves/80">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>Itinatag: 1951</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="image-frame"
              >
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Larawan ng Harian"
                  width={600}
                  height={400}
                  className="sepia-image"
                />
              </motion.div>
            </div>
          </div>

          <div className="vintage-divider"></div>

          <div className="vintage-card relative">
            <div className="absolute -top-3 -left-3 w-10 h-10 border-t-2 border-l-2 border-copper/70"></div>
            <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-2 border-r-2 border-copper/70"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="image-frame order-1 md:order-2"
              >
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Larawan ng Renahan"
                  width={600}
                  height={400}
                  className="sepia-image"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="order-2 md:order-1"
              >
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <BookOpen className="w-5 h-5 mr-2 text-copper" />
                  Ang Kasaysayan ng Reynahan
                </h2>
                <p className="mb-4">
                  Tinawag nilang "Huli White" ang kanilang samahan bilang isang pag-alala sa puting manok na kanilang
                  nahuli, na naging simbolo ng kanilang pagkakaibigan. Sa paglipas ng panahon, ang pangalan ng samahan
                  ay naging kilala at tinanggap hanggang sa ito ay kumalat sa ilang bahagi ng Vinzons at nagkaroon na ng
                  mga iba't ibang katawagan.
                </p>
                <p className="mb-4">
                  Samantalang nagkaroon naman ng hiwalay na selebrasyon para sa mga kababaihan, ang Reynahan. Idinaraos
                  ito sa halos parehong paraan. Ang malaking kaibahan lamang ay tanging kababaihan ang kinatawan ng
                  tatlong hari na binigyan ng mga bagong pangalan.
                </p>
                <div className="mt-4 flex items-center text-sm text-withered-leaves/80">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>Naging bahagi na ng mayamang kultura ng Vinzons</span>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="mt-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-8"
            >
              <h2 className="text-3xl font-bold flex items-center justify-center">
                <Calendar className="w-6 h-6 mr-3 text-copper" />
                Mahahalagang Pangyayari
              </h2>
            </motion.div>

            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="vintage-card relative"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="absolute -top-3 -left-3 w-10 h-10 border-t-2 border-l-2 border-copper/70"></div>
                <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-2 border-r-2 border-copper/70"></div>

                <h3 className="text-xl font-bold mb-2 flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-copper" />
                  1951: Pagsisimula ng Harian
                </h3>
                <p>
                  Ang tatlong magkakaibigan na sina Francisco Balce, Victorio Cereno, at ang kanilang kaibigang Instik
                  ay nagpasya na gawing natatangi at makulay ang kanilang selebrasyon ng pista ng Tatlong Hari, na
                  nagsilbing simula ng tradisyon ng Harian.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="vintage-card relative"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="absolute -top-3 -left-3 w-10 h-10 border-t-2 border-l-2 border-copper/70"></div>
                <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-2 border-r-2 border-copper/70"></div>

                <h3 className="text-xl font-bold mb-2 flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-copper" />
                  Pagsilang ng "Huli White"
                </h3>
                <p>
                  Tinawag nilang "Huli White" ang kanilang samahan bilang isang pag-alala sa puting manok na kanilang
                  nahuli, na naging simbolo ng kanilang pagkakaibigan. Sa paglipas ng panahon, ang pangalan ng samahan
                  ay naging kilala at tinanggap.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="vintage-card relative"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="absolute -top-3 -left-3 w-10 h-10 border-t-2 border-l-2 border-copper/70"></div>
                <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-2 border-r-2 border-copper/70"></div>

                <h3 className="text-xl font-bold mb-2 flex items-center">
                  <Users className="w-5 h-5 mr-2 text-copper" />
                  Kasalukuyan: Patuloy na Tradisyon
                </h3>
                <p>
                  Naging bahagi na ng mayamang kultura ng Vinzons ang pagdiriwang ng parehong kaganapan. Isa na rin
                  itong matibay na simbolo ng pagiging relihiyoso ng mga tao roon. Patuloy pa ring isinasagawa ang
                  Harian at Reynahan sa nasabing bayan. Naging bahagi na ito ng kanilang makasaysayang kultura at
                  pagkakakilanlan.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
