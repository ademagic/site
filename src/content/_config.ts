import { z, defineCollection } from 'astro:content';
import { rssSchema } from '@astrojs/rss';

const blogCollection = defineCollection({
  schema: rssSchema,
});

const releasesCollection = defineCollection({
});

const niceCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    url: z.string(),
    dateAdded: z.string(),
    description: z.string().optional(),
  })
});

export const collections = {
  blog: blogCollection,
  releases: releasesCollection,
  nice: niceCollection,
};