// Guestbook store.
//
// When Supabase is configured (src/lib/supabaseConfig.js), notes are stored in
// a shared `notes` table via the Supabase REST API, so every visitor sees the
// same notes. Otherwise it falls back to localStorage (per-browser, not shared).

import { SUPABASE_URL, SUPABASE_ANON_KEY, hasSupabase } from './supabaseConfig'

const KEY = 'guestbook-notes-v1'
const REST = `${SUPABASE_URL}/rest/v1/notes`
const headers = {
  apikey: SUPABASE_ANON_KEY,
  Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
  'Content-Type': 'application/json',
}

/* ---------- localStorage fallback ---------- */
function localRead() {
  try {
    const raw = localStorage.getItem(KEY)
    const saved = raw ? JSON.parse(raw) : []
    return Array.isArray(saved) ? saved : []
  } catch {
    return []
  }
}
function localWrite(notes) {
  try {
    localStorage.setItem(KEY, JSON.stringify(notes))
  } catch {
    /* ignore */
  }
}

/* ---------- public API (async) ---------- */
export async function getNotes() {
  if (hasSupabase) {
    const res = await fetch(`${REST}?select=*&order=created_at.desc&limit=200`, { headers })
    if (!res.ok) throw new Error(`Supabase ${res.status}`)
    const rows = await res.json()
    return rows.map((r) => ({ id: r.id, name: r.name, message: r.message, date: r.created_at }))
  }
  return localRead()
    .slice()
    .sort((a, b) => (a.date < b.date ? 1 : -1))
}

export async function addNote({ name, message }) {
  const clean = { name: name.trim().slice(0, 40), message: message.trim().slice(0, 280) }

  if (hasSupabase) {
    const res = await fetch(REST, {
      method: 'POST',
      headers: { ...headers, Prefer: 'return=representation' },
      body: JSON.stringify(clean),
    })
    if (!res.ok) throw new Error(`Supabase ${res.status}`)
    const [row] = await res.json()
    return { id: row.id, name: row.name, message: row.message, date: row.created_at }
  }

  const note = { id: `n_${Date.now()}`, ...clean, date: new Date().toISOString() }
  const notes = localRead()
  notes.push(note)
  localWrite(notes)
  return note
}

export function formatNoteDate(iso) {
  const d = new Date(iso)
  if (isNaN(d)) return ''
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
}
