import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function AnimatedAvatar() {
  const [imageError, setImageError] = useState(false)
  
  // Path to the anime-style avatar image provided by user
  const avatarPath = "/mine.png"

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative w-full max-w-[250px] sm:max-w-sm md:max-w-md mx-auto"
    >
      {/* Glow effect behind avatar */}
      <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl sm:blur-3xl animate-pulse-slow" />
      
      {/* Avatar container */}
      <div className="relative">
        <motion.div
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="relative"
        >
          <div className="relative rounded-full overflow-hidden border-2 sm:border-4 border-primary/30 shadow-[0_0_30px_rgba(183,75,75,0.4)] sm:shadow-[0_0_50px_rgba(183,75,75,0.4)]">
            {!imageError ? (
              <img
                src={avatarPath}
                alt="Nikhil Kumar"
                className="w-full h-full object-cover animate-breathe"
                onError={() => setImageError(true)}
              />
            ) : (
              // Fallback if image not found
              <div className="w-full aspect-square bg-gradient-to-br from-primary/40 to-dark flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl sm:text-8xl font-bold text-primary mb-2">NK</div>
                  <div className="text-xs sm:text-sm text-gray-400">Nikhil Kumar</div>
                </div>
              </div>
            )}
          </div>

          {/* Rotating ring effect */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute inset-0 rounded-full border border-dashed sm:border-2 border-primary/40"
            style={{ padding: '10px' }}
          />
        </motion.div>
      </div>
    </motion.div>
  )
}
