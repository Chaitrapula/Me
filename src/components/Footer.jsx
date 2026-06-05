import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-socials">
          <a href="https://github.com/Chaitrapula" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FiGithub />
          </a>
          <a href="https://www.linkedin.com/in/chaitra-pula-b746a3135/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FiLinkedin />
          </a>
          <a href="mailto:chaitrapula9@gmail.com" aria-label="Email">
            <FiMail />
          </a>
        </div>
        <p className="footer-text">
          Built with <FiHeart className="heart-icon" /> by Chaitra Pula
        </p>
        <p className="footer-copyright">
          © {new Date().getFullYear()} Chaitra Pula. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
