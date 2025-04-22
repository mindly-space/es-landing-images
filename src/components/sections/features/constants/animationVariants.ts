
export const featureAnimationVariants = {
  title: {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.1 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.4 } }
  },
  
  description: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.3 } }
  },
  
  image: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.7 } },
    exit: { opacity: 0, scale: 0.9, transition: { duration: 0.3 } }
  }
};
