import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  external?: boolean;
  children: React.ReactNode;
  animated?: boolean;
}

export function Link({
  href,
  external,
  children,
  className = "",
  animated = false,
  ...props
}: LinkProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={href}
      target={external ? "_blank" : "_self"}
      rel={external ? "noopener noreferrer" : undefined}
      className={`group relative inline-block focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-white ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      {...props}
    >
      {children}

      {animated && (
        <AnimatePresence>
          {hovered && (
            <motion.span
              className="absolute bottom-0 left-0 block h-0.25 bg-white"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              exit={{ width: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            />
          )}
        </AnimatePresence>
      )}
    </a>
  );
}
