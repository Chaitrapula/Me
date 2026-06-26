import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiCamera, FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import './PhotoGallery.css'

const photos = [
  { src: '/travel/travel-01.jpg', title: 'Taj Mahal', place: 'Agra' },
  { src: '/travel/travel-02.jpg', title: 'Dal Lake', place: 'Kashmir' },
  { src: '/travel/travel-03.jpg', title: 'Tulip Garden', place: 'Srinagar' },
  { src: '/travel/travel-04.jpg', title: 'Prayer Flags', place: 'Tawang' },
  { src: '/travel/travel-05.jpg', title: 'Monastery', place: 'Tawang' },
  { src: '/travel/travel-06.jpg', title: 'On the trail', place: 'Meeshapulimala' },
  { src: '/travel/travel-07.jpg', title: 'Grasslands', place: 'Kolukkumalai' },
  { src: '/travel/travel-08.jpg', title: 'First snow', place: 'Kashmir' },
  { src: '/travel/travel-09.jpg', title: 'Stone temple', place: 'Karnataka' },
  { src: '/travel/travel-10.jpg', title: 'By the shore', place: 'Gokarna' },
  { src: '/travel/travel-11.jpg', title: 'Still waters', place: 'Dhanushkodi' },
  { src: '/travel/travel-12.jpg', title: 'Misty roads', place: 'Western Ghats' },
  { src: '/travel/travel-13.jpg', title: 'Into the woods', place: 'Wayanad' },
  { src: '/travel/travel-14.jpg', title: 'Lost in fog', place: 'Western Ghats' },
  { src: '/travel/travel-15.jpg', title: 'Birdsong', place: 'Dhanushkodi' },
]

function PhotoGallery() {
  const [open, setOpen] = useState(null)

  const close = useCallback(() => setOpen(null), [])
  const prev = useCallback(() => setOpen((i) => (i - 1 + photos.length) % photos.length), [])
  const next = useCallback(() => setOpen((i) => (i + 1) % photos.length), [])

  useEffect(() => {
    if (open === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, close, prev, next])

  return (
    <div className="gallery-block">
      <span className="trek-label"><FiCamera /> Through the lens</span>

      <div className="gallery-grid">
        {photos.map((p, i) => (
          <motion.button
            key={p.src}
            className="gallery-item"
            onClick={() => setOpen(i)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: (i % 4) * 0.06 }}
          >
            <img src={p.src} alt={`${p.title}, ${p.place}`} loading="lazy" />
            <span className="gallery-caption">
              <strong>{p.title}</strong>
              {p.place}
            </span>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {open !== null && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            onClick={close}
          >
            <button className="lightbox-close" onClick={close} aria-label="Close"><FiX /></button>
            <button
              className="lightbox-nav lightbox-prev"
              onClick={(e) => { e.stopPropagation(); prev() }}
              aria-label="Previous"
            >
              <FiChevronLeft />
            </button>

            <motion.figure
              className="lightbox-figure"
              key={open}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.22 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img src={photos[open].src} alt={`${photos[open].title}, ${photos[open].place}`} />
              <figcaption>
                <strong>{photos[open].title}</strong>
                <span>{photos[open].place}</span>
              </figcaption>
            </motion.figure>

            <button
              className="lightbox-nav lightbox-next"
              onClick={(e) => { e.stopPropagation(); next() }}
              aria-label="Next"
            >
              <FiChevronRight />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default PhotoGallery
