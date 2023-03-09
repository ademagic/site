---
title: 'Release V: Go For It'
publishDate: 09 Mar 2023
description: The title is a Rocky reference. Or maybe it refers to me going for rewriting my site in Astro? Read more to find out.
soundtrack: album/6jWde94ln40epKIQCd8XUh
tags:
  - release
  - site
---

A long time ago [in a release far, far away](/blog/release-4-a-new-hope) I said I had considered rebuilding my site in a way I found easy(ier) to maintain, and exploring a new tech while I'm at it. Well, that release is here, and I've rebuilt my site again. Again.

More on reasons why I did what I did in future posts. But here's the major changes I made.

## Replacing Eleventy with Astro

I removed [Eleventy](https://www.11ty.dev/). It's a great static site generator; quite powerful, decently documented and a large community backing it. But, when coupled with [Hylia](https://hylia.website/) (also a great starting point), it made a lot of decisions about workflow and project structure that when left unchecked, became a constraint. By which I mean it was too complicated for me to just pick up again after some time not using it.

I decided to take the opportunity/used this as an excuse to to try something new, and replaced it with [Astro](https://astro.build/). I used [Maxi Ferreira's Astro Blog Template](https://github.com/Charca/astro-blog-template), which has been a great introduction to Astro for me. Other than coming preconfigured with Svelte (to make the theme toggle in the menu bar ☝️) its not opinionated and makes next to no technical decisions other than folder structure. It looks pretty sharp to boot.
I've updated the [Credits](/credits) page accordingly.

I'm still not at feature parity but I'll be working on it. Check back for more posts on how I migrated, why Astro, and other pearls of wisdom. It's gonna be great.

✌️
