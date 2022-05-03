import "../styles/globals.css";
import ThemeProvider from "../contexts/ThemeProvider";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import {getInitialTheme} from "../utils/index"
function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const initialTheme = getInitialTheme()
  return (
    <ThemeProvider initialTheme={initialTheme}>
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.asPath} />
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default MyApp;
