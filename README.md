# Intel 2 Action — Platform Architecture

## Folder Structure

```
intel2action/
│
├── app/                          # Next.js 14 App Router
│   ├── layout.tsx                # Root layout: Nav + IntelTicker + Footer + scan overlay
│   ├── page.tsx                  # / — Home / Gateway
│   ├── training/
│   │   └── page.tsx              # /training — The Academy (module grid)
│   ├── advisory/
│   │   └── page.tsx              # /advisory — Operational Frameworks & Advisory
│   ├── contact/
│   │   └── page.tsx              # /contact — Secure Briefing / Intake Terminal
│   └── api/
│       └── intake/
│           └── route.ts          # POST /api/intake — form handler (CRM integration point)
│
├── components/
│   ├── layout/
│   │   ├── Nav.tsx               # Fixed tactical navigation with active route detection
│   │   ├── IntelTicker.tsx       # Scrolling intel feed banner
│   │   └── Footer.tsx            # Sitewide footer with nav + clearance indicator
│   └── ui/
│       └── index.tsx             # Reusable components: Button, Eyebrow, SectionHeading,
│                                 #   CalloutBanner, CredentialTag, IntensityBar, Section
│
├── styles/
│   └── globals.css               # CSS variables (design tokens), scan-line overlay,
│                                 #   tactical clip-path utilities, ticker animation
│
├── public/
│   └── fonts/                    # Self-host fonts here if not using Google Fonts
│
├── tailwind.config.ts            # Extended palette: midnight/navy/charcoal/amber/cyan
├── postcss.config.mjs
├── next.config.mjs
├── tsconfig.json
└── package.json
```

---

## Design System

### Color Palette
| Token        | Hex       | Usage                              |
|--------------|-----------|------------------------------------|
| `midnight`   | `#050c17` | Page background                    |
| `navy`       | `#0a1628` | Secondary surfaces, hero bg        |
| `charcoal`   | `#0f1f38` | Hover states                       |
| `panel`      | `#14243d` | Card backgrounds, footer           |
| `border`     | `#1e3a5f` | All borders (default)              |
| `border-bright` | `#2a5080` | Emphasized borders, terminal      |
| `amber`      | `#f59e0b` | Primary accent, CTAs, headings     |
| `cyan`       | `#06b6d4` | Secondary accent, eyebrows, links  |
| `slate`      | `#94a3b8` | Body text, descriptions            |
| `ivory`      | `#f1f5f9` | Headings, primary text             |

### Typography
| Role       | Font         | Weight | Notes                        |
|------------|--------------|--------|------------------------------|
| Headlines  | Rajdhani     | 700    | All-caps, tracked            |
| Eyebrows   | Space Mono   | 400    | 0.3em spacing, uppercase     |
| Body copy  | DM Sans      | 300–400| Comfortable reading           |
| Labels/tags| Space Mono   | 400    | Micro text, monospace authority|

---

## Getting Started

```bash
# Install dependencies
npm install

# Run dev server
npm run dev
# → http://localhost:3000

# Production build
npm run build
npm start
```

---

## Page Architecture

### `/` — Home / Gateway
- **Hero:** Full-viewport impact hook with tactical grid background, radial glows, H1 with amber/cyan split accent, 3-stat bar
- **Philosophy Break:** Side-by-side comparison: Legacy Lecture Model (red dots, dimmed) vs Intel 2 Action Model (green dots, amber border)
- **Founder Section:** Operator authority block with avatar, credential tags, blockquote, and 20-year bio
- **CTA:** Callout banner to Training Grid

### `/training` — The Academy
- **Header:** Page hero with watermark "ACADEMY" text
- **Module Grid:** 2×2 responsive grid, each card has:
  - Sector tag (color-coded: gov/osint/threat/corp)
  - "// What You Learn" section (slate text, neutral bullets)
  - "// The Action Phase" section (amber text, bright bullets)
  - Intensity bar (amber or red, 1–5 pips)
- **Cohort CTA:** Bottom callout banner

### `/advisory` — Operational Frameworks & Advisory
- **Header:** B2B positioning, dual CTA
- **6-Service Grid:** 3-col responsive grid with numbered service cards
- **Engagement Protocol:** 4-phase process track in bordered container
- **Sectors Served:** Hover-state client-type tags
- **Confidentiality CTA**

### `/contact` — Secure Briefing / Intake Terminal
- **Sidebar:** Intake pathways (individual vs corporate) + response protocol
- **Terminal Form:** Styled as a macOS-esque terminal window with:
  - Dot indicators (red/yellow/green)
  - Monospace prompt header
  - Form fields: Name, Email, Org/Role, Inquiry Type, Message, Referral
  - Security notice + TLS note
  - Tactical submit button with success state

---

## API Route: `POST /api/intake`

**Payload:**
```json
{
  "firstName":    "string (required)",
  "lastName":     "string (required)",
  "email":        "string (required)",
  "organization": "string (optional)",
  "role":         "string (optional)",
  "inquiryType":  "string (required)",
  "message":      "string (required)",
  "referral":     "string (optional)"
}
```

**Integration points** (add in `app/api/intake/route.ts`):
- SendGrid / Mailgun for email notification
- Supabase / PlanetScale for encrypted intake logging
- Slack webhook for ops team notification
- CRM (HubSpot, Salesforce) contact creation

---

## Deployment

### Vercel (recommended)
```bash
npx vercel deploy
```
Set environment variables in Vercel dashboard:
- `INTAKE_EMAIL` — recipient for intake notifications
- `SENDGRID_API_KEY` — email provider key
- `DATABASE_URL` — if logging intakes to DB

### Self-hosted (Docker)
```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY . .
RUN npm ci && npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

---

## Extending the Platform

### Adding a new page
1. Create `app/[slug]/page.tsx`
2. Add route to `Nav.tsx` `NAV_LINKS` array
3. Add footer link in `Footer.tsx`
4. Export `metadata` object for SEO

### Adding a new training module
Edit the `MODULES` array in `app/training/page.tsx` — each entry is typed as `TrainingModule`.

### Adding new advisory services
Edit the `SERVICES` array in `app/advisory/page.tsx`.

---

## Brand Voice Guidelines

- **Tone:** Tactical, authoritative, operational. Never academic or passive.
- **Vocabulary:** "operational," "pipeline," "actionable," "brief," "posture," "vector," "cadence"
- **Avoid:** "learn," "study," "passive," "theory," "lecture," generic corporate filler
- **Copy rule:** Every capability claim must have an operational consequence. Not "you will learn OSINT" — "you will build a live collection pipeline."
