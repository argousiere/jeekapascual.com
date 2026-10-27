import { getCollection } from 'astro:content';
import { parseArtEntryModel } from '../parsers/art-parser';
import { artHtmlProcessor } from '../processors/art-html-processor';
import { getTag } from './tag-queries';
import { extendWithPagination, sortByNewest } from '../utils/collection-utils';
import type { ArtPost } from '../types';

export const getArtPosts = async (): Promise<ArtPost[]> =>
  (await getCollection('art'))
    .map((post) => ({
      ...post,
      data: { ...post.data, tags: post.data.tags.map(getTag) },
    }))
    .sort(sortByNewest);

export const getArtPages = async () =>
  (await getArtPosts()).map((post, index, posts) =>
    extendWithPagination(post, index, posts, {
      param: 'slug',
      parseEntryModel: parseArtEntryModel,
      htmlProcessor: artHtmlProcessor,
    })
  );
