import type { EntryModel } from '@argousiere/vespertina-design-system/core';
import type { FeaturedListItemProps } from '@argousiere/vespertina-design-system/react';
import siteConfig from '../../site.config';

export const getFeaturedItems = (items: EntryModel[]): FeaturedListItemProps[] =>
  siteConfig.featuredEntries.flatMap((id) =>
    items
      .filter((item) => item.id === id)
      .map((entry) => ({ entry }))
  );
