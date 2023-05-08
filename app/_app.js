import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
//any code added to this file will render no any page
export function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
      key={router.route}
      initial="initialState"
      animate="animateState"
      exit="exitState"
      transition={{
        duration:0.75,
      }}
      variants={{
        initialState:{
          opacity:0,
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
        },
        animateState:{
          opacity:1,
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
        },
        exitState:{
          clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
        },

      }}
      >
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  );
}
