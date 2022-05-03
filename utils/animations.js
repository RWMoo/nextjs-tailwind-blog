export const navigationContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const navigationItemVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export const pageVariants = {
  initial: { opacity: 0, y: -150 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        y: {
          duration: 1,
        },
        opacity: {
          delay: 0.5,
          duration: 1,
        },
      },
    },
    exit: {
      opacity: 0,
      y: 50,
      transition: {
        duration: 0.3,
        y: {
          delay: 0.1
        }
      },
    },
}