import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
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
    }
  };

  return (
    <ReactLenis root>
      <NavBar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      <AnimatePresence mode="wait">
        <motion.div
          key={activeSection}
          className="mx-auto my-20 px-5 sm:px-12 md:max-w-3xl lg:px-0"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          {renderActiveSection()}
        </motion.div>
      </AnimatePresence>
    </ReactLenis>
  );
}

export default App;
