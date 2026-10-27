import { getCollection, type CollectionEntry } from 'astro:content';
import siteConfig from '../../site.config';

type ArtPost = CollectionEntry<'art'>;
type ArtImage = ArtPost['data']['image'];

const THUMBNAIL_WIDTH = siteConfig.thumbnailWidth;

const toThumbnail = ({ src, width, height }: ArtImage): ArtImage => {
  const thumbnailWidth = Math.min(width, THUMBNAIL_WIDTH);

  return {
    src,
    width: thumbnailWidth,
    height: Math.round((height * thumbnailWidth) / width),
  };
};

export const getArtPosts = async () =>
  (await getCollection('art')).sort((a, b) =>
    b.data.date.localeCompare(a.data.date)
  );

export const getArtUrl = (id: string) => `/art/${id}/`;

export const getArtThumbnail = ({ data }: ArtPost) =>
  data.thumbnail ?? toThumbnail(data.image);
