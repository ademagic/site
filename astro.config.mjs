import { defineConfig } from 'astro/config';
import svelte from "@astrojs/svelte";
import mdx from '@astrojs/mdx';
import rehypeExternalLinks from 'rehype-external-links';

// https://astro.build/config
export default defineConfig({
  site: 'https://miko.ademagic.com/',
  integrations: [mdx(), svelte({ extensions: ['.svelte'] })],
  markdown: {
    shikiConfig: {
      theme: 'nord'
    },
    rehypePlugins: [[rehypeExternalLinks, {
      target: '_blank'
    }]]
  }
});