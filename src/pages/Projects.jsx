import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import Modal from '../components/Modal'
import { projects } from '../data/portfolioData'

export default function Projects() {
  const [viewMoreOpen, setViewMoreOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const featuredProjects = projects.filter(p => p.featured)

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      nextProject()
    }, 5000) // Change project every 5 seconds

    return () => clearInterval(timer)
  }, [currentIndex])

  const nextProject = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % featuredProjects.length)
  }

  const prevProject = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length)
  }

  const currentProject = featuredProjects[currentIndex]

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

  const slideVariants = {
    enter: (direction) => ({
      y: direction > 0 ? 50 : -50,
      opacity: 0
    }),
    center: {
      y: 0,
      opacity: 1
    },
    exit: (direction) => ({
      y: direction < 0 ? 50 : -50,
      opacity: 0
    })
  }

  const ProjectCard = ({ project }) => (
    <div className="glass-card p-4 hover:border-primary/50 transition-all">
      {project.image && (
        <div className="mb-3 rounded-lg overflow-hidden">
          <img 
            src={project.image} 
            alt={project.name}
            className="w-full h-32 object-cover"
          />
        </div>
      )}
      <h3 className="text-lg font-bold mb-2 text-primary">{project.name}</h3>
      <p className="text-gray-300 text-sm mb-3 line-clamp-2">{project.description}</p>
      
      {/* Tech Stack */}
      <div className="flex flex-wrap gap-1 mb-3">
        {project.techStack.slice(0, 4).map((tech, idx) => (
          <span
            key={idx}
            className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/30"
          >
            {tech}
          </span>
        ))}
        {project.techStack.length > 4 && (
          <span className="px-2 py-1 text-xs text-gray-500">+{project.techStack.length - 4}</span>
        )}
      </div>

      {/* Links */}
      <div className="flex gap-3 text-xs">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-gray-400 hover:text-primary transition-colors"
          >
            <FaGithub /> GitHub
          </a>
        )}
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-gray-400 hover:text-primary transition-colors"
          >
            <FaExternalLinkAlt /> Live
          </a>
        )}
      </div>
    </div>
  )

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-[70vh]"
    >
      <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-8 text-primary">
        Things I've Built
      </motion.h2>

      {/* Main Carousel - One Project at a Time */}
      <motion.div variants={itemVariants} className="mb-6">
        <div className="relative glass-card p-8 md:p-12 min-h-[600px] overflow-hidden">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                y: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.3 }
              }}
              className="flex flex-col items-center"
            >
              {/* Project Title */}
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-4 sm:mb-6 text-center px-2">
                {currentProject.name}
              </h3>

              {/* Project Image - Prominent Display */}
              {currentProject.image && (
                <div className="w-full max-w-3xl mb-4 sm:mb-6 rounded-lg sm:rounded-xl overflow-hidden shadow-xl sm:shadow-2xl ring-1 sm:ring-2 ring-primary/20">
                  <img 
                    src={currentProject.image} 
                    alt={currentProject.name}
                    className="w-full h-48 sm:h-56 md:h-64 lg:h-80 object-cover"
                  />
                </div>
              )}

              {/* Project Details - Lower Z-Index Effect */}
              <div className="relative w-full max-w-2xl px-2">
                {/* Description */}
                <p className="text-gray-300 text-center mb-4 sm:mb-6 text-sm sm:text-base md:text-lg leading-relaxed">
                  {currentProject.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 justify-center mb-4 sm:mb-6">
                  {currentProject.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium bg-primary/10 text-primary rounded-full border border-primary/30 hover:bg-primary/20 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  {currentProject.github && (
                    <a
                      href={currentProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base bg-transparent border-2 border-primary text-primary font-medium rounded-full hover:bg-primary hover:text-black transition-all"
                    >
                      <FaGithub className="text-lg sm:text-xl" /> View Code
                    </a>
                  )}
                  {currentProject.link && (
                    <a
                      href={currentProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base bg-primary text-black font-medium rounded-full hover:bg-primary/90 transition-all"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={prevProject}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-primary/20 hover:bg-primary/40 text-primary transition-all z-10"
            aria-label="Previous project"
          >
            <FaChevronLeft className="text-lg sm:text-xl" />
          </button>
          <button
            onClick={nextProject}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-primary/20 hover:bg-primary/40 text-primary transition-all z-10"
            aria-label="Next project"
          >
            <FaChevronRight className="text-lg sm:text-xl" />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-3 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2">
            {featuredProjects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > currentIndex ? 1 : -1)
                  setCurrentIndex(idx)
                }}
                className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all ${
                  idx === currentIndex 
                    ? 'w-6 sm:w-8 bg-primary' 
                    : 'bg-primary/30 hover:bg-primary/50'
                }`}
                aria-label={`Go to project ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        <p className="text-center text-gray-500 text-sm mt-4">
          Auto-advances every 5 seconds • Use arrows to navigate
        </p>
      </motion.div>

      {/* View More Button */}
      <motion.div variants={itemVariants} className="text-center">
        <button
          onClick={() => setViewMoreOpen(true)}
          className="btn-primary"
        >
          View All Projects
        </button>
      </motion.div>

      {/* View More Modal */}
      <Modal
        isOpen={viewMoreOpen}
        onClose={() => setViewMoreOpen(false)}
        title="All Projects"
        size="large"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[60vh] overflow-y-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </Modal>
    </motion.div>
  )
}
