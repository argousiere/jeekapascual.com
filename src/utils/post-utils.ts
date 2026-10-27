import { getCollection } from 'astro:content';
import type {
  EntryModel,
  TagModel,
} from '@argousiere/vespertina-design-system/core';
import siteConfig from '../../site.config';
import { getArtPosts, getArtThumbnail, getArtUrl } from './art-utils';
import { getBlogPosts } from './blog-utils';
import { imageUrl } from './images';
import type { Post } from '../types';

const WORDS_PER_MINUTE = 275;

type PostImage = NonNullable<Post['data']['cover']>;

const toImageModel = (image: PostImage | undefined, alt: string) =>
  image && {
    src: imageUrl(image.src, `c_limit,w_${image.width},f_auto,q_auto`),
    alt,
    width: image.width,
    height: image.height,
  };

const tagEntries = new Map(
  (await getCollection('tags')).map(({ id, data }) => [id, data])
);

export const toTagModel = (slug: string): TagModel => ({
  slug,
  label: tagEntries.get(slug)?.label,
  description: tagEntries.get(slug)?.description,
  url: `${siteConfig.tagBaseUrl}${slug}/`,
});

const byNewest = (a: Post, b: Post) => b.data.date.localeCompare(a.data.date);

export const getPosts = async (): Promise<Post[]> =>
  [...(await getBlogPosts()), ...(await getArtPosts())].sort(byNewest);

export const getReadingTime = (body = '') =>
  Math.max(1, Math.ceil(body.trim().split(/\s+/).length / WORDS_PER_MINUTE));

export const getTagSlugs = async () => {
  const posts = await getPosts();

  return [...new Set(posts.flatMap(({ data }) => data.tags))].sort();
};

export const toEntryModel = (post: Post): EntryModel => {
  const { id, data, body } = post;
  const isArt = post.collection === 'art';

  return {
    id,
    title: data.title,
    url: isArt ? getArtUrl(id) : `/${id}/`,
    date: data.date,
    description: data.description,
    readingTimeMinutes: getReadingTime(body),
    cover: toImageModel(data.cover, data.title),
    thumbnail: toImageModel(
      isArt ? getArtThumbnail(post) : data.thumbnail,
      data.title
    ),
    tags: data.tags.map(toTagModel),
  };
};
