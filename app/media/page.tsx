"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronDown, ChevronUp } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import AnimatedBackground from "@/components/animated-background"
import DecorativePattern from "@/components/decorative-pattern"
import InteractiveCard from "@/components/interactive-card"

export default function Media() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [showSources, setShowSources] = useState(false)

  // Images array with actual image files
  const images = [
    { id: 1, src: "/1.png", alt: "Larawan 1" },
    { id: 2, src: "/2.png", alt: "Larawan 2" },
    { id: 3, src: "/3.png", alt: "Larawan 3" },
    { id: 4, src: "/4.png", alt: "Larawan 4" },
    { id: 5, src: "/5.png", alt: "Larawan 5" },
    { id: 6, src: "/6.jpg", alt: "Larawan 6" },
    { id: 7, src: "/7.jpg", alt: "Larawan 7" },
    { id: 8, src: "/8.jpg", alt: "Larawan 8" },
    { id: 9, src: "/9.jpg", alt: "Larawan 9" },
    { id: 10, src: "/10.jpg", alt: "Larawan 10" },
    { id: 11, src: "/11.jpg", alt: "Larawan 11" },
    { id: 12, src: "/12.jpg", alt: "Larawan 12" },
    { id: 13, src: "/13.jpg", alt: "Larawan 13" },
    { id: 14, src: "/14.jpg", alt: "Larawan 14" },
    { id: 15, src: "/15.jpg", alt: "Larawan 15" },
    { id: 16, src: "/16.png", alt: "Larawan 16" },
  ]

  // Videos array with actual video files
  const videos = [
    { id: 1, src: "/1.mp4", thumbnail: "/1.jpg", duration: "8:45" },
    { id: 2, src: "/2.mp4", thumbnail: "/2.jpg", duration: "12:30" },
    { id: 3, src: "/3.mp4", thumbnail: "/3.jpg", duration: "6:15" },
    { id: 4, src: "/4.mp4", thumbnail: "/4.jpg", duration: "10:20" },
    { id: 5, src: "/5.mp4", thumbnail: "/5.jpg", duration: "15:05" },
  ]

  // Sources list
  const sources = [
    "Balce, F. (1975). Ang Kasaysayan ng Harian sa Vinzons. Naga City Press.",
    "Cereno, V. (1982). Mga Tradisyon at Kultura ng Camarines Norte. Manila Publishing House.",
    "Department of Tourism - Bicol Region. (2010). Cultural Heritage of Vinzons.",
    "Gonzales, M. (2005). Espiritwalidad at Kultura sa Bicol. University of the Philippines Press.",
    "National Commission for Culture and the Arts. (2015). Dokumentasyon ng mga Pistahan sa Bicol.",
    "Reyes, J. (2018). Oral History Collection: Interviews with Vinzons Elders.",
    "Santos, L. (2000). Harian at Reynahan: Isang Pag-aaral. Journal of Philippine Studies, 45(2), 78-92.",
    "Vinzons Historical Society. (2012). Archive of Historical Photographs of Harian and Reynahan.",
  ]

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
            <h1 className="text-4xl md:text-5xl font-bold text-brown-deer mb-4">Media</h1>
            <p className="text-lg max-w-3xl mx-auto">
              Mga larawan at bidyo na nagpapakita ng mayamang kultura at kasaysayan ng Harian at Reynahan
            </p>
          </motion.div>

          <Tabs defaultValue="photos" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
              <TabsTrigger value="photos" className="text-lg">
                Mga Larawan
              </TabsTrigger>
              <TabsTrigger value="videos" className="text-lg">
                Mga Bidyo
              </TabsTrigger>
            </TabsList>

            <TabsContent value="photos" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {images.map((image) => (
                  <motion.div
                    key={image.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: image.id * 0.05 }}
                    className="image-frame cursor-pointer relative"
                    onClick={() => setSelectedImage(image.src)}
                    whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                  >
                    <div className="absolute -top-3 -left-3 w-10 h-10 border-t-2 border-l-2 border-brown-deer/50"></div>
                    <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-2 border-r-2 border-brown-deer/50"></div>

                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      width={600}
                      height={400}
                      className="sepia-image w-full h-64 object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="videos" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {videos.map((video) => (
                  <motion.div
                    key={video.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: video.id * 0.1 }}
                    whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  >
                    <InteractiveCard>
                      <div className="relative">
                        <Image
                          src={video.thumbnail || "/placeholder.svg"}
                          alt={`Video ${video.id}`}
                          width={600}
                          height={400}
                          className="sepia-image w-full h-48 object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <motion.div
                            className="w-16 h-16 rounded-full bg-copper/80 flex items-center justify-center cursor-pointer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => {
                              // Here you would typically open a video player
                              window.open(video.src, "_blank")
                            }}
                          >
                            <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-light-beige border-b-8 border-b-transparent ml-1"></div>
                          </motion.div>
                        </div>
                        <div className="absolute bottom-2 right-2 bg-brown-deer/80 text-light-beige px-2 py-1 text-xs rounded-sm">
                          {video.duration}
                        </div>
                      </div>
                    </InteractiveCard>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {/* Sources Dropdown */}
          <div className="mt-16">
            <InteractiveCard>
              <button
                onClick={() => setShowSources(!showSources)}
                className="w-full flex items-center justify-between text-xl font-bold text-brown-deer"
              >
                <span>Mga Pinagkunan (Sources)</span>
                {showSources ? (
                  <ChevronUp className="w-6 h-6 text-copper" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-copper" />
                )}
              </button>

              {showSources && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 pt-4 border-t border-copper/30"
                >
                  <ul className="space-y-2">
                    {sources.map((source, index) => (
                      <li key={index} className="text-brown-deer/90">
                        {source}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </InteractiveCard>
          </div>

          {/* Image Lightbox */}
          {selectedImage && (
            <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
              <div className="relative max-w-5xl w-full">
                <button
                  className="absolute top-4 right-4 text-white text-2xl z-10 bg-brown-deer/50 w-10 h-10 rounded-full flex items-center justify-center hover:bg-brown-deer transition-colors"
                  onClick={() => setSelectedImage(null)}
                >
                  ✕
                </button>
                <Image
                  src={selectedImage || "/placeholder.svg"}
                  alt="Enlarged image"
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Mananaliksik at Tagapayo Section */}
<section className="py-16 bg-light-beige/70 relative">
  <div className="vintage-container relative z-10">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center mb-12"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-brown-deer mb-4">Mananaliksik at Tagapayo</h2>
      <p className="text-lg max-w-3xl mx-auto">
        Ang mga indibidwal na nag-ambag sa pananaliksik at dokumentasyon ng ating mayamang kultura
      </p>
    </motion.div>

    {/* Section Headers */}
    <div className="mb-8">
      <h3 className="text-2xl font-bold text-brown-deer mb-2 text-center">Mga Mananaliksik</h3>
      <div className="w-24 h-1 bg-copper mx-auto"></div>
    </div>

    {/* Mananaliksik Section - 2 researchers */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
      {/* First Researcher */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="vintage-card"
      >
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="relative w-40 h-40">
            <div className="absolute -top-3 -left-3 w-10 h-10 border-t-2 border-l-2 border-brown-deer/50"></div>
            <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-2 border-r-2 border-brown-deer/50"></div>
            <Image
              src="/21.jpg?height=160&width=160"
              alt="Dr. Maria Santos"
              width={160}
              height={160}
              className="sepia-image w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-bold text-brown-deer">John Patrick A. Suterio</h3>
            <p className="text-copper font-medium text-lg">Pangunahing Mananaliksik</p>
            <p className="mt-2 text-brown-deer/80">
              Estudyante ng Camarines Norte State College. Nanguna sa
              pananaliksik at dokumentasyon ng Harian at Reynahan.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Second Researcher */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="vintage-card"
      >
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="relative w-40 h-40">
            <div className="absolute -top-3 -left-3 w-10 h-10 border-t-2 border-l-2 border-brown-deer/50"></div>
            <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-2 border-r-2 border-brown-deer/50"></div>
            <Image
              src="/20.png?height=160&width=160"
              alt="Prof. Juan Reyes"
              width={160}
              height={160}
              className="sepia-image w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-bold text-brown-deer">Rose Anne M. Abletes</h3>
            <p className="text-copper font-medium text-lg">Mananaliksik</p>
            <p className="mt-2 text-brown-deer/80">
               Estudyante ng Camarines Norte State College. Nanguna sa
              pananaliksik at dokumentasyon ng Harian at Reynahan.
            </p>
          </div>
        </div>
      </motion.div>
    </div>

    {/* Tagapayo Section Header */}
    <div className="mb-8 mt-12">
      <h3 className="text-2xl font-bold text-brown-deer mb-2 text-center">Tagapayo</h3>
      <div className="w-24 h-1 bg-copper mx-auto"></div>
    </div>

    {/* Tagapayo - 1 advisor */}
    <div className="grid grid-cols-1 max-w-2xl mx-auto gap-8 mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="vintage-card"
      >
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="relative w-40 h-40">
            <div className="absolute -top-3 -left-3 w-10 h-10 border-t-2 border-l-2 border-brown-deer/50"></div>
            <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-2 border-r-2 border-brown-deer/50"></div>
            <Image
              src="/19.png?height=160&width=160"
              alt="G. Roberto Cruz"
              width={160}
              height={160}
              className="sepia-image w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-bold text-brown-deer">RYAN S. RODRIGUEZ, PhD</h3>
            <p className="text-copper font-medium text-lg">Tagapayo</p>
            <p className="mt-2 text-brown-deer/80">Nagtapos ng kolehiyo sa La Consolacion College-Daet sa kursong Batsilyer sa Pansekondaryang Edukasyon major sa Filipino noong 2005. Nagtapos ng Master of Arts in Education major sa Filipino sa Universidad de Santa Isabel - Lungsod Naga. 
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
</section>

      <Footer />
    </main>
  )
}
