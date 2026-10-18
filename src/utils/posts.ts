import { getCollection } from 'astro:content';

const WORDS_PER_MINUTE = 275;

export const getPosts = async () =>
  (await getCollection('blog')).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  );

export const getReadingTime = (body = '') =>
  Math.max(1, Math.ceil(body.trim().split(/\s+/).length / WORDS_PER_MINUTE));
