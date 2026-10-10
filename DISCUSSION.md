# Portfolio Discussion — Q&A Session

> **Date:** 2026-10-10
> **Purpose:** Capture every decision from the grilling session so the portfolio
> build matches the real goal. Update this file as things change.

---

## 1. Goal & Audience

| Question | Answer |
|---|---|
| **Primary outcome** | Land a full-time job |
| **Experience level** | **Junior (0–2 years)** — early career |
| **Positioning / title** | **Backend-leaning Full Stack Developer** (Node.js + Laravel + APIs + DBs) |
| **Timeline** | **1–2 weeks** to live & job-ready |
| **Work experience** | ❌ No formal work — only personal & school projects |

### Implications
- The site must scream "**junior with serious backend depth**" — rare combo, that's the edge.
- Experience section will be **reframed** as a **Journey / Project Timeline** (no fake jobs).
- Recruiters judge juniors on: clean GitHub ✅, real deployed projects ⚠️, clarity of communication.

---

## 2. Skills & Positioning

**Strongest skill to spotlight:** Backend heavy —

- **Node.js** — APIs, servers
- **Laravel (PHP)** — full apps, admin, CRUD
- **Databases**
- **Queues** (background jobs)
- **WebSockets** (real-time)
- **WebRTC** (voice/video)

**Positioning statement:**
> "Backend-leaning Full Stack Developer — I build the parts that are hard to
> fake: real-time systems, queues, APIs, and databases."

---

## 3. Projects

### ⭐ STAR PROJECT: Chat / Real-Time App (WebSockets + WebRTC)
- Will be the **headline project** of the portfolio.
- Must be deployed live if possible (flagship).

### Project inventory status
| Item | Status |
|---|---|
| Projects exist | ✅ Yes |
| Deployed live | ❌ None yet |
| GitHub repos public & clean | ✅ Yes |
| Deployment plan | ⚠️ **Some deployable — needs help with the tricky ones** (queues, WS, WebRTC, MySQL, Laravel) |

### Action items — deployment
1. Identify which projects are easiest to deploy (Vercel for Next.js frontends).
2. Flagship chat app → try **Render / Fly.io free tier** (WebSockets supported).
3. Laravel apps → check Render/Fly MySQL-compatible options or use SQLite for demo.
4. For undeployable projects → **screenshots / GIFs / demo videos** instead.

---

## 4. Design & UX

| Question | Answer |
|---|---|
| **Design personality** | 🖥️ **Dark, terminal/hacker aesthetic (code vibes)** |
| **Hero** | **Live terminal-style interactive typing animation** |
| **Extras chosen** | Terminal interactive hero only (no blog/testimonials/GitHub stats for now) |
| **Language** | 🇬🇧 English main now → 🇹🇭 Thai version **later** (language toggle) |

### Action items — design
- [x] ~~Restyle from indigo theme → terminal/hacker look~~ ✅ DONE (phosphor green on black, mono font, scanlines, glow, blinking caret)
- [x] ~~Build typing-animation terminal hero~~ ✅ DONE (`TerminalHero.tsx`: `whoami`, `cat stack.txt`, `./open_to_work.sh`, loops, respects reduced motion)
- [ ] Keep future i18n structure in mind (EN now, TH later)

---

## 5. Contact, Logistics & Assets

| Question | Answer |
|---|---|
| **Socials** | ✅ GitHub + LinkedIn accounts **ready** — links received |
| **Email** | ✅ `nayhtetkhant.dev@gmail.com` |
| **Job setup** | 🇹🇭 **On-site in Thailand** + **remote for foreign companies** |
| **Resume** | ✅ **Ready to upload** → goes to `public/resume.pdf` |

### ✅ Links received (2026-10-10)

| Item | Value |
|---|---|
| GitHub | https://github.com/nayhtetkhant |
| LinkedIn | https://www.linkedin.com/in/nay-htet-khant-43a6a7389/ |
| Email | nayhtetkhant.dev@gmail.com |
| Name | Nay Htet Khant |
| Location | Thailand |

### ✅ Real projects discovered from GitHub (7 repos)

| Repo | Stack | Notes |
|---|---|---|
| **chatn-web** | Next.js / TypeScript | ⭐ ChatN frontend — STAR PROJECT |
| **chatn-api** | PHP / Laravel / Blade | ChatN backend API |
| **chatn-main** | Docker Compose, Caddy, LiveKit | ChatN infra (real-time video layer) |
| **ricemill-api** | PHP / Laravel / Blade | Most recent (Oct 2026) — business workflows |
| **rtc-poc** | TypeScript | WebRTC proof-of-concept |
| **mvc-poc** | PHP | MVC framework written from scratch |
| **user-management** | HTML / PHP | Auth & CRUD fundamentals |

**Repo link for ChatN in portfolio** → points to `chatn-web` (frontend). Consider linking `chatn-api` + `chatn-main` in the description later.

### Action items
- [ ] Upload resume PDF to `public/resume.pdf`
- [ ] ~~Update GitHub/LinkedIn/email in `lib/data.ts`~~ ✅ DONE
- [ ] ~~Add "Open to Work" line~~ ✅ DONE (green badge in hero)

---

## 6. Content Plan (sections for the site)

1. **Hero** — terminal-style intro: name, "backend-leaning full stack", availability
2. **About** — junior story, self-directed learning, backend passion
3. **Skills** — grouped: Node · Laravel · Databases · Queues/WS/WebRTC · Frontend
4. **⭐ Featured Project** — real-time chat app (deployed, live demo)
5. **Projects** — other repos with screenshots/GIFs where not deployed
6. **Journey / Timeline** — replaces "Experience": self-taught → school projects → portfolio
7. **Contact** — GitHub, LinkedIn, email, resume download
8. **Footer** — "Open to: on-site Thailand / remote international"

---

## 7. Open Questions (next session)

- [ ] Which specific projects go on the site? (names, descriptions, links)
- [ ] Which projects can we deploy first? (prioritize flagship chat app)
- [ ] Share real GitHub / LinkedIn / email
- [ ] Resume file upload
- [ ] Thai translation content (later)
- [ ] Domain name? (e.g., `yourname.dev`) + hosting (Vercel free tier recommended)

---

## 8. Current Build Status

- ✅ Next.js 16 + TypeScript + Tailwind v4 scaffolded at `/home/nayhtetkhant/portfolio`
- ✅ Sections built: Navbar, Hero, About, Skills, Projects, Experience, Contact, Footer
- ✅ Build passes (`npm run build`), lint clean, static prerender OK
- ✅ All editable content centralized in `lib/data.ts`
- ✅ Real content filled in (name, links, 5 real projects, journey)
- ✅ Terminal/hacker restyle + interactive typing hero (`TerminalHero.tsx`)
- ⏳ **To do:** real content polish, deployment, resume upload, Thai version

---

*This file is the source of truth for portfolio decisions. Update it whenever we make a change.*
