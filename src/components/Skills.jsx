import { motion } from 'framer-motion'
import { SiAmazonaws, SiMicrosoftazure, SiGooglecloud, SiTerraform, SiDocker, SiKubernetes, SiJenkins, SiGithubactions, SiPython, SiLinux, SiAnsible, SiPrometheus } from 'react-icons/si'
import './Skills.css'

const skills = [
  { icon: SiAmazonaws, name: 'AWS', category: 'Cloud' },
  { icon: SiMicrosoftazure, name: 'Azure', category: 'Cloud' },
  { icon: SiGooglecloud, name: 'GCP', category: 'Cloud' },
  { icon: SiTerraform, name: 'Terraform', category: 'IaC' },
  { icon: SiDocker, name: 'Docker', category: 'Containers' },
  { icon: SiKubernetes, name: 'Kubernetes', category: 'Orchestration' },
  { icon: SiJenkins, name: 'Jenkins', category: 'CI/CD' },
  { icon: SiGithubactions, name: 'GitHub Actions', category: 'CI/CD' },
  { icon: SiPython, name: 'Python', category: 'Languages' },
  { icon: SiLinux, name: 'Linux', category: 'OS' },
  { icon: SiAnsible, name: 'Ansible', category: 'Automation' },
  { icon: SiPrometheus, name: 'Prometheus', category: 'Monitoring' },
]

function Skills() {
  return (
    <section id="skills" className="section">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Skills & Technologies</h2>
        <p className="section-subtitle">Tools I work with every day</p>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="skill-card"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -5 }}
            >
              <skill.icon className="skill-icon" />
              <span className="skill-name">{skill.name}</span>
              <span className="skill-category">{skill.category}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Skills
