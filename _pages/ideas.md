---
layout: page
title: Ideas
permalink: /ideas/
description:
nav: false
nav_order: 4
sitemap: false
---

{% assign ideas = site.ideas | sort: "date" | reverse %}

{% if ideas.size > 0 %}

<div class="ideas-list">
  {% for idea in ideas %}
  <article class="mb-4">
    <h2>
      <a href="{{ idea.url | relative_url }}">{{ idea.title }}</a>
    </h2>
    {% if idea.description %}
    <p>{{ idea.description }}</p>
    {% endif %} {% if idea.date %}
    <p class="post-meta">{{ idea.date | date: "%B %-d, %Y" }}</p>
    {% endif %}
  </article>
  {% endfor %}
</div>

{% else %}

Ideas will live here soon.

{% endif %}
