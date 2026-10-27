import { describe, expect, it, vi } from 'vitest';
import { parseBaseEntryModel } from './base-entry-parser';
import type { BlogPost } from '../types';

vi.mock('astro:env/server', () => ({
  IMAGES_URL: 'https://images.test/{transform}/',
}));

describe('parseBaseEntryModel', () => {
  it('should parse a post without images', () => {
    expect(
      parseBaseEntryModel(
        {
          id: 'sonnet-i',
          body: 'word '.repeat(300),
          data: {
            title: 'Sonnet I',
            date: '2024-03-15',
            description: 'A sonnet',
            tags: [
              { slug: 'poetry', label: 'Poetry', description: 'Verses' },
              { slug: 'untitled' },
            ],
          },
          collection: 'blog'
        },
        '/sonnet-i'
      )
    ).toEqual({
      id: 'sonnet-i',
      title: 'Sonnet I',
      url: '/sonnet-i',
      date: '2024-03-15',
      description: 'A sonnet',
      readingTimeMinutes: 2,
      tags: [
        { slug: 'poetry', label: 'Poetry', description: 'Verses', url: '/tag/poetry' },
        { slug: 'untitled', label: undefined, description: undefined, url: '/tag/untitled' },
      ],
    });
  });

  it('should add the cover image', () => {
    expect(
      parseBaseEntryModel(
        {
          id: 'sonnet-i',
          data: {
            title: 'Sonnet I',
            date: '2024-03-15',
            tags: [],
            cover: { src: '/blog/cover.png', width: 1200, height: 600 },
          },
          collection: 'blog'
        },
        '/sonnet-i'
      )
    ).toEqual({
      id: 'sonnet-i',
      title: 'Sonnet I',
      url: '/sonnet-i',
      date: '2024-03-15',
      description: undefined,
      readingTimeMinutes: 1,
      tags: [],
      cover: {
        src: 'https://images.test/c_limit,w_1200,f_auto,q_auto/blog/cover.png',
        alt: 'Sonnet I',
        width: 1200,
        height: 600,
      },
    });
  });

  it('should add the thumbnail from the options', () => {
    expect(
      parseBaseEntryModel(
        {
          id: 'sonnet-i',
          data: { title: 'Sonnet I', date: '2024-03-15', tags: [] },
          collection: 'blog'
        },
        '/sonnet-i',
        { thumbnail: { src: '/blog/thumb.png', width: 320, height: 180 } }
      )
    ).toEqual({
      id: 'sonnet-i',
      title: 'Sonnet I',
      url: '/sonnet-i',
      date: '2024-03-15',
      description: undefined,
      readingTimeMinutes: 1,
      tags: [],
      thumbnail: {
        src: 'https://images.test/c_limit,w_320,f_auto,q_auto/blog/thumb.png',
        alt: 'Sonnet I',
        width: 320,
        height: 180,
      },
    });
  });
});
