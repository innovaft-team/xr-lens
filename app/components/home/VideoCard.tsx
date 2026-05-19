"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import CommonButton from "../common/CommonButton";
import PlayButton from "../common/PlayButton";
import { videoCardVariants } from "../../utils/animations";

const VideoCard: React.FC = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, margin: "-50px" }}
      variants={videoCardVariants}
      className="bg-white/60 backdrop-blur-[30px] shadow-[inset_1px_1px_1px_rgba(255,255,255,0.6),0_8px_32px_rgba(0,0,0,0.04)] rounded-4xl w-full max-w-250.75 mx-auto mt-[clamp(5rem,11vw,160px)] max-lg:mt-10
        border border-white/60 flex items-center justify-between pr-6 relative group max-lg:flex-col max-lg:p-6 max-lg:items-start max-lg:gap-8 max-md:rounded-3xl"
    >
      <div className="absolute inset-0 overflow-hidden rounded-4xl pointer-events-none z-0 max-md:rounded-3xl">
        <motion.div
          className="absolute inset-0 w-[200%] h-full bg-linear-to-r from-transparent via-white/20 to-transparent skew-x-12"
          initial={{ x: "-100%" }}
          variants={{ hover: { x: "100%" } }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
      </div>

      <div className="pt-[20px] pr-3 lg:pt-[43.5px] lg:pb-[39.5px] lg:pl-10 lg:pr-0 relative z-10 max-lg:p-0 max-lg:w-full">
        <motion.h3
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl text-charcoal font-medium leading-[100%] max-md:text-3xl max-sm:text-2xl"
        >
          XR Lens
        </motion.h3>
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="leading-[100%] text-charcoal/64 w-107.5 pt-3 pb-7.5 max-xl:w-full max-md:text-sm"
        >
          La première lentille de réalité augmentée conçue pour étendre les
          capacités naturelles de la vision humaine.
        </motion.p>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3 max-md:flex-col max-md:items-stretch max-md:w-full"
        >
          <CommonButton variant="primary">
            Découvrir XR Lens
          </CommonButton>
          <CommonButton variant="secondary">
            Voir la démo
          </CommonButton>
        </motion.div>
      </div>

      <motion.div
        variants={{
          hidden: { opacity: 0, scale: 0.95 },
          visible: { opacity: 1, scale: 1 },
        }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="p-2 rounded-[18px] border border-white/50 relative z-10 max-lg:w-full max-lg:flex max-lg:justify-center"
      >
        <div className="relative group/video overflow-hidden rounded-2xl max-lg:w-full">
          <motion.div
            initial={{ filter: "blur(10px)", scale: 1.05 }}
            whileInView={{ filter: "blur(0px)", scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 1.2,
              delay: 0.3,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="max-lg:w-full"
          >
            <Image
              src="/images/webp/video.webp"
              alt="Video thumbnail"
              width={244}
              height={160}
              className="rounded-2xl transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/video:scale-105 max-lg:w-full max-lg:h-auto object-cover aspect-[244/160]"
            />
          </motion.div>
          <span className="bg-black/60 w-full h-full block absolute top-0 rounded-2xl pointer-events-none transition-opacity duration-500 group-hover/video:opacity-40"></span>
          
          <PlayButton />
        </div>
        
        <div className="absolute left-1/2 -translate-x-1/2 -bottom-6 max-lg:-bottom-3 z-50">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.6,
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="bg-white/50 border backdrop-blur-xl border-white text-sm font-medium py-3 px-5 rounded-full cursor-pointer block w-max max-md:text-xs max-md:px-4 max-md:py-2"
          >
            Voir la démo
          </motion.span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default VideoCard;
