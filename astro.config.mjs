import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
    site: 'https://snturk.com',
    integrations: [sitemap()],
    markdown: {
        shikiConfig: { theme: 'github-light' },
    },
});
