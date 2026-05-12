# ABN — Aviation Business News (Wireframe)

Low-fidelity, navegable wireframe for **Aviation Business News (ABN)** — a B2B
editorial hub for commercial aviation, with four verticals: **Cabin**, **Cargo**,
**MRO** and **Regional**. The wireframe is designed to present a transformation
proposal for the current portal (aviationbusinessnews.com) into an intelligent
news hub inspired by editorial leaders such as `globo.com` and `bbc.com`.

> **What this is:** a navigable Next.js 16 app, grayscale-only, with realistic
> sitemap copy and ~48 fictitious-but-plausible aviation headlines. **No** brand
> colors, **no** real images.

---

## Running locally

```bash
cd abn
npm install        # uses .npmrc with legacy-peer-deps for Relume 1.3.x ↔ React 19
npm run dev        # http://localhost:3000
```

Other scripts:

| Command           | What it does                                           |
| ----------------- | ------------------------------------------------------ |
| `npm run dev`     | Start the Turbopack dev server                         |
| `npm run build`   | Production build — generates **70** static pages       |
| `npm run start`   | Serve the production build                             |
| `npm run lint`    | ESLint (Next.js + TypeScript)                          |

---

## Stack

- **Next.js 16.2.6** (App Router, Turbopack, async `params`/`searchParams`)
- **React 19.2.4**
- **TypeScript 5**
- **Tailwind CSS 4** (CSS-first config in `app/globals.css`)
- **@relume_io/relume-ui 1.3.1** + **@relume_io/relume-tailwind 1.3.0**

### About the Relume setup — important note for the client

