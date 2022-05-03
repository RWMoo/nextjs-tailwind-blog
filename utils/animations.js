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
  initial: { opacity: 0, y: -25 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      y: {
        duration: 0.3,
      },
      opacity: {
        duration: 0.3,
      },
    },
  },
  exit: {
    opacity: 0,
    y: 25,
    transition: {
      duration: 0.3,
      y: {
        delay: 0.1,
      },
    },
  },
};

export const fadeInOut = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export const fadeInOutDown = {
  initial: { y: -75, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: 75, opacity: 0 },
};
