import { EntriesViewMode } from '@argousiere/vespertina-design-system/react';

const routes = {
  home: { url: '/' },
  tag: { url: '/tag', viewMode: EntriesViewMode.LIST },
  art: { label: 'Art', url: '/art', viewMode: EntriesViewMode.GALLERY },
  writing: { label: 'Writing', url: '/writing', viewMode: EntriesViewMode.LIST },
  work: { label: 'Work', url: '/work' },
  about: { label: 'About', url: '/about' },
};

const siteConfig = {
  blurb: 'Adventures in art and celestial wayfaring',
  featuredEntries: ['spaceship-office', 'archon-meld', 'starwing-voyager-m78-64jk'],
  routes,
  navItems: [
    routes.art,
    routes.writing,
    routes.work,
    routes.about
  ],
  thumbnailWidth: 640,
};

export default siteConfig;
