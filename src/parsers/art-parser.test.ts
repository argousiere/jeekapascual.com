import { describe, expect, it, vi } from 'vitest';
import { parseArtEntryModel } from './art-parser';
import type { ArtPost } from '../types';

vi.mock('astro:env/server', () => ({
  IMAGES_URL: 'https://images.test/{transform}/',
}));

describe('parseArtEntryModel', () => {
  it('should scale a thumbnail down from a wide artwork image', () => {
    const model = parseArtEntryModel({
      id: 'archon-meld',
      data: {
        title: 'Archon Meld',
        date: '2024-03-15',
        tags: [],
        image: { src: '/art/meld.png', width: 2000, height: 1000 },
      },
      collection: 'art'
    });

    expect(model).toEqual({
      id: 'archon-meld',
      title: 'Archon Meld',
      url: '/art/archon-meld',
      date: '2024-03-15',
      description: undefined,
      readingTimeMinutes: 1,
      tags: [],
      thumbnail: {
        src: 'https://images.test/c_limit,w_640,f_auto,q_auto/art/meld.png',
        alt: 'Archon Meld',
        width: 640,
        height: 320,
      },
      image: {
        src: 'https://images.test/f_auto,q_auto/art/meld.png',
        alt: 'Archon Meld',
        width: 2000,
        height: 1000,
      },
    });
  });

  it('should keep the original size for an artwork narrower than the thumbnail width', () => {
    const model = parseArtEntryModel({
      id: 'archon-meld',
      data: {
        title: 'Archon Meld',
        date: '2024-03-15',
        tags: [],
        image: { src: '/art/meld.png', width: 400, height: 300 },
      },
      collection: 'art'
    });

    expect(model).toEqual({
      id: 'archon-meld',
      title: 'Archon Meld',
      url: '/art/archon-meld',
      date: '2024-03-15',
      description: undefined,
      readingTimeMinutes: 1,
      tags: [],
      thumbnail: {
        src: 'https://images.test/c_limit,w_400,f_auto,q_auto/art/meld.png',
        alt: 'Archon Meld',
        width: 400,
        height: 300,
      },
      image: {
        src: 'https://images.test/f_auto,q_auto/art/meld.png',
        alt: 'Archon Meld',
        width: 400,
        height: 300,
      },
    });
  });

  it('should use the thumbnail from the frontmatter when given', () => {
    const model = parseArtEntryModel({
      id: 'archon-meld',
      data: {
        title: 'Archon Meld',
        date: '2024-03-15',
        tags: [],
        image: { src: '/art/meld.png', width: 2000, height: 1000 },
        thumbnail: { src: '/art/meld-crop.png', width: 500, height: 500 },
      },
      collection: 'art'
    });

    expect(model).toEqual({
      id: 'archon-meld',
      title: 'Archon Meld',
      url: '/art/archon-meld',
      date: '2024-03-15',
      description: undefined,
      readingTimeMinutes: 1,
      tags: [],
      thumbnail: {
        src: 'https://images.test/c_limit,w_500,f_auto,q_auto/art/meld-crop.png',
        alt: 'Archon Meld',
        width: 500,
        height: 500,
      },
      image: {
        src: 'https://images.test/f_auto,q_auto/art/meld.png',
        alt: 'Archon Meld',
        width: 2000,
        height: 1000,
      },
    });
  });
});
