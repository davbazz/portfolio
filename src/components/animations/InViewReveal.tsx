import { motion } from "motion/react";

interface InViewRevealProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  delay?: number;
}

export function InViewReveal({
  children,
  className,
  delay,
}: InViewRevealProps) {
  return (
    <motion.div
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
