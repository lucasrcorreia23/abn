<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# ABN — 28-block hard cap

This site is composed exclusively from a fixed library of **28 reusable blocks**
in `components/blocks/`. This is a **hard cap**, not a target.

**Rule:** the count must stay at 28 — no more, no fewer.

- If you need to add a new block, you must **remove an existing block first** to
  make room. Identify the weakest block in the current library, justify the
  replacement, then delete it (file + every page import) in the same change.
- If you find yourself reaching for a new file in `components/blocks/`, stop:
  first check whether the work can be done by composing existing blocks or by
  extending one of them with new props.
- Inline one-off layout in a `page.tsx` is **not** a block and does not count
  against the cap. Sub-components used internally by a block (in the same file
  or in a private folder) also do not count.
- The cap covers only top-level files directly under `components/blocks/`.

**The current 28 blocks** (`components/blocks/`):

1. `Navbar`
2. `Breadcrumb`
3. `Footer`
4. `CategoryTabs`
5. `HeroMain`
6. `HeroCategory`
7. `FeaturedGrid`
8. `LatestNewsList`
9. `EditorsChoice`
10. `ArticleCardLarge`
11. `ArticleCardSmall`
12. `ArticleListRow`
13. `CategorySection`
14. `ArticleHeader`
15. `ArticleHeroImage`
16. `ArticleBody`
17. `AuthorBio`
18. `RelatedArticles`
19. `MagazineSubscribeCTA`
20. `LatestMagazines`
21. `EventBanner`
22. `VideocastBlock`
23. `PageHeader`
24. `TeamGrid`
25. `ContactForm`
26. `RichTextContent`
27. `MagazineArchive`
28. `JobsBoard`

If you add or remove a block, update this list **in the same commit**, and
update the block table in `README.md` to match.

Before merging any change that touches `components/blocks/`, verify the count:

```bash
ls components/blocks | wc -l    # must equal 28
```