The brief asked to follow the [Relume docs](https://react-docs.relume.io/) for
setup. Relume v1.3.x ships with the **Tailwind v3-style preset config**
(`module.exports = { presets: [require("@relume_io/relume-tailwind")] }`), and
its peer dependency is `react@^18`.

This project, however, was scaffolded with the latest **Next.js 16 + React 19 +
Tailwind v4**. Two divergences from the Relume docs were necessary:

1. **Peer dependency:** Relume 1.3.1 does not yet declare React 19 as a valid
   peer. We installed it with `legacy-peer-deps=true` (committed in `.npmrc`).
   This is the same posture most React-19 projects currently take with libraries
   still pinned to React 18; in practice the components work fine because they
   rely on stable React APIs.
2. **Tailwind preset:** Tailwind v4 uses CSS-first configuration (`@import
   "tailwindcss"` + `@theme` in `globals.css`), so the JS-preset format expected
   by `@relume_io/relume-tailwind` cannot be applied directly. We therefore use
   the Relume packages as **available primitives** (you can import any
   `relume-ui` component into a block) but the 28 blocks themselves are built in
   "Relume style" with plain Tailwind v4 to keep the wireframe consistent,
   grayscale and fully under our control.

If the client later migrates to Tailwind v3 to consume the full Relume preset,
the blocks are written in plain Tailwind utility classes and will continue to
work, with the Relume preset providing tokens and primitives.

---

## Wireframe philosophy

- **Grayscale only.** No brand colors. All "images" are gray placeholders
  rendered by the `.ph-img` utility in `app/globals.css` (a small CSS box with a
  checker pattern and an optional label set via `data-label`).
- **Real copy, fictitious headlines.** Sitemap labels (Cabin, Cargo, MRO,
  Regional, IFE & Connectivity, Cargo Handling, PAM Conference, …) are accurate.
  Headlines are plausible aviation B2B stories, designed to read realistically
  while remaining clearly fictional (e.g. "Emirates unveils next-gen premium
  economy cabin", "DHL expands Asia-Pacific freighter fleet", "Lufthansa
  Technik opens new MRO hangar in Manila", "ATR delivers 100th turboprop to
  regional carrier in Brazil").
- **Editorial hierarchy is the product.** Each block is sized and weighted to
  signal newsroom intent (lead vs. supporting, curated vs. chronological).

---

## Architecture — the 28 reusable blocks

Every page is composed from a small, fixed library of **28 blocks** in
`components/blocks/`. Each block is a typed React component, accepts content via
props (no hardcoded copy inside), and has a one-line JSDoc explaining its role.

### Navigation & structure (4)

| # | Block          | Purpose                                                                                       |
| - | -------------- | --------------------------------------------------------------------------------------------- |
| 1 | `Navbar`       | Primary nav with the 4 vertical dropdowns (subcategories from sitemap), search, Subscribe CTA. |
| 2 | `Breadcrumb`   | Trail used on every internal page.                                                            |
| 3 | `Footer`       | Multi-column footer with the full sitemap, social, inline newsletter.                         |
| 4 | `CategoryTabs` | Horizontal subcategory chips inside each vertical page (Latest / IFE & Connectivity / …).     |

### Hero & editorial highlights (5)

| # | Block             | Purpose                                                            |
| - | ----------------- | ------------------------------------------------------------------ |
| 5 | `HeroMain`        | Home hero — large lead + 2–3 secondary stories (BBC-style).        |
| 6 | `HeroCategory`    | Compact hero at the top of each vertical landing page.             |
| 7 | `FeaturedGrid`    | 2×2 / 3×3 grid of feature cards.                                   |
| 8 | `LatestNewsList`  | Numbered, dense "most read / latest" list with small thumbnails.   |
| 9 | `EditorsChoice`   | Curated 4-up strip with distinctive black background.              |

### Cards & listings (4)

| #  | Block               | Purpose                                                       |
| -- | ------------------- | ------------------------------------------------------------- |
| 10 | `ArticleCardLarge`  | Large card — prominent image, headline, excerpt, byline.      |
| 11 | `ArticleCardSmall`  | Compact card for sidebars and dense grids.                    |
| 12 | `ArticleListRow`    | Horizontal row (thumb + text) for long category lists.        |
| 13 | `CategorySection`   | Home-page block: vertical title + lead + 4 supporting stories. |

### Article page (5)

| #  | Block              | Purpose                                                     |
| -- | ------------------ | ----------------------------------------------------------- |
| 14 | `ArticleHeader`    | Category eyebrow, H1, dek, byline, share row.               |
| 15 | `ArticleHeroImage` | Full-width image placeholder with caption.                  |
| 16 | `ArticleBody`      | Editorial typography: drop-cap, sub-headings, pull-quote.   |
| 17 | `AuthorBio`        | Short author bio with circular portrait placeholder.        |
| 18 | `RelatedArticles`  | 3–4 related stories from the same vertical.                 |

### Engagement & conversion (4)

| #  | Block              | Purpose                                                      |
| -- | ------------------ | ------------------------------------------------------------ |
| 19 | `NewsletterCTA`    | Inline newsletter sign-up band reused everywhere.            |
| 20 | `LatestMagazines`  | "Latest specialist magazine editions" row of 4 cover cards.  |
| 21 | `EventBanner`      | Dark contrast banner for Next Event / PAM Conference.        |
| 22 | `VideocastBlock`   | Video "player" placeholder + queue of upcoming episodes.     |

### Institutional & utility (4)

| #  | Block               | Purpose                                                        |
| -- | ------------------- | -------------------------------------------------------------- |
| 23 | `PageHeader`        | Generic header for About / Contact / Terms / Privacy / …       |
| 24 | `TeamGrid`          | "Meet the Team" / "People & Workplaces" grid.                  |
| 25 | `ContactForm`       | Contact form with topic routing (editorial / ad / events / …). |
| 26 | `RichTextContent`   | Long-form text block for Terms, Privacy, About.                |

### Special pages (2)

| #  | Block             | Purpose                                                         |
| -- | ----------------- | --------------------------------------------------------------- |
| 27 | `MagazineArchive` | Grid of magazine cover placeholders, grouped by title.          |
| 28 | `JobsBoard`       | Job-board listing layout for `/jobs`.                           |

---

## Route map

| Route                                | Implementation                              | Notes                                                                 |
| ------------------------------------ | ------------------------------------------- | --------------------------------------------------------------------- |
| `/`                                  | `app/page.tsx`                              | Composed home: hero → category sections (×4) → featured / editors → videocast → newsletter → event → latest → magazine. |
| `/[category]`                        | `app/[category]/page.tsx`                   | Single template for Cabin/Cargo/MRO/Regional. `generateStaticParams` returns the 4 slugs; `dynamicParams = false`. |
| `/[category]/[article]`              | `app/[category]/[article]/page.tsx`         | Article page nested under its category for SEO. `generateStaticParams` returns all 48 article slugs. |
| `/about`                             | `app/about/page.tsx`                        | About ABN, mission, vertical structure, editorial standards.          |
| `/about/team`                        | `app/about/team/page.tsx`                   | Meet the Team grid.                                                   |
| `/about/people-workplaces`           | `app/about/people-workplaces/page.tsx`      | People & Workplaces — commercial/ops/events/design teams.             |
| `/contact`                           | `app/contact/page.tsx`                      | Contact form with topic routing.                                       |
| `/advertise`                         | `app/advertise/page.tsx`                    | Audience, channels, contact for media kit.                            |
| `/jobs`                              | `app/jobs/page.tsx`                         | Jobs board with category, location, type, posted date.                |
| `/magazines`                         | `app/magazines/page.tsx`                    | Latest Magazine Editions — grids per title (Cabin/Cargo/MRO/Regional).|
| `/events`                            | `app/events/page.tsx`                       | Next Event + Partner Events 2026 + PAM section anchor.                |
| `/newsletter`                        | `app/newsletter/page.tsx`                   | Newsletter description + sign-up.                                     |
| `/subscribe`                         | `app/subscribe/page.tsx`                    | Magazine subscription tiers (single digital / single + print / bundle).|
| `/videocast`                         | `app/videocast/page.tsx`                    | Videocast + episode archive.                                          |
| `/editors-choice`                    | `app/editors-choice/page.tsx`               | Curated strip + long-reads grid.                                      |
| `/terms`                             | `app/terms/page.tsx`                        | Terms & Conditions.                                                   |
| `/privacy`                           | `app/privacy/page.tsx`                      | Privacy Policy.                                                       |

Subcategories (IFE & Connectivity, Cargo Handling, Engines / APUs, etc.) are
intentionally **filters on the vertical page** via `CategoryTabs` rather than
dedicated routes — this keeps the scope manageable and the site scalable, as
specified in the brief.

Every `page.tsx` exports a `metadata` object (`title` + `description`) using the
full English vertical name for SEO.

---

## Mock data

`lib/mock-articles.ts` exports a typed `Article` interface and 48 fictitious
articles distributed across the four verticals (12 each). Each article has:

```ts
{
  id, slug, title, excerpt,
  category: "cabin" | "cargo" | "mro" | "regional",
  subcategory,                // matches a label in lib/sitemap.ts
  author, authorBio,
  date,                       // ISO
  readTime,                   // minutes
  imagePlaceholder,           // label shown on the gray .ph-img
  featured?, editorsChoice?,
}
```

Helpers: `getArticlesByCategory`, `getArticleBySlug`, `getFeatured`,
`getEditorsChoice`, `getLatest`, `getRelated`, `formatDate`.

`lib/sitemap.ts` exports `VERTICALS` (with subcategories matching the brief) and
the multi-column `FOOTER_LINKS` structure consumed by `Footer`.

---

## File map

```
abn/
├─ app/
│  ├─ layout.tsx                 # wraps every page with Navbar + Footer
│  ├─ page.tsx                   # home
│  ├─ globals.css                # Tailwind v4 + wireframe tokens (.ph-img, .prose-editorial)
│  ├─ [category]/
│  │  ├─ page.tsx                # Cabin / Cargo / MRO / Regional
│  │  └─ [article]/page.tsx      # Article page nested under category
│  ├─ about/ {page, team, people-workplaces}
│  ├─ contact, advertise, jobs, magazines, events,
│  ├─ newsletter, subscribe, videocast, editors-choice,
│  └─ terms, privacy
├─ components/blocks/            # the 28 reusable blocks
├─ lib/
│  ├─ cn.ts                      # class-name helper
│  ├─ sitemap.ts                 # VERTICALS, FOOTER_LINKS
│  └─ mock-articles.ts           # 48 mock articles + helpers
├─ .npmrc                        # legacy-peer-deps for Relume ↔ React 19
└─ README.md
```

---

## Verified

- `npm run build` succeeds and prerenders **70 static pages** (home, 4
  vertical landings, 48 articles, 17 institutional pages, and the not-found).
- All routes referenced from `Navbar` and `Footer` exist.
- TypeScript `tsc --noEmit` passes with no errors.

## Known divergence from the brief

- The Relume Tailwind preset is **not** applied because the project is on
  Tailwind v4 (preset configs are a v3 concept). The Relume **UI** package is
  installed and available; blocks are built in Relume style with plain Tailwind
  v4 to keep the wireframe coherent. See the "About the Relume setup" section
  above for the full rationale.
