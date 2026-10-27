import { parseBaseEntryModel } from './base-entry-parser';
import type { BlogEntryModel, BlogPost } from '../types';

export const parseBlogEntryModel = (post: BlogPost): BlogEntryModel => {
  return parseBaseEntryModel(post, `/${post.id}`);
}
