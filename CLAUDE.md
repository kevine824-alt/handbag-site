# Sew Nerdy Bags — Project Briefing for Claude

Read this fully before touching any code or asking any questions.

---

## What This Is

A Next.js website for Sew Nerdy Bags, a mother-daughter (Elaine and Megan) handcrafted bag business based in Florida. They sell one-of-a-kind bags at conventions and events across the Southeast, and accept commissions. Kevin manages the site — he is ops and content, not the maker.

**Live site:** https://sewnerdybags.com  
**Repo:** GitHub → auto-deploys to Vercel on push  
**Local dev:** `cd "OneDrive\Documents\Cowork Playground\Sew Nerdy Bags\handbag-site"` then `npm run dev` (localhost:3000)

---

## Tech Stack

- **Next.js 14** App Router (file-based routing under `src/app/`)
- **React 18** with `'use client'` on interactive pages
- **Tailwind CSS v4** for layout and utility classes
- **No styled-jsx** — it fails silently in this project. Never use it.
- **Inline styles** for anything that can't be done with Tailwind

---

## CSS Rules — Critical

**Do not use styled-jsx.** It has caused repeated silent failures on this project. Styles appear to compile but don't apply. The working pattern is:

1. **Tailwind classes** for layout, spacing, responsive breakpoints, colors
2. **Inline `style={{}}` props** for anything beyond Tailwind's scope (custom colors, precise sizing, brand-specific values)

Working examples to follow:
- `src/app/Nav.js` — complex component, inline styles throughout
- `src/app/commission/page.js` — full page with hero + form, inline styles + Tailwind
- `src/app/our-story/page.js` — uses styled-jsx but with known workarounds; not the preferred pattern

---

## Design Language

Before building any new page, read `src/app/our-story/page.js` and `src/app/mailing-list/page.js` as reference. The site has an established visual system:

**Colors**
- Background dark: `#111827` (gray-900)
- Accent / orange: `#d97706` (amber-600) — used for borders, eyebrows, CTAs, active states
- Hover orange: `#b45309`
- Body text: `#374151` / `#6b7280`
- Light section background: `#fafaf9` (stone-50)
- Hero text: `#ffffff` and `rgba(255,255,255,0.72)`

**Typography**
- Eyebrow labels: `0.68–0.7rem`, `font-weight: 700`, `letter-spacing: 0.12em`, `text-transform: uppercase`, color `#d97706`
- Section headings: `font-weight: 700`, tight line-height (`1.1`)
- Body: `0.85–0.95rem`, `line-height: 1.7`

**Page structure pattern**
- Dark hero section (`background: #111827`, `border-bottom: 3px solid #d97706`)
- Light content / form section (`background: #fafaf9`)
- Square edges — no rounded corners anywhere
- Orange used as an accent only, never a primary background

**Mobile-first rule**
- Every page must be reviewed on mobile before pushing live
- Text and context always comes before photos on mobile — never lead with an image alone or the customer won't know where they are
- On split layouts (text left, photo right on desktop), text must stack first on mobile with photo below
- Use `order-1` on text and `order-2` on photo so mobile stacking is always text first

**Header** (`src/app/layout.js`)
- Tiled bag-pattern background behind a dark `bg-gray-900/92` pill
- Logo left, Nav right
- `max-w-6xl` container — all page content fits inside this

---

## Project Structure

```
handbag-site/
  src/
    app/
      layout.js          ← shared header/footer/nav — rarely needs changes
      page.js            ← homepage
      Nav.js             ← hamburger + desktop nav (uses React portal for mobile overlay)
      our-story/page.js  ← done
      gallery/page.js    ← done
      gallery/[slug]/    ← individual bag pages
      commission/page.js ← done (inline styles + Tailwind)
      shows/page.js      ← done
      faq/page.js        ← done
      mailing-list/page.js ← done (Klaviyo form embedded)
      contact/page.js    ← exists, needs work
    bags/                ← file-based bag content (one folder per bag, each with bag.json)
    lib/bags.js          ← getAllBags() / getBagBySlug(slug)
  public/
    images/              ← all site images; reference as /images/filename.ext
      commission.jpg     ← convention floor photo (Megan with customer)
      our-story.jpg      ← Elaine and Megan at a trade show
      hero-logo.png      ← circular fox logo (transparent background)
      logo.png           ← site logo for header
      bag-pattern.jpg    ← tiled header background
      bag-2 through bag-6.jpg ← bag photos (placeholder names, real photos)
      shows/             ← show photos
  CLAUDE.md              ← this file
```

