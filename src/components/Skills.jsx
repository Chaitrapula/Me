import { motion } from 'framer-motion'
import { FaAws, FaMicrosoft } from 'react-icons/fa'
import { SiTerraform, SiDocker, SiKubernetes, SiJenkins, SiGithubactions, SiPython, SiLinux, SiNginx, SiPostgresql, SiPrometheus } from 'react-icons/si'
import './Skills.css'

const skills = [
  { icon: FaAws, name: 'AWS', category: 'Cloud' },
  { icon: FaMicrosoft, name: 'Azure', category: 'Cloud' },
  { icon: SiTerraform, name: 'Terraform', category: 'IaC' },
  { icon: SiDocker, name: 'Docker', category: 'Containers' },
  { icon: SiKubernetes, name: 'Kubernetes', category: 'Orchestration' },
  { icon: SiJenkins, name: 'Jenkins', category: 'CI/CD' },
  { icon: SiGithubactions, name: 'GitHub Actions', category: 'CI/CD' },
  { icon: SiPython, name: 'Python', category: 'Scripting' },
  { icon: SiLinux, name: 'Linux', category: 'OS' },
  { icon: SiNginx, name: 'Nginx', category: 'Web Server' },
  { icon: SiPostgresql, name: 'PostgreSQL', category: 'Database' },
  { icon: SiPrometheus, name: 'Monitoring', category: 'CloudWatch/Nagios' },
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
        <span className="section-eyebrow">02 — Toolkit</span>
        <h2 className="section-title">Skills &amp; <em>Technologies</em></h2>
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
