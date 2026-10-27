import type { EntryModel } from '@argousiere/vespertina-design-system/core';
import { parseTagModel } from './tag-parser';
import { parseImageModel } from './image-parser';
import { getReadingTime } from '../utils/entry-utils';
import type { Post, PostImage } from '../types';

export interface BaseEntryParserOptions {
  thumbnail?: PostImage;
}

export const parseBaseEntryModel = (
  post: Post,
  url: string,
  options: BaseEntryParserOptions = {}
): EntryModel => {
  const { id, data, body } = post;
  const { title, date, description, cover, tags } = data;
  const { thumbnail } = options;

  const model: EntryModel = {
    id,
    title,
    url,
    date,
    description,
    readingTimeMinutes: getReadingTime(body),
    tags: tags.map(parseTagModel),
  };

  if (cover) {
    model.cover = parseImageModel(cover, data.title)
  }

  if (thumbnail) {
    model.thumbnail = parseImageModel(thumbnail, data.title);
  }

  return model;
}
