import { load as yamlLoad } from 'js-yaml'
import { marked } from 'marked'

const files = import.meta.glob('../content/travel/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
})

function parse(raw) {
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/)
  if (!m) return { meta: {}, body: raw }
  let meta = {}
  try {
    meta = yamlLoad(m[1]) || {}
  } catch {
    meta = {}
  }
  return { meta, body: m[2] }
}

const posts = Object.entries(files)
  .map(([path, raw]) => {
    const { meta, body } = parse(raw)
    const slug = meta.slug || path.split('/').pop().replace(/\.md$/, '')
    return {
      slug,
      title: meta.title || slug,
      place: meta.place || '',
      region: meta.region || '',
      date: meta.date || '',
      cover: meta.cover || '',
      coverPos: meta.coverPos || 'center',
      gallery: Array.isArray(meta.gallery) ? meta.gallery : [],
      excerpt: meta.excerpt || '',
      readingTime: Math.max(1, Math.round(body.split(/\s+/).length / 200)),
      html: marked.parse(body),
    }
  })
  .sort((a, b) => (a.date < b.date ? 1 : -1))

export function getAllPosts() {
  return posts
}

export function getPost(slug) {
  return posts.find((p) => p.slug === slug)
}

export function getRegions() {
  return [...new Set(posts.map((p) => p.region).filter(Boolean))]
}

export function adjacentPosts(slug) {
  const i = posts.findIndex((p) => p.slug === slug)
  return {
    prev: i > 0 ? posts[i - 1] : null,
    next: i >= 0 && i < posts.length - 1 ? posts[i + 1] : null,
  }
}

export function formatDate(d) {
  if (!d) return ''
  const dt = new Date(d)
  if (isNaN(dt)) return d
  return dt.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
}
