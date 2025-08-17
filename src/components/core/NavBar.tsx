import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export type Section = "About" | "Experience" | "Contact" | "Blog";

interface NavBarProps {
  activeSection: Section;
  setActiveSection: (section: Section) => void;
}

export function NavBar({ activeSection, setActiveSection }: NavBarProps) {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [hoveredTab, setHoveredTab] = useState<number | null>(null);
  const tabs: Section[] = ["About", "Experience", "Contact", "Blog"];

  return (
    <div className="scrollbar-none justify-between border-b border-zinc-800 px-5 py-1.5 pt-8 max-lg:touch-pan-x max-md:overflow-x-scroll sm:px-12 sm:pt-12 md:pt-32 lg:px-0">
      <nav
        className="relative mx-auto flex max-sm:w-fit md:max-w-3xl"
        onMouseLeave={() => setHoveredTab(null)}
      >
        {tabs.map((tab, i) => (
          <button
            key={tab}
            className={`w-32 cursor-pointer rounded-lg px-5 py-2 text-center duration-100 hover:text-white focus-visible:text-white focus-visible:outline-2 focus-visible:outline-white sm:w-1/4 ${activeSection === tab ? "text-white" : "text-zinc-400"}`}
            onPointerEnter={() => setHoveredTab(i)}
            onClick={() => {
              setActiveSection(tab);
              setActiveTab(i);
            }}
          >
            {tab}
          </button>
        ))}

        <AnimatePresence>
          {(hoveredTab || hoveredTab === 0) && (
            <motion.span
              className="absolute top-0 -z-10 hidden h-full w-1/4 rounded-lg bg-zinc-900 lg:block"
              initial={{ opacity: 0, x: `${hoveredTab * 100}%` }}
              animate={{
                opacity: 1,
                x: `${hoveredTab * 100}%`,
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                },
              }}
              exit={{ opacity: 0, x: `${hoveredTab * 100}%` }}
            />
          )}
        </AnimatePresence>

        <AnimatePresence>
          <motion.span
            className="absolute -bottom-[7.5px] h-0.5 w-1/4 rounded-lg bg-white"
            initial={{ x: `${activeTab * 100}%` }}
            animate={{
              x: `${activeTab * 100}%`,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 30,
              },
            }}
            exit={{ x: `${activeTab * 100}%` }}
          />
        </AnimatePresence>
      </nav>
    </div>
  );
}
