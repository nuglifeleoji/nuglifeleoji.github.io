---
layout: page
title: news
permalink: /news/
description:
nav: true
nav_order: 4
---

{% assign updates = site.news | sort: "date" | reverse %}

{% if updates.size > 0 %}

<div class="news">
  {% for item in updates %}
    <p>
      <strong>{{ item.date | date: "%b %-d, %Y" }}</strong>
      {% if item.inline %}
        {{ item.content | markdownify | remove: "<p>" | remove: "</p>" }}
      {% else %}
        <a href="{{ item.url | relative_url }}">{{ item.title }}</a>
      {% endif %}
    </p>
  {% endfor %}
</div>
{% else %}
Updates will appear here soon.
{% endif %}
