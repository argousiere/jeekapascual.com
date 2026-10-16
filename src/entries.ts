import entryModules from 'virtual:vespertina-entries';
import type { EntryListItemProps } from '@argousiere/vespertina-design-system/react';

interface EntryDoc {
  slug: string;
  attributes: { title?: string; date?: string };
}

/**
 * Markdown entries from the content folder as design system list items,
 * ordered newest to oldest. Entries without a valid date sink to the end.
 */
export const getEntryListItems = (): EntryListItemProps[] =>
  Object.values(entryModules)
    .map((module) => (module as { default: EntryDoc }).default)
    .map(({ slug, attributes }) => ({
      id: slug,
      title: attributes.title ?? slug,
      date: new Date(attributes.date ?? NaN),
      url: `#/${slug}`,
    }))
    .filter((item) => !Number.isNaN(item.date.getTime()))
    .sort((a, b) => b.date.getTime() - a.date.getTime());
