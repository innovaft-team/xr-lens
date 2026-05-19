import { Variants } from "framer-motion";

export const EASE_CUSTOM: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const fadeInBackground = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 1.5, ease: EASE_CUSTOM },
};

export const fadeInNavbar = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: EASE_CUSTOM },
};

export const fadeInHeroTitle = {
  initial: { opacity: 0, y: 30, scale: 0.98 },
  animate: { opacity: 1, y: 0, scale: 1 },
  transition: { duration: 1.2, delay: 0.2, ease: EASE_CUSTOM },
};

export const fadeInLensContainer = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 1.2, delay: 0.4, ease: EASE_CUSTOM },
};

export const floatLens = {
  animate: { y: [-5, 5, -5] },
  transition: { duration: 6, repeat: Infinity, ease: "easeInOut" as const },
};

export const pulseGlowBlob = {
  animate: { opacity: [0.3, 0.6, 0.3], scale: [0.9, 1.1, 0.9] },
  transition: { duration: 4, repeat: Infinity, ease: "easeInOut" as const },
};

export const getFadeInCardWrapper = (delay: number, xOffset: number) => ({
  initial: { opacity: 0, x: xOffset },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 1, delay, ease: EASE_CUSTOM },
});

export const getFloatCard = (delay: number) => ({
  animate: { y: [-3, 3, -3] },
  transition: {
    y: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut" as const,
      delay,
    },
  },
});

export const videoCardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: EASE_CUSTOM,
      staggerChildren: 0.1,
    },
  },
};
