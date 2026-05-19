"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";
import { fadeInBackground } from "../../utils/animations";

const GradientBackground: React.FC = () => {
  return (
    <motion.div
      {...fadeInBackground}
      className="absolute top-0 left-0 -z-10 w-full h-full overflow-hidden pointer-events-none"
    >
      <Image
        src="/images/svg/herobg.svg"
        alt="Hero Background"
        fill
        className="object-cover object-center"
        priority
      />
      <motion.div
        animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "linear",
        }}
        className="absolute inset-0 opacity-40 mix-blend-overlay"
        style={{
          backgroundImage:
            "radial-gradient(circle at center, rgba(255,255,255,0.15) 0%, transparent 60%)",
          backgroundSize: "150% 150%",
        }}
      />
    </motion.div>
  );
};

export default GradientBackground;
