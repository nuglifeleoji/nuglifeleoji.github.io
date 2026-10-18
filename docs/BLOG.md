# Editing the blog

- Navigation and the post list: `_pages/blog.html`. Posts are listed newest first.
- Published Sentry article: `_posts/2026-10-14-sentry.html` → `/blog/2026/sentry/`.
- Doodling in Autoresearch: `_posts/2026-10-18-doodling-in-autoresearch.html` → `/blog/2026/doodling-in-autoresearch/`. Its title, subtitle, body, captions, links, and references follow the source Google Doc; the Citation section is an addition for citing this blog post.
- Both articles share `assets/css/blog-post.css` and `assets/js/blog-post.js` for their reading layout, Contents, and copyable BibTeX. `assets/css/research-post.css` contains only Autoresearch-specific details. Its seven PNGs are in `assets/img/blog/doodling-in-autoresearch/`, copied without changes from `blog asset/` in Figure 1–7 order. The original asset folder is excluded from the built site.
- Edit the title, list subtitle (`description`), date, and reading time in the article's YAML front matter. The article introduction is written separately in the `<div class="deck">` block.
- The Sentry header uses `paper_authors` and `affiliation` for the byline; `equal_contribution: true` adds an asterisk beside a name. Both articles keep Contents on the left at widths of 768 px and above, and collapse it above the article on phones. An All posts link above Contents leads back to `/blog/`.
- Shared article styles: `assets/css/blog-post.css`; list styles: `assets/css/blog-index.css`.
- The list uses the article's `tags` and `categories` for clickable archive links. The `cover` appears on the list only; article figures stay within the reading column and link to their full-size originals.
- `sentry-blog-post.html` is the original writing draft, retained unchanged and excluded from the built site.

The Sentry article uses these assets:

| Asset                               | Path                                            |
| ----------------------------------- | ----------------------------------------------- |
| Cover (ACE / AgentGuard comparison) | `assets/img/blog/sentry/cover.png`              |
| ACE example                         | `assets/img/blog/sentry/example_ace.png`        |
| AgentGuard example                  | `assets/img/blog/sentry/example_agentguard.png` |
| Sentry architecture                 | `assets/img/blog/sentry/sentry_design.png`      |
| Demo poster                         | `assets/img/blog/sentry/demo_poster.jpg`        |
| Demo video                          | `assets/video/sentry_demo.mp4`                  |

All media come from the supplied `sentry-blog-assets.zip`. The source archive is excluded from the built site. Rebuild after replacing media.

For another post, add a dated file in `_posts/`, following Jekyll's `YYYY-MM-DD-title.html` or `.md` naming. Set `title`, `description`, and optionally `reading_time`, `cover`, `cover_alt`, and `tags` in its front matter. Use the theme's `post` layout for standard Markdown posts.
