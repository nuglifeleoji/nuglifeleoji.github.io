---
layout: page
title: Publications
permalink: /papers/
description:
nav: true
nav_order: 2
---

<style>
  ol.bibliography {
    display: grid;
    gap: 2.5rem;
    list-style: none;
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  ol.bibliography li {
    display: block;
    list-style: none;
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  ol.bibliography li::marker {
    content: "";
  }

  ol.bibliography li::before {
    content: none;
    display: none;
  }

  .paper-entry {
    display: grid;
    grid-template-columns: minmax(0, 280px) minmax(0, 1fr);
    gap: 1.5rem;
    align-items: start;
    font-size: 1rem;
    line-height: 1.5;
  }

  .paper-entry--text-only {
    grid-template-columns: minmax(0, 1fr);
  }

  .paper-preview {
    overflow: hidden;
    padding: 0.4rem;
    background: #fff;
    border-radius: 5px;
    box-shadow: 0 4px 16px rgb(0 0 0 / 9%);
  }

  .paper-preview a {
    display: block;
  }

  .paper-preview img {
    display: block;
    width: 100%;
    height: auto;
    max-height: 16rem;
    object-fit: contain;
  }

  .paper-content {
    min-width: 0;
  }

  .paper-title {
    color: var(--global-text-color);
    font-size: 1.18rem;
    font-weight: 600;
    line-height: 1.35;
    margin: 0 0 0.35rem;
  }

  .paper-title a {
    color: inherit;
    text-decoration: none;
  }

  .paper-title a:hover {
    text-decoration: underline;
  }

  .paper-authors {
    color: var(--global-text-color);
    font-size: 0.95rem;
    margin-bottom: 0.4rem;
  }

  .paper-authors strong {
    font-weight: 700;
  }

  .paper-venue {
    color: #355b79;
    font-size: 0.95rem;
    font-weight: 600;
    margin-bottom: 0.35rem;
  }

  html[data-theme="dark"] .paper-venue {
    color: #a7c4dc;
  }

  .paper-note {
    color: var(--global-text-color-light);
    font-size: 0.9rem;
    margin-bottom: 0.35rem;
  }

  .paper-links {
    display: flex;
    flex-wrap: wrap;
    gap: 0.35rem 0.9rem;
    margin-top: 0.5rem;
    font-size: 0.93rem;
    font-weight: 600;
  }

  .paper-links a {
    color: var(--global-text-color-light);
    text-decoration: underline;
    text-underline-offset: 0.2em;
  }

  .paper-links a:hover {
    color: var(--global-theme-color);
  }

  .paper-entry .bibtex.hidden {
    display: none;
    margin-top: 0.75rem;
    overflow-x: auto;
  }

  .paper-entry .bibtex.hidden.open {
    display: block;
  }

  @media (max-width: 767px) {
    .paper-entry {
      grid-template-columns: minmax(0, 1fr);
      gap: 1rem;
    }

    .paper-preview {
      width: 100%;
      max-width: 28rem;
    }
  }
</style>

{% bibliography --group_by none %}
