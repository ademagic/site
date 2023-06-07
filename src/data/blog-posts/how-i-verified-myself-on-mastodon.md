---
title: How I Verified Myself On Mastodon
metaTitle: How to get that green tick on your profile links (if they're the links I have)
publishDate: 07 Jun 2023
description: Helpful info on what Mastodon verification is and how I got each of my (three) links verified.
soundtrack: track/3jagGO7eHHuaD53ibehkux
socialImage: assets/blog/mastodon-verification/mastodon.jpg
socialImageAttribution: {
  author: Christopher Alvarenga,
  authorUrl: https://unsplash.com/fr/@kriztheman?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText,
  source: Unsplash,
  sourceUrl: https://unsplash.com/photos/bfqPQeidFS0?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText,  
}
featured: true
tags:
  - mastodon
  - social-media
  - tech
  - indie-web
---

## TL;DR

- Mastodon uses [rel="me" attributes](https://indieweb.org/rel-me) to verify a mastodon account is the owner of a link
- My personal site verification only worked once I served it over https
- Github adds this attribute automatically to your social links
- Twitter doesn't let you do this, you may need an inbetween step

## Prove you're you on Mastodon

Around the time [Elon began renovating bathrooms](https://www.theguardian.com/technology/2022/oct/26/elon-musk-twitter-visit-sink) a whole bunch of people migrated to alternative social media, and lots of those migrating went to [Mastodon](https://joinmastodon.org/). Here you no longer need blue ticks by your name to show you're cool, but instead you can add up to 4 links onto your profile which Mastodon will adorn with a lovely hue of green if you can prove that link is yours.

You do this by adding a [rel-me](https://indieweb.org/rel-me) anchor to your site linking back to your Mastodon profile. Once you provide Mastodon with this link, your server will visit it and look for this link. If it does, you get the check!

![My mastodon profile page, with verified github and personal links](/assets/blog/mastodon-verification/mastodon-profile.png)

## How I got each checkmark

I found online instructions not providing much more information that what I posted above, so I thought I'd thought I'd get a little more granular with this blogpost.

### This Website

This should have been as easy as adding the `rel="me"` attribute to the Mastodon link in my site footer. However, it seems that Mastodon does not complete the verification process unless your site is served over HTTPS. I haven't seen any docs about this, and am not sure if this is a server-specific configuration, but as soon as I added HTTPS to my domain I received my verification tick.

### Github

This one was easy. After reading this [redirection solution by Simon Willison](https://til.simonwillison.net/mastodon/verifying-github-on-mastodon) I was a little worried that GitHub would not make this easy for me, since it said it only allowed the rel-me links on personal URLs. But it looks like since the post, GitHub has added rel-me attributes to all social links. So verification was automatically done when I added my full GitHub link to my profile.

### Twitter

Ok I didn't get this check mark; [this one is hard](https://www.reddit.com/r/Mastodon/comments/yplcoz/how_are_people_getting_their_twitter_handle/). Based on what I've read, twitter _may have_ had the rel-me attribute applied to your personal website link on your profile in the past, but could have since removed it. There is no guarantee that I'm right, or that it will add it back, or that it wouldn't remove it again. But I suppose you could say the same for any other website. There may be an authentication service that you can use, or setting up a similar redirect solution [like Simon Willison suggested for GitHub](https://til.simonwillison.net/mastodon/verifying-github-on-mastodon), but I decided it wasn't worth it for now.

Hope this was helpful to you. If there are any other verifications you think I need, any others I should cover (or any ways you can think of verifying Twitter even), please reach out.

## Relevant Links

- [rel-me (via IndieWeb.org)](https://indieweb.org/rel-me)
- [Verify and Secure your Mastodon account (via Snyk.io)](https://snyk.io/blog/verify-and-secure-your-mastodon-account/)
- [Get verified on Mastodon with your website (via opensource.com)](https://opensource.com/article/22/11/verified-mastodon-website)
- [Verifying your GitHub profile on Mastodon (via simonwillison.net)](https://til.simonwillison.net/mastodon/verifying-github-on-mastodon)
