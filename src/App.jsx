import { useState, useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CommandPalette from './components/CommandPalette'
import Home from './pages/Home'
import BlogIndex from './pages/BlogIndex'
import BlogPost from './pages/BlogPost'
import { useHashRoute } from './lib/useHashRoute'
import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(true)
  const route = useHashRoute()
  const prev = useRef(route)

  useEffect(() => {
    const wasBlog = prev.current.startsWith('/blog')
    if (route.startsWith('/blog')) {
      window.scrollTo(0, 0)
    } else {
      const h = window.location.hash
      if (h && !h.startsWith('#/')) {
        const el = document.querySelector(h)
        if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 80)
      } else if (wasBlog) {
        window.scrollTo(0, 0)
      }
    }
    prev.current = route
  }, [route])

  let content
  if (route === '/blog') content = <BlogIndex />
  else if (route.startsWith('/blog/')) content = <BlogPost slug={decodeURIComponent(route.slice(6))} />
  else content = <Home />

  return (
    <div className={`app ${darkMode ? 'dark' : 'light'}`}>
      <div className="bg-particles" />
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} route={route} />
      {content}
      <Footer />
      <CommandPalette darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  )
}

export default App
