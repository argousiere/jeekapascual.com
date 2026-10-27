import { EntriesViewMode } from '@argousiere/vespertina-design-system/react';

const routes = {
  home: { url: '/' },
  art: { label: 'Art', url: '/art', viewMode: EntriesViewMode.GALLERY },
  tag: { url: '/tag', viewMode: EntriesViewMode.LIST },
  about: { label: 'About', url: '/about' },
};

const siteConfig = {
  blurb: 'Adventures in art and celestial wayfaring',
  featuredEntries: ['archon-meld', 'starwing-voyager-m78-64jk'],
  routes,
  navItems: [routes.art, routes.about],
  thumbnailWidth: 640,
};

export default siteConfig;
