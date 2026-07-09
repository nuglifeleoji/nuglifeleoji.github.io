---
layout: page
title: papers
permalink: /papers/
description:
nav: true
nav_order: 2
---

<style>
  .publications ol.bibliography {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .publications ol.bibliography li {
    margin: 0 0 2rem;
  }

  .paper-entry {
    font-size: 1.12rem;
    line-height: 1.34;
  }

  .paper-title {
    color: #563f88;
    font-size: 1.35rem;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 0.2rem;
  }

  .paper-authors {
    color: var(--global-text-color);
    font-size: 1.08rem;
    margin-bottom: 0.24rem;
  }

  .paper-authors strong {
    font-weight: 700;
  }

  .paper-venue {
    font-size: 1.02rem;
    font-style: italic;
    margin-bottom: 0.12rem;
  }

  .paper-note {
    color: var(--global-text-color);
    font-size: 0.95rem;
    margin-bottom: 0.1rem;
  }

  .paper-links {
    font-size: 1rem;
  }

  .paper-links a::before {
    color: var(--global-text-color);
    content: "[";
  }

  .paper-links a::after {
    color: var(--global-text-color);
    content: "]";
  }

  .paper-links a + a {
    margin-left: 0.25rem;
  }

  .paper-entry .bibtex.hidden {
    margin-top: 0.5rem;
  }
</style>

{% bibliography --group_by none %}
