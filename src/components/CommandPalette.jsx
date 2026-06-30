import { useState, useEffect, useRef, useMemo } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  FiSearch, FiArrowRight, FiUser, FiCpu, FiBriefcase, FiAward,
  FiFolder, FiMapPin, FiBookOpen, FiEdit3, FiMail, FiGithub, FiLinkedin, FiSun, FiMoon, FiCornerDownLeft,
} from 'react-icons/fi'
import './CommandPalette.css'

function CommandPalette({ darkMode, setDarkMode }) {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [active, setActive] = useState(0)
  const inputRef = useRef(null)
  const listRef = useRef(null)

  const actions = useMemo(() => [
    { id: 'about', label: 'About', hint: 'Who I am', icon: FiUser, type: 'nav', target: '#about' },
    { id: 'skills', label: 'Skills & Technologies', hint: 'My toolkit', icon: FiCpu, type: 'nav', target: '#skills' },
    { id: 'experience', label: 'Experience', hint: 'Career history', icon: FiBriefcase, type: 'nav', target: '#experience' },
    { id: 'certifications', label: 'Certifications', hint: 'Credentials', icon: FiAward, type: 'nav', target: '#certifications' },
    { id: 'projects', label: 'Projects', hint: 'Things I built', icon: FiFolder, type: 'nav', target: '#projects' },
    { id: 'travel', label: 'Travel', hint: 'Places I\'ve been', icon: FiMapPin, type: 'nav', target: '#travel' },
    { id: 'journal', label: 'Travel Journal', hint: 'Read the blog', icon: FiBookOpen, type: 'nav', target: '#/blog' },
    { id: 'guestbook', label: 'Guestbook', hint: 'Leave a note', icon: FiEdit3, type: 'nav', target: '#guestbook' },
    { id: 'theme', label: 'Toggle theme', hint: 'Light / dark', icon: darkMode ? FiSun : FiMoon, type: 'action', run: () => setDarkMode(d => !d) },
    { id: 'github', label: 'GitHub', hint: 'github.com/Chaitrapula', icon: FiGithub, type: 'link', target: 'https://github.com/Chaitrapula' },
    { id: 'linkedin', label: 'LinkedIn', hint: 'Connect with me', icon: FiLinkedin, type: 'link', target: 'https://www.linkedin.com/in/chaitra-pula-b746a3135/' },
    { id: 'email', label: 'Email', hint: 'chaitrapula9@gmail.com', icon: FiMail, type: 'link', target: 'mailto:chaitrapula9@gmail.com' },
  ], [darkMode, setDarkMode])

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return actions
    return actions.filter(a =>
      a.label.toLowerCase().includes(q) || a.hint.toLowerCase().includes(q)
    )
  }, [query, actions])

  useEffect(() => {
    const onKey = (e) => {
      const isMod = e.metaKey || e.ctrlKey
      if ((isMod && e.key.toLowerCase() === 'k') ||
          (e.key === '/' && !/input|textarea/i.test(document.activeElement?.tagName))) {
        e.preventDefault()
        setOpen(o => !o)
      }
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    if (open) {
      setQuery('')
      setActive(0)
      setTimeout(() => inputRef.current?.focus(), 40)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => { setActive(0) }, [query])

  const runAction = (action) => {
    if (!action) return
    if (action.type === 'nav') {
      if (action.target.startsWith('#/')) {
        window.location.hash = action.target
      } else {
        const el = document.querySelector(action.target)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' })
        } else {
          window.location.hash = action.target
        }
      }
    } else if (action.type === 'link') {
      window.open(action.target, action.target.startsWith('http') ? '_blank' : '_self', 'noopener')
    } else if (action.type === 'action') {
      action.run()
    }
    setOpen(false)
  }

  const onListKey = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setActive(i => Math.min(i + 1, results.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActive(i => Math.max(i - 1, 0))
    } else if (e.key === 'Enter') {
      e.preventDefault()
      runAction(results[active])
    }
  }

  useEffect(() => {
    const el = listRef.current?.querySelector('[data-active="true"]')
    el?.scrollIntoView({ block: 'nearest' })
  }, [active])

  return (
    <>
      <button className="cmdk-trigger" onClick={() => setOpen(true)} aria-label="Open command palette">
        <FiSearch />
        <span>Search</span>
        <kbd>/</kbd>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="cmdk-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            onMouseDown={() => setOpen(false)}
          >
            <motion.div
              className="cmdk-panel"
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.18, ease: 'easeOut' }}
              onMouseDown={(e) => e.stopPropagation()}
              onKeyDown={onListKey}
            >
              <div className="cmdk-search">
                <FiSearch className="cmdk-search-icon" />
                <input
                  ref={inputRef}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Jump to a section, link, or command…"
                  aria-label="Command palette search"
                />
                <kbd>esc</kbd>
              </div>

              <div className="cmdk-list" ref={listRef}>
                {results.length === 0 && (
                  <div className="cmdk-empty">No matches for "{query}"</div>
                )}
                {results.map((action, i) => {
                  const Icon = action.icon
                  return (
                    <button
                      key={action.id}
                      className="cmdk-item"
                      data-active={i === active}
                      onMouseEnter={() => setActive(i)}
                      onClick={() => runAction(action)}
                    >
                      <span className="cmdk-item-icon"><Icon /></span>
                      <span className="cmdk-item-label">
                        {action.label}
                        <span className="cmdk-item-hint">{action.hint}</span>
                      </span>
                      <span className="cmdk-item-kind">
                        {action.type === 'link' ? <FiArrowRight /> : <FiCornerDownLeft />}
                      </span>
                    </button>
                  )
                })}
              </div>

              <div className="cmdk-footer">
                <span><kbd>↑</kbd><kbd>↓</kbd> navigate</span>
                <span><kbd>↵</kbd> select</span>
                <span><kbd>esc</kbd> close</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default CommandPalette
