import type { ImageModel } from '@argousiere/vespertina-design-system/core';
import { imageUrl } from '../utils/image-utils';
import type { PostImage } from '../types';

export const parseImageModel = (
  image: PostImage,
  alt: string,
  transform = `c_limit,w_${image.width},f_auto,q_auto`
): ImageModel => ({
  src: imageUrl(image.src, transform),
  alt,
  width: image.width,
  height: image.height,
});
