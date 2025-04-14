"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Heart, BookOpen, Star } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import AnimatedBackground from "@/components/animated-background"
import DecorativePattern from "@/components/decorative-pattern"

export default function KulturaAtEsperitwalidad() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-withered-leaves mb-4">Kultura at Esperitwalidad</h1>
            <p className="text-lg max-w-3xl mx-auto">
              Ang mayamang kultura at espiritwalidad ng mga mamamayan sa Harian at Renahan
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="vintage-card lg:col-span-2 relative"
            >
              <div className="absolute -top-3 -left-3 w-10 h-10 border-t-2 border-l-2 border-copper/70"></div>
              <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-2 border-r-2 border-copper/70"></div>

              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <Heart className="w-5 h-5 mr-2 text-copper" />
                Espiritwal na Diwa ng Harian at Reynahan
              </h2>
              <p className="mb-4">
                Tunay na malalim ang ispirituwal na koneksyon ng mga mamamayan sa bayan ng Vinzons, lalo na sa
                pagdiriwang ng Harian at Reynahan. Isa itong mahalagang salik kung bakit mas nadarama ang diwa ng
                selebrasyon hindi bilang isang simpleng pagtitipon, kung hindi isang makabuluhang sandali ng
                pananampalataya. Sa pagsisimula ng pagdiriwang sa pamamagitan ng panalangin at banal na misa,
                naipapakita Sa pagsisimula ng pagdiriwang sa pamamagitan ng panalangin at banal na misa, naipapakita ang
                matatag na pananampalataya ng komunidad at ang pagkakabigkis nila sa isa't isa. Sa ganitong paraan,
                nagiging buhay na pagsasadula ang paggunita sa pagdating ng Tatlong Hari ng kabutihang-loob at
                pananampalataya sa Diyos.
              </p>
              <p>
                Matagal nang bahagi ang Harian at Reynahan ng kultura ng Vinzons at patuloy na isinasabuhay ng bawat
                henerasyon. Isa itong manipestasyon ng pagiging relihiyoso ng mga mamamayan, kung saan hindi lamang
                limitado ang pagdiriwang sa aspeto ng kasiyahan kung hindi nagsisilbi ring daluyan ng ispirituwal na
                paninindigan ng komunidad.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="image-frame h-full flex items-center justify-center relative"
            >
              <div className="absolute -top-3 -left-3 w-10 h-10 border-t-2 border-l-2 border-withered-leaves/50"></div>
              <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-2 border-r-2 border-withered-leaves/50"></div>

              <Image
                src="/11.jpg?height=400&width=300"
                alt="Larawan ng Espiritwalidad"
                width={300}
                height={400}
                className="sepia-image"
              />
            </motion.div>
          </div>

          <div className="vintage-divider"></div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="image-frame h-full flex items-center justify-center order-2 lg:order-1 relative"
            >
              <div className="absolute -top-3 -left-3 w-10 h-10 border-t-2 border-l-2 border-withered-leaves/50"></div>
              <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-2 border-r-2 border-withered-leaves/50"></div>

              <Image
                src="/12.jpg?height=400&width=300"
                alt="Larawan ng Kultura"
                width={300}
                height={400}
                className="sepia-image"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="vintage-card lg:col-span-2 order-1 lg:order-2 relative"
            >
              <div className="absolute -top-3 -left-3 w-10 h-10 border-t-2 border-l-2 border-copper/70"></div>
              <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-2 border-r-2 border-copper/70"></div>

              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <Star className="w-5 h-5 mr-2 text-copper" />
                Kultural na Kabuluhan
              </h2>
              <p className="mb-4">
                Nakaugat sa kasaysayan at karanasang panlipunan ng Vinzons ang taunang pagdiriwang ng Harian at
                Reynahan. Isa itong kultural na okasyong hindi lamang nagpapakita ng makukulay na kasuotan, handog, at
                palatuntunan, kung hindi nagsisilbi ring salamin ng mga pagpapahalagang gaya ng bayanihan, paggalang sa
                tradisyon, at pagpaparangal sa pinagmulan.
              </p>
              <p className="mb-4">
                Hindi rin matatawaran ang kultural na pagpapahalagang ibinubunga ng tradisyong ito. Sa pamamagitan ng
                mga simbolikong gamit gaya ng korona, sash, kapa, at mga kulay na tumutukoy sa bawat sektor o barangay,
                naipapakita ang kahusayan ng mga Vinzonian sa paglikha ng sarili nilang sining at estetika.
              </p>
              <p>
                Sa aspeto ng lipunan, ang Harian at Reynahan ay may hatid ding positibong epekto sa ekonomiya at
                turismo. Dahil sa lawak ng partisipasyon at paghahandang kinakailangan, umaangat ang mga lokal na
                negosyante, tindera, mananahi, at maging mga banda at performer.
              </p>
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
              className="vintage-card relative"
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="absolute -top-3 -left-3 w-10 h-10 border-t-2 border-l-2 border-copper/70"></div>
              <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-2 border-r-2 border-copper/70"></div>

              <div className="mb-4">
                <Image
                  src="/9.jpg?height=200&width=400"
                  alt="Larawan ng Pananampalataya"
                  width={400}
                  height={200}
                  className="sepia-image w-full h-48 object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Pananampalataya</h3>
              <p>
                Bukod sa pagiging relihiyosong selebrasyon, ang Harian at Reynahan ay nagsisilbing daan ng pagkakaisa at
                kasiyahan sa komunidad. Sinisimulan ang pagdiriwang sa pamamagitan ng isang banal na misa na dinadaluhan
                din ng mga kalahok.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="vintage-card relative"
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="absolute -top-3 -left-3 w-10 h-10 border-t-2 border-l-2 border-copper/70"></div>
              <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-2 border-r-2 border-copper/70"></div>

              <div className="mb-4">
                <Image
                  src="/14.jpg?height=200&width=400"
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
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="vintage-card relative"
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="absolute -top-3 -left-3 w-10 h-10 border-t-2 border-l-2 border-copper/70"></div>
              <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-2 border-r-2 border-copper/70"></div>

              <div className="mb-4">
                <Image
                  src="/13.jpg?height=200&width=400"
                  alt="Larawan ng Pasasalamat"
                  width={400}
                  height={200}
                  className="sepia-image w-full h-48 object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Pasasalamat</h3>
              <p>
                Ang selebrasyon nagsisilbi ring pagkakataon para sa pasasalamat. Sa mga panalangin, pag-aalay, at
                pagbibigayan, ipinapakita ng komunidad ang kanilang taos-pusong pasasalamat sa mga biyayang natanggap.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
