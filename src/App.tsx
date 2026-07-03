import { ReactLenis } from "lenis/react";

import { Finale, Investors } from "./components/close";
import { Companion, Inside, Privacy, Ritual } from "./components/product";
import { Lens, Problem, Thesis } from "./components/story";
import { ScrollHero } from "./components/ScrollHero";
import { Footer, Nav } from "./components/shared";

// One page, one story: a single ordinary moment returns four times as you
// scroll, sharper each time, the way a memory strengthens with recall.
export function App() {
  return (
    <ReactLenis root>
      <div className="site">
        <Nav />
        <main>
          <ScrollHero />
          <Problem />
          <Thesis />
          <Lens />
          <Ritual />
          <Companion />
          <Inside />
          <Privacy />
          <Investors />
          <Finale />
        </main>
        <Footer />
      </div>
    </ReactLenis>
  );
}
