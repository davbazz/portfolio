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
    <div className="justify-between border-b border-zinc-800 py-1.5 pt-32">
      <nav
        className="relative mx-auto flex max-w-3xl"
        onMouseLeave={() => setHoveredTab(null)}
      >
        {tabs.map((tab, i) => (
          <button
            key={tab}
            className={`w-1/4 cursor-pointer rounded-lg px-5 py-2 text-center hover:text-white ${activeSection === tab ? "text-white" : "text-zinc-400"}`}
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
              className="absolute top-0 -z-10 h-full w-1/4 rounded-lg bg-zinc-900"
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
