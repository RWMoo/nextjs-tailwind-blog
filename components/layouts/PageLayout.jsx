import React from "react";
import Footer from "../footer/Footer";
import Navigation from "../navigation/Navigation";
import { motion } from "framer-motion";
import { pageVariants } from "../../utils/animations";
import { useRouter } from "next/router";

const PageLayout = ({ children }) => {
  const router = useRouter();
  return (
    <div className="flex flex-col bg-primary">
      <Navigation />
      <motion.div
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="flex flex-col h-full mx-auto w-full bg-primary"
      >
        <div className="container mx-auto py-6 flex-grow">{children}</div>
        {router.asPath !== "/" && <Footer />}
      </motion.div>
    </div>
  );
};

export default PageLayout;
