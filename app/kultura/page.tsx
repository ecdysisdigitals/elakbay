"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Star, Users, BookOpen } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import AnimatedBackground from "@/components/animated-background"
import DecorativePattern from "@/components/decorative-pattern"

export default function Kultura() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-brown-deer mb-4">Kultura</h1>
            <p className="text-lg max-w-3xl mx-auto">Ang mayamang kultura ng mga mamamayan sa Harian at Reynahan</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="image-frame h-full flex items-center justify-center order-2 lg:order-1 relative"
            >
              <div className="absolute -top-3 -left-3 w-10 h-10 border-t-2 border-l-2 border-brown-deer/50"></div>
              <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-2 border-r-2 border-brown-deer/50"></div>

              <Image
                src="/placeholder.svg?height=400&width=300"
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
              <div className="absolute -top-3 -left-3 w-10 h-10 border-t-2 border-l-2 border-brown-deer/70"></div>
              <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-2 border-r-2 border-brown-deer/70"></div>

              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <Star className="w-5 h-5 mr-2 text-copper" />
                Kultural na Kabuluhan
              </h2>
              <p className="mb-4">
                Ang Harian at Reynahan nagsisilbing espasyo rin para sa pagkakabuklod at muling pagkikita ng mga
                magkakahiwalay na pamilya. Ang bawat bahagi ng pagdiriwang naging pagkakataon para sa pagkakaroon ng
                kasiyahan at pagsasama-sama, hindi lamang ng magkakamag-anak, kung hindi ng buong komunidad. Sa ganitong
                pagkakataon, nagiging matatag ang ugnayan ng bawat isa, lalo na't hindi lamang mga residente, kung hindi
                maging mga nagmula sa Vinzons na naninirahan na sa malalayong lugar umuuwi upang makibahagi sa
                selebrasyon.
              </p>
              <p className="mb-4">
                Hindi rin matatawaran ang kultural na pagpapahalagang ibinubunga ng tradisyong ito. Sa pamamagitan ng
                mga simbolikong gamit gaya ng korona, sash, kapa, at mga kulay na tumutukoy sa bawat sektor o barangay,
                naipapakita ang kahusayan ng mga Vinzonian sa paglikha ng sarili nilang sining at estetika.
              </p>
              <p>
                Sa aspeto ng lipunan, ang Harian at Reynahan may hatid ding positibong epekto sa ekonomiya at turismo.
                Dahil sa lawak ng partisipasyon at paghahandang kinakailangan, umaangat ang mga lokal na negosyante,
                tindera, mananahi, at maging mga banda at performer.
              </p>
            </motion.div>
          </div>

          <div className="vintage-divider"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="vintage-card relative"
            >
              <div className="absolute -top-3 -left-3 w-10 h-10 border-t-2 border-l-2 border-brown-deer/70"></div>
              <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-2 border-r-2 border-brown-deer/70"></div>

              <h3 className="text-xl font-bold mb-4 flex items-center">
                <BookOpen className="w-5 h-5 mr-2 text-copper" />
                Tradisyon at Pamana
              </h3>
              <p className="mb-4">
                Ang Harian at Reynahan ay hindi lamang isang simpleng pagdiriwang kundi isang mahalagang bahagi ng
                kultural na pamana ng mga taga-Vinzons. Ito ay nagsisilbing tulay sa pagitan ng nakaraan at kasalukuyan,
                na nagpapaalala sa mga bagong henerasyon ng kanilang mayamang kasaysayan at tradisyon.
              </p>
              <p>
                Sa bawat pagdiriwang, naipapamalas ang mga tradisyonal na kasuotan, musika, at ritwal na nagpapakita ng
                natatanging pagkakakilanlan ng mga taga-Vinzons. Ang mga ito ay maingat na pinangangalagaan at ipinapasa
                sa susunod na henerasyon upang mapanatili ang kanilang kultural na pamana.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="vintage-card relative"
            >
              <div className="absolute -top-3 -left-3 w-10 h-10 border-t-2 border-l-2 border-brown-deer/70"></div>
              <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-2 border-r-2 border-brown-deer/70"></div>

              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Users className="w-5 h-5 mr-2 text-copper" />
                Pagkakaisa at Komunidad
              </h3>
              <p className="mb-4">
                Ang pagdiriwang ng Harian at Reynahan ay nagsisilbing pagkakataon para sa pagkakaisa ng buong komunidad.
                Sa panahon ng selebrasyon, naglalaho ang mga pagkakaiba at nagiging isang pamilya ang lahat ng mamamayan
                ng Vinzons.
              </p>
              <p>
                Ang diwa ng bayanihan ay malakas na nararamdaman sa panahon ng mga paghahanda at mismong pagdiriwang.
                Ang bawat miyembro ng komunidad ay may kanya-kanyang papel na ginagampanan upang maging matagumpay ang
                selebrasyon, na nagpapakita ng malalim na ugnayan at pagmamalasakit sa isa't isa.
              </p>
            </motion.div>
          </div>

          <div className="mt-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 flex items-center justify-center">
                <Star className="w-6 h-6 mr-3 text-copper" />
                Mga Kultural na Elemento
              </h2>
              <p className="text-lg max-w-3xl mx-auto">
                Ang mga natatanging kultural na elemento na bumubuo sa mayamang tradisyon ng Harian at Reynahan
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
                <div className="absolute -top-3 -left-3 w-10 h-10 border-t-2 border-l-2 border-brown-deer/70"></div>
                <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-2 border-r-2 border-brown-deer/70"></div>

                <div className="mb-4">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Larawan ng Kasuotan"
                    width={200}
                    height={200}
                    className="sepia-image w-32 h-32 object-cover mx-auto rounded-full"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">Kasuotan</h3>
                <p>
                  Ang mga tradisyonal na kasuotan sa Harian at Reynahan ay may malalim na simbolismo at kahulugan. Ang
                  mga korona, kapa, at iba pang palamuti ay kumakatawan sa iba't ibang aspeto ng kultura at kasaysayan
                  ng Vinzons.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="vintage-card text-center relative"
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <div className="absolute -top-3 -left-3 w-10 h-10 border-t-2 border-l-2 border-brown-deer/70"></div>
                <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-2 border-r-2 border-brown-deer/70"></div>

                <div className="mb-4">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Larawan ng Musika"
                    width={200}
                    height={200}
                    className="sepia-image w-32 h-32 object-cover mx-auto rounded-full"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">Musika at Sayaw</h3>
                <p>
                  Ang musika at sayaw ay mahalagang bahagi ng pagdiriwang. Ang mga tradisyonal na tugtugin at sayaw ay
                  nagpapakita ng kasiyahan at pagdiriwang ng komunidad, na nagpapayaman sa karanasan ng lahat ng
                  dumadalo.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="vintage-card text-center relative"
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <div className="absolute -top-3 -left-3 w-10 h-10 border-t-2 border-l-2 border-brown-deer/70"></div>
                <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-2 border-r-2 border-brown-deer/70"></div>

                <div className="mb-4">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Larawan ng Pagkain"
                    width={200}
                    height={200}
                    className="sepia-image w-32 h-32 object-cover mx-auto rounded-full"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">Pagkain at Handaan</h3>
                <p>
                  Ang pagkain ay hindi mawawala sa anumang pagdiriwang. Sa Harian at Reynahan, may mga espesyal na
                  putahe at inumin na inihahanda para sa okasyon, na nagpapakita ng kasaganahan at pagbibigayan sa
                  komunidad.
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
