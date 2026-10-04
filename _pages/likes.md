---
layout: page
title: Things I Like
permalink: /likes/
description: A few favorites, outside the lab.
nav: true
nav_order: 3
---

<style>
  .likes-gallery {
    --likes-border: var(--global-divider-color);
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  .likes-toolbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 1rem;
  }

  .likes-hint {
    margin: 0;
    color: var(--global-text-color-light);
    font-size: 0.9rem;
  }

  .likes-controls {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .likes-controls[hidden] {
    display: none;
  }

  .likes-counter {
    margin-right: 0.6rem;
    color: var(--global-text-color-light);
    font-size: 0.85rem;
    font-variant-numeric: tabular-nums;
    white-space: nowrap;
  }

  .likes-arrow {
    display: grid;
    place-items: center;
    width: 44px;
    height: 44px;
    padding: 0;
    border: 1px solid var(--likes-border);
    border-radius: 50%;
    background: var(--global-bg-color);
    color: var(--global-text-color);
    cursor: pointer;
  }

  .likes-arrow:hover:not(:disabled) {
    border-color: var(--global-theme-color);
    color: var(--global-theme-color);
  }

  .likes-arrow:disabled {
    opacity: 0.3;
    cursor: default;
  }

  .likes-arrow svg {
    width: 19px;
    height: 19px;
  }

  .likes-track {
    display: flex;
    gap: 1.25rem;
    overflow-x: auto;
    overscroll-behavior-x: contain;
    scroll-snap-type: x mandatory;
    scrollbar-width: thin;
    scrollbar-color: var(--global-text-color-light) transparent;
    padding: 0.25rem 0 1rem;
  }

  .likes-track::-webkit-scrollbar {
    height: 5px;
  }

  .likes-track::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background: var(--global-text-color-light);
  }

  .likes-card {
    flex: 0 0 84%;
    min-width: 0;
    overflow: hidden;
    scroll-snap-align: center;
    border: 1px solid var(--likes-border);
    border-radius: 14px;
    background: var(--global-card-bg-color, var(--global-bg-color));
  }

  .likes-media {
    display: block;
    aspect-ratio: 16 / 10;
    overflow: hidden;
    background: var(--global-bg-color);
  }

  .likes-media img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .likes-placeholder {
    display: grid;
    place-content: center;
    justify-items: center;
    gap: 1rem;
    width: 100%;
    height: 100%;
    background: #f2ece3;
    color: #806340;
  }

  .likes-card--inter-milan .likes-placeholder {
    background: #e8eef8;
    color: #3761a2;
  }

  html[data-theme="dark"] .likes-placeholder {
    background: #2b251f;
    color: #c7b093;
  }

  html[data-theme="dark"] .likes-card--inter-milan .likes-placeholder {
    background: #1c273b;
    color: #9cb9e8;
  }

  .likes-placeholder svg {
    width: 44px;
    height: 44px;
    opacity: 0.65;
  }

  .likes-placeholder span {
    font-size: 0.85rem;
  }

  .likes-caption {
    padding: 1.3rem 1.5rem 1.5rem;
  }

  .likes-category {
    margin: 0 0 0.4rem;
    color: var(--global-text-color-light);
    font-size: 0.7rem;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  .likes-title {
    margin: 0 0 0.55rem;
    font-size: 1.65rem;
    font-weight: 500;
    line-height: 1.2;
  }

  .likes-description {
    margin: 0;
    line-height: 1.6;
  }

  .likes-arrow:focus-visible,
  .likes-track:focus-visible,
  .likes-media:focus-visible {
    outline: 2px solid var(--global-theme-color);
    outline-offset: 3px;
  }

  @media (max-width: 575px) {
    .likes-gallery {
      margin-top: 1.5rem;
    }

    .likes-track {
      gap: 0.8rem;
    }

    .likes-card {
      flex-basis: 90%;
    }

    .likes-caption {
      padding: 1.1rem;
    }

    .likes-title {
      font-size: 1.4rem;
    }

    .likes-hint {
      max-width: 8rem;
      font-size: 0.8rem;
    }
  }
</style>

<section class="likes-gallery" aria-label="Things I like" data-likes-gallery>
  <div class="likes-toolbar">
    <p class="likes-hint">Scroll to explore.</p>
    <div class="likes-controls" hidden>
      <span class="likes-counter" role="status" aria-live="polite" aria-atomic="true">1 / {{ site.data.likes.size }}</span>
      <button class="likes-arrow" type="button" aria-label="Previous interest" aria-controls="likes-track" data-likes-prev>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
          <path d="m14 5-7 7 7 7M7 12h14" />
        </svg>
      </button>
      <button class="likes-arrow" type="button" aria-label="Next interest" aria-controls="likes-track" data-likes-next>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
          <path d="m10 5 7 7-7 7M17 12H3" />
        </svg>
      </button>
    </div>
  </div>

  <div class="likes-track" id="likes-track" tabindex="0" role="region" aria-roledescription="carousel" aria-label="Personal interests">
    {% for interest in site.data.likes %}
      <article class="likes-card likes-card--{{ interest.id }}" role="group" aria-roledescription="slide" aria-label="{{ forloop.index }} of {{ forloop.length }}: {{ interest.title | escape }}">
        {% if interest.image and interest.image != empty %}
          <a class="likes-media" href="{{ interest.image | relative_url }}" target="_blank" rel="noopener" aria-label="View full image: {{ interest.title | escape }}">
            <img src="{{ interest.image | relative_url }}" alt="{{ interest.image_alt | escape }}" style="object-position: {{ interest.image_position | default: 'center' }};" loading="{% if forloop.first %}eager{% else %}lazy{% endif %}" decoding="async">
          </a>
        {% else %}
          <div class="likes-media">
            <div class="likes-placeholder" role="img" aria-label="{{ interest.title | escape }} photo coming soon">
              <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
                <rect x="5" y="7" width="38" height="34" rx="4" />
                <circle cx="16" cy="18" r="3" />
                <path d="m5 34 12-10 8 7 7-6 11 10" />
              </svg>
              <span>Photo coming soon</span>
            </div>
          </div>
        {% endif %}
        <div class="likes-caption">
          <p class="likes-category">{{ interest.category }}</p>
          <h2 class="likes-title">{{ interest.title }}</h2>
          <p class="likes-description">{{ interest.description }}</p>
        </div>
      </article>
    {% endfor %}
  </div>
</section>

<script>
  (() => {
    const gallery = document.querySelector("[data-likes-gallery]");
    if (!gallery) return;

    const track = gallery.querySelector(".likes-track");
    const cards = Array.from(track.querySelectorAll(".likes-card"));
    const controls = gallery.querySelector(".likes-controls");
    if (!cards.length) return;
    const previous = gallery.querySelector("[data-likes-prev]");
    const next = gallery.querySelector("[data-likes-next]");
    const counter = gallery.querySelector(".likes-counter");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let current = 0;
    let frame;

    const update = () => {
      const bounds = track.getBoundingClientRect();
      const center = bounds.left + bounds.width / 2;
      let nearest = 0;
      let distance = Infinity;
      cards.forEach((card, index) => {
        const box = card.getBoundingClientRect();
        const candidate = Math.abs(box.left + box.width / 2 - center);
        if (candidate < distance) {
          nearest = index;
          distance = candidate;
        }
      });
      current = nearest;
      previous.disabled = current === 0;
      next.disabled = current === cards.length - 1;
      const label = `${current + 1} / ${cards.length}`;
      if (counter.textContent !== label) counter.textContent = label;
    };

    const goTo = (index) => {
      const target = Math.max(0, Math.min(cards.length - 1, index));
      const card = cards[target].getBoundingClientRect();
      const bounds = track.getBoundingClientRect();
      track.scrollTo({
        left: track.scrollLeft + card.left - bounds.left - (track.clientWidth - card.width) / 2,
        behavior: reducedMotion.matches ? "instant" : "smooth",
      });
    };

    previous.addEventListener("click", () => goTo(current - 1));
    next.addEventListener("click", () => goTo(current + 1));
    track.addEventListener("keydown", (event) => {
      if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
      event.preventDefault();
      if (event.key === "Home") goTo(0);
      else if (event.key === "End") goTo(cards.length - 1);
      else goTo(current + (event.key === "ArrowRight" ? 1 : -1));
    });
    track.addEventListener("scroll", () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    }, { passive: true });
    new ResizeObserver(update).observe(track);
    controls.hidden = cards.length < 2;
    update();
  })();
</script>
