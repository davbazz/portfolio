import { motion } from "motion/react";

export function RotateOnHover({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ rotateZ: 0, scale: 1 }}
      whileHover={{
        rotateZ: 8,
        scale: 1.05,
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 15,
        },
      }}
      whileTap={{ scale: 0.95 }}
      animate={{ rotateZ: 0, scale: 1 }}
      className="h-fit w-fit"
    >
      {children}
    </motion.div>
  );
}
