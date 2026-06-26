import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiArrowLeft, FiArrowRight, FiClock, FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { getPost, adjacentPosts, formatDate } from '../lib/posts'
import './Blog.css'

function BlogPost({ slug }) {
  const post = getPost(slug)
  const [open, setOpen] = useState(null)

  const gallery = post?.gallery || []
  const close = useCallback(() => setOpen(null), [])
  const prev = useCallback(() => setOpen((i) => (i - 1 + gallery.length) % gallery.length), [gallery.length])
  const next = useCallback(() => setOpen((i) => (i + 1) % gallery.length), [gallery.length])

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

  if (!post) {
    return (
      <section className="section blog-post">
        <a href="#/blog" className="blog-back"><FiArrowLeft /> Back to journal</a>
        <h1 className="section-title" style={{ marginTop: '2rem' }}>Post not found</h1>
      </section>
    )
  }

  const { prev: prevPost, next: nextPost } = adjacentPosts(slug)

  return (
    <article className="section blog-post">
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <a href="#/blog" className="blog-back"><FiArrowLeft /> Back to journal</a>

        {post.region && <span className="section-eyebrow blog-post-eyebrow">{post.region}</span>}
        <h1 className="blog-post-title">{post.title}</h1>
        <p className="blog-post-meta">
          {post.place}
          {post.place && post.date ? ' · ' : ''}
          {formatDate(post.date)}
          <span className="blog-post-rt"><FiClock /> {post.readingTime} min</span>
        </p>

        {post.cover && (
          <div className="blog-post-cover">
            <img src={post.cover} alt={post.title} style={{ objectPosition: post.coverPos }} />
          </div>
        )}

        <div className="blog-post-body" dangerouslySetInnerHTML={{ __html: post.html }} />

        {gallery.length > 0 && (
          <div className="blog-post-gallery">
            {gallery.map((src, i) => (
              <button key={src} className="bpg-item" onClick={() => setOpen(i)}>
                <img src={src} alt={`${post.title} ${i + 1}`} loading="lazy" />
              </button>
            ))}
          </div>
        )}

        <nav className="blog-post-nav">
          {prevPost ? (
            <a href={`#/blog/${prevPost.slug}`} className="bpn-link bpn-prev">
              <FiArrowLeft />
              <span><small>Previous</small>{prevPost.title}</span>
            </a>
          ) : <span />}
          {nextPost ? (
            <a href={`#/blog/${nextPost.slug}`} className="bpn-link bpn-next">
              <span><small>Next</small>{nextPost.title}</span>
              <FiArrowRight />
            </a>
          ) : <span />}
        </nav>
      </motion.div>

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
            {gallery.length > 1 && (
              <button className="lightbox-nav lightbox-prev" onClick={(e) => { e.stopPropagation(); prev() }} aria-label="Previous"><FiChevronLeft /></button>
            )}
            <motion.img
              key={open}
              className="lightbox-img"
              src={gallery[open]}
              alt=""
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.22 }}
              onClick={(e) => e.stopPropagation()}
            />
            {gallery.length > 1 && (
              <button className="lightbox-nav lightbox-next" onClick={(e) => { e.stopPropagation(); next() }} aria-label="Next"><FiChevronRight /></button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  )
}

export default BlogPost
