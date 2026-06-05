import { useState } from 'react'
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi'
import './Navbar.css'

function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#certifications', label: 'Certifications' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#" className="navbar-logo">
          <span className="logo-bracket">&lt;</span>
          Chaitra
          <span className="logo-bracket"> /&gt;</span>
        </a>

        <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="navbar-actions">
          <button
            className="theme-toggle"
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle theme"
          >
            {darkMode ? <FiSun /> : <FiMoon />}
          </button>
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
