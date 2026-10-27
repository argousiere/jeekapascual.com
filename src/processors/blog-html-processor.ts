import type { HtmlProcessor } from '@argousiere/vespertina-design-system/core';
import {
  baseHtmlProcessor,
  type EntryHtmlOptions,
} from './base-html-processor';
import { BLOG_IMAGE_TRANSFORM } from '../utils/image-utils';
import type { BlogEntryModel } from '../types';

export const blogHtmlProcessor: HtmlProcessor<EntryHtmlOptions<BlogEntryModel>> = {
  process: (html) =>
    baseHtmlProcessor.process(html, { imageTransform: BLOG_IMAGE_TRANSFORM }),
};
