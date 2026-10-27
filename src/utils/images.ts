import { IMAGES_URL } from 'astro:env/server';

export const BLOG_IMAGE_TRANSFORM = 'c_limit,w_720,f_auto,q_auto';
export const ARTWORK_IMAGE_TRANSFORM = 'f_auto,q_auto';

export const imageUrl = (path: string, transform: string) =>
  IMAGES_URL.replace('{transform}', transform) + path.replace(/^\//, '');

export const resolveImages = (html: string, transform: string) =>
  html.replace(
    /(<img\b[^>]*\ssrc=")(\/(?!\/)[^"]*)/g,
    (_, attribute: string, path: string) =>
      attribute + imageUrl(path, transform)
  );
