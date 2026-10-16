import { EntryList, Navbar } from '@argousiere/vespertina-design-system/react';
import Footer from './components/Footer';
import { getEntryListItems } from './entries';

const entryListItems = getEntryListItems();

const App = () => (
  <div className="site">
    <Navbar title="The Vespertine Cadet" homeUrl="#/" />
    <main id="main" className="app__main">
      <section className="app__hero">
        <p className="app__tagline">Adventures in art and celestial wayfaring</p>
        <div
          className="ves-logo"
          role="img"
          aria-label="Vespertina logo"
        />
      </section>
      <EntryList title="Entries" items={entryListItems} />
    </main>
    <Footer />
  </div>
);

export default App;
