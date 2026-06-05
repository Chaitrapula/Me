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
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">Multi-Cloud Engineer with 6+ years of experience</p>

        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a Multi-Cloud Engineer with 6+ years of experience in designing and implementing
              cloud solutions across AWS and Azure. I specialize in architecting scalable environments
              using services like EC2, S3, Lambda, ALB, Auto Scaling, VPC, CloudWatch, and SageMaker
              on AWS, and Azure VMs, Blob Storage, App Service, VNet, Azure Monitor, and OpenAI LLM on Azure.
            </p>
            <p>
              Experienced in securing cloud environments with Security Groups, ACLs, VPNs, and network
              segmentation. Expert in CI/CD automation using Azure DevOps, GitHub Actions, and pipelines,
              significantly accelerating delivery cycles. Passionate about delivering resilient,
              cost-effective, and innovative cloud solutions.
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
