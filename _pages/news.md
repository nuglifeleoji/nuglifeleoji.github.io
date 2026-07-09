---
layout: news-page
title: News & Highlights
permalink: /news/
description:
nav: true
nav_order: 4
---

{% assign updates = site.news | sort: "date" | reverse %}

<style>
  .news-highlights {
    --nh-accent: #8c1515;
    --nh-border: rgba(140, 21, 21, 0.18);
    background-image: radial-gradient(rgba(140, 21, 21, 0.06) 0.8px, transparent 0.8px);
    background-size: 10px 10px;
    margin: -0.25rem -0.5rem 0;
    padding: 0.35rem 0.5rem 0.2rem;
  }

  .news-highlights__header {
    align-items: center;
    border-bottom: 1px solid var(--nh-border);
    display: flex;
    justify-content: space-between;
    margin-bottom: 2.5rem;
    padding-bottom: 1.05rem;
  }

  .news-highlights__title {
    color: var(--global-text-color);
    font-family: Georgia, "Times New Roman", serif;
    font-size: clamp(2.25rem, 7vw, 4rem);
    font-weight: 400;
    letter-spacing: 0;
    line-height: 1;
    margin: 0;
  }

  .news-highlights__title span {
    color: var(--nh-accent);
  }

  .news-highlights__view-all {
    color: var(--nh-accent);
    font-family: "Courier New", monospace;
    font-size: 0.95rem;
    font-weight: 700;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    white-space: nowrap;
  }

  .news-highlights__list {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .news-highlights__item {
    display: grid;
    gap: 1.75rem;
    grid-template-columns: 9rem minmax(0, 1fr);
    margin: 0;
    padding: 0.82rem 0.08rem;
    transition: background-color 160ms ease;
  }

  .news-highlights__item:hover {
    background: rgba(140, 21, 21, 0.035);
  }

  .news-highlights__date {
    color: var(--nh-accent);
    font-family: "Courier New", monospace;
    font-size: 1rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    padding-top: 0.17rem;
    text-transform: uppercase;
  }

  .news-highlights__content {
    color: var(--global-text-color);
    font-family: Georgia, "Times New Roman", serif;
    font-size: clamp(1.18rem, 2.8vw, 1.65rem);
    line-height: 1.28;
  }

  .news-highlights__content p {
    margin: 0;
  }

  .news-highlights__content a {
    border-bottom: 2px solid var(--nh-accent);
    color: inherit;
    text-decoration: none;
  }

  .news-highlights__content a:hover {
    color: var(--nh-accent);
    text-decoration: none;
  }

  @media (max-width: 640px) {
    .news-highlights__header {
      align-items: flex-start;
      gap: 1rem;
    }

    .news-highlights__view-all {
      font-size: 0.78rem;
      letter-spacing: 0.12em;
      padding-top: 0.4rem;
    }

    .news-highlights__item {
      gap: 0.35rem;
      grid-template-columns: 1fr;
      padding: 1rem 0;
    }

    .news-highlights__date {
      font-size: 0.86rem;
      padding-top: 0;
    }
  }
</style>

<section class="news-highlights">
  <header class="news-highlights__header">
    <h1 class="news-highlights__title">News & <span>Highlights</span></h1>
    <a class="news-highlights__view-all" href="{{ '/news/' | relative_url }}">View all &rarr;</a>
  </header>

{% if updates.size > 0 %}

<ol class="news-highlights__list">
{% for item in updates %}
<li class="news-highlights__item">
<time class="news-highlights__date" datetime="{{ item.date | date_to_xmlschema }}">{{ item.date | date: "%b %Y" | upcase }}</time>
<div class="news-highlights__content">
{% if item.inline %}
{{ item.content | markdownify }}
{% else %}
<p><a href="{{ item.url | relative_url }}">{{ item.title }}</a></p>
{% endif %}
</div>
</li>
{% endfor %}
</ol>
{% else %}
<p class="news-highlights__content">Updates will appear here soon.</p>
{% endif %}

</section>
