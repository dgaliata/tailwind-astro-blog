import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import solidJs from "@astrojs/solid-js";
import { SITE_METADATA } from "./src/consts.ts";
import metaTags from "astro-meta-tags";
import robotsTxt from "astro-robots-txt";
import { astroExpressiveCode } from '@expressive-code/astro'; // Correct import for Expressive Code

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  site: SITE_METADATA.siteUrl,
  integrations: [
    astroExpressiveCode({ // Move this before mdx()
      themes: ['github-dark', 'github-light'],
      styleOverrides: {
        frames: {
          editorActiveTabIndicatorTopColor: 'transparent',
          editorActiveTabBorderColor: '#80808080',
          editorTabBarBorderBottomColor: '#80808080',
          tooltipSuccessBackground: 'black',
        },
        uiFontFamily: 'inherit',
        borderColor: '#80808080',
      },
    }),
    mdx(), // This should now follow astroExpressiveCode
    sitemap(),
    tailwind(),
    solidJs(),
    metaTags(),
    robotsTxt(),
  ],
});
