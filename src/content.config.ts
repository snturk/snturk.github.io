import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.coerce.date(),
        tags: z.array(z.string()).default([]),
        cover: z.string().optional(),
        mediumUrl: z.string().url().optional(),
        draft: z.boolean().default(false),
    }),
});

export const collections = { posts };
