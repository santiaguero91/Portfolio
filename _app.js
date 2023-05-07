import { AnimatePresence } from "framer-motion";
//any code added to this file will render no any page
export function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence>
      <div>
        <Component {...pageProps} />
      </div>
    </AnimatePresence>
  );
}
