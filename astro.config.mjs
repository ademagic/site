import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import mdx from '@astrojs/mdx';


// https://astro.build/config
export default defineConfig({
  site: 'http://miko.ademagic.com/',
  integrations: [mdx(), svelte()],
  markdown: {
    drafts: true,
    shikiConfig: {
      theme: 'nord'
    },
    rehypePlugins: [['rehype-external-links', {
      target: '_blank'
    }]]
  }
});