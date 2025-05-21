import { z, defineCollection } from 'astro:content';
import { rssSchema } from '@astrojs/rss';

const blogCollection = defineCollection({
  schema: rssSchema,
});

const releasesCollection = defineCollection({
});

const blogRollCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    url: z.string(),
    dateAdded: z.string(),
    description: z.string().optional(),
    rss: z.string().optional(),
  })
});

export const collections = {
  blog: blogCollection,
  releases: releasesCollection,
  blogroll: blogRollCollection,
};