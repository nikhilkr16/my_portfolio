import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Hide loader after 3 seconds
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] bg-darker flex items-center justify-center overflow-hidden"
        >
          {/* Smoke particles coming from left */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`left-${i}`}
              initial={{ 
                x: -200 - (i * 50), 
                y: Math.random() * window.innerHeight,
                scale: 0.5,
                opacity: 0 
              }}
              animate={{ 
                x: window.innerWidth / 2,
                y: window.innerHeight / 2 + (Math.random() - 0.5) * 100,
                scale: [0.5, 1.5, 2, 0],
                opacity: [0, 0.8, 0.6, 0]
              }}
              transition={{
                duration: 2,
                delay: i * 0.1,
                ease: "easeInOut"
              }}
              className="absolute w-32 h-32 rounded-full bg-primary/30 blur-3xl"
              style={{
                mixBlendMode: 'screen'
              }}
            />
          ))}

          {/* Smoke particles coming from right */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`right-${i}`}
              initial={{ 
                x: window.innerWidth + 200 + (i * 50),
                y: Math.random() * window.innerHeight,
                scale: 0.5,
                opacity: 0 
              }}
              animate={{ 
                x: window.innerWidth / 2,
                y: window.innerHeight / 2 + (Math.random() - 0.5) * 100,
                scale: [0.5, 1.5, 2, 0],
                opacity: [0, 0.8, 0.6, 0]
              }}
              transition={{
                duration: 2,
                delay: i * 0.1,
                ease: "easeInOut"
              }}
              className="absolute w-32 h-32 rounded-full bg-primary/30 blur-3xl"
              style={{
                mixBlendMode: 'screen'
              }}
            />
          ))}

          {/* Smoke particles coming from top */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`top-${i}`}
              initial={{ 
                x: Math.random() * window.innerWidth,
                y: -200 - (i * 50),
                scale: 0.5,
                opacity: 0 
              }}
              animate={{ 
                x: window.innerWidth / 2 + (Math.random() - 0.5) * 100,
                y: window.innerHeight / 2,
                scale: [0.5, 1.5, 2, 0],
                opacity: [0, 0.8, 0.6, 0]
              }}
              transition={{
                duration: 2,
                delay: i * 0.1,
                ease: "easeInOut"
              }}
              className="absolute w-32 h-32 rounded-full bg-primary/30 blur-3xl"
              style={{
                mixBlendMode: 'screen'
              }}
            />
          ))}

          {/* Smoke particles coming from bottom */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`bottom-${i}`}
              initial={{ 
                x: Math.random() * window.innerWidth,
                y: window.innerHeight + 200 + (i * 50),
                scale: 0.5,
                opacity: 0 
              }}
              animate={{ 
                x: window.innerWidth / 2 + (Math.random() - 0.5) * 100,
                y: window.innerHeight / 2,
                scale: [0.5, 1.5, 2, 0],
                opacity: [0, 0.8, 0.6, 0]
              }}
              transition={{
                duration: 2,
                delay: i * 0.1,
                ease: "easeInOut"
              }}
              className="absolute w-32 h-32 rounded-full bg-primary/30 blur-3xl"
              style={{
                mixBlendMode: 'screen'
              }}
            />
          ))}

          {/* Center glow effect */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: [0, 1, 1.2, 0],
              opacity: [0, 1, 0.8, 0]
            }}
            transition={{
              duration: 2.5,
              delay: 0.5,
              ease: "easeInOut"
            }}
            className="absolute w-64 h-64 rounded-full bg-primary/40 blur-3xl"
          />

          {/* Logo or Text in center */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: [0, 1.2, 1],
              opacity: [0, 1, 1]
            }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{
              duration: 1,
              delay: 0.8,
              ease: "easeOut"
            }}
            className="relative z-10"
          >
            <motion.div
              animate={{ 
                rotate: 360,
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear"
              }}
              className="text-8xl font-bold text-primary"
            >
              NK
            </motion.div>
          </motion.div>

          {/* Dispersing smoke effect (after convergence) */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={`disperse-${i}`}
              initial={{ 
                x: window.innerWidth / 2,
                y: window.innerHeight / 2,
                scale: 0,
                opacity: 0
              }}
              animate={{ 
                x: window.innerWidth / 2 + Math.cos((i * 360 / 12) * Math.PI / 180) * 400,
                y: window.innerHeight / 2 + Math.sin((i * 360 / 12) * Math.PI / 180) * 400,
                scale: [0, 1.5, 2],
                opacity: [0, 0.6, 0]
              }}
              transition={{
                duration: 1.5,
                delay: 1.5 + (i * 0.05),
                ease: "easeOut"
              }}
              className="absolute w-40 h-40 rounded-full bg-primary/30 blur-3xl"
              style={{
                mixBlendMode: 'screen'
              }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
