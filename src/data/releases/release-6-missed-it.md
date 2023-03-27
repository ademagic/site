---
title: 'Release 6: Missed It'
publishDate: 15 Mar 2023
description: A follow up to the Astro rebuild release, later than I'd like, but better than never. My dog ate my homework. 
soundtrack: album/6Zp3lHvX486zv8iDPeeXR7
tags:
  - release
  - site
---

When I started my rebuild, I wanted to approach it habitually. I said I'd dedicate up to an hour every day for coding or blogging, and then I'd deploy it all on Mondays. Well, the first Monday since my rebuild came and went, and I missed a good few days of coding. Discipline is not my friend.

## Blogpost Tagging

My 11ty blog with Hylia had blogpost tagging included. Tags were listed on each post, a page was auto-generated with each tag I'd used, and you could click them to view posts by tag. The Astro blog starter template didn't include this, so I've built it. You'll see tags at the top of every blogpost, including this one.

## Bypass Jekyll

I noticed my blogposts were missing some styles, since the `hr` was spanning the full width of the page and my bio component at the bottom of the page was looking slightly more narcissistic than usual.

Github Pages uses [Jekyll](https://jekyllrb.com/) out of the box to handle static site generation and blogging. Astro generates files that start with underscores which [Jekyll thinks are special resources, so it ignores them](https://github.blog/2009-12-29-bypassing-jekyll-on-github-pages/). Turns out this was messing with my rendered output, so I ignored Jekyll.

## Small updates to typography

Another thing I spent far too much time on before was fiddling typography. I joked that I'd reward myself with a typography redesign after 6 months of keeping up with my routine.

I updated the colours for the `code` snippets so they'd be more readable in dark mode, and more noticeable in light mode.

✌️
