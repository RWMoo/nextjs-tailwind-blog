import React from "react";
import Footer from "../footer/Footer";
import Navigation from "../navigation/Navigation";
import { motion } from "framer-motion";
import { pageVariants } from "../../utils/animations";

const PageLayout = ({ children }) => {
  return (
    <div className="flex flex-col">
      <Navigation />
      <motion.div
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {children}
      </motion.div>
      <Footer />
    </div>
  );
};

export default PageLayout;
