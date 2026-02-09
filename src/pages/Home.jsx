import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'
import { SiGooglecloud } from 'react-icons/si'
import { personalInfo } from '../data/portfolioData'
import TypeWriter from '../components/TypeWriter'

export default function Home() {
  const socialIcons = [
    { icon: FaLinkedin, link: personalInfo.social.linkedin, label: 'LinkedIn' },
    { icon: FaGithub, link: personalInfo.social.github, label: 'GitHub' },
    { icon: FaInstagram, link: personalInfo.social.instagram, label: 'Instagram' },
    { icon: SiGooglecloud, link: personalInfo.social.googleDev, label: 'Google Dev' },
  ]

  // Extract roles from title for typing animation
  const roles = [
    "Python Developer",
    "Vibe Coder",
    "Data Analyst",
    "Web Designer",
    "AI Enthusiast",
    "Video Editor"
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col justify-center min-h-[70vh]"
    >
      {/* Hero Text */}
      <motion.div variants={itemVariants} className="mb-8">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, it's <span className="text-primary">Nikhil Kumar</span>
        </h1>
        
        {/* Animated Typing Effect */}
        <div className="text-2xl md:text-3xl font-semibold mb-4">
          <span className="text-gray-300">I'm a </span>
          <TypeWriter texts={roles} speed={100} deleteSpeed={50} pauseDuration={2000} />
        </div>

        <p className="text-base md:text-lg text-gray-400 mt-2 max-w-2xl">
          
        I’ve always been curious about how things work and obsessed with improving them once 
            I understand them. That mindset pushed me to learn by building, breaking, 
            and rebuilding until the logic made sense. Today, I’m a Python-first developer
             working across data analytics, full-stack Web Design, and applied AI, 
             with experience shipping dashboards, ML pipelines. 
             I focus on clean logic, scalability, and real-world impact, and 
             I care more about delivering usable products than chasing buzzwords or titles.</p>
  
        <p className="text-base md:text-lg text-primary mt-2 font-medium">
          {personalInfo.subtitle}
        </p>
      </motion.div>

      {/* Social Links */}
      <motion.div variants={itemVariants} className="mb-10">
        <div className="flex gap-4 flex-wrap">
          {socialIcons.map((social, index) => (
            <motion.a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              aria-label={social.label}
            >
              <social.icon className="text-xl" />
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* CTA Buttons */}
      <motion.div variants={itemVariants} className="flex gap-4 flex-wrap">
        <Link to="/contact" className="btn-primary">
          Hire Me
        </Link>
        <a
          href={personalInfo.resumeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          Resume
        </a>
      </motion.div>

      {/* Animated typing effect subtitle (optional enhancement) */}
      <motion.div 
        variants={itemVariants}
        className="mt-12 text-gray-500 text-sm"
      >
        <p>Building scalable web apps & intelligent solutions</p>
      </motion.div>
    </motion.div>
  )
}
