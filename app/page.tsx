"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronDown, Play, Pause, MapPin, Calendar, Users, BookOpen, Award, Compass } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import AnimatedBackground from "@/components/animated-background"
import DecorativePattern from "@/components/decorative-pattern"
import InteractiveCard from "@/components/interactive-card"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const handleVideoPlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  }

  const slideUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  return (
    <main className="min-h-screen relative overflow-hidden">
      <AnimatedBackground />
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Vinzons, Camarines Norte"
            fill
            className="object-cover sepia-image"
            priority
          />
          <div className="absolute inset-0 bg-brown-deer/60 backdrop-blur-sm"></div>
          <DecorativePattern />
        </div>

        <div className="vintage-container relative z-10 text-center">
          <motion.div
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={fadeIn}
            className="mb-6 relative ornate-border p-8"
          >
            <div className="corner-decoration top-left"></div>
            <div className="corner-decoration top-right"></div>
            <div className="corner-decoration bottom-left"></div>
            <div className="corner-decoration bottom-right"></div>

            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-light-beige mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Harian at Reynahan
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-light-beige font-lora italic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Vinzons, Camarines Norte

              Elektronikong Paglalakbay sa Ilang Taong Koronasyon ng Pananampalataya't Tradisyon
            </motion.p>
          </motion.div>

          <motion.div initial="hidden" animate={isLoaded ? "visible" : "hidden"} variants={slideUp} className="mt-8">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Link href="#about" className="vintage-button inline-block pulse-animation">
                Simulan ang Paglalakbay
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <Link href="#about">
            <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}>
              <ChevronDown className="w-10 h-10 text-light-beige" />
            </motion.div>
          </Link>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-light-beige relative">
        <DecorativePattern className="opacity-10" />
        <div className="vintage-container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-title mx-auto">Pangunahing Pahina</h2>
            <p className="text-lg max-w-3xl mx-auto mt-6 text-brown-deer">
              Maligayang pagdating sa virtual na paglalakbay sa mayamang kultura at kasaysayan ng Harian at Reynahan sa
              Vinzons, Camarines Norte. Isang paglalakbay sa nakaraan upang makilala ang mga tradisyon at pamana ng
              ating mga ninuno.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <InteractiveCard>
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-copper" />
                  Ang Harian
                </h3>
                <div className="mb-4">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Larawan ng Harian"
                    width={400}
                    height={200}
                    className="sepia-image w-full h-48 object-cover rounded-sm mb-4"
                  />
                </div>
                <p className="mb-4 text-brown-deer">
                  Ang Harian ay isang makasaysayang lugar sa Vinzons, Camarines Norte na nagsisilbing tahanan ng
                  mayamang kultura at tradisyon. Ito ay naging sentro ng pamumuhay at pananampalataya ng mga mamamayan
                  sa loob ng maraming henerasyon.
                </p>
                <motion.div whileHover={{ x: 5 }} whileTap={{ scale: 0.95 }}>
                  <Link href="/kasaysayan" className="text-copper hover:underline font-bold">
                    Alamin ang higit pa →
                  </Link>
                </motion.div>
              </InteractiveCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <InteractiveCard>
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  <Compass className="w-5 h-5 mr-2 text-copper" />
                  Ang Reynahan
                </h3>
                <div className="mb-4">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Larawan ng Reynahan"
                    width={400}
                    height={200}
                    className="sepia-image w-full h-48 object-cover rounded-sm mb-4"
                  />
                </div>
                <p className="mb-4 text-brown-deer">
                  Ang Reynahan ay isang mahalagang bahagi ng kasaysayan ng Vinzons, Camarines Norte. Ito ay nagsisilbing
                  patunay sa mayamang pamana at tradisyon ng mga naninirahan sa lugar na ito.
                </p>
                <motion.div whileHover={{ x: 5 }} whileTap={{ scale: 0.95 }}>
                  <Link href="/kasaysayan" className="text-copper hover:underline font-bold">
                    Alamin ang higit pa →
                  </Link>
                </motion.div>
              </InteractiveCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-medium-beige relative">
        <DecorativePattern className="opacity-5" />
        <div className="vintage-container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-title mx-auto flex items-center justify-center">
              <BookOpen className="w-6 h-6 mr-3 text-copper" />
              Kwento ng Harian at Reynahan
            </h2>
            <p className="text-lg max-w-3xl mx-auto mt-6 text-brown-deer">
              Panoorin ang maikling animasyon tungkol sa mayamang kasaysayan at kultura ng Harian at Reynahan sa Vinzons,
              Camarines Norte.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative aspect-video overflow-hidden rounded-md image-frame">
              <div className="absolute -top-3 -left-3 w-10 h-10 border-t-2 border-l-2 border-brown-deer/70 z-10"></div>
              <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-2 border-r-2 border-brown-deer/70 z-10"></div>

              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                poster="/storyyy.mp4?height=720&width=1280"
                onClick={handleVideoPlay}
              >
                <source src="#" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              <div
                className="absolute inset-0 flex items-center justify-center cursor-pointer bg-brown-deer/30 hover:bg-brown-deer/20 transition-colors"
                onClick={handleVideoPlay}
              >
                <motion.div
                  className="w-20 h-20 rounded-full bg-copper/80 flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isPlaying ? (
                    <Pause className="w-8 h-8 text-light-beige" />
                  ) : (
                    <Play className="w-8 h-8 text-light-beige ml-1" />
                  )}
                </motion.div>
              </div>

              <div className="absolute bottom-4 left-4 bg-brown-deer/80 text-light-beige px-3 py-1 rounded-sm text-sm flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                Kasaysayan ng Harian at Reynahan
              </div>
            </div>

            <InteractiveCard className="mt-6">
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <Award className="w-5 h-5 mr-2 text-copper" />
                Tungkol sa Video
              </h3>
              <p className="mb-3 text-brown-deer">
                Ang video na ito ay nagpapakita ng mayamang kasaysayan at kultura ng Harian at Reynahan sa Vinzons,
                Camarines Norte. Ito ay nagbibigay-liwanag sa mga tradisyon, ritwal, at pamumuhay ng mga mamamayan sa
                lugar na ito.
              </p>
              <div className="flex items-center text-sm text-brown-deer">
                <Users className="w-4 h-4 mr-1" />
                <span>Idinirehe ni Juan Dela Cruz</span>
                <span className="mx-2">•</span>
                <Calendar className="w-4 h-4 mr-1" />
                <span>2023</span>
              </div>
            </InteractiveCard>
          </motion.div>
        </div>
      </section>

      {/* Featured Sections */}
      <section className="py-20 bg-light-beige relative">
        
        <div className="vintage-container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-title mx-auto">Mga Tampok na Seksyon</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "📜",
                title: "Kasaysayan",
                desc: "Alamin ang mayamang kasaysayan ng Harian at Reynahan sa Vinzons, Camarines Norte.",
                link: "/kasaysayan",
              },
              {
                icon: "🏺",
                title: "Gawi at Paniniwala",
                desc: "Tuklasin ang mga tradisyonal na gawi at paniniwala ng mga mamamayan.",
                link: "/gawi-at-paniniwala",
              },
              {
                icon: "🎭",
                title: "Kultura",
                desc: "Kilalanin ang mayamang kultura ng komunidad.",
                link: "/kultura",
              },
              {
                icon: "📸",
                title: "Esperitwalidad",
                desc: "Unawain ang malalim na espiritwalidad ng mga mamamayan.",
                link: "/esperitwalidad",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -15,
                  transition: { type: "spring", stiffness: 300 },
                }}
                whileTap={{ scale: 0.95 }}
              >
                <InteractiveCard className="text-center">
                  <div className="mb-4 flex justify-center">
                    <motion.div
                      className="w-16 h-16 rounded-full bg-copper flex items-center justify-center"
                      animate={{
                        y: [0, -10, 0],
                        boxShadow: [
                          "0 0 0 rgba(183, 102, 53, 0.4)",
                          "0 0 20px rgba(183, 102, 53, 0.6)",
                          "0 0 0 rgba(183, 102, 53, 0.4)",
                        ],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                      }}
                    >
                      <span className="text-2xl text-light-beige">{item.icon}</span>
                    </motion.div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="mb-4 text-sm text-brown-deer">{item.desc}</p>
                  <motion.div whileHover={{ x: 5 }} whileTap={{ scale: 0.95 }}>
                    <Link href={item.link} className="text-copper hover:underline text-sm font-bold">
                      Basahin →
                    </Link>
                  </motion.div>
                </InteractiveCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-medium-beige text-brown-deer relative">
        <DecorativePattern className="opacity-5" />
        <div className="vintage-container text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Simulan ang Iyong Virtual na Paglalakbay</h2>
            <p className="text-lg max-w-2xl mx-auto mb-8 text-brown-deer">
              Maglakbay sa nakaraan at tuklasin ang mayamang kultura at kasaysayan ng Harian at Reynahan sa Vinzons,
              Camarines Norte.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/kasaysayan" className="vintage-button bg-copper hover:bg-copper/80">
                  Kasaysayan
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/media" className="vintage-button bg-brown-deer text-light-beige hover:bg-brown-deer/80">
                  Mga Larawan at Bidyo
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
