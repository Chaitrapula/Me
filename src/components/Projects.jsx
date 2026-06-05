import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import './Projects.css'

const projects = [
  {
    title: 'Cloud Infrastructure Automation',
    description: 'Automated multi-account AWS infrastructure provisioning using Terraform modules with state management and drift detection.',
    tech: ['Terraform', 'AWS', 'Python', 'S3'],
    github: '#',
    live: '#',
  },
  {
    title: 'Kubernetes Platform',
    description: 'Production-grade Kubernetes platform with GitOps deployment, auto-scaling, and comprehensive observability stack.',
    tech: ['Kubernetes', 'ArgoCD', 'Prometheus', 'Grafana'],
    github: '#',
    live: '#',
  },
  {
    title: 'CI/CD Pipeline Framework',
    description: 'Reusable CI/CD pipeline templates supporting multi-language builds, security scanning, and automated deployments.',
    tech: ['GitHub Actions', 'Docker', 'Trivy', 'Helm'],
    github: '#',
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
