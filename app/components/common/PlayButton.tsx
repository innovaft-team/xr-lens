"use client";

import { motion } from "framer-motion";
import React from "react";
import { PlayIcon, PauseIcon } from "./Icons";

interface PlayButtonProps {
  isPlaying?: boolean;
  onClick?: () => void;
  className?: string;
}

const PlayButton: React.FC<PlayButtonProps> = ({ isPlaying = false, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      type="button"
      aria-label={isPlaying ? "Pause video demo" : "Play video demo"}
      className={`w-12 h-12 rounded-full absolute top-1/2 left-1/2
        -translate-x-1/2 -translate-y-1/2
        bg-white/12 border border-white/18
        z-99 cursor-pointer will-change-transform
        transition-transform duration-450
        ease-[cubic-bezier(0.34,1.56,0.64,1)]
        hover:scale-[1.2]
        shadow-[0_6px_6px_rgba(0,0,0,0.3),0_0_20px_rgba(0,0,0,0.2)] ${className}`}
    >
      <motion.div
        animate={{
          boxShadow: [
            "0px 0px 0px 0px rgba(255,255,255,0.2)",
            "0px 0px 0px 15px rgba(255,255,255,0)",
          ],
        }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
        className="w-full h-full rounded-full
          flex items-center justify-center
          backdrop-blur-[20px]
          shadow-[inset_2px_2px_1px_0_rgba(255,255,255,0.4),
                  inset_-1px_-1px_1px_1px_rgba(255,255,255,0.4),
                  inset_0px_-10px_20px_rgba(255,255,255,0.06)]"
      >
        {isPlaying ? <PauseIcon /> : <PlayIcon />}
      </motion.div>
    </button>
  );
};

export default PlayButton;
