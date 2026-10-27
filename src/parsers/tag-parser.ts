import type { TagModel } from '@argousiere/vespertina-design-system/core';
import siteConfig from '../../site.config';
import type { Tag } from '../types';

export const parseTagModel = ({ slug, label, description }: Tag): TagModel => ({
  slug,
  label,
  description,
  url: `${siteConfig.routes.tag.url}/${slug}`,
});
