export const toTagSlug = (tag: string) =>
  tag.trim().toLowerCase().replace(/\s+/g, '-');
