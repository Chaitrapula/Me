import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import './Projects.css'

const projects = [
  {
    title: 'AI-Powered Healthcare Platform (AWS + Azure)',
    description: 'Multi-cloud infrastructure supporting AI innovation in healthcare using Kubernetes for parallel scraping, PostgreSQL/MongoDB databases, and Terraform-automated deployments.',
    tech: ['AWS', 'Azure', 'Kubernetes', 'Terraform', 'PostgreSQL'],
    github: 'https://github.com/Chaitrapula',
    live: '#',
  },
  {
    title: 'AWS Workspaces Multi-Region Management',
    description: 'Led troubleshooting and monitoring across multiple regions, implementing CloudWatch metrics and alerting systems to minimize downtime and improve reliability.',
    tech: ['AWS Workspaces', 'CloudWatch', 'VPC', 'NAT Gateway'],
    github: 'https://github.com/Chaitrapula',
    live: '#',
  },
  {
    title: 'Cloud Migration & CI/CD Automation',
    description: 'Migrated legacy applications to AWS cloud, automated deployments using CloudFormation and CI/CD pipelines, reducing operational costs and improving release efficiency.',
    tech: ['CloudFormation', 'Jenkins', 'AWS', 'CI/CD'],
    github: 'https://github.com/Chaitrapula',
    live: '#',
  },
]

function Projects() {
  return (
    <section id="projects" className="section">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">Things I've built</p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
            >
              <div className="project-header">
                <h3>{project.title}</h3>
                <div className="project-links">
                  <a href={project.github} aria-label="GitHub"><FiGithub /></a>
                  <a href={project.live} aria-label="Live"><FiExternalLink /></a>
                </div>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map(t => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Projects
