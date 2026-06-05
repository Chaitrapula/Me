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
          <a href="https://linkedin.com/in/chaitra" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FiLinkedin />
          </a>
          <a href="mailto:chaitra@example.com" aria-label="Email">
            <FiMail />
          </a>
        </div>
        <p className="footer-text">
          Built with <FiHeart className="heart-icon" /> by Chaitra
        </p>
        <p className="footer-copyright">
          © {new Date().getFullYear()} Chaitra. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
