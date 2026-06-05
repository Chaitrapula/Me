import { motion } from 'framer-motion'
import './Experience.css'

const experiences = [
  {
    role: 'Software Engineer 3',
    company: 'GitHub',
    period: '2023 – Present',
    location: '',
    description: 'Working as a Software Engineer 3 at GitHub, contributing to cloud infrastructure and platform engineering initiatives.',
    tech: ['GitHub', 'Cloud', 'Infrastructure', 'Platform Engineering'],
  },
  {
    role: 'Multi-Cloud Engineer',
    company: 'Trigent Software Ltd',
    period: 'Jan 2023 – 2023',
    location: 'Bengaluru, India',
    description: 'Leveraging AWS and Azure to support AI projects advancing healthcare and e-commerce technology. Designed PostgreSQL and MongoDB databases on VMs, deployed Kubernetes clusters for parallel scraping jobs, automated infrastructure with Terraform, and implemented CloudWatch monitoring for AWS Workspaces across multiple regions.',
    tech: ['AWS', 'Azure', 'Terraform', 'Kubernetes', 'PostgreSQL', 'MongoDB', 'CloudWatch', 'GitHub'],
  },
  {
    role: 'Senior Software Engineer – AWS Cloud',
    company: 'UST Global',
    period: 'Feb 2022 – Jan 2023',
    location: 'Bengaluru, India',
    description: 'Designed scalable AWS cloud architectures, automated deployments using CloudFormation and CI/CD pipelines, led cloud migration of legacy applications reducing operational costs, and conducted security audits enforcing compliance best practices.',
    tech: ['AWS', 'CloudFormation', 'Jenkins', 'CI/CD', 'Git', 'SSH'],
  },
  {
    role: 'DevOps Engineer',
    company: 'Concentrix',
    period: 'Nov 2019 – Jan 2022',
    location: 'Bengaluru, India',
    description: 'Built and managed CI/CD pipelines, containerized applications, and maintained cloud infrastructure supporting enterprise operations.',
    tech: ['Docker', 'Jenkins', 'Azure DevOps', 'Linux', 'Shell Scripting'],
  },
  {
    role: 'Unix Administrator',
    company: 'HGS',
    period: 'Dec 2018 – Nov 2019',
    location: 'Bengaluru, India',
    description: 'Managed Unix/Linux infrastructure, performed system administration, and supported production environments.',
    tech: ['Linux', 'Shell Scripting', 'Nagios', 'Apache'],
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
                <p className="timeline-company">{exp.company} • {exp.location}</p>
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
