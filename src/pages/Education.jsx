import { useState } from 'react'
import { motion } from 'framer-motion'
import Modal from '../components/Modal'
import { education, positionsOfResponsibility } from '../data/portfolioData'

export default function Education() {
  const [festModalOpen, setFestModalOpen] = useState(false)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      {/* Education Block */}
      <motion.div variants={itemVariants}>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Education</h2>
        <div className="glass-card p-6 md:p-8">
          <div className="flex items-start gap-6">
            {/* College Logo */}
            {education.logo && (
              <div className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden bg-white/10 flex items-center justify-center p-2">
                <img 
                  src={education.logo} 
                  alt={education.institution}
                  className="w-full h-full object-contain"
                />
              </div>
            )}
            
            {/* Education Details */}
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-2">{education.institution}</h3>
              <p className="text-gray-400 mb-2">{education.location}</p>
              <p className="text-lg text-gray-300 mb-2">{education.degree}</p>
              <p className="text-gray-400 mb-2">{education.duration}</p>
              <p className="text-primary font-semibold">CGPA: {education.cgpa}</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Positions of Responsibility */}
      <motion.div variants={itemVariants}>
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
          Positions of Responsibility
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* EDC Card */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.03 }}
            className="glass-card p-6 cursor-default"
          >
            <div className="w-16 h-16 mb-4 rounded-lg overflow-hidden bg-white/10 flex items-center justify-center p-2">
              {positionsOfResponsibility[0].logo ? (
                <img 
                  src={positionsOfResponsibility[0].logo} 
                  alt={positionsOfResponsibility[0].organization}
                  className="w-full h-full object-contain"
                />
              ) : (
                <span className="text-primary text-3xl">🎯</span>
              )}
            </div>
            <h3 className="text-xl font-bold mb-2">{positionsOfResponsibility[0].title}</h3>
            <p className="text-sm text-gray-400 mb-3">{positionsOfResponsibility[0].organization}</p>
            <p className="text-gray-300">{positionsOfResponsibility[0].description}</p>
          </motion.div>

          {/* Fest Roles Card - Opens Modal */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.03 }}
            onClick={() => setFestModalOpen(true)}
            className="glass-card p-6 cursor-pointer hover:border-primary/50 transition-colors"
          >
   <div className="w-16 h-16 mb-4 rounded-lg overflow-hidden bg-white/10 flex items-center justify-center p-2">
              {positionsOfResponsibility[2].logo ? (
                <img 
                  src={positionsOfResponsibility[1].logo} 
                  alt={positionsOfResponsibility[1].organization}
                  className="w-full h-full object-contain"
                />
              ) : (
                <span className="text-primary text-3xl">🎪</span>
              )}
            </div>            <h3 className="text-xl font-bold mb-2">{positionsOfResponsibility[1].title}</h3>
            <p className="text-sm text-gray-400 mb-3">{positionsOfResponsibility[1].organization}</p>
            <p className="text-gray-300">Click to view all fest roles →</p>
          </motion.div>

          {/* NCC Card */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.03 }}
            className="glass-card p-6 cursor-default md:col-span-2 lg:col-span-1"
          >
            <div className="w-16 h-16 mb-4 rounded-lg overflow-hidden bg-white/10 flex items-center justify-center p-2">
              {positionsOfResponsibility[2].logo ? (
                <img 
                  src={positionsOfResponsibility[2].logo} 
                  alt={positionsOfResponsibility[2].organization}
                  className="w-full h-full object-contain"
                />
              ) : (
                <span className="text-primary text-3xl">🎖️</span>
              )}
            </div>
            <h3 className="text-xl font-bold mb-2">{positionsOfResponsibility[2].title}</h3>
            <p className="text-sm text-gray-400 mb-3">
              {positionsOfResponsibility[2].organization} • {positionsOfResponsibility[2].duration}
            </p>
            <p className="text-gray-300">{positionsOfResponsibility[2].description}</p>
          </motion.div>
        </div>
      </motion.div>

      {/* Fest Modal */}
      <Modal
        isOpen={festModalOpen}
        onClose={() => setFestModalOpen(false)}
        title="Fest Leadership Roles"
        size="large"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {positionsOfResponsibility[1].fests.map((fest, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 text-center"
            >
              <div className="w-24 h-24 mx-auto mb-4 rounded-lg overflow-hidden bg-white/10 flex items-center justify-center p-2">
                {fest.logo ? (
                  <img 
                    src={fest.logo} 
                    alt={fest.name}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <span className="text-3xl">🎉</span>
                )}
              </div>
              <h4 className="text-xl font-bold mb-2 text-primary">{fest.name}</h4>
              <p className="text-sm text-gray-400 mb-2">{fest.role}</p>
              <p className="text-gray-300 text-sm">{fest.description}</p>
            </motion.div>
          ))}
        </div>
      </Modal>
    </motion.div>
  )
}
