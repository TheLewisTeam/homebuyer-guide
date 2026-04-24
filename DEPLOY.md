# Deploying The Lewis Team app

You own `lewisteamrealestate.com` at GoDaddy. There are two good ways to put the app live. Pick one.

---

## 🏆 Path A — Vercel (recommended)

**Why:** Free forever for this level of traffic. Auto-deploys every time you (or Claude) push a change. Global CDN so it loads fast everywhere. Automatic HTTPS. GoDaddy keeps owning the domain.

### Step 1 — Push the code to GitHub
1. Create a free GitHub account (if you don't have one) at [github.com](https://github.com)
2. Create a new empty repo named `lewis-team-app`
3. In this project folder, run:
   ```bash
   git init
   git add .
   git commit -m "Initial deploy"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/lewis-team-app.git
   git push -u origin main
   ```

### Step 2 — Connect to Vercel
1. Go to [vercel.com/new](https://vercel.com/new) and sign in with GitHub
2. Import the `lewis-team-app` repo
3. Framework preset will auto-detect **Vite** — accept the defaults
4. Click **Deploy**. In ~90 seconds you'll get a URL like `lewis-team-app.vercel.app`

### Step 3 — Point your GoDaddy domain
**Decide first: replace or subdomain?**

#### (B) Subdomain — `app.lewisteamrealestate.com`  *(recommended first move)*
1. In Vercel dashboard → your project → **Settings → Domains**
2. Add: `app.lewisteamrealestate.com`
3. Vercel will show you a CNAME record to create. Looks like:
   ```
   Type: CNAME    Name: app    Value: cname.vercel-dns.com
   ```
4. Log into **GoDaddy → your domain → DNS**
5. Click **Add** → CNAME → paste what Vercel gave you → Save
6. Wait 5-15 minutes for DNS to propagate. Your app goes live at `https://app.lewisteamrealestate.com`
7. Your existing site stays at `https://lewisteamrealestate.com`

#### (A) Replace the whole site
1. In Vercel → Domains: add both `lewisteamrealestate.com` AND `www.lewisteamrealestate.com`
2. Vercel will give you A records (usually `76.76.21.21`) and a CNAME for www
3. In **GoDaddy → DNS**:
   - Delete existing A records for `@`
   - Add the A record Vercel gave you
   - Make sure the `www` CNAME points to `cname.vercel-dns.com`
4. Wait 15–60 minutes. Your existing GoDaddy site stops showing; the app appears.

### Step 4 — Every future update is automatic
From now on, editing the code and pushing to GitHub auto-deploys. No more FTP.

---

## 🐢 Path B — Upload directly to GoDaddy cPanel

**Use this if:** You want to keep everything in GoDaddy and don't want GitHub / Vercel. Tradeoff: every update is manual.

### Step 1 — Build the app
```bash
npm run build
```
Creates a `dist/` folder with everything ready.

### Step 2 — Upload to GoDaddy
1. Log into GoDaddy → **My Products** → your Hosting → **Manage** → **cPanel Admin**
2. Open **File Manager**
3. Navigate to `public_html/` (the root of your website)
4. **Option 2a (Replace):** Delete everything currently in `public_html/`. Upload every file from `dist/` into `public_html/`.
4. **Option 2b (Subdomain):**
   - In cPanel: **Subdomains** → create `app.lewisteamrealestate.com`, document root `public_html/app`
   - Upload every file from `dist/` into `public_html/app/`
5. The included `.htaccess` file handles SPA routing + forces HTTPS. GoDaddy's Apache picks it up automatically.

### Step 3 — Updating later
Every time Claude (or you) change the code:
1. Run `npm run build` again
2. Re-upload the fresh `dist/` contents to cPanel (overwrite all)

---

## 🎯 My recommendation

**Do Path A + Subdomain first** (`app.lewisteamrealestate.com`):
- Free, auto-deploys, fast
- Existing site stays safe while you test the app with clients
- You can flip to the root domain anytime by adjusting one DNS record

Tell me which path you want and I'll walk you through the exact clicks, or — if you want — you can share your GoDaddy + GitHub credentials with a developer you trust (never paste them in chat) and have them do it in 10 minutes.

---

## Quick reference

**Production build folder:** `dist/`
**Total size:** ~59MB (the 50MB featured video is optional — delete `public/brand/video/featured.mp4` before building if you want a lighter deploy)
**HTTPS:** Enforced via `.htaccess` (Path B) or automatic (Path A, Vercel)
**Custom 404:** Not needed — `.htaccess` + Vercel config serve index.html for all unknown routes so React handles it
