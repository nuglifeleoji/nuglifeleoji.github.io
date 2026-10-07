---
layout: about
title: About
permalink: /
subtitle:
profile:
  align: right
  image: leo_profile.jpeg
  image_circular: true # crops the image to make it circular
  social: true # displays social icons below the profile photo
  more_info: >
    <p><a href="mailto:leo0610@stanford.edu">leo0610{at} stanford {dot} edu</a></p>

selected_papers: false # includes a list of papers marked as "selected={true}"
social: false # social icons are displayed below the profile photo

announcements:
  enabled: false # includes a list of news items
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 5 # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: false
  scrollable: true # adds a vertical scroll bar if there are more than 3 new posts items
  limit: 3 # leave blank to include all the blog posts
---

<style>
  .profile {
    min-width: min(19rem, 100%);
  }

  .profile .profile-social {
    display: flex;
    align-items: center;
    margin-top: 1rem;
    border-top: 1px solid var(--global-divider-color);
    border-bottom: 1px solid var(--global-divider-color);
  }

  .profile .profile-social a {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    min-width: 44px;
    min-height: 44px;
    color: var(--global-text-color-light);
    font-size: 1.15rem;
    line-height: 1;
  }

  .profile .profile-social a + a {
    border-left: 1px solid var(--global-divider-color);
  }

  .profile .profile-social a:hover,
  .profile .profile-social a:focus-visible {
    color: var(--global-theme-color);
  }

  .profile .more-info {
    margin-top: 0.65rem;
    text-align: center;
  }

  .profile .more-info p {
    display: block;
    margin: 0;
    font-size: 0.8rem;
    white-space: nowrap;
  }
</style>

I am a sophomore at Stanford University majoring in Mathematics and Computer Science. I am a member of the [Stanford Pervasive Parallelism Lab](https://ppl.stanford.edu/) and my adviser is [Professor Kunle Olukotun](https://engineering.stanford.edu/people/oyekunle-olukotun). I have also been working with the [Stanford Scaling Intelligence Lab](https://scalingintelligence.stanford.edu/) and [the Iris Lab](https://irislab.stanford.edu/).

My research work focuses on building AI systems that continuously learn from experience and improve over time (a topic known as recursive self-improvement). This includes: curriculum design [(Learning what to learn, ICLR 2026 LLA)](https://openreview.net/forum?id=TRQLuxgxBN); parallel execution frameworks [(Combee, COLM 2026)](https://arxiv.org/abs/2604.04247); understanding the failure modes of self-evolving agents; learning to recover from agent failures [(Sentry, arXiv 2026)](https://arxiv.org/abs/2610.02994); stateless language agents for long-horizon research [(SLA, arXiv 2026)](https://arxiv.org/abs/2610.07625). I am also an active contributor to many popular RSI frameworks like [Agentic Context Engineering (ACE, ICLR 2026)](https://github.com/ace-agent/ace), [GEPA (ICLR 2026)](https://github.com/gepa-ai/gepa), and [CORAL (COLM 2026)](https://github.com/Human-Agent-Society/CORAL).

Besides research, I enjoy getting hands-on with real-world systems across different industries, from big tech and AI labs to quantitative finance.
In the past, I was very fortunate to intern at [Tencent WeChat Reading team](https://www.tencent.com/zh-cn/) (Long-context multi-agent systems), [DeepSeek](https://www.deepseek.com/) (DeepSeek sparse attention), [Algovant](https://www.algovant.com/) (Option market agent), and [Scientech Research](https://www.scientechresearch.io/) (Agent swarm research for alpha discovery). Next summer, I'll be joining [TikTok](https://www.tiktok.com/en/) as a software engineer intern in San Jose. If you're around the area, I'd love to connect!

Before Stanford, I graduated from [Shenzhen Middle School](https://en.wikipedia.org/wiki/Shenzhen_Middle_School), where I won gold medals in national-level mathematics and programming olympiads. I am also deeply interested in pure mathematics, including the Hopf fibration, convex optimization, Galois theory, and chaotic maps with symbolic dynamics. I attended the [Stanford Mathematics Camp (SUMaC)](https://sumac.spcs.stanford.edu/) in 2023 and 2024, studying abstract algebra and algebraic topology.

{% include likes-gallery.liquid %}
