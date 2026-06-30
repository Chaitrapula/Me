import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiSend } from 'react-icons/fi'
import { getNotes, addNote, formatNoteDate } from '../lib/guestbook'
import './Guestbook.css'

function Guestbook() {
  const [notes, setNotes] = useState([])
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('loading')
  const [posting, setPosting] = useState(false)

  const load = () => {
    setStatus('loading')
    getNotes()
      .then((rows) => {
        setNotes(rows)
        setStatus('ready')
      })
      .catch(() => setStatus('error'))
  }

  useEffect(() => {
    load()
  }, [])

  const submit = async (e) => {
    e.preventDefault()
    if (!name.trim() || !message.trim() || posting) return
    setPosting(true)
    try {
      await addNote({ name, message })
      setName('')
      setMessage('')
      const rows = await getNotes()
      setNotes(rows)
      setStatus('ready')
    } catch {
      setStatus('error')
    } finally {
      setPosting(false)
    }
  }

  return (
    <section id="guestbook" className="section guestbook">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-eyebrow">08 — Guestbook</span>
        <h2 className="section-title">Leave a <em>Note</em></h2>
        <p className="section-subtitle">Say hi, drop feedback, or just leave your mark.</p>

        <form className="gb-form" onSubmit={submit}>
          <input
            className="gb-input"
            type="text"
            placeholder="Your name"
            value={name}
            maxLength={40}
            onChange={(e) => setName(e.target.value)}
          />
          <div className="gb-row">
            <input
              className="gb-input"
              type="text"
              placeholder="Leave a message…"
              value={message}
              maxLength={280}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button
              type="submit"
              className="gb-post"
              disabled={!name.trim() || !message.trim() || posting}
            >
              <FiSend /> {posting ? 'Posting…' : 'Post'}
            </button>
          </div>
        </form>

        <div className="gb-list">
          {status === 'loading' && <p className="gb-empty">Loading notes…</p>}
          {status === 'error' && (
            <p className="gb-empty">Couldn't load notes right now. Please try again later.</p>
          )}
          {status === 'ready' && notes.length === 0 && (
            <p className="gb-empty">No notes yet — be the first to leave one.</p>
          )}

          <AnimatePresence initial={false}>
            {notes.map((n) => (
              <motion.div
                key={n.id}
                className="gb-note"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                layout
              >
                <span className="gb-avatar">{(n.name[0] || '?').toUpperCase()}</span>
                <div className="gb-body">
                  <div className="gb-meta">
                    <span className="gb-name">{n.name}</span>
                    <span className="gb-date">{formatNoteDate(n.date)}</span>
                  </div>
                  <p className="gb-message">{n.message}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  )
}

export default Guestbook
