---
title: Why are styles on my Astro site not working in GitHub Pages?
metaTitle: Essential knowledge for hosting an Astro site on GitHub Pages.
publishDate: 16 Mar 2023
description: How Jekyll and GitHub Pages don't play nicely with Astro sites, and how to easily fix it.
metaDesc: If you are hosting your Astro site on a GitHub Pages (or any Jekyll-preconfigured service), you need to know how to ignore the reserved naming clash between the two technologies.
soundtrack: track/1GfBLbAhZUWdseuDqhocmn
tags:
  - tech
  - astro
  - github-pages
  - site
---

I've been hosting my website with GitHub Pages in its last three iterations, and have most recently rewritten it in Astro. When I uploaded my first static build to my repo, I noticed that the rendered output was not the same as on my local even though all the files were identical. Something was off, and my suspicion was that it was GitHub's doing. I fixed it in [Release 6](/blog/release-6-missed-it).

## TL;DR

- Astro generates static files which start with underscores
- [GitHub Pages](https://pages.GitHub.com/) is preconfigured to use [Jekyll](https://jekyllrb.com/) as a static site generator.
- Jekyll considers filenames starting with underscores to be special resources and ignores them. This means they will not be served by your site.
- To fix this, bypass Jekyll by adding a file named `.nojekyll` to the root of the repository for your site.

Source: [GitHub Blog - Bypassing Jekyll on GitHub Pages](https://github.blog/2009-12-29-bypassing-jekyll-on-github-pages/)

### My issue

I pushed the first production ready build of my site to my GitHub pages repo with excitement. It was a simple copy-over from the `dist` folder to the root of my repository. Once GitHub pages deployed my site, I noticed that my blog article title was far too wide, and my Bio component in the footer had my headshot too large and the typography sizing was wrong; in other words, both components were unstyled.

I dug deeper and discovered that the styles for these components lived in the blogpost's template, named `[slug].md`. When Astro built the static files for the site it put these styles into a file named `_slug_.a3a4f792.css`, which was then loaded on each of the blog pages.

When I served the site locally, these files were loading fine. But, when I deployed my site, looking for the URL of the CSS files returned my 404 page. Other CSS files would load fine, and I could see their raw contents in the browser. But it looks like this one wasn't being served at all. Hence, unstyled components.

## The Details

### Astro's Dynamic Route Parameters

Astro lets you dynamically generate multiple pages by letting you specify dynamic route parameters in your filenames. You can do this by creating a template with square brackets in the name, like `[dog].astro`. You then tell Astro all the paths it should generate with this template by exporting a function called `getStaticPaths()` from it, and having the function return an array of objects which tells Astro the possible values for the `[dog]` parameter.

```javascript
---
export function getStaticPaths() {
  return [
    {params: {dog: 'clifford'}},
    {params: {dog: 'rover'}},
    {params: {dog: 'spot'}},
  ];
}
```

More information in [Astro's docs on dynamic routes](https://docs.astro.build/en/core-concepts/routing/#dynamic-routes).

If there are any extra styles in these templates, Astro will pull them out and scope them with hashed classes, and will generate a CSS file based on the template's original filename, but with the square brackets replaced by underscores. In the above example, this would look something like `_dog_.b8f7f6g5.css`. This file would then get loaded by each instance of the generated template.

### Jekyll's configuration

Jekyll has been used by GitHub to serve static pages for some time now. The format for its configuration files start with underscores (e.g. `_config.yml`). There's not much point to serving these from your static site, so Jekyll ignores them by default. Ipso facto, **this means that Jekyll won't serve the CSS files Astro generates for templates with dynamic paths**. So all of those generated static pages will reference a file that isn't being hosted.

There are a bunch of ways of [telling Jekyll not to do that](https://jekyllrb.com/docs/configuration/options/#global-configuration), but in this context we don't need Jekyll at all so there's no need to maintain a configuration. Instead we can easily tell GitHub Pages that we aren't using Jekyll by adding a file to the repo's root called `.nojekyll`, and the static files will get hosted as-is. GitHub Pages does the rest.

## Conclusion

I hope that context was useful knowledge, and if not, I hope you stopped reading at the tl;dr. Keep creating!

✌️
