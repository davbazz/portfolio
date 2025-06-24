import { motion } from "motion/react";

interface InViewRevealProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function InViewReveal({ children, className }: InViewRevealProps) {
  return (
    <motion.div
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
