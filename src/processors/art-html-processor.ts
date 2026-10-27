import {
  renderThumbnailHtml,
  type HtmlProcessor,
} from '@argousiere/vespertina-design-system/core';
import {
  baseHtmlProcessor,
  type EntryHtmlOptions,
} from './base-html-processor';
import { ARTWORK_IMAGE_TRANSFORM } from '../utils/image-utils';
import type { ArtEntryModel } from '../types';

export const artHtmlProcessor: HtmlProcessor<EntryHtmlOptions<ArtEntryModel>> = {
  // convert frontmatter image property for art posts into a cover img
  // and splice it between EntryHeader and EntryBody
  process: (html, { entry }) =>
    renderThumbnailHtml(entry.image) +
    baseHtmlProcessor.process(html, { imageTransform: ARTWORK_IMAGE_TRANSFORM }),
};
