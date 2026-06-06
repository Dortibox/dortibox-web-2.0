# DortiBox Web — Next.js + Sanity

DortiBox 2.0 website — built with Next.js 15 (App Router), Sanity CMS, and Tailwind CSS.

---

## Quick Start

### 1. Install dependencies

```bash
npm install
```

### 2. Create a Sanity project

```bash
npx sanity init
```

Follow the prompts. Select "Create new project", name it "DortiBox", dataset: `production`.

### 3. Configure environment variables

```bash
cp .env.local.example .env.local
```

Fill in:
- `NEXT_PUBLIC_SANITY_PROJECT_ID` — from sanity.io/manage
- `SANITY_API_READ_TOKEN` — generate at sanity.io/manage → API → Tokens (Viewer role)
- `SANITY_REVALIDATE_SECRET` — run: `openssl rand -base64 32`

### 4. Run development server

```bash
npm run dev
```

- Site: http://localhost:3000
- Sanity Studio: http://localhost:3000/studio

---

## Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| CMS | Sanity v3 |
| Styling | Tailwind CSS |
| Fonts | Poppins (headings) + Open Sans (body) |
| Hosting | Vercel |
| Images | Sanity CDN via `@sanity/image-url` |

---

## Brand Tokens

| Token | Value | Usage |
|---|---|---|
| `forest` | `#3A6B4A` | DortiBox primary — consumer sections |
| `amber` | `#E8A020` | CTAs, highlights |
| `navy` | `#2A3663` | FWT corporate — investor/partner sections |
| `gold` | `#B59F78` | FWT accent |
| `sage` | `#D8DBBD` | Subtle backgrounds, borders |
| `offwhite` | `#FAF6E3` | Page backgrounds |

---

## Project Structure

```
app/(site)/         Public-facing pages
app/studio/         Sanity Studio (co-located)
app/api/revalidate/ ISR webhook
components/
  global/           Navbar, Footer, AudienceBanner, USSDCallout
  sections/         Full-width page sections
  cards/            TeamMemberCard, BlogPostCard, CustomerCard, PartnerCard
  ui/               Button, Badge, SectionHeading, PortableTextRenderer
sanity/
  lib/              client.ts, queries.ts, image.ts
  schemas/          All schema definitions
```

---

## ISR Revalidation (Sanity webhook)

Set up in Sanity Dashboard → API → Webhooks:

- URL: `https://dortibox.com/api/revalidate?secret=YOUR_SECRET`
- Trigger on: Create, Update, Delete
- Filter: all document types

---

## USSD Code

Current: `*715*380#`  
Managed via Sanity → Site Settings → USSD Code
