---
title: 'Release X: This Changes Everything.'
publishDate: 24 May 2023
description: Again.
soundtrack: track/1zzxoZVylsna2BQB65Ppcb
tags:
  - release
  - site
---


## Upgrade to Astro 2

The template I'm using wasn't built in Astro 2, but the upgrade path was quite simple and well documented. So I just upgraded.

## Enabling Drafts in Astro

I came across this by accident looking through the docs. I can add as many blogposts to my repo as I'd like, and Astro won't compile them if they've got `draft: true` set in the front matter. And it's a one liner in the astro config.

## Plausible

I started a free trial of Plausible for my analytics. The plan is to give Fathom a go after this, and then pick one to pay for. Always welcome any feedback you have.

## Featured Content

I've added a variable to my frontmatter that lets me define a "featured" post, which I can then promote on the blog page, and the homepage. Becaus now, I've also got...

## Latest From The Blog

... a list of my most recent blogposts on the homepage!

## Various Bugfixes and improvements

- an issue with default social images not showing up
- componentising some stuff, including the card component
- updating the Credits page to include Modern Font Stack
- https, finally

## No More Releases

... Only Release journals!
I really enjoy writing my release notes for whatever reason. But I've found that I force myself to "create releases" and group various changes together, thereby holding up improvements because I haven't finished everything I wanted to. Kind of the antithesis of continuous deployment, or at least of "ship early, ship often".

Going forward I am going to write retrospective journal entries outlining what I've done to the site, and possibly what I've got in the works. These release notes are for nobody but me anyway (unless somebody else likes them?).

✌️
