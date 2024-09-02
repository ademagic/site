import { z, defineCollection } from 'astro:content';
import { rssSchema } from '@astrojs/rss';

const blogCollection = defineCollection({
  schema: rssSchema,
});

const releasesCollection = defineCollection({
});

export const collections = {
  blog: blogCollection,
  releases: releasesCollection,
};