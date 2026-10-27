import {
  thumbnailHtmlProcessor,
  type EntryModel,
  type HtmlProcessor,
} from '@argousiere/vespertina-design-system/core';
import { resolveImages } from '../utils/image-utils';

export interface EntryHtmlOptions<E extends EntryModel> {
  entry: E;
}

export interface BaseHtmlOptions {
  imageTransform: string;
}

export const baseHtmlProcessor: HtmlProcessor<BaseHtmlOptions> = {
  process: (html, { imageTransform }) =>
    thumbnailHtmlProcessor.process(resolveImages(html, imageTransform)),
};
