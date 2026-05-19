"use client";

import { motion, MotionValue } from "framer-motion";
import Image from "next/image";
import React from "react";
import { fadeInLensContainer, floatLens, pulseGlowBlob } from "../../utils/animations";

interface HeroForegroundProps {
  parallaxX: MotionValue<number>;
  parallaxY: MotionValue<number>;
}

const HeroForeground: React.FC<HeroForegroundProps> = ({ parallaxX, parallaxY }) => {
  return (
    <div className="absolute top-[clamp(100px,15.2vw,220px)] left-1/2 -translate-x-1/2 pointer-events-none z-0">
      <motion.div
        style={{ x: parallaxX, y: parallaxY }}
        className="w-[clamp(280px,56.45vw,813px)] h-[clamp(157px,31.6vw,456px)] max-lg:w-[80vw] max-lg:h-[45vw] relative will-change-transform"
      >
        <motion.div
          {...floatLens}
          className="w-full h-full"
        >
          <motion.div
            className="hero-glow-blob"
            {...pulseGlowBlob}
          />
          <motion.div
            {...fadeInLensContainer}
            className="w-full h-full relative"
          >
            <Image
              src="/images/svg/lens.svg"
              alt="XR Lens"
              fill
              priority
              sizes="(max-width: 768px) 80vw, (max-width: 1024px) 50vw, 813px"
              className="object-contain"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroForeground;
