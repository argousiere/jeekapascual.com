import { getArtPosts } from './art-queries';
import { getBlogPosts } from './blog-queries';
import { sortByNewest } from '../utils/collection-utils';
import type { Post } from '../types';

export const getPosts = async (): Promise<Post[]> =>
  [
    ...(await getBlogPosts()), 
    ...(await getArtPosts())
  ].sort(sortByNewest);
