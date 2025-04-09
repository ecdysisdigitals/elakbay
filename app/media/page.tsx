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

export default function Media() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [showSources, setShowSources] = useState(false)

  // Generate 12 placeholder images
  const images = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    src: `/placeholder.svg?height=400&width=600`,
    alt: `Larawan ${i + 1}`,
  }))

  // Generate 5 placeholder videos
  const videos = Array.from({ length: 5 }, (_, i) => ({
    id: i + 1,
    thumbnail: `/placeholder.svg?height=400&width=600`,
    duration: `${Math.floor(Math.random() * 20) + 5}:${Math.floor(Math.random() * 60)
      .toString()
      .padStart(2, "0")}`,
  }))

  // Sources list
  const sources = [
    "Munisipyo ng Vinzons: https://maps.app.goo.gl/L6SvRYJmkh6Sy79A6",
    "Huli White 3 Kings 2018: https://www.facebook.com/photo/?fbid=402524756761355&set=a.324593451221153",
    "69th Huli White Anniversay Celebration - Royal Grandmarch of the Kings & Ex-Kings with their Queens: https://www.facebook.com/cleah.jane.7/videos/2313758088843717",
    "67th Huli White Celebration - Royal Grand March: https://www.facebook.com/watch?ref=search&v=402438953436602&external_log_id=c805689c-5ed4-4533-98de-e80dfeec10f3&q=huli%20white%20celebration",
    "huli white celebration 2019: https://www.facebook.com/watch/?ref=search&v=574391432986610&external_log_id=afeef424-6ebb-41b6-af3e-6eb60f7f8614&q=huli%20white%20celebration",
    "71st HULI WHITE CELEBRATION at TOWN KIOSK: https://www.facebook.com/shvillafranca/videos/746852496861357", 
    "Grandmach of Tres Reyna's 2024 and ex Reyna's - Bolo Calang Cawan Norte Vinzons Camarines Norte: https://www.facebook.com/watch/?ref=search&v=847953240438794&external_log_id=7c5e8fc1-c425-49c2-8e90-dddc420cd1cf&q=Tres%20Reynas%20Vinzons"
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
            <h1 className="text-4xl md:text-5xl font-bold text-withered-leaves mb-4">Media</h1>
            <p className="text-lg max-w-3xl mx-auto">
              Mga larawan at bidyo na nagpapakita ng mayamang kultura at kasaysayan ng Harian at Renahan
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
                    <div className="absolute -top-3 -left-3 w-10 h-10 border-t-2 border-l-2 border-withered-leaves/50"></div>
                    <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-2 border-r-2 border-withered-leaves/50"></div>

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
                    className="vintage-card relative"
                    whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  >
                    <div className="absolute -top-3 -left-3 w-10 h-10 border-t-2 border-l-2 border-copper/70"></div>
                    <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-2 border-r-2 border-copper/70"></div>

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
                        >
                          <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-withered-leaves border-b-8 border-b-transparent ml-1"></div>
                        </motion.div>
                      </div>
                      <div className="absolute bottom-2 right-2 bg-brown-deer/80 text-withered-leaves px-2 py-1 text-xs rounded-sm">
                        {video.duration}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {/* Sources Dropdown */}
          <div className="mt-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="vintage-card relative"
            >
              <div className="absolute -top-3 -left-3 w-10 h-10 border-t-2 border-l-2 border-copper/70"></div>
              <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-2 border-r-2 border-copper/70"></div>

              <button
                onClick={() => setShowSources(!showSources)}
                className="w-full flex items-center justify-between text-xl font-bold text-withered-leaves"
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
                      <li key={index} className="text-withered-leaves/90">
                        {source}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </motion.div>
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

      <Footer />
    </main>
  )
}
