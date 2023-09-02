"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
//any code added to this file will render no any page
export function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
      key={router.route}
      >
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  );
}
