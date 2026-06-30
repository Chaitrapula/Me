import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiMapPin, FiSend, FiCheck } from 'react-icons/fi'
import './Contact.css'

const TO_EMAIL = 'chaitrapula9@gmail.com'

function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = `Portfolio message from ${name || 'someone'}`
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`
    const mailto = `mailto:${TO_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailto
    setSent(true)
    setTimeout(() => setSent(false), 6000)
  }

  return (
    <section id="contact" className="section">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-eyebrow">07 — Contact</span>
        <h2 className="section-title">Get In <em>Touch</em></h2>
        <p className="section-subtitle">Let's build something together</p>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <FiMail className="contact-icon" />
              <div>
                <h4>Email</h4>
                <a href={`mailto:${TO_EMAIL}`}>{TO_EMAIL}</a>
              </div>
            </div>
            <div className="contact-item">
              <FiMapPin className="contact-icon" />
              <div>
                <h4>Location</h4>
                <p>Bengaluru, India</p>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                placeholder="Your Message"
                rows="5"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="form-submit">
              {sent ? <><FiCheck /> Opening your email app…</> : <><FiSend /> Send Message</>}
            </button>
            {sent && (
              <p className="form-note">
                If nothing opened, email me directly at <a href={`mailto:${TO_EMAIL}`}>{TO_EMAIL}</a>.
              </p>
            )}
          </form>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact
