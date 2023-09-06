'use client';

import { AnimatePresence } from "framer-motion";

const PageWrapper = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <AnimatePresence mode="wait" initial={true}>
      {children}
    </AnimatePresence>
  )
}

export default PageWrapper;
