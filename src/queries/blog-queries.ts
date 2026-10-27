import { getCollection } from 'astro:content';
import { parseBlogEntryModel } from '../parsers/blog-parser';
import { blogHtmlProcessor } from '../processors/blog-html-processor';
import { getTag } from './tag-queries';
import { extendWithPagination, sortByNewest } from '../utils/collection-utils';
import type { BlogPost } from '../types';

export const getBlogPosts = async (): Promise<BlogPost[]> =>
  (await getCollection('blog'))
    .map((post) => ({
      ...post,
      data: { ...post.data, tags: post.data.tags.map(getTag) },
    }))
    .sort(sortByNewest);

export const getBlogPages = async () =>
  (await getBlogPosts()).map((post, index, posts) =>
    extendWithPagination(post, index, posts, {
      param: 'slug',
      parseEntryModel: parseBlogEntryModel,
      htmlProcessor: blogHtmlProcessor,
    })
  );
