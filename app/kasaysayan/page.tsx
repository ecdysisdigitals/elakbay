"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { MapPin, Calendar, BookOpen, Clock, Users, ChevronDown, ChevronUp } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import AnimatedBackground from "@/components/animated-background"
import DecorativePattern from "@/components/decorative-pattern"
import InteractiveCard from "@/components/interactive-card"

export default function Kasaysayan() {
  const [showFullTable, setShowFullTable] = useState(false)

  // Data for the Harian kings from 1951 to 2024
  const harianData = [
    { year: "1951", melchor: "Francisco Balce", gaspar: "Victorino Cereno", baltazar: "Anonymous" },
    { year: "1952", melchor: "Ay Combing Balce", gaspar: "Domingo Rayos", baltazar: "Chua Chan" },
    { year: "1953", melchor: "Angel Cu", gaspar: "Panpilo Pajarillo", baltazar: "Ereneo Racelis" },
    { year: "1954", melchor: "Hermenio Balce", gaspar: "Benito Barbin", baltazar: "Pablo Cabezudo" },
    { year: "1955", melchor: "Damasco Pimentel", gaspar: "Delfin Pajarillo", baltazar: "Armando Ferrer Sr." },
    { year: "1956", melchor: "Luvidico Pajarillo", gaspar: "Pedro Rafer", baltazar: "Gualbuerto Asis" },
    { year: "1957", melchor: "Jose Balce", gaspar: "Lluminado Balane", baltazar: "Domonador Narido" },
    { year: "1958", melchor: "Pepito Ferrer", gaspar: "Vicente Zaño", baltazar: "Pedro Pimentel" },
    { year: "1959", melchor: "Benjamin Dela Gana", gaspar: "Perfecto Pajarillo", baltazar: "Raphael Mago Sr." },
    { year: "1960", melchor: "Felix llan", gaspar: "Balbino Abad", baltazar: "Crispolo Sayno" },
    { year: "1961", melchor: "Sofio Balce Sr.", gaspar: "Melecio Francisco", baltazar: "Regino Guinto III" },
    { year: "1962", melchor: "Fernando Pajarillo", gaspar: "Job Guinto", baltazar: "Eligio Balon" },
    { year: "1963", melchor: "Marino T. Ferrer", gaspar: "Vivencio Guinto", baltazar: "Dominador Ferrer Sr." },
    { year: "1964", melchor: "Emesto B. Narido", gaspar: "Elias Raro", baltazar: "Efren Enverga Sr." },
    { year: "1965", melchor: "Ernesto Saludes", gaspar: "Felix Obusan", baltazar: "Wilfredo Balane Sr." },
    { year: "1966", melchor: "Cayetano Guinto", gaspar: "Nestor Guinto", baltazar: "Ramon Caminar" },
    { year: "1967", melchor: "Felecito Careño", gaspar: "Domingo Vivas", baltazar: "Evaristo Fernadez" },
    { year: "1968", melchor: "Armando Pajarillo", gaspar: "Jesus Miquiabas", baltazar: "Ceferino Buenavista S" },
    { year: "1969", melchor: "Delfin Sunga", gaspar: "Jose Pajarillo", baltazar: "Severino Balce" },
    { year: "1970", melchor: "Ricardo Herrera", gaspar: "James Pajares", baltazar: "Jose Jalimao" },
    { year: "1971", melchor: "Raphael Mago Jr.", gaspar: "Florencio Guinto", baltazar: "Margarito Peñalosa" },
    { year: "1972", melchor: "Cesar Cereno", gaspar: "Ernesto Ramos", baltazar: "Reynulfo Rigodon" },
    { year: "1973", melchor: "Julian Lukban Sr.", gaspar: "Job De Vela", baltazar: "Emesto Francisco" },
    { year: "1974", melchor: "Nestor Mago", gaspar: "Concraco Cereno", baltazar: "Luis Pascua" },
    { year: "1975", melchor: "Leovigildo Ferrer", gaspar: "Ado Balanlayos", baltazar: "Hector Balon Sr." },
    { year: "1976", melchor: "Oscar Guinto", gaspar: "Alex Ferrer", baltazar: "Wilfredo Gapoy" },
    { year: "1977", melchor: "Renato Bardon", gaspar: "Joshue Mago", baltazar: "Antonio Lagumen" },
    { year: "1978", melchor: "Dominador Raro", gaspar: "Yodel Morales", baltazar: "Carlos Cereno" },
    { year: "1979", melchor: "Cresencio Pajarillo", gaspar: "Amable Ubana", baltazar: "Rolando Sayno" },
    { year: "1980", melchor: "Felomino Racelis", gaspar: "Ferdinand Ferrer", baltazar: "Agustin Guinto" },
    { year: "1981", melchor: "Domingo Ongtauco", gaspar: "Nestor Obusan", baltazar: "Carlos Odi" },
    { year: "1982", melchor: "Renio Balce", gaspar: "Dennis Rayos", baltazar: "Fernando Yu" },
    { year: "1983", melchor: "Jaime Pingol", gaspar: "Francis Obusan", baltazar: "Isidro Saludes Jr." },
    { year: "1984", melchor: "Juan Chavez", gaspar: "Henry Dayaon", baltazar: "Glenn Edwin Solis" },
    { year: "1985", melchor: "Artemio Ferrer", gaspar: "Paquito Ong", baltazar: "Agustin Magno" },
    { year: "1986", melchor: "Sofio Balce Jr.", gaspar: "Vicente Benig", baltazar: "Cornelio Simos" },
    { year: "1987", melchor: "Venancio Rosales", gaspar: "Benjamin Dela Gana Jr.", baltazar: "Cesar Jimenez" },
    { year: "1988", melchor: "Ramon Asis", gaspar: "Emilio Lagdameo", baltazar: "Deoginis Carmina" },
    { year: "1989", melchor: "Vicente Asis", gaspar: "Jose Pajarin", baltazar: "Ronaldo Asis" },
    { year: "1990", melchor: "Napeleon Sy", gaspar: "Oscar Raro", baltazar: "Jess Pimentel" },
    { year: "1991", melchor: "Antonio Lukban", gaspar: "Dominador Ferrer Jr.", baltazar: "Rolando Esturas" },
    { year: "1992", melchor: "Orlando Pajarillo", gaspar: "Vivencio Abanilla", baltazar: "Henry King" },
    { year: "1993", melchor: "Winnie Oco", gaspar: "Erlito Obusan", baltazar: "Danny King" },
    { year: "1994", melchor: "Benjamin Daniel", gaspar: "Rosalino Juan Jr.", baltazar: "Willy Abcede" },
    { year: "1995", melchor: "Emilio Ramos", gaspar: "Augorio Guinto", baltazar: "Bernardo Diezmo" },
    { year: "1996", melchor: "Danilo Francisco", gaspar: "Rigoberto Guinto", baltazar: "Guillermo Balce" },
    { year: "1997", melchor: "Edwin Domingo", gaspar: "Abel Pajarillo", baltazar: "Reynulfo Juan" },
    { year: "1998", melchor: "Jonah Pimentel", gaspar: "Jose Segundo", baltazar: "Anthony Ferrer" },
    { year: "1999", melchor: "Vicente Rigodon", gaspar: "Alexander Mago", baltazar: "Noel Ferrer" },
    { year: "2000", melchor: "Lamberto Barbin", gaspar: "Oliver Ferrer", baltazar: "Conrado Caminar" },
    { year: "2001", melchor: "Jose Boma", gaspar: "Paul Elep", baltazar: "Felix John Vivas" },
    { year: "2002", melchor: "Hemando Rasco", gaspar: "Loreto Saenz", baltazar: "Ferdinand Lazado" },
    { year: "2003", melchor: "Gamaliel Cordova", gaspar: "Pepito Saenz", baltazar: "Donaldo Baker" },
    { year: "2004", melchor: "Julian Lukban Jr.", gaspar: "Ricardo Caminar", baltazar: "Jesus Lazado" },
    { year: "2005", melchor: "Adriano Pajarillo", gaspar: "Hoover Osea Jr.", baltazar: "Serafin Lazado" },
    { year: "2006", melchor: "Ricardo Heraldo", gaspar: "Rodolfo Paras", baltazar: "Larry Lazado" },
    { year: "2007", melchor: "Elmer Heraldo", gaspar: "Joseph Ang", baltazar: "Ronald Mone" },
    { year: "2008", melchor: "Alipio Rosalinas", gaspar: "Eugene Valente", baltazar: "Tefilo Valeros Jr." },
    { year: "2009", melchor: "Efren Balmeo", gaspar: "Ulysis Diezmo", baltazar: "Dian Balce" },
    { year: "2010", melchor: "Marc Manalo", gaspar: "Leo Mago", baltazar: "Adelmo Miqulabas" },
    { year: "2011", melchor: "Isagani Valenzuela", gaspar: "Rodel Zenarosa", baltazar: "Radames Herrera" },
    { year: "2012", melchor: "Jimmy Lee Senters", gaspar: "Edgardo Zenarosa", baltazar: "Edwin Pajares" },
    { year: "2013", melchor: "Rev. Reyman Villafranca", gaspar: "Arnold Rigodon", baltazar: "Harwin John Pajares" },
    { year: "2014", melchor: "Emesto Valeros Jr.", gaspar: "Eddie Rafer", baltazar: "Raul Rigodon" },
    { year: "2015", melchor: "Roger King", gaspar: "Emman Racelis", baltazar: "Rudy Eco" },
    { year: "2016", melchor: "Jariel Pentecostes", gaspar: "Bernie Valencia", baltazar: "Lester Benedict" },
    { year: "2017", melchor: "Kevin Pentecostes", gaspar: "Eugeniano Jalimao", baltazar: "Rodel Obusan" },
    { year: "2018", melchor: "Harvey Estrellado", gaspar: "Juancho Ibis", baltazar: "Rameces Lo Priego" },
    { year: "2019", melchor: "Ryan Howell A. Buena", gaspar: "Maximino S. Hernandez Jr.", baltazar: "Alexis R. Aloc" },
    { year: "2020", melchor: "Ryan Demy Y. Bico", gaspar: "Antonio A. Mancenido", baltazar: "Wilfredo M. De Leon" },
    { year: "2021", melchor: "", gaspar: "", baltazar: "" },
    { year: "2022", melchor: "", gaspar: "", baltazar: "" },
    { year: "2023", melchor: "", gaspar: "", baltazar: "" },
    { year: "2024", melchor: "Ronnie Jerez", gaspar: "Puto Asis Madera", baltazar: "Fr. Jojo Caymo" },
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
            <h1 className="text-4xl md:text-5xl font-bold text-brown-deer mb-4">Kasaysayan</h1>
            <p className="text-lg max-w-3xl mx-auto">
              Ang mayamang kasaysayan ng Harian at Reynahan sa Vinzons, Camarines Norte
            </p>
          </motion.div>

          <InteractiveCard className="mb-12">
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
                  Nagsimula ang Harian noong 1951 sa isang hindi inaasahan at masayang pagkakataon nang ang tatlong
                  magkaibigang sina Francisco Balce, Victorio Cereno, at ang kanilang kaibigang Instik nagpasya na
                  gawing natatangi at makulay ang kanilang selebrasyon ng pista ng Tatlong Hari.
                </p>
                <p className="mb-4">
                  Habang sila'y nag-iinuman at nagdiriwang, isang puting manok ang dumaan sa kanilang harapan, na siyang
                  nagbunsod sa isang hindi inaasahang pangyayari. Napagpasyahan nilang hulihin ito at gawing pulutan,
                  isang hakbang na nagbigay daan sa pagsilang ng kanilang samahan.
                </p>
                <div className="mt-4 flex items-center text-sm text-brown-deer/80">
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
                  src="/9.jpg?height=400&width=600"
                  alt="Larawan ng Harian"
                  width={600}
                  height={400}
                  className="sepia-image"
                />
              </motion.div>
            </div>
          </InteractiveCard>

          <div className="vintage-divider"></div>

          <InteractiveCard>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="image-frame order-1 md:order-2"
              >
                <Image
                  src="/12.jpg?height=400&width=600"
                  alt="Larawan ng Reynahan"
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
                  naging kilala at tinanggap hanggang sa ito kumalat sa ilang bahagi ng Vinzons at nagkaroon na ng mga
                  iba't ibang katawagan.
                </p>
                <p className="mb-4">
                  Samantalang nagkaroon naman ng hiwalay na selebrasyon para sa mga kababaihan, ang Reynahan. Idinaraos
                  ito sa halos parehong paraan. Ang malaking kaibahan lamang tanging kababaihan ang kinatawan ng tatlong
                  hari na binigyan ng mga bagong pangalan.
                </p>
                <div className="mt-4 flex items-center text-sm text-brown-deer/80">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>Naging bahagi na ng mayamang kultura ng Vinzons</span>
                </div>
              </motion.div>
            </div>
          </InteractiveCard>

          <div className="vintage-divider"></div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <InteractiveCard>
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Users className="w-5 h-5 mr-2 text-copper" />
                Listahan ng mga Hari sa "Huli White" (1951-2024)
              </h2>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-copper/20">
                      <th className="border border-brown-deer/30 p-2 text-left">Taon</th>
                      <th className="border border-brown-deer/30 p-2 text-left">Haring Melchor</th>
                      <th className="border border-brown-deer/30 p-2 text-left">Haring Gaspar</th>
                      <th className="border border-brown-deer/30 p-2 text-left">Haring Baltazar</th>
                    </tr>
                  </thead>
                  <tbody>
                    {harianData.slice(0, showFullTable ? harianData.length : 10).map((row, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-light-beige" : "bg-medium-beige/50"}>
                        <td className="border border-brown-deer/30 p-2">{row.year}</td>
                        <td className="border border-brown-deer/30 p-2">{row.melchor}</td>
                        <td className="border border-brown-deer/30 p-2">{row.gaspar}</td>
                        <td className="border border-brown-deer/30 p-2">{row.baltazar}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {!showFullTable && (
                <button
                  onClick={() => setShowFullTable(true)}
                  className="mt-4 flex items-center justify-center mx-auto text-copper hover:text-brown-deer transition-colors"
                >
                  Ipakita ang buong listahan <ChevronDown className="ml-1 w-4 h-4" />
                </button>
              )}

              {showFullTable && (
                <button
                  onClick={() => setShowFullTable(false)}
                  className="mt-4 flex items-center justify-center mx-auto text-copper hover:text-brown-deer transition-colors"
                >
                  Itago ang buong listahan <ChevronUp className="ml-1 w-4 h-4" />
                </button>
              )}
            </InteractiveCard>
          </motion.div>

          <div className="vintage-divider"></div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <InteractiveCard>
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <BookOpen className="w-5 h-5 mr-2 text-copper" />
                Mga Barangay sa Bayan ng Vinzons na Nagdiriwang ng Harian at Reynahan
              </h2>
              <p className="mb-4">
                Matagal nang bahagi ng kultura at tradisyon sa bayan ng Vinzons ang Harian at Reynahan. Isang patunay ng
                malalim na pananampalataya at pagpapahalaga sa kasaysayan ng mga taga-Vinzons. Patuloy itong isinasagawa
                taon-taon, tuwing Enero ang Harian at tuwing Pebrero naman ang Reynahan bilang paggunita sa pagdating ng
                Tatlong Hari.
              </p>
              <p className="mb-4">
                Sa loob ng maraming dekada, hindi lamang nananatili ang pagdiriwang na ito sa pinakapuso ng bayan,
                nagiging inspirasyon din ito sa pagsibol sa iba't ibang mukha at bersyon ng mga selebrasyon ng bawat
                barangay bilang tradisyon.
              </p>
            </InteractiveCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <InteractiveCard>
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <BookOpen className="w-5 h-5 mr-2 text-copper" />
                Huli White
              </h2>
              <p className="mb-4">
                Tinatawag na Huli White ang pinakamalawak na bersyon ng Harian sa bayan ng Vinzons na itinuturing na
                pangkalahatang selebrasyon ng Tatlong Hari. Isa itong mahalagang pagdiriwang sa bayan ng Vinzons,
                Camarines Norte, na nag-uugat sa masalimuot ngunit makulay na kasaysayan ng pananampalataya, pamayanan,
                at kultura.
              </p>
              <p className="mb-4">
                Sinasabing nag-ugat ang katawagang Huli White sa kombinasyon ng dalawang ideya, ang salitang huli na
                tumutukoy sa panghuhuli o hunting at white na siyang kulay ng manok na napagkatuwaang hulihin ng tatlong
                magkakaibigan upang gawing pulutan sa kanilang inuman. Sa paglipas ng panahon, nauwi ang simpleng
                pangyayaring ito sa isang lokal na kuwento na kalauna'y nagsilbing inspirasyon sa pagsisimula ng isang
                taunang pagdiriwang sa bayan ng Vinzons.
              </p>
              <p>
                Ginaganap ito tuwing unang linggo ng Enero bilang pakikibahagi sa pandaigdigang Kapistahan ng Tatlong
                Hari. Sa Vinzons, hindi lamang sinasalamin ng Huli White ang pagdating ng mga hari upang maghandog kay
                Hesus, kung hindi nagpapakita rin ito ng pagbibigay-pugay sa mga lokal na pinuno o ang mga napipiling
                Hari at Reyna na nagsisilbing tagapagdala ng pananampalataya at tradisyon sa kani-kanilang pamayanan.
              </p>
            </InteractiveCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <InteractiveCard>
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <BookOpen className="w-5 h-5 mr-2 text-copper" />
                Iba't Ibang Bersyon ng Pagdiriwang
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-2">ISHIBA</h3>
                  <p>
                    Isa sa mga makabagong anyo ng pagdiriwang ng Harian ang ISHIBA na isinasagawa sa barangay Sabang.
                    Nangangahulugan itong Isda, Hipon, at Balaw na siyang pangunahing kabuhay ng mga naninirahan doon.
                    Taunang ginaganap ito sa nasabing lugar bilang lokal na edisyon ng Harian, na pangunahing
                    naglalayong ipagdiwang ang pananampalataya, pagkakabuklod, at kultura ng pamayanan.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2">SAKATA</h3>
                  <p>
                    Samantala, isa ring lokal na bersyon ng pagdiriwang ng Harian ang SAKATA na isinasagawa sa Barangay
                    Calangcawan, Vinzons, Camarines Norte. Sumasalamin ito sa kultura at kabuhayan ng mga taga-barangay
                    na pangunahing kabuhayan ang agrikultura. Sinasabing hango ang katawagang SAKATA sa tatlong
                    pangunahing hilaw na produkto mula sa lugar, sandiya o pakwan, kalabasa, at talong.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2">Kasapi</h3>
                  <p>
                    Isa rin ang Kasapi sa mga lokal na bersyon ng tradisyon ng Harian sa Calangcawan, Vinzons, Camarines
                    Norte na partikular na isinagawa at itinataguyod ng mga binata o kalalakihan sa isang barangay.
                    Sinasabing hango ang katawagang ito sa salitang kasapi o miyembro, na tumutukoy sa pagiging bahagi
                    ng isang grupo, samahan, o kapatiran.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2">Tres Reynas</h3>
                  <p>
                    Sa paglipas ng panahon, kasabay ng pagbabago ng lipunan ang patuloy na ebolusyon ng mga tradisyon at
                    kulturang nakasanayan ng mga mamamayan. Isa sa mga makabagong mukha ng tradisyong Harian sa bayan ng
                    Vinzons ang Tres Reynas na isang bersyong nakatuon sa pagbibigay-pugay sa mahalagang papel ng
                    kababaihan sa komunidad.
                  </p>
                </div>
              </div>
            </InteractiveCard>
          </motion.div>

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
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <InteractiveCard>
                  <h3 className="text-xl font-bold mb-2 flex items-center">
                    <Calendar className="w-5 h-5 mr-2 text-copper" />
                    1951: Pagsisimula ng Harian
                  </h3>
                  <p>
                    Ang tatlong magkakaibigan na sina Francisco Balce, Victorio Cereno, at ang kanilang kaibigang Instik
                    ay nagpasya na gawing natatangi at makulay ang kanilang selebrasyon ng pista ng Tatlong Hari, na
                    nagsilbing simula ng tradisyon ng Harian.
                  </p>
                </InteractiveCard>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <InteractiveCard>
                  <h3 className="text-xl font-bold mb-2 flex items-center">
                    <Calendar className="w-5 h-5 mr-2 text-copper" />
                    Pagsilang ng "Huli White"
                  </h3>
                  <p>
                    Tinawag nilang "Huli White" ang kanilang samahan bilang isang pag-alala sa puting manok na kanilang
                    nahuli, na naging simbolo ng kanilang pagkakaibigan. Sa paglipas ng panahon, ang pangalan ng samahan
                    ay naging kilala at tinanggap.
                  </p>
                </InteractiveCard>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <InteractiveCard>
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
