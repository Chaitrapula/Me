// Supabase connection for the guestbook.
//
// Paste your project's values here (Supabase dashboard → Project Settings → API).
// The anon/public key is SAFE to expose in client code — that's its purpose.
// Access is controlled by Row Level Security policies on the `notes` table.
//
// Leave these empty to keep the guestbook in local-only mode (localStorage).

export const SUPABASE_URL = 'https://bxvcikgsyeepcghyxgsi.supabase.co'
export const SUPABASE_ANON_KEY = 'sb_publishable_VXyOyVJL7G4UhpZtN7CgWw_u7S8Julk'

export const hasSupabase = Boolean(SUPABASE_URL && SUPABASE_ANON_KEY)
