import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import solidJs from "@astrojs/solid-js";
import { SITE_METADATA } from "./src/consts.ts";
import metaTags from "astro-meta-tags";
import robotsTxt from "astro-robots-txt";
import expressiveCode from 'astro-expressive-code'

export default defineConfig({
  prefetch: true,
  site: SITE_METADATA.siteUrl,
  integrations: [
    // Move expressiveCode before mdx
    expressiveCode({
      themes: ['github-dark', 'github-light'],
      styleOverrides: {
        frames: {
          editorActiveTabIndicatorTopColor: 'transparent',
          editorActiveTabBorderColor: '#80808080',
          editorTabBarBorderBottomColor: '#80808080',
          tooltipSuccessBackground: 'black'
        },
        uiFontFamily: 'inherit',
        borderColor: '#80808080'
      }
    }),
    mdx(), 
    sitemap(), 
    tailwind(), 
    solidJs(), 
    metaTags(), 
    robotsTxt()
  ]
});