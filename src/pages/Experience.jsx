import { useState } from 'react'
import { motion } from 'framer-motion'
import Modal from '../components/Modal'
import { experiences, campusRepresentation } from '../data/portfolioData'

export default function Experience() {
  const [campusRepOpen, setCampusRepOpen] = useState(false)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h2 variants={itemVariants} className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-primary">
        Experience
      </motion.h2>

      {/* Timeline */}
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 sm:left-4 md:left-8 top-0 bottom-0 w-0.5 bg-primary/30" />

        {/* Experience items */}
        <div className="space-y-6 sm:space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              className="relative pl-6 sm:pl-12 md:pl-20"
            >
              {/* Timeline dot */}
              <div className="absolute left-[-4px] sm:left-[12px] md:left-[26px] top-2 w-3 h-3 sm:w-4 sm:h-4 bg-primary rounded-full border-2 sm:border-4 border-darker" />

              {/* Content */}
              <div className="glass-card p-4 sm:p-6 hover:border-primary/50 transition-all">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3 sm:mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-primary mb-1">{exp.role}</h3>
                    <p className="text-base sm:text-lg text-gray-300 mb-1">{exp.organization}</p>
                    <p className="text-xs sm:text-sm text-gray-500">{exp.location}</p>
                  </div>
                  <span className="text-xs sm:text-sm text-gray-400 mt-2 md:mt-0 md:text-right">
                    {exp.duration}
                  </span>
                </div>

                <ul className="space-y-2">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="text-sm sm:text-base text-gray-300 flex items-start">
                      <span className="text-primary mr-2 flex-shrink-0">▹</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Campus Representation Button */}
      <motion.div variants={itemVariants} className="mt-8 sm:mt-10 text-center">
        <button
          onClick={() => setCampusRepOpen(true)}
          className="btn-primary"
        >
          Campus Representation
        </button>
      </motion.div>

      {/* Campus Representation Modal */}
      <Modal
        isOpen={campusRepOpen}
        onClose={() => setCampusRepOpen(false)}
        title="Campus Representation"
        size="medium"
      >
        <div className="space-y-4">
          {campusRepresentation.map((rep, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-5"
            >
              <h4 className="text-lg font-bold text-primary mb-1">{rep.role}</h4>
              <p className="text-gray-300 mb-1">{rep.organization}</p>
              <p className="text-sm text-gray-500">{rep.duration}</p>
            </motion.div>
          ))}
        </div>
      </Modal>
    </motion.div>
  )
}
