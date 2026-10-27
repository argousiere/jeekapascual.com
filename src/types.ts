import type { CollectionEntry } from 'astro:content';
import type {
  EntryModel,
  ImageModel,
} from '@argousiere/vespertina-design-system/core';

export interface Tag {
  slug: string;
  label?: string;
  description?: string;
}

export type WithTags<P extends CollectionEntry<'blog' | 'writing' | 'art'>> = Omit<P, 'data'> & {
  data: Omit<P['data'], 'tags'> & { tags: Tag[] };
};

export type BlogPost = WithTags<CollectionEntry<'blog'>>;
export type WritingPost = WithTags<CollectionEntry<'writing'>>;
export type ArtPost = WithTags<CollectionEntry<'art'>>;

export type PostImage = ArtPost['data']['image'];
export type Post = BlogPost | WritingPost | ArtPost;

export type BlogEntryModel = EntryModel;

export interface ArtEntryModel extends EntryModel {
  image: ImageModel;
}

export interface PageModel<E extends EntryModel> {
  entry: E;
  html: string;
  previous?: E;
  next?: E;
}
