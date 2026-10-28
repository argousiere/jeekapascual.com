import { defineCollection } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { DATE_PREFIX } from './utils/entry-utils';


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

const entries = (base: string, pattern: string | string[] = '**/*.md') =>
  glob({
    pattern,
    base,
    generateId: ({ entry }) =>
      entry.replace(/^.*\//, '').replace(/\.md$/, '').replace(DATE_PREFIX, ''),
  });

const blog = defineCollection({
  loader: entries('./content', ['blog/**/*.md', 'projects/**/*.md']),
  schema: entry,
});

const writing = defineCollection({
  loader: entries('./content/writing'),
  schema: entry,
});

const art = defineCollection({
  loader: entries('./content/art'),
  schema: entry.extend({ image }),
});

const tags = defineCollection({
  loader: file('./content/tags.yml'),
  schema: z.object({
    label: z.string().optional(),
    description: z.string().optional(),
  }),
});

export const collections = { blog, writing, art, tags };
