import { motion } from 'framer-motion'
import { FiCloud, FiServer, FiCode, FiShield } from 'react-icons/fi'
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
        <span className="section-eyebrow">01 — About</span>
        <h2 className="section-title">About <em>Me</em></h2>
        <p className="section-subtitle">Multi-Cloud Engineer with 6+ years of experience</p>

        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a multi-cloud engineer, and I spend my days making AWS and Azure
              infrastructure reliable, automated, and a little less chaotic.
            </p>
            <p>
              Away from the cloud, I'm happiest on a trail or in a town I've never seen. I've trekked
              Meeshapulimala and Kolukkumalai, travelled from Kerala's coast up to Tawang in the Northeast,
              and crossed the Himalayas into Bhutan. Exploring new places keeps me curious, and I bring that
              same curiosity back to the problems I solve at work.
            </p>
          </div>

          <div className="about-highlights">
            <div className="highlight-card">
              <FiCloud className="highlight-icon" />
              <h3>Multi-Cloud Architecture</h3>
              <p>AWS & Azure scalable solutions</p>
            </div>
            <div className="highlight-card">
              <FiServer className="highlight-icon" />
              <h3>Infrastructure as Code</h3>
              <p>Terraform, CloudFormation, ARM Templates</p>
            </div>
            <div className="highlight-card">
              <FiCode className="highlight-icon" />
              <h3>CI/CD Automation</h3>
              <p>Azure DevOps, GitHub Actions, Jenkins</p>
            </div>
            <div className="highlight-card">
              <FiShield className="highlight-icon" />
              <h3>Cloud Security</h3>
              <p>VPNs, ACLs, Network Segmentation</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default About
