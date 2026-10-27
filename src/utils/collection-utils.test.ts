import { describe, expect, it } from 'vitest';
import { extendWithPagination, sortByNewest } from './collection-utils';
import type { BlogPost, Post } from '../types';

describe('sortByNewest', () => {
  it('should order posts from newest to oldest', () => {
    expect(
      [
        { id: 'middle', data: { date: '2024-02-01' } },
        { id: 'oldest', data: { date: '2023-12-31' } },
        { id: 'newest', data: { date: '2024-03-15' } },
      ]
        .sort((a, b) => sortByNewest(a as Post, b as Post))
        .map(({ id }) => id)
    ).toEqual(['newest', 'middle', 'oldest']);
  });
});

describe('extendWithPagination', () => {
  const posts = [
    { id: 'newest', data: { date: '2024-03-15' }, rendered: { html: '<p>Newest</p>' } },
    { id: 'middle', data: { date: '2024-02-01' }, rendered: { html: '<p>Middle</p>' } },
    { id: 'oldest', data: { date: '2023-12-31' } },
  ] as BlogPost[];
  const options = {
    param: 'slug',
    parseEntryModel: (post: BlogPost) => ({
      id: post.id,
      title: post.id,
      url: `/${post.id}`,
      date: post.data.date,
    }),
    htmlProcessor: {
      process: (html: string, { entry }: { entry: { id: string } }) =>
        `<article data-id="${entry.id}">${html}</article>`,
    },
  };

  it('should link a middle post to its older and newer siblings', () => {
    expect(extendWithPagination(posts[1], 1, posts, options)).toEqual({
      params: { slug: 'middle' },
      props: {
        page: {
          entry: { id: 'middle', title: 'middle', url: '/middle', date: '2024-02-01' },
          html: '<article data-id="middle"><p>Middle</p></article>',
          previous: { id: 'oldest', title: 'oldest', url: '/oldest', date: '2023-12-31' },
          next: { id: 'newest', title: 'newest', url: '/newest', date: '2024-03-15' },
        },
      },
    });
  });

  it('should have no next entry for the newest post', () => {
    expect(extendWithPagination(posts[0], 0, posts, options)).toEqual({
      params: { slug: 'newest' },
      props: {
        page: {
          entry: { id: 'newest', title: 'newest', url: '/newest', date: '2024-03-15' },
          html: '<article data-id="newest"><p>Newest</p></article>',
          previous: { id: 'middle', title: 'middle', url: '/middle', date: '2024-02-01' },
          next: undefined,
        },
      },
    });
  });

  it('should have no previous entry and empty html for the oldest unrendered post', () => {
    expect(extendWithPagination(posts[2], 2, posts, options)).toEqual({
      params: { slug: 'oldest' },
      props: {
        page: {
          entry: { id: 'oldest', title: 'oldest', url: '/oldest', date: '2023-12-31' },
          html: '<article data-id="oldest"></article>',
          previous: undefined,
          next: { id: 'middle', title: 'middle', url: '/middle', date: '2024-02-01' },
        },
      },
    });
  });
});
