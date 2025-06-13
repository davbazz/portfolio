import { useState } from "react";
import ReactLenis from "lenis/react";

import { NavBar, About, Experience, Contact, Blog } from "@/components/core";
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
      default:
        return <About />;
    }
  };

  return (
    <ReactLenis root>
      <NavBar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <div className="mx-auto max-w-3xl">{renderActiveSection()}</div>
    </ReactLenis>
  );
}

export default App;
