import { getCollection } from 'astro:content';
import { parseWritingEntryModel } from '../parsers/writing-parser';
import { blogHtmlProcessor } from '../processors/blog-html-processor';
import { getTag } from './tag-queries';
import { extendWithPagination, sortByNewest } from '../utils/collection-utils';
import type { WritingPost } from '../types';

export const getWritingPosts = async (): Promise<WritingPost[]> =>
  (await getCollection('writing'))
    .map((post) => ({
      ...post,
      data: { ...post.data, tags: post.data.tags.map(getTag) },
    }))
    .sort(sortByNewest);

export const getWritingPages = async () =>
  (await getWritingPosts()).map((post, index, posts) =>
    extendWithPagination(post, index, posts, {
      param: 'slug',
      parseEntryModel: parseWritingEntryModel,
      htmlProcessor: blogHtmlProcessor,
    })
  );
