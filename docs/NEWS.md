# Editing homepage News

News appears directly below Things I Like on the homepage, using the site's `_news` collection. It shows dated bullet points, newest first.

Add one Markdown file per update in `_news/`, for example `_news/2026-11-12-my-update.md`:

```markdown
---
layout: post
title: A short title for the update
date: 2026-11-12 00:00:00 -0800
inline: true
---

Write the update here. Use **bold** for emphasis and [links](https://example.com) where useful.
```

Use the actual date of the announcement. The homepage displays only the month and year, such as `(Nov, 2026)`. Keep inline updates to one short paragraph.

In `_pages/about.md`, `announcements.enabled` controls visibility and `announcements.limit` controls how many updates are shown. Leave the limit blank to show all entries. If there are no entries, the section shows “Updates coming soon.”

The site-specific presentation lives in `_includes/home-news.liquid`, included by the existing `_layouts/about.liquid` override. Colors follow the site's light and dark themes.
