"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Users, BookOpen } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import AnimatedBackground from "@/components/animated-background"
import DecorativePattern from "@/components/decorative-pattern"

export default function Mananaliksik() {
  const researchers = [
    {
      id: 1,
      name: "John Patrick",
      role: "Lead Researcher",
      bio: "Si Juan ay isang historyador at mananaliksik na nakatuon sa pag-aaral ng mga lokal na kasaysayan at kultura ng Bicol Region, partikular sa Harian at Reynahan ng Vinzons, Camarines Norte.",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      id: 2,
      name: "Maria Santos",
      role: "Cultural Anthropologist",
      bio: "Si Maria ay isang anthropologist na nagsasaliksik tungkol sa mga tradisyonal na gawi at paniniwala sa Camarines Norte, lalo na sa mga kultural na aspeto ng Harian at Reynahan.",
      image: "/placeholder.svg?height=400&width=400",
    },
  ]

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
            <h1 className="text-4xl md:text-5xl font-bold text-withered-leaves mb-4">Mananaliksik</h1>
            <p className="text-lg max-w-3xl mx-auto">
              Ang mga mananaliksik na nagsaliksik at nagdokumento ng mayamang kultura at kasaysayan ng Harian at Renahan
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {researchers.map((researcher) => (
              <motion.div
                key={researcher.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: researcher.id * 0.2 }}
                className="vintage-card text-center relative"
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <div className="absolute -top-3 -left-3 w-10 h-10 border-t-2 border-l-2 border-copper/70"></div>
                <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-2 border-r-2 border-copper/70"></div>

                <div className="mb-4">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden image-frame">
                    <Image
                      src={researcher.image || "/placeholder.svg"}
                      alt={researcher.name}
                      width={128}
                      height={128}
                      className="sepia-image w-full h-full object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-1">{researcher.name}</h3>
                <p className="text-copper font-medium mb-3">{researcher.role}</p>
                <p className="text-sm">{researcher.bio}</p>
              </motion.div>
            ))}
          </div>

          <div className="vintage-divider"></div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="vintage-card relative"
          >
            <div className="absolute -top-3 -left-3 w-10 h-10 border-t-2 border-l-2 border-copper/70"></div>
            <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-2 border-r-2 border-copper/70"></div>

            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <BookOpen className="w-5 h-5 mr-2 text-copper" />
              Tungkol sa Proyekto
            </h2>
            <p className="mb-4">
              Ang proyektong ito ay nagsimula bilang bahagi ng isang mas malaking inisyatiba na nagdodokumento ng mga
              lokal na kasaysayan at kultura sa Bicol Region. Ang pangunahing layunin nito ay ang mapreserba at maipasa
              ang mayamang pamana ng Harian at Renahan sa Vinzons, Camarines Norte sa mga susunod na henerasyon.
            </p>
            <p className="mb-4">
              Ang mga mananaliksik ay nagsagawa ng malawakang pananaliksik, kabilang ang mga interbyu sa mga matatandang
              residente, pagdodokumento ng mga tradisyonal na gawi at ritwal, at pag-aaral ng mga nakasulat na dokumento
              at arkibo.
            </p>
            <p>
              Ang resulta ng pananaliksik na ito ay ang komprehensibong dokumentasyon ng kasaysayan, kultura, at
              tradisyon ng Harian at Renahan na makikita sa website na ito. Ang proyekto ay patuloy na umuunlad at
              lumalawak habang natutuklasan ang mga bagong impormasyon at kuwento.
            </p>
          </motion.div>

          <div className="mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-8"
            >
              <h2 className="text-3xl font-bold flex items-center justify-center">
                <Users className="w-6 h-6 mr-3 text-copper" />
                Mga Acknowledgment
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="vintage-card relative"
            >
              <div className="absolute -top-3 -left-3 w-10 h-10 border-t-2 border-l-2 border-copper/70"></div>
              <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-2 border-r-2 border-copper/70"></div>

              <p className="mb-4">
                Nais naming pasalamatan ang mga sumusunod na indibidwal at organisasyon na tumulong sa pagbuo ng
                proyektong ito:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Ang mga mamamayan ng Harian at Renahan sa Vinzons, Camarines Norte</li>
                <li>Ang lokal na pamahalaan ng Vinzons</li>
                <li>Ang National Commission for Culture and the Arts (NCCA)</li>
                <li>Ang Department of Tourism - Bicol Region</li>
                <li>Ang mga matatandang residente na nagbahagi ng kanilang mga kuwento at karanasan</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
