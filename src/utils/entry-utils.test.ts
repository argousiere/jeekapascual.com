import { describe, expect, it } from 'vitest';
import { DATE_PREFIX, getReadingTime } from './entry-utils';

describe('getReadingTime', () => {
  it('should return 1 minute when text is empty', () => {
    expect(getReadingTime('')).toBe(1);
  });

  it('should return 1 minute when text is undefined', () => {
    expect(getReadingTime()).toBe(1);
  });

  it('should return 1 minute when word count is exactly at WPM', () => {
    expect(getReadingTime('word '.repeat(275))).toBe(1);
  });

  it('should round up to 2 minutes when word count is at WPM+1', () => {
    expect(getReadingTime('word '.repeat(276))).toBe(2);
  });

  it('should ignore surrounding and repeated whitespace', () => {
    expect(getReadingTime('  one \n\n two\tthree  ')).toBe(1);
  });
});

describe('DATE_PREFIX', () => {
  it('should strip a date prefix from a file name', () => {
    expect('2024-03-09-archon-meld'.replace(DATE_PREFIX, '')).toBe('archon-meld');
  });

  it('should leave a name without a date prefix unchanged', () => {
    expect('archon-meld'.replace(DATE_PREFIX, '')).toBe('archon-meld');
  });
});
