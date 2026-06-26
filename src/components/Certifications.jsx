import { motion } from 'framer-motion'
import { FiAward } from 'react-icons/fi'
import './Certifications.css'

const certifications = [
  {
    title: 'AWS Certified Solutions Architect – Associate',
    issuer: 'Amazon Web Services',
    date: 'June 2023',
    description: 'Validates ability to design scalable, resilient systems on AWS and select the right services for various projects.',
  },
  {
    title: 'GitHub Foundations',
    issuer: 'GitHub',
    date: '',
    description: 'Validates core knowledge of GitHub fundamentals — repositories, Git workflows, collaboration, issues, and project management.',
  },
  {
    title: 'GitHub Actions',
    issuer: 'GitHub',
    date: '',
    description: 'Validates expertise in building, testing, and automating CI/CD workflows with GitHub Actions.',
  },
]

function Certifications() {
  return (
    <section id="certifications" className="section">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-eyebrow">04 — Credentials</span>
        <h2 className="section-title"><em>Certifications</em></h2>
        <p className="section-subtitle">Professional credentials</p>

        <div className="certs-grid">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="cert-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <FiAward className="cert-icon" />
              <div>
                <h3>{cert.title}</h3>
                <p className="cert-issuer">{cert.date ? `${cert.issuer} • ${cert.date}` : cert.issuer}</p>
                <p className="cert-description">{cert.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Certifications
