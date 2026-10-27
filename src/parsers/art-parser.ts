import siteConfig from '../../site.config';
import { parseBaseEntryModel } from './base-entry-parser';
import { parseImageModel } from './image-parser';
import { ARTWORK_IMAGE_TRANSFORM } from '../utils/image-utils';
import type { ArtEntryModel, ArtPost, PostImage } from '../types';

const convertImageDataToThumbnail = ({ src, width, height }: PostImage): PostImage => {
  const thumbnailWidth = Math.min(width, siteConfig.thumbnailWidth);

  return {
    src,
    width: thumbnailWidth,
    height: Math.round((height * thumbnailWidth) / width),
  };
};

export const parseArtEntryModel = (post: ArtPost): ArtEntryModel => {
  const { id, data } = post;
  const { title, image, thumbnail } = data;

  const url = `${siteConfig.routes.art.url}/${id}`;

  return {
    ...parseBaseEntryModel(
      post,
      url,
      { thumbnail: thumbnail ?? convertImageDataToThumbnail(image) }
    ),
    image: parseImageModel(image, title, ARTWORK_IMAGE_TRANSFORM),
  };
};
