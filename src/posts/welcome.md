---
title: Hello, World! Again!
date: '2020-03-30'
summary: The new site's live! But at what cost??... and with what tech?
tags:
  - tech
  - site
---
Very original, I know. Especially because this isn't the first iteration of my website and I bet I've probably used this same line before, even in iterations that never saw the light of the internet. If anything, I'm consistent.

I've had another go at getting a site live, and I'll be trying to blog my way through it as I go. While this site was born in the time of COVID-19, I've been at it for a few months longer. Not working on it constantly, though – There's been a break as I was going through some personal challenges, and obviously the odd redesign. As "perfect is the enemy of done", recently I've decided to really double down on an "MVP". This is all content for future blogposts though. And so, here we are.

Every time I've done this, the industry has been different and as a result, so's the tech my site's built in. This time 'round, I've decided to go easy and build with:

- [Eleventy](#heading-eleventy) as a static site generator
- [Hylia](#heading-hylia) as a starter template for Eleventy
- [GitHub Pages](#heading-github-pages) for hosting

## Eleventy
<a href="https://www.11ty.dev/" target="_blank">Eleventy</a> is a simple static site generator. This is definitely the best value prop I've seen and is the only intro text on their site before getting straight into how to use it. It's really that simple, _but_ has so much capability as well. I've always been very pro static sites, especially in the ever-complexifying world of web apps and javascript libraries. Maybe coz I'm slightly bitter, but definitely because I'm a fan of simplicity and keeping things lean for the user.

For what I wanted from my site, I also didn't believe I needed the functionality of a complex CMS or backend. This blogpost is written completely in markdown, and it uses <a href="https://mozilla.github.io/nunjucks/templating.html" target="_blank">Nunjucks</a> for templating, with front matter for page settings. I have to redeploy the entire site every time I create a new blogpost (well, technically I don't if I'd used Netlify – more on that later). That's ok for me though.

I started out with Eleventy, and getting up and running was simple. It became obvious pretty quickly that there was a lot that I could do with Eleventy that I hadn't even considered, or would take me a while to learn or implement. Eleventy recognises that, too – which is why step 3 of their awesome <a href="https://www.11ty.dev/docs/getting-started/" target="_blank">Getting Started</a> documentation is <a href="https://www.11ty.dev/docs/starter/" target="_blank">Starter Projects</a>. Enter Hylia.

## Hylia
<a href="https://hylia.website/" target="_blank">Hylia</a> is a starter project for Eleventy, with Netlify CMS preconfigured. If you've already clicked through to the Starter Projects page, you'll see there's no shortage. My research through them was brief – I didn't look much further than <a href="https://twitter.com/hankchizljaw" target="_blank">Andy Bell</a>'s face, and quickly decided on Hylia. This is because:
- I follow him on twitter, and know that he puts a focus on semantics, accessibility, and systematic design – so we share a lot of the same values as developers/technologists.
- The example site was nice and simple.
- I love <a href="https://zelda.fandom.com/wiki/Hylia" target="_blank">Zelda</a>.

After forking the repo I was quickly impressed. The site is generated using <a href="https://github.com/design-tokens/community-group" target="_blank">Design Tokens</a>, meaning the core aspects of the design like colours, sizes/spacing, and fonts could be configured at a very elementary level. I was able to start redesigning the blog in minutes.

It also generates a `/styleguide/` page from your tokens, which lets you get a quick overview of the changes you make – though the <a href="https://github.com/hankchizljaw/hylia/tree/master/src/posts" target="_blank">example posts</a> are also helpful while redesigning. Find out more in the <a href="https://github.com/hankchizljaw/hylia#design-tokens-and-styleguide" target="_blank">README</a>.

It's also got Netlify's CMS preconfigured, which seems to be a strong sell but I didn't consider it. I may well use it eventually, but since I was already working with GitHub Pages, I decided to make things difficult for myself.

## GitHub Pages
I really like that <a href="https://pages.github.com/" target="_blank">GitHub pages</a> is a thing. Automatically deploying and hosting your github repo's root index file is simple and clever. I've been hosting my site in this way for a few years, mainly because I haven't needed the complexity of my own custom hosting setup and so I also haven't been considering other methods. Now that I've built my site with Eleventy, I'm weighing up my options again.

So, there it is. You've made it this far. Hopefully you found this intro blog useful, and hopefully you'll come back for more later. I've got all sorts of stuff planned – new animations, a nicer About page, heaps of blogposts and projects, probably changing my typography 5 or 6 times... If you've got any feedback for me I'd love some – drop a comment here or <a href="https://twitter.com/miko_a" target="_blank">@ me on twitter</a>.

Stay safe. ✌️