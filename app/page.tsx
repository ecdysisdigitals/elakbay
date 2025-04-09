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
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-withered-leaves mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Harian at Renahan
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-withered-leaves/90 font-lora italic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Vinzons, Camarines Norte
            </motion.p>
          </motion.div>

          <motion.div initial="hidden" animate={isLoaded ? "visible" : "hidden"} variants={slideUp} className="mt-8">
            <Link href="#about" className="vintage-button inline-block pulse-animation">
              Simulan ang Paglalakbay
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <Link href="#about">
            <ChevronDown className="w-10 h-10 text-withered-leaves animate-bounce" />
          </Link>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-nutty-brown relative">
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
            <p className="text-lg max-w-3xl mx-auto mt-6">
              Maligayang pagdating sa virtual na paglalakbay sa mayamang kultura at kasaysayan ng Harian at Renahan sa
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
              className="vintage-card relative"
            >
              <div className="absolute -top-3 -left-3 w-10 h-10 border-t-2 border-l-2 border-copper/70"></div>
              <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-2 border-r-2 border-copper/70"></div>

              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-copper" />
                Ang Harian
              </h3>
              <p className="mb-4">
                Ang Harian ay isang makasaysayang lugar sa Vinzons, Camarines Norte na nagsisilbing tahanan ng mayamang
                kultura at tradisyon. Ito ay naging sentro ng pamumuhay at pananampalataya ng mga mamamayan sa loob ng
                maraming henerasyon.
              </p>
              <Link href="/kasaysayan" className="text-copper hover:underline font-medium">
                Alamin ang higit pa →
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="vintage-card relative"
            >
              <div className="absolute -top-3 -left-3 w-10 h-10 border-t-2 border-l-2 border-copper/70"></div>
              <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-2 border-r-2 border-copper/70"></div>

              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <Compass className="w-5 h-5 mr-2 text-copper" />
                Ang Renahan
              </h3>
              <p className="mb-4">
                Ang Renahan ay isang mahalagang bahagi ng kasaysayan ng Vinzons, Camarines Norte. Ito ay nagsisilbing
                patunay sa mayamang pamana at tradisyon ng mga naninirahan sa lugar na ito.
              </p>
              <Link href="/kasaysayan" className="text-copper hover:underline font-medium">
                Alamin ang higit pa →
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-brown-deer relative">
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
              Kwento ng Harian at Renahan
            </h2>
            <p className="text-lg max-w-3xl mx-auto mt-6">
              Panoorin ang maikling animasyon tungkol sa mayamang kasaysayan at kultura ng Harian at Renahan sa Vinzons,
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
              <div className="absolute -top-3 -left-3 w-10 h-10 border-t-2 border-l-2 border-withered-leaves/50 z-10"></div>
              <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-2 border-r-2 border-withered-leaves/50 z-10"></div>

              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                poster="/placeholder.svg?height=720&width=1280"
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
                    <Pause className="w-8 h-8 text-withered-leaves" />
                  ) : (
                    <Play className="w-8 h-8 text-withered-leaves ml-1" />
                  )}
                </motion.div>
              </div>

              <div className="absolute bottom-4 left-4 bg-brown-deer/80 text-withered-leaves px-3 py-1 rounded-sm text-sm flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                Kasaysayan ng Harian at Renahan
              </div>
            </div>

            <div className="mt-6 vintage-card">
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <Award className="w-5 h-5 mr-2 text-copper" />
                Tungkol sa Video
              </h3>
              <p className="mb-3">
                Ang video na ito ay nagpapakita ng mayamang kasaysayan at kultura ng Harian at Renahan sa Vinzons,
                Camarines Norte. Ito ay nagbibigay-liwanag sa mga tradisyon, ritwal, at pamumuhay ng mga mamamayan sa
                lugar na ito.
              </p>
              <div className="flex items-center text-sm text-withered-leaves/80">
                <Users className="w-4 h-4 mr-1" />
                <span>Idinirehe ni Juan Dela Cruz</span>
                <span className="mx-2">•</span>
                <Calendar className="w-4 h-4 mr-1" />
                <span>2023</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Sections */}
      <section className="py-20 bg-brown-deer/70 relative">
        <div className="absolute inset-0 bg-pattern"></div>
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
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="vintage-card text-center"
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-copper flex items-center justify-center floating-animation">
                  <span className="text-2xl text-withered-leaves">📜</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Kasaysayan</h3>
              <p className="mb-4 text-sm">
                Alamin ang mayamang kasaysayan ng Harian at Renahan sa Vinzons, Camarines Norte.
              </p>
              <Link href="/kasaysayan" className="text-copper hover:underline text-sm font-medium">
                Basahin →
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="vintage-card text-center"
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-copper flex items-center justify-center floating-animation">
                  <span className="text-2xl text-withered-leaves">🏺</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Gawi at Paniniwala</h3>
              <p className="mb-4 text-sm">Tuklasin ang mga tradisyonal na gawi at paniniwala ng mga mamamayan.</p>
              <Link href="/gawi-at-paniniwala" className="text-copper hover:underline text-sm font-medium">
                Basahin →
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="vintage-card text-center"
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-copper flex items-center justify-center floating-animation">
                  <span className="text-2xl text-withered-leaves">🎭</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Kultura at Esperitwalidad</h3>
              <p className="mb-4 text-sm">Kilalanin ang mayamang kultura at espiritwalidad ng komunidad.</p>
              <Link href="/kultura-at-esperitwalidad" className="text-copper hover:underline text-sm font-medium">
                Basahin →
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="vintage-card text-center"
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-copper flex items-center justify-center floating-animation">
                  <span className="text-2xl text-withered-leaves">📸</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Media</h3>
              <p className="mb-4 text-sm">Panoorin at tingnan ang mga larawan at bidyo ng Harian at Renahan.</p>
              <Link href="/media" className="text-copper hover:underline text-sm font-medium">
                Basahin →
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-golden-chestnut text-withered-leaves relative">
        <DecorativePattern className="opacity-5" />
        <div className="vintage-container text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Simulan ang Iyong Virtual na Paglalakbay</h2>
            <p className="text-lg max-w-2xl mx-auto mb-8">
              Maglakbay sa nakaraan at tuklasin ang mayamang kultura at kasaysayan ng Harian at Renahan sa Vinzons,
              Camarines Norte.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/kasaysayan" className="vintage-button bg-copper hover:bg-copper/80">
                  Kasaysayan
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/media"
                  className="vintage-button bg-withered-leaves text-brown-deer hover:bg-withered-leaves/80"
                >
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
