import { useState } from 'react'
import { motion } from 'framer-motion'
import Modal from '../components/Modal'
import { skills } from '../data/portfolioData'

export default function Skills() {
  const [activeModal, setActiveModal] = useState(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    }
  }

  const skillCategories = [
    {
      id: 'soft',
      title: 'Soft Skills',
      icon: '💼',
      data: skills.soft
    },
    {
      id: 'technical',
      title: 'Tech Skills',
      icon: '💻',
      data: skills.technical
    },
    {
      id: 'certifications',
      title: 'Certifications',
      icon: '🎓',
      data: skills.certifications
    }
  ]

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-[60vh] flex flex-col justify-center"
    >
      <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-12 text-center text-primary">
        Skills & Expertise
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillCategories.map((category) => (
          <motion.div
            key={category.id}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setActiveModal(category.id)}
            className="glass-card p-8 cursor-pointer hover:border-primary/50 transition-all text-center"
          >
            <div className="text-6xl mb-4">{category.icon}</div>
            <h3 className="text-2xl font-bold text-primary mb-2">{category.title}</h3>
            <p className="text-gray-400">Click to view →</p>
          </motion.div>
        ))}
      </div>

      {/* Modals for each skill category */}
      {skillCategories.map((category) => (
        <Modal
          key={category.id}
          isOpen={activeModal === category.id}
          onClose={() => setActiveModal(null)}
          title={category.title}
          size="large"
        >
          <div className="flex flex-wrap gap-3 justify-center">
            {category.data.map((skill, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="px-5 py-3 glass-card text-sm font-medium text-gray-200 
                           hover:text-primary hover:border-primary/50 transition-all cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </Modal>
      ))}
    </motion.div>
  )
}
