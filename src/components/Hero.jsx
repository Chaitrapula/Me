import { FiArrowDown, FiGithub, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi'
import { motion } from 'framer-motion'
import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <motion.div
          className="hero-avatar"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <img src="/profile.jpg" alt="Chaitra Pula" />
        </motion.div>

        <motion.p
          className="hero-greeting"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Hello, I'm
        </motion.p>
        <motion.h1
          className="hero-name"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Chaitra Pula
        </motion.h1>
        <motion.h2
          className="hero-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Multi-Cloud Engineer
        </motion.h2>
        <motion.p
          className="hero-tagline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          6+ years designing scalable cloud solutions across AWS & Azure. Infrastructure as Code. Reliability at scale.
        </motion.p>

        <motion.div
          className="hero-socials"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <a href="https://github.com/Chaitrapula" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FiGithub />
          </a>
          <a href="https://www.linkedin.com/in/chaitra-pula-b746a3135/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FiLinkedin />
          </a>
          <a href="mailto:chaitrapula9@gmail.com" aria-label="Email">
            <FiMail />
          </a>
          <a href="tel:+918297179420" aria-label="Phone">
            <FiPhone />
          </a>
        </motion.div>

        <motion.a
          href="#about"
          className="hero-scroll"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <FiArrowDown />
        </motion.a>
      </div>

      <div className="hero-globe">
        <div className="globe-placeholder" />
      </div>
    </section>
  )
}

export default Hero
