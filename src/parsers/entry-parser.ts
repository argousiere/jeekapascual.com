import type { EntryModel } from '@argousiere/vespertina-design-system/core';
import { parseArtEntryModel } from './art-parser';
import { parseBlogEntryModel } from './blog-parser';
import type { Post } from '../types';

export const parseEntryModel = (post: Post): EntryModel =>
  post.collection === 'art' ? parseArtEntryModel(post) : parseBlogEntryModel(post);
