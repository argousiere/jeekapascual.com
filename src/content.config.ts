import { defineCollection } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { z } from 'astro/zod';

const DATE_PREFIX = /^(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})-/;

const image = z.object({
  src: z.string(),
  width: z.number(),
  height: z.number(),
});

const entry = z.object({
  title: z.string(),
  date: z.coerce
    .date()
    .transform((date) => date.toISOString().slice(0, 10)),
  tags: z.array(z.string()).default([]),
  description: z.string().optional(),
  cover: image.optional(),
  thumbnail: image.optional(),
});

const entries = (base: string) =>
  glob({
    pattern: '**/*.md',
    base,
    generateId: ({ entry }) =>
      entry.replace(/\.md$/, '').replace(DATE_PREFIX, ''),
  });

const blog = defineCollection({
  loader: entries('./content/blog'),
  schema: entry,
});

const tags = defineCollection({
  loader: file('./content/tags.yml'),
  schema: z.object({
    label: z.string().optional(),
    description: z.string().optional(),
  }),
});

export const collections = { blog, tags };
