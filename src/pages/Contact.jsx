import { motion } from 'framer-motion'
import { HiMail, HiLocationMarker } from 'react-icons/hi'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { personalInfo } from '../data/portfolioData'

export default function Contact() {
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
      transition: { duration: 0.6 }
    }
  }

  const contactMethods = [
    {
      icon: HiMail,
      label: 'Email',
      value: personalInfo.email,
      link: `mailto:${personalInfo.email}`
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      value: 'Connect on LinkedIn',
      link: personalInfo.social.linkedin
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      value: 'View my code',
      link: personalInfo.social.github
    },
    {
      icon: HiLocationMarker,
      label: 'Location',
      value: personalInfo.location,
      link: null
    }
  ]

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-[60vh] flex flex-col justify-center"
    >
      <motion.div variants={itemVariants} className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-primary">
          Let's Talk
        </h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          Open to opportunities, collaborations, and conversations. 
          Reach out and let's build something great together.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto w-full">
        {contactMethods.map((method, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ scale: method.link ? 1.03 : 1 }}
            className={`glass-card p-6 ${method.link ? 'cursor-pointer hover:border-primary/50' : ''}`}
            onClick={() => method.link && window.open(method.link, '_blank')}
          >
            <div className="flex items-start gap-4">
              <div className="text-primary text-3xl mt-1">
                <method.icon />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1 text-gray-200">{method.label}</h3>
                <p className="text-gray-400 break-words">{method.value}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <motion.div variants={itemVariants} className="text-center mt-12">
        <a
          href={`mailto:${personalInfo.email}`}
          className="btn-primary text-lg px-10 py-4"
        >
          Start a Conversation
        </a>
      </motion.div>

      {/* Footer note */}
      <motion.div variants={itemVariants} className="text-center mt-12">
        <p className="text-gray-500 text-sm">
          Response time: Usually within 24 hours
        </p>
      </motion.div>
    </motion.div>
  )
}
