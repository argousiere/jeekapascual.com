import { getCollection } from 'astro:content';

export const getBlogPosts = async () =>
  (await getCollection('blog')).sort((a, b) =>
    b.data.date.localeCompare(a.data.date)
  );
