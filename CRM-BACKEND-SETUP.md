# CRM Backend — cloud sync with Supabase

The app ships with a **full CRM that works offline out of the box** — leads are stored in your browser's localStorage. That means the leads you collect on *your phone* stay on *your phone*.

To let Stacy (or multiple devices) see the same leads, point the CRM at a cloud backend. We recommend **Supabase** — free, production-grade, Postgres-based.

## Quick start (5 minutes)

### 1. Create a Supabase project
1. Go to [supabase.com](https://supabase.com) → sign up (free, no credit card)
2. **New project** → pick a name like `lewis-team-crm`
3. Choose a strong database password (save it somewhere)
4. Region: pick `us-east-1` or closest to Florida

### 2. Create the leads table
In Supabase dashboard → **SQL Editor** → New query → paste:

```sql
create table leads (
  id text primary key,
  name text,
  phone text,
  email text,
  type text,
  stage text,
  source text,
  budget jsonb,
  interests text,
  address text,
  notes text,
  deal_value numeric,
  close_date date,
  tags text[],
  activities jsonb default '[]',
  tasks jsonb default '[]',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Enable row-level security
alter table leads enable row level security;

-- Allow anon (app) to read + write their own team leads
-- For production, tighten this to authenticated users only.
create policy "allow all for anon" on leads
  for all using (true) with check (true);
```

### 3. Get your API keys
Dashboard → **Settings → API**
- **Project URL** (e.g. `https://xxxxx.supabase.co`)
- **anon public** API key

### 4. Wire it into the app
Open `src/App.jsx` → find the `CRM_BACKEND` block near the top and paste:

```js
const CRM_BACKEND = {
  url: 'https://xxxxx.supabase.co',
  anonKey: 'eyJhbGc...your-anon-key...',
};
```

(Or ask Claude to wire this for you.)

### 5. Migrate your existing leads
If you've already captured leads in localStorage:
1. Admin Center → CRM → Export CSV
2. In Supabase → Table Editor → `leads` → Insert rows (paste from CSV)

## Why Supabase over alternatives

| Option | Cost | Sync | Auth | Realtime | Fit |
|---|---|---|---|---|---|
| **Supabase** | Free for ~100 leads/day | ✅ | ✅ | ✅ | 🏆 |
| Firebase | Free | ✅ | ✅ | ✅ | Good |
| Airtable | Free limited | ✅ | ❌ | Partial | OK for small team |
| Google Sheets | Free | ✅ | ❌ | ❌ | Hacky |
| localStorage only (current) | Free | ❌ | N/A | N/A | Solo use |

## Security note

The CRM holds **client PII**: names, phone numbers, emails, property addresses.
- **Do not** use a public-write database without tightening RLS when you go live
- Supabase can add email/password auth in ~15 min — once you're ready, tighten the RLS policy to require login
- Ask Claude when you want to add login for Lancey + Stacy
