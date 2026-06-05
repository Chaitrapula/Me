import { motion } from 'framer-motion'
import { FiCloud, FiServer, FiCode } from 'react-icons/fi'
import './About.css'

function About() {
  return (
    <section id="about" className="section">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">Passionate about building reliable cloud infrastructure</p>

        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a Cloud Engineer with a passion for building scalable, secure, and resilient
              cloud infrastructure. I specialize in designing and implementing cloud-native
              solutions using modern IaC tools and DevOps practices.
            </p>
            <p>
              My expertise spans across major cloud platforms, container orchestration,
              CI/CD pipelines, and infrastructure automation. I thrive on solving complex
              distributed systems challenges and optimizing cloud costs.
            </p>
          </div>

          <div className="about-highlights">
            <div className="highlight-card">
              <FiCloud className="highlight-icon" />
              <h3>Cloud Architecture</h3>
              <p>Designing scalable multi-cloud solutions</p>
            </div>
            <div className="highlight-card">
              <FiServer className="highlight-icon" />
              <h3>Infrastructure</h3>
              <p>Terraform, Kubernetes, Docker</p>
            </div>
            <div className="highlight-card">
              <FiCode className="highlight-icon" />
              <h3>Automation</h3>
              <p>CI/CD, GitOps, observability</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default About
