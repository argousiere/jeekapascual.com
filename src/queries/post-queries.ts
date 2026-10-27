import { getArtPosts } from './art-queries';
import { getBlogPosts } from './blog-queries';
import { getWritingPosts } from './writing-queries';
import { sortByNewest } from '../utils/collection-utils';
import type { Post } from '../types';

export const getPosts = async (): Promise<Post[]> =>
  [
    ...(await getBlogPosts()),
    ...(await getWritingPosts()),
    ...(await getArtPosts())
  ].sort(sortByNewest);
