import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiArrowRight, FiClock } from 'react-icons/fi'
import { getAllPosts, getRegions, formatDate } from '../lib/posts'
import './Blog.css'

function BlogIndex() {
  const posts = getAllPosts()
  const regions = getRegions()
  const [filter, setFilter] = useState('All')

  const shown = filter === 'All' ? posts : posts.filter((p) => p.region === filter)

  return (
    <section className="section blog-index">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-eyebrow">Travel Journal</span>
        <h1 className="section-title">Field <em>Notes</em></h1>
        <p className="section-subtitle">
          Stories, trails, and stray clouds from the places I've wandered.
        </p>

        <div className="blog-filters">
          {['All', ...regions].map((r) => (
            <button
              key={r}
              className={`blog-chip ${filter === r ? 'is-active' : ''}`}
              onClick={() => setFilter(r)}
            >
              {r}
            </button>
          ))}
        </div>

        <div className="blog-grid">
          {shown.map((p, i) => (
            <motion.a
              key={p.slug}
              href={`#/blog/${p.slug}`}
              className="blog-card"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <div className="blog-card-media">
                {p.cover && <img src={p.cover} alt={p.title} loading="lazy" style={{ objectPosition: p.coverPos }} />}
                {p.region && <span className="blog-card-region">{p.region}</span>}
              </div>
              <div className="blog-card-body">
                <h2 className="blog-card-title">{p.title}</h2>
                <p className="blog-card-meta">
                  {p.place}
                  {p.place && p.date ? ' · ' : ''}
                  {formatDate(p.date)}
                </p>
                <p className="blog-card-excerpt">{p.excerpt}</p>
                <span className="blog-card-foot">
                  <span><FiClock /> {p.readingTime} min read</span>
                  <span className="blog-card-link">Read <FiArrowRight /></span>
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        {shown.length === 0 && (
          <p className="blog-empty">No posts in {filter} yet.</p>
        )}
      </motion.div>
    </section>
  )
}

export default BlogIndex
