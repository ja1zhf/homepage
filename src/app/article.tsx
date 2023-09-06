'use client';

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const variants: any = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 }
}

const Article = ({
  children,
}: {
  children: React.ReactNode,
}) => {
  const pathname = usePathname();

  return (
    <motion.div
      key={pathname}
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 20, opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.div>
  )
}

export default Article;
