import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';
import type { EntryModel } from '@argousiere/vespertina-design-system/core';
import siteConfig from '../../site.config';

const WORDS_PER_MINUTE = 275;

export const getPosts = async () =>
  (await getCollection('blog')).sort(
    (a, b) => b.data.date.localeCompare(a.data.date)
  );

export const getReadingTime = (body = '') =>
  Math.max(1, Math.ceil(body.trim().split(/\s+/).length / WORDS_PER_MINUTE));

export const getTagSlugs = async () => {
  const posts = await getPosts();

  return [...new Set(posts.flatMap(({ data }) => data.tags))].sort();
};

export const toEntryModel = ({
  id,
  data,
  body,
}: CollectionEntry<'blog'>): EntryModel => ({
  id,
  title: data.title,
  url: `/${id}/`,
  date: data.date,
  description: data.description,
  readingTimeMinutes: getReadingTime(body),
  tags: data.tags.map((slug) => ({ slug, url: `${siteConfig.tagBaseUrl}${slug}/` })),
});
