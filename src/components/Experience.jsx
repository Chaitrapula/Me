import { motion } from 'framer-motion'
import './Experience.css'

const experiences = [
  { role: 'SE-III', company: 'GitHub', period: 'Apr 2026 – Present' },
  { role: 'Multi-Cloud Engineer', company: 'Trigent Software Ltd', period: '2023 – Apr 2026' },
  { role: 'Senior Software Engineer – AWS Cloud', company: 'UST Global', period: 'Feb 2022 – Jan 2023' },
  { role: 'DevOps Engineer', company: 'Concentrix', period: 'Nov 2019 – Jan 2022' },
  { role: 'Unix Administrator', company: 'HGS', period: 'Dec 2018 – Nov 2019' },
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
        <span className="section-eyebrow">03 — Career</span>
        <h2 className="section-title"><em>Experience</em></h2>
        <p className="section-subtitle">Where I've worked and when</p>

        <div className="exp-list">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="exp-row"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <div className="exp-main">
                <h3 className="exp-role">{exp.role}</h3>
                <p className="exp-company">{exp.company}</p>
              </div>
              <span className="exp-period">{exp.period}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Experience
