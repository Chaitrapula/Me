import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Certifications from './components/Certifications'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(true)

  return (
    <div className={`app ${darkMode ? 'dark' : 'light'}`}>
      <div className="bg-particles" />
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Certifications />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
