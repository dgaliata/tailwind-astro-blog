import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import solidJs from "@astrojs/solid-js";
import { SITE_METADATA } from "./src/consts.ts";
import metaTags from "astro-meta-tags";
import robotsTxt from "astro-robots-txt";
import { astroExpressiveCode } from '@expressive-code/astro';

export default defineConfig({
  prefetch: true,
  site: SITE_METADATA.siteUrl,
  integrations: [
    mdx(),
    sitemap(),
    tailwind(),
    solidJs(),
    metaTags(),
    robotsTxt(),
    astroExpressiveCode({
      theme: 'github-dark', // Set the theme you want, e.g., 'github-dark'
      features: {
        copyButton: true, // Enables the "Copy Code" button
      },
    }),
  ],
});
