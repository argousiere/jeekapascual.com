import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const DATE_PREFIX = /^(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})-/;

const blog = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './content/blog',
    generateId: ({ entry }) =>
      entry.replace(/\.md$/, '').replace(DATE_PREFIX, ''),
  }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    excerpt: z.string().optional(),
  }),
});

export const collections = { blog };
