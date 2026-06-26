import { motion } from 'framer-motion'
import { FiMail, FiMapPin, FiSend } from 'react-icons/fi'
import './Contact.css'

function Contact() {
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
                <a href="mailto:chaitrapula9@gmail.com">chaitrapula9@gmail.com</a>
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

          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <textarea placeholder="Your Message" rows="5" required />
            </div>
            <button type="submit" className="form-submit">
              <FiSend /> Send Message
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact
