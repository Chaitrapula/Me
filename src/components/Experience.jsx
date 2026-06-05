import { motion } from 'framer-motion'
import './Experience.css'

const experiences = [
  {
    role: 'Cloud Engineer',
    company: 'Current Company',
    period: '2023 – Present',
    description: 'Designing and managing cloud infrastructure on AWS/Azure. Implementing Terraform modules, CI/CD pipelines, and Kubernetes deployments for production workloads.',
    tech: ['AWS', 'Terraform', 'Kubernetes', 'GitHub Actions'],
  },
  {
    role: 'DevOps Engineer',
    company: 'Previous Company',
    period: '2021 – 2023',
    description: 'Built automated deployment pipelines, containerized microservices, and established monitoring/alerting systems for distributed applications.',
    tech: ['Docker', 'Jenkins', 'Ansible', 'Prometheus'],
  },
  {
    role: 'Systems Engineer',
    company: 'First Company',
    period: '2019 – 2021',
    description: 'Managed Linux infrastructure, implemented configuration management, and supported cloud migration initiatives.',
    tech: ['Linux', 'Python', 'Azure', 'Shell Scripting'],
  },
]

function Experience() {
  return (
    <section id="experience" className="section">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Experience</h2>
        <p className="section-subtitle">My professional journey</p>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="timeline-marker" />
              <div className="timeline-content">
                <span className="timeline-period">{exp.period}</span>
                <h3 className="timeline-role">{exp.role}</h3>
                <p className="timeline-company">{exp.company}</p>
                <p className="timeline-description">{exp.description}</p>
                <div className="timeline-tech">
                  {exp.tech.map(t => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Experience
