---
title: Migrating to Astro's Collections
metaTitle: Migrating to Astro's Collections
publishDate: 11 Jan 2024
description: Astro upgraded to Content Collections, so I changed my template to support it.
soundtrack: track/7eWGnKg4B44sbBPpQp4y2c
socialImage: assets/blog/migrating-to-collections/helmet.png
socialImageAttribution: {
  author: Levi Stute,
  authorUrl: https://unsplash.com/@levi_stute_cinematography?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash,
  source: Unsplash,
  sourceUrl: https://unsplash.com/photos/white-helmet-rx6tPuPNrXo?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash,  
}
  
tags:
  - astro
  - site
  - tech
---

I'm trying very hard to keep up with Astro's upgrades, but they move through majors faster than any platform I've used before. One of the new features they introduced as part of v3 was Content Collections. This blogpost outlines my experience of migrating.

## Why upgrade

I have worked in web long enough to understand the potential pain of falling behind in dependency upgrades. As much as possible, I try to stay up to date with every project I work on but with personal projects in particular.

Astro's active development is something I really enjoy about the platform. The new Content Collections took some time for me to wrap my head around because I prefer the simplicity of Astro's old file structure and organisation, and it was one of the original reasons why I chose to build my website with Astro. Engaging with the community and Astro's documentation helped me understand the power and flexibility that comes with collections, and while it unlocks a lot of complexity, it can also be adaptive and kept simple.

I currently have two types of content - [blogs](/blog) and [releases](/releases). I could technically store any kind of data, though. Authors, favourite songs, short posts etc. Each of these can have a defined type, and I can make sure I can define them correctly and predictably. And then display them in any way I want.

## My plan

Migrating seemed like a lot of work due to the move from a simple file structure to JSON and typedefs. I felt I couldn't dedicate the time required to do this all at once, and was worried that I'd never get to it if I had to leave it unfinished.

I planned to migrate my Releases first. The content was predictable and simple, there wasn't a lot of it, and I didn't really care if it broke. I'd create a type definition for it and move my content to the new directory and file structure, then ship. Once I'd tested and confirmed all ok, I'd move on to blogposts.

## What actually happened

Creating a content collection seemed to immediately switch Astro to using its new API. Not only did all my pages using the old structure fail to build, but any reference to `Astro.glob` now became invalid and content had to be retrieved from the new `getCollections()` function.

It meant I had to go through and reactively bugfix rather than proactively make changes to my site as per my plan. In the end, this did not take as much time as I expected and I managed to resolve all errors across a couple of sessions. Astro's error messaging, and the [Astro Language Support Extension for VSCode](https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode) was very helpful in telling me what to fix next.

## How it's going

This will be my first post since the migration, and nothing seems to have gone wrong. My old pages and links all work, as do my redirects that handle previous iterations of my site. Sound the "Everything's OK" alarm 🚨

I am not using typedefs at the moment, and my implementation of content collections is the simplest it can be. But I look forward to flexing this function a little more as I add to my site this year.

But first, Astro v4.
