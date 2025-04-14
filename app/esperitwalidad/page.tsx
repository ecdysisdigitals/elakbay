"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Heart, BookOpen, Star } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import AnimatedBackground from "@/components/animated-background"
import DecorativePattern from "@/components/decorative-pattern"
import InteractiveCard from "@/components/interactive-card"

export default function Esperitwalidad() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-brown-deer mb-4">Esperitwalidad</h1>
            <p className="text-lg max-w-3xl mx-auto">
              Ang malalim na espiritwalidad ng mga mamamayan sa Harian at Reynahan
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <InteractiveCard>
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <Heart className="w-5 h-5 mr-2 text-copper" />
                  Espiritwal na Diwa ng Harian at Reynahan
                </h2>
                <p className="mb-4">
                  Tunay na malalim ang ispirituwal na koneksyon ng mga mamamayan sa bayan ng Vinzons, lalo na sa
                  pagdiriwang ng Harian at Reynahan. Isa itong mahalagang salik kung bakit mas nadarama ang diwa ng
                  selebrasyon hindi bilang isang simpleng pagtitipon, kung hindi isang makabuluhang sandali ng
                  pananampalataya. Sa pagsisimula ng pagdiriwang sa pamamagitan ng panalangin at banal na misa,
                  naipapakita ang matatag na pananampalataya ng komunidad at ang pagkakabigkis nila sa isa't isa.
                </p>
                <p>
                  Matagal nang bahagi ang Harian at Reynahan ng kultura ng Vinzons at patuloy na isinasabuhay ng bawat
                  henerasyon. Isa itong manipestasyon ng pagiging relihiyoso ng mga mamamayan, kung saan hindi lamang
                  limitado ang pagdiriwang sa aspeto ng kasiyahan kung hindi nagsisilbi ring daluyan ng ispirituwal na
                  paninindigan ng komunidad. Bilang isang tradisyong Katoliko, binibigyang-buhay ng pagdiriwang ang
                  mahahalagang kaganapan sa pananampalataya, na may layuning ipasa ang mga aral at diwa ng
                  pananampalataya sa mga kabataan.
                </p>
              </InteractiveCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="image-frame h-full flex items-center justify-center relative"
            >
              <div className="absolute -top-3 -left-3 w-10 h-10 border-t-2 border-l-2 border-brown-deer/50"></div>
              <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-2 border-r-2 border-brown-deer/50"></div>

              <Image
                src="/placeholder.svg?height=400&width=300"
                alt="Larawan ng Espiritwalidad"
                width={300}
                height={400}
                className="sepia-image"
              />
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
              <BookOpen className="w-6 h-6 mr-3 text-copper" />
              Mga Aspeto ng Espiritwalidad
            </h2>
            <p className="text-lg max-w-3xl mx-auto">
              Ang mga aspeto ng espiritwalidad na nagpapakita ng malalim na pananampalataya ng mga mamamayan
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <InteractiveCard>
                <div className="mb-4">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Larawan ng Pananampalataya"
                    width={400}
                    height={200}
                    className="sepia-image w-full h-48 object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">Pananampalataya</h3>
                <p>
                  Bukod sa pagiging relihiyosong selebrasyon, ang Harian at Reynahan nagsisilbing daan ng pagkakaisa at
                  kasiyahan sa komunidad. Sinisimulan ang pagdiriwang sa pamamagitan ng isang banal na misa na
                  dinadaluhan din ng mga kalahok.
                </p>
              </InteractiveCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <InteractiveCard>
                <div className="mb-4">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Larawan ng Pagpapakumbaba"
                    width={400}
                    height={200}
                    className="sepia-image w-full h-48 object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">Pagpapakumbaba</h3>
                <p>
                  Sa diwang ito, naisasabuhay hindi lamang ng mga hinihirang na mga hari at reyna, kung hindi maging ng
                  mga taong dumadalo ang aral ng pagpapakumbaba at pagkilala na sa kabila ng kayamanan o kasikatan, iisa
                  lamang ang Diyos na dapat parangalan.
                </p>
              </InteractiveCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <InteractiveCard>
                <div className="mb-4">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Larawan ng Pasasalamat"
                    width={400}
                    height={200}
                    className="sepia-image w-full h-48 object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">Pasasalamat</h3>
                <p>
                  Bukod dito, itinuturing din ang Harian at Reynahan bilang isang pagkakataon ng pasasalamat sa mga
                  biyayang natatanggap ng pamayanan. Sa bawat bahagi ng programa lalo na mula sa mga sektor gaya ng
                  agrikultura, kasama ang pag-aalay at mga panalangin bilang pagpapakita ng pasasalamat at paghingi ng
                  patuloy na gabay mula sa Diyos.
                </p>
              </InteractiveCard>
            </motion.div>
          </div>

          <div className="vintage-divider"></div>

          <div className="mt-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 flex items-center justify-center">
                <Star className="w-6 h-6 mr-3 text-copper" />
                Relihiyosong Kahalagahan
              </h2>
              <p className="text-lg max-w-3xl mx-auto">
                Ang malalim na relihiyosong kahalagahan ng Harian at Reynahan sa buhay ng mga mamamayan
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <InteractiveCard>
                  <h3 className="text-xl font-bold mb-4">Paggunita sa Tatlong Hari</h3>
                  <p className="mb-4">
                    Ang Harian at Reynahan ay isang paggunita sa paglalakbay ng Tatlong Hari o Mago na sumunod sa bituin
                    upang makarating sa sabsaban kung saan ipinanganak si Hesus. Tulad ng kanilang pag-aalay ng mga
                    regalo, ang mga mamamayan ay nagbibigay din ng kanilang sarili at mga handog sa pagdiriwang.
                  </p>
                  <p>
                    Ang pagdiriwang ay nagsisilbing paalala sa kahalagahan ng pagsunod sa liwanag ng pananampalataya at
                    paghahanap sa Diyos sa gitna ng kadiliman at kahirapan ng buhay.
                  </p>
                </InteractiveCard>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <InteractiveCard>
                  <h3 className="text-xl font-bold mb-4">Pagpapatuloy ng Tradisyon</h3>
                  <p className="mb-4">
                    Ang patuloy na pagdiriwang ng Harian at Reynahan ay nagpapakita ng matatag na pananampalataya ng mga
                    mamamayan ng Vinzons. Sa kabila ng pagbabago ng panahon at impluwensya ng modernisasyon,
                    nananatiling buhay ang tradisyong ito.
                  </p>
                  <p>
                    Ito ay nagsisilbing patunay na ang pananampalataya ay hindi lamang isang personal na karanasan kundi
                    isang kolektibong pagdiriwang na nagbibigkis sa buong komunidad sa ilalim ng iisang paniniwala at
                    pagpapahalaga.
                  </p>
                </InteractiveCard>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