---

## Key Components

### Nav (`src/app/Nav.js`)
- Desktop nav: `hidden lg:flex` — standard link list
- Mobile: hamburger button (`lg:hidden`) with animated lines
- Mobile overlay: rendered at `document.body` level via `createPortal` — this was necessary to escape the header's stacking context
- Active page: orange (`#d97706`), inactive: `text-gray-400`
- Body scroll locked (`overflow: hidden`) when mobile menu is open

### Layout (`src/app/layout.js`)
- Klaviyo onsite tracking script loaded via Next.js `<Script>` component (company ID: `TMcNs4`)
- Header has `relative z-50` for stacking context
- Main wrapper: `className="flex-1 mx-auto w-full max-w-6xl p-6"` — all page content is constrained to max-w-6xl with 1.5rem padding

### Bag content system
- Each bag = folder under `src/bags/` with `bag.json`
- Fields: `slug`, `name`, `description`, `images` (array)
- Bags currently have placeholder names (Bag 2–6) — real names pending

---

## Email & Marketing Infrastructure

- **Google Workspace:** kevin@, megan@, elaine@sewnerdybags.com; info@ and buildabag@ are Groups (both Megan and Elaine receive)
- **Klaviyo:** Sending domain `mail.sewnerdybags.com`; mailing list "Sew Nerdy Bags"; embedded form ID `XdKNJt` on `/mailing-list`
- **Klaviyo script** already in `layout.js`
- **Welcome email flow:** 3-email sequence built in Klaviyo, flow structure complete (Day 0, Day 3, Day 7). Content drafted and approved. Next step: fill in email content inside each block in Klaviyo starting with Email 1.

---

## DNS & Hosting

- Domain registrar: GoDaddy
- DNS: A record `@` → `216.198.79.1` (Vercel), CNAME `www` → Vercel
- Both `sewnerdybags.com` and `www.sewnerdybags.com` are on Vercel with SSL
- SEO is intentionally blocked (`robots.txt` Disallow: /, `layout.js` noindex) — site is still being refined

---

## Content & Copy Rules

Full rules in `content-rules.md`. Key points:

- **No em dashes** anywhere in copy
- **No bullet points** in page copy or FAQ — full prose only
- **No AI writing patterns:** "moreover", "furthermore", "delve into", "it's worth noting", "a testament to", "leverage", "comprehensive", "in today's world", "that being said", "breathtaking", "in order to"
- **Brand language:** "one of a kind" and "handcrafted" (not "handmade"), "hand selected" (not "carefully chosen")
- SEO value woven in naturally — not forced
- No specific timeframes or guarantees that could be read as literal policy

---

## Collaboration Rules

- Kevin approves everything before it goes live
- Always test locally (`npm run dev`) before any `git push`
- Discuss direction before touching code — Kevin is the thought leader, Claude is the builder
- Kevin is ops/content — he is not at the shows and doesn't have firsthand product knowledge. Draw that out through questions when needed.
- **Read the codebase before asking Kevin questions.** If the answer is in the repo (design patterns, available images, existing structure), find it there. Only bring questions to Kevin that genuinely require his input.

---

## Git Workflow

```
git add -A
git commit -m "description of change"
git push
```

Vercel auto-deploys on push. Always review locally first.

---

## What's Done / What's Next

**Done:**
- Homepage with split hero (fox logo), stats bar, features, CTA
- Nav with hamburger menu (mobile portal overlay)
- Our Story page
- Gallery grid + individual bag pages
- Shows page
- FAQ page (accordion)
- Commission / Create a Bag page
- Mailing list page (Klaviyo embedded)
- Email infrastructure (Google Workspace + Klaviyo)

**In progress / next:**
- Klaviyo welcome email flow — flow structure done, need to fill in email content (3 emails: Day 0 welcome, Day 3 story, Day 7 nudge with DragonCon bag)
- Contact page (needs design + form wired to email)
- Bag JSON files still have placeholder names — need real names/descriptions
- Commission form needs to be wired to email (buildabag@sewnerdybags.com)
- SEO: enable indexing when site is ready
