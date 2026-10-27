import siteConfig from '../../site.config';
import { parseBaseEntryModel } from './base-entry-parser';
import type { BlogEntryModel, WritingPost } from '../types';

export const parseWritingEntryModel = (post: WritingPost): BlogEntryModel =>
  parseBaseEntryModel(post, `${siteConfig.routes.writing.url}/${post.id}`);
