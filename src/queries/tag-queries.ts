import { getCollection } from 'astro:content';
import type { Tag } from '../types';

const tagEntries = new Map(
  (await getCollection('tags')).map(({ id, data }) => [id, data])
);

export const getTag = (slug: string): Tag => ({ slug, ...tagEntries.get(slug) });

export const getTagSlugs = () => {
  return tagEntries.keys().toArray().sort();
};
