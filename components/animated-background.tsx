"use client"
import { motion } from "framer-motion"

interface FloatingElement {
  id: number
  x: number
  y: number
  size: number
  opacity: number
  duration: number
  delay: number
  type: "circle" | "square" | "diamond" | "leaf"
}

export default function AnimatedBackground() {
  const elements: FloatingElement[] = []

  // Generate random floating elements
  for (let i = 0; i < 15; i++) {
    elements.push({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 60 + 20,
      opacity: Math.random() * 0.15 + 0.05,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 5,
      type: ["circle", "square", "diamond", "leaf"][Math.floor(Math.random() * 4)] as
        | "circle"
        | "square"
        | "diamond"
        | "leaf",
    })
  }

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {elements.map((element) => (
        <motion.div
          key={element.id}
          className={`absolute ${
            element.type === "circle"
              ? "rounded-full"
              : element.type === "square"
                ? "rounded-sm"
                : element.type === "diamond"
                  ? "rotate-45 rounded-sm"
                  : "leaf-shape"
          } bg-withered-leaves`}
          style={{
            left: `${element.x}%`,
            bottom: "-100px",
            width: element.size,
            height: element.type === "leaf" ? element.size * 1.5 : element.size,
            opacity: element.opacity,
          }}
          initial={{ y: 0 }}
          animate={{
            y: `-${100 + element.y}vh`,
            x: element.id % 2 === 0 ? [0, 20, -20, 0] : [0, -20, 20, 0],
            rotate: element.type === "diamond" ? 45 : element.type === "leaf" ? [0, 10, -10, 0] : 0,
          }}
          transition={{
            y: {
              duration: element.duration,
              repeat: Number.POSITIVE_INFINITY,
              delay: element.delay,
              ease: "linear",
            },
            x: {
              duration: element.duration / 3,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "mirror",
              delay: element.delay,
              ease: "easeInOut",
            },
            rotate:
              element.type === "leaf"
                ? {
                    duration: element.duration / 5,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "mirror",
                    delay: element.delay,
                    ease: "easeInOut",
                  }
                : undefined,
          }}
        />
      ))}
    </div>
  )
}
