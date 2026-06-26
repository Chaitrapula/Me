import { useState, useEffect } from 'react'

function current() {
  const h = window.location.hash || ''
  if (h.startsWith('#/')) return h.slice(1) // "/blog", "/blog/slug"
  return '/'
}

export function useHashRoute() {
  const [route, setRoute] = useState(current)
  useEffect(() => {
    const onChange = () => setRoute(current())
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])
  return route
}

export function navigate(to) {
  window.location.hash = to
}
