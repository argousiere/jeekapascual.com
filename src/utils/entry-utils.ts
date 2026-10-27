const WORDS_PER_MINUTE = 275;

export const DATE_PREFIX = /^(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})-/;

export const getReadingTime = (body = '') =>
  Math.max(1, Math.ceil(body.trim().split(/\s+/).length / WORDS_PER_MINUTE));
