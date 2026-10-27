import { describe, expect, it, vi } from 'vitest';
import { imageUrl, resolveImages } from './image-utils';

vi.mock('astro:env/server', () => ({
  IMAGES_URL: 'https://images.test/{transform}/',
}));

describe('imageUrl', () => {
  it('should insert the image transform options and strip the leading slash', () => {
    expect(imageUrl('/art/meld.png', 'f_auto')).toBe(
      'https://images.test/f_auto/art/meld.png'
    );
  });

  it('should keep a path without a leading slash', () => {
    expect(imageUrl('art/meld.png', 'f_auto')).toBe(
      'https://images.test/f_auto/art/meld.png'
    );
  });
});

describe('resolveImages', () => {
  it('should replace relative image paths with absolute paths', () => {
    expect(
      resolveImages('<p><img alt="Meld" src="/art/meld.png"></p>', 'f_auto')
    ).toBe('<p><img alt="Meld" src="https://images.test/f_auto/art/meld.png"></p>');
  });

  it('should resolve every image in the html', () => {
    expect(
      resolveImages('<img src="/a.png"><img src="/b.png">', 'f_auto')
    ).toBe(
      '<img src="https://images.test/f_auto/a.png"><img src="https://images.test/f_auto/b.png">'
    );
  });

  it('should not change absolute paths', () => {
    expect(
      resolveImages('<img src="https://cdn.test/a.png">', 'f_auto')
    ).toBe('<img src="https://cdn.test/a.png">');
  });

  it('should not change paths with other protocols', () => {
    expect(resolveImages('<img src="//cdn.test/a.png">', 'f_auto')).toBe(
      '<img src="//cdn.test/a.png">'
    );
  });

  it('should ignore non-image paths', () => {
    expect(resolveImages('<a href="/art/meld/">Meld</a>', 'f_auto')).toBe(
      '<a href="/art/meld/">Meld</a>'
    );
  });
});
