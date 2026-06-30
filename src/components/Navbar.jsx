import { useState } from 'react'
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi'
import './Navbar.css'

function Navbar({ darkMode, setDarkMode, route = '/' }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const onHome = !route.startsWith('/blog')

  const sectionLinks = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#travel', label: 'Travel' },
    { href: '#guestbook', label: 'Guestbook' },
  ]

  const close = () => setMenuOpen(false)

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#/" className="navbar-logo" onClick={close}>
          Chaitra<span className="logo-dot">.</span>
        </a>

        <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          {onHome
            ? sectionLinks.map((link) => (
                <a key={link.href} href={link.href} onClick={close}>
                  {link.label}
                </a>
              ))
            : <a href="#/" onClick={close}>Home</a>}
          <a href="#/blog" className={`nav-journal ${!onHome ? 'is-active' : ''}`} onClick={close}>
            Journal
          </a>
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
