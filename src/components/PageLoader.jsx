import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function PageLoader({ onComplete }) {
  const [isLoading, setIsLoading] = useState(true)
  const [phase, setPhase] = useState('converging') // converging → revealed → moving → complete

  useEffect(() => {
    // Phase 1: Smoke converges (0-1.5s)
    const convergeTimer = setTimeout(() => {
      setPhase('revealed')
    }, 1500)

    // Phase 2: Logo revealed (1.5-3s)
    const revealTimer = setTimeout(() => {
      setPhase('moving')
    }, 3000)

    // Phase 3: Logo moves to navbar (3-3.5s)
    const moveTimer = setTimeout(() => {
      setPhase('complete')
      setIsLoading(false)
      onComplete?.()
    }, 3800)

    return () => {
      clearTimeout(convergeTimer)
      clearTimeout(revealTimer)
      clearTimeout(moveTimer)
    }
  }, [onComplete])

  // Calculate logo position - from center to top-left
  const getLogoPosition = () => {
    if (typeof window === 'undefined') return { x: 0, y: 0 }
    
    const centerX = window.innerWidth / 2
    const centerY = window.innerHeight / 2
    const navbarX = 80 // Approximate navbar logo position
    const navbarY = 50

    if (phase === 'moving' || phase === 'complete') {
      return {
        x: navbarX - centerX,
        y: navbarY - centerY,
        scale: 0.3 // Shrink to navbar size
      }
    }
    return { x: 0, y: 0, scale: 1 }
  }

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[9999] bg-darker flex items-center justify-center overflow-hidden"
        >
          {/* Dense smoke particles from left */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={`left-${i}`}
              initial={{ 
                x: -300 - (i * 40), 
                y: (window.innerHeight / 15) * i,
                scale: 0.8,
                opacity: 0 
              }}
              animate={phase === 'converging' || phase === 'revealed' ? { 
                x: window.innerWidth / 2 - 50 + (Math.random() - 0.5) * 100,
                y: window.innerHeight / 2 + (Math.random() - 0.5) * 150,
                scale: [0.8, 2, 2.5],
                opacity: [0, 0.9, 0.85]
              } : {
                x: window.innerWidth + 200,
                scale: 3,
                opacity: 0
              }}
              transition={{
                duration: phase === 'converging' || phase === 'revealed' ? 1.5 : 0.8,
                delay: phase === 'converging' || phase === 'revealed' ? i * 0.06 : 0,
                ease: "easeInOut"
              }}
              className="absolute w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-primary/40 blur-2xl"
              style={{ mixBlendMode: 'screen' }}
            />
          ))}

          {/* Dense smoke particles from right */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={`right-${i}`}
              initial={{ 
                x: window.innerWidth + 300 + (i * 40),
                y: (window.innerHeight / 15) * i,
                scale: 0.8,
                opacity: 0 
              }}
              animate={phase === 'converging' || phase === 'revealed' ? { 
                x: window.innerWidth / 2 + 50 + (Math.random() - 0.5) * 100,
                y: window.innerHeight / 2 + (Math.random() - 0.5) * 150,
                scale: [0.8, 2, 2.5],
                opacity: [0, 0.9, 0.85]
              } : {
                x: -200,
                scale: 3,
                opacity: 0
              }}
              transition={{
                duration: phase === 'converging' || phase === 'revealed' ? 1.5 : 0.8,
                delay: phase === 'converging' || phase === 'revealed' ? i * 0.06 : 0,
                ease: "easeInOut"
              }}
              className="absolute w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-primary/40 blur-2xl"
              style={{ mixBlendMode: 'screen' }}
            />
          ))}

          {/* Dense smoke particles from top */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={`top-${i}`}
              initial={{ 
                x: (window.innerWidth / 12) * i,
                y: -300 - (i * 40),
                scale: 0.8,
                opacity: 0 
              }}
              animate={phase === 'converging' || phase === 'revealed' ? { 
                x: window.innerWidth / 2 + (Math.random() - 0.5) * 120,
                y: window.innerHeight / 2 + (Math.random() - 0.5) * 100,
                scale: [0.8, 2, 2.5],
                opacity: [0, 0.9, 0.85]
              } : {
                y: window.innerHeight + 200,
                scale: 3,
                opacity: 0
              }}
              transition={{
                duration: phase === 'converging' || phase === 'revealed' ? 1.5 : 0.8,
                delay: phase === 'converging' || phase === 'revealed' ? i * 0.05 : 0,
                ease: "easeInOut"
              }}
              className="absolute w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-primary/40 blur-2xl"
              style={{ mixBlendMode: 'screen' }}
            />
          ))}

          {/* Dense smoke particles from bottom */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={`bottom-${i}`}
              initial={{ 
                x: (window.innerWidth / 12) * i,
                y: window.innerHeight + 300 + (i * 40),
                scale: 0.8,
                opacity: 0 
              }}
              animate={phase === 'converging' || phase === 'revealed' ? { 
                x: window.innerWidth / 2 + (Math.random() - 0.5) * 120,
                y: window.innerHeight / 2 + (Math.random() - 0.5) * 100,
                scale: [0.8, 2, 2.5],
                opacity: [0, 0.9, 0.85]
              } : {
                y: -200,
                scale: 3,
                opacity: 0
              }}
              transition={{
                duration: phase === 'converging' || phase === 'revealed' ? 1.5 : 0.8,
                delay: phase === 'converging' || phase === 'revealed' ? i * 0.05 : 0,
                ease: "easeInOut"
              }}
              className="absolute w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-primary/40 blur-2xl"
              style={{ mixBlendMode: 'screen' }}
            />
          ))}

          {/* Dense central cloud */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={phase === 'converging' || phase === 'revealed' ? { 
              scale: [0, 3, 3.5],
              opacity: [0, 0.9, 0.8]
            } : {
              scale: 0,
              opacity: 0
            }}
            transition={{
              duration: 2,
              delay: 0.3,
              ease: "easeInOut"
            }}
            className="absolute w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-primary/50 blur-3xl"
            style={{ mixBlendMode: 'screen' }}
          />

          {/* Logo - Appears in center, then moves to navbar */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={
              phase === 'converging' ? {
                scale: 0,
                opacity: 0
              } : phase === 'revealed' ? {
                scale: [0, 1.3, 1],
                opacity: 1,
                x: 0,
                y: 0
              } : phase === 'moving' ? {
                scale: 0.25,
                opacity: 1,
                x: getLogoPosition().x,
                y: getLogoPosition().y
              } : {
                scale: 0,
                opacity: 0
              }
            }
            transition={
              phase === 'revealed' ? {
                duration: 0.8,
                delay: 0,
                ease: "easeOut"
              } : phase === 'moving' ? {
                duration: 0.8,
                ease: [0.6, 0.05, 0.01, 0.9] // Smooth ease out
              } : {
                duration: 0.3
              }
            }
            className="relative z-10 flex items-center justify-center"
          >
            <img 
              src="/logomain.png" 
              alt="Nikhil Kumar"
              className="w-48 h-48 sm:w-64 sm:h-64 object-contain"
            />
          </motion.div>

          {/* Swirling smoke effect around logo */}
          {phase === 'revealed' && [...Array(8)].map((_, i) => (
            <motion.div
              key={`swirl-${i}`}
              initial={{ 
                x: window.innerWidth / 2,
                y: window.innerHeight / 2,
                scale: 0,
                opacity: 0
              }}
              animate={{ 
                x: window.innerWidth / 2 + Math.cos((i * 360 / 8 + Date.now() / 20) * Math.PI / 180) * 150,
                y: window.innerHeight / 2 + Math.sin((i * 360 / 8 + Date.now() / 20) * Math.PI / 180) * 150,
                scale: [0, 1.5, 1.8],
                opacity: [0, 0.7, 0.5],
                rotate: 360
              }}
              transition={{
                duration: 2,
                delay: i * 0.1,
                ease: "easeInOut"
              }}
              className="absolute w-28 h-28 rounded-full bg-primary/30 blur-2xl"
              style={{ mixBlendMode: 'screen' }}
            />
          ))}

          {/* Dispersing effect when logo moves */}
          {phase === 'moving' && [...Array(20)].map((_, i) => (
            <motion.div
              key={`disperse-final-${i}`}
              initial={{ 
                x: window.innerWidth / 2,
                y: window.innerHeight / 2,
                scale: 2,
                opacity: 0.7
              }}
              animate={{ 
                x: window.innerWidth / 2 + Math.cos((i * 360 / 20) * Math.PI / 180) * 600,
                y: window.innerHeight / 2 + Math.sin((i * 360 / 20) * Math.PI / 180) * 600,
                scale: [2, 3, 4],
                opacity: [0.7, 0.3, 0]
              }}
              transition={{
                duration: 0.8,
                delay: i * 0.02,
                ease: "easeOut"
              }}
              className="absolute w-32 h-32 rounded-full bg-primary/40 blur-3xl"
              style={{ mixBlendMode: 'screen' }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
