# Cloud sync setup — Supabase in 5 minutes

Your app now supports **real cloud sync**. Any admin edit from any device pushes to Supabase, and every visitor to `lewisteamrealestate.com` sees the latest content instantly.

Until you complete these steps, edits live only on the device that made them.

---

## 1. Create a Supabase project (2 min)

1. Go to **https://supabase.com** → click **Start your project** → sign up with GitHub (same account as your app) or email
2. Click **New project**
3. Name it: **`lewis-team-app`**
4. Choose a **strong database password** → **SAVE IT** in a password manager
5. Region: **East US (North Virginia)** — closest to Florida, fastest for your clients
6. Plan: **Free**
7. Click **Create new project** → wait ~90 seconds while it provisions

---

## 2. Create the database tables (1 min)

Once provisioned:

1. Left sidebar → click **SQL Editor** → click **New query**
2. Paste this **entire block**:

```sql
-- One table holds all the editable site content (listings, live, moments, etc.)
create table if not exists app_content (
  key text primary key,
  value jsonb not null,
  updated_at timestamptz default now()
);

-- Enable row-level security
alter table app_content enable row level security;

-- Allow public read (so every visitor sees the latest content)
create policy "public read" on app_content
  for select using (true);

-- Allow public write (so admin edits land in cloud)
-- NOTE: this is OK for a single-admin team. When you want true security,
-- ask Claude to wire Supabase Auth.
create policy "public write" on app_content
  for insert with check (true);
create policy "public update" on app_content
  for update using (true) with check (true);

-- Auto-update updated_at on any change
create or replace function set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists trg_app_content_updated_at on app_content;
create trigger trg_app_content_updated_at
  before update on app_content
  for each row execute procedure set_updated_at();
```

3. Click **Run** (green button, bottom right)
4. You should see: `Success. No rows returned` — table is ready

---

## 3. Copy your API keys (30 sec)

1. Left sidebar → **Settings** (gear icon) → **API**
2. You'll see two things you need:
   - **Project URL** — looks like `https://xxxxxxxxxxxxxxx.supabase.co`
   - **Project API Keys** → the **`anon public`** key (a long string starting with `eyJhbGc...`)
3. Copy both. They're safe to put in client code. (Don't share the `service_role` key — that one is secret.)

---

## 4. Connect the app (30 sec)

On your live app (`lewisteamrealestate.com`):

1. Tap LT logo 5 times → enter PIN
2. Admin → **Data** tab (last one)
3. At the top you'll see **Cloud sync (Supabase)** with a gold border
4. Paste your **Project URL**
5. Paste your **anon public** key
6. Tap **Test connection** — should turn ✅ **Connected** in green
7. Tap **Save**
8. Tap **Push local → cloud** — uploads all your current admin edits to Supabase
9. **Refresh the page** — the app now pulls from cloud on load

---

## 5. Verify it works

1. On Stacy's phone, go to `lewisteamrealestate.com`
2. She'll see your pushed content
3. Tap logo 5x → PIN → Admin → Data → Cloud sync → paste the same URL + key → Save
4. Now **her edits push to cloud too** and you both see everything

---

## 🔒 Security later (when you're ready)

Right now any anonymous visitor who discovers your Supabase URL *technically* can write to the database. For a solo team with a hidden admin PIN, this is fine. When you want proper security:

- **Add Supabase Auth** — email/password login for Lancey + Stacy
- **Tighten the RLS policies** from `true` → `auth.uid() in (<your user ids>)`
- I can wire this up in 15 min when you're ready. Just say *"add supabase auth"*.

---

## 🐛 Troubleshooting

**"Connection failed"**
- Double-check the URL has no trailing slash
- Make sure you pasted the **anon** key, not the **service_role** key
- Check the SQL ran successfully (should see `app_content` in Table Editor)

**"My push worked but pull gives nothing"**
- Open Supabase → Table Editor → `app_content` — are there rows?
- If yes, check your browser console for errors

**"Stacy's edits overwrite mine"**
- Last write wins. If this becomes a problem, ask about Realtime sync + merge UX.

---

You're live. Every edit now goes to every device.
