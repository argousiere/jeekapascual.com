import type { EntryModel } from '@argousiere/vespertina-design-system/core';
import { parseArtEntryModel } from './art-parser';
import { parseBlogEntryModel } from './blog-parser';
import { parseWritingEntryModel } from './writing-parser';
import type { Post } from '../types';

export const parseEntryModel = (post: Post): EntryModel => {
  switch (post.collection) {
    case 'art':
      return parseArtEntryModel(post);
    case 'writing':
      return parseWritingEntryModel(post);
    default:
      return parseBlogEntryModel(post);
  }
};
