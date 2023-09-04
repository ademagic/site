---
title: I Block Bots
metaTitle: I Block Bots
publishDate: 5 Sep 2023
description: I hereby swear to block crawlers from my site as best as I can, until I decide to change my mind and blog my decision.
soundtrack: track/3tiBuI6svprsuoeiJj7Q5H
socialImage: assets/blog/i-block-bots/i-block-bots.jpg
featured: true
  
socialImageAttribution: {
  author: an thet,
  authorUrl: https://unsplash.com/@thet88?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText,
  source: Unsplash,
  sourceUrl: https://unsplash.com/photos/bjO5b7LZvMI?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText,  
}
tags:
  - tech
  - social-media
  - indie-web
  - site
  - seo
---

A couple months ago, I posted [probably my second-most-popular social post](https://indieweb.social/@ademagic/110698140239508095) ever, and it was reposting what I found was an insightful [blogpost by Jeremy Keith](https://adactio.com/journal/20315). The message was simple, but hit me deep.

> "We can rescind our invitation to Google."
>
> -- Jeremy Keith

Part of every website go-live checklist I ever completed included integrating Google Analytics, or at the very least somehow ensuring that the site was being crawled as expected. I never actually questioned it.

When I started building this site, I also looked at moving my analytics interface elsewhere. Getting another website to collect, host and display my data felt less unsavoury than Google doing it, especially because I figured Google did other things with it, in ways and at a scale that no other website could. The more I thought about it, the more intrusive it felt.

## Why

I never actually considered saying "actually don't crawl me ever" until I read Jeremy's post. I don't actually need to result on Google for my personal site _at all_.

1. I'm not monetising it or selling any ad space
2. I don't directly benefit from increased traffic
3. I don't want to compete for high positions in results lists with paid professionals who benefit from 1. and 2.
4. I don't care to teach Google stuff

Upon further consideration I decided I'd rather

1. Get organic traffic from sources and circles I'm actively involved in (and post to)
2. Leverage the SEO Pros of platforms that are incentivised to help me show up in search results
3. Be selective (or at least have control of) the content I share to 1. and 2.

And so, __I block bots__.

## How

- [my commit for blocking Google's bots, apparently](https://github.com/ademagic/site/commit/cee03ba1868807bd46906bc5e82f7448cd9751ee).
- And in case it's changed, [my robots.txt](https://miko.ademagic.com/robots.txt).

As many people have pointed out, [Google could just as easily ignore this](https://indieweb.social/@isagalaev@mastodon.social/110702761168333156), there are [probably more thorough ways to do this](https://indieweb.social/@Bju1046@mastodon.online/110702597116071796), and [even (slightly) malicious ways to protest](https://indieweb.social/@corbin@defcon.social/110701821076049607). I haven't gotten that far and am content with this for now. If you've got any other things I should be adding to my robots file, please reach out.
