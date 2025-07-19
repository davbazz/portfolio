import { useState } from "react";
import ReactLenis from "lenis/react";

import { NavBar, About, Experience, Contact, Blog } from "@/components/core";
import { Constellation } from "@/components/animations";
import type { Section } from "@/components/core";

function App() {
  const [activeSection, setActiveSection] = useState<Section>("About");

  const renderActiveSection = () => {
    switch (activeSection) {
      case "About":
        return <About />;
      case "Experience":
        return <Experience />;
      case "Contact":
        return <Contact />;
      case "Blog":
        return <Blog />;
    }
  };

  return (
    <ReactLenis root>
      <Constellation />
      <NavBar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <div className="mx-auto my-12 px-5 sm:my-16 sm:px-12 md:my-20 md:max-w-3xl lg:px-0">
        {renderActiveSection()}
      </div>
    </ReactLenis>
  );
}

export default App;
