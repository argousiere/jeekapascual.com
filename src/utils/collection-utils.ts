import type {
  EntryModel,
  HtmlProcessor,
} from '@argousiere/vespertina-design-system/core';
import type { EntryHtmlOptions } from '../processors/base-html-processor';
import type { PageModel, Post } from '../types';

export interface PaginationOptions<P extends Post, E extends EntryModel> {
  param: string;
  parseEntryModel: (post: P) => E;
  htmlProcessor: HtmlProcessor<EntryHtmlOptions<E>>;
}

export const sortByNewest = (a: Post, b: Post) =>
  b.data.date.localeCompare(a.data.date);

export const extendWithPagination = <P extends Post, E extends EntryModel>(
  post: P,
  index: number,
  posts: P[],
  { param, parseEntryModel, htmlProcessor }: PaginationOptions<P, E>
) => {
  const previous = posts[index + 1];
  const next = posts[index - 1];
  const entry = parseEntryModel(post);
  const page: PageModel<E> = {
    entry,
    html: htmlProcessor.process(post.rendered?.html ?? '', { entry }),
    previous: previous && parseEntryModel(previous),
    next: next && parseEntryModel(next),
  };

  return { params: { [param]: post.id }, props: { page } };
};
