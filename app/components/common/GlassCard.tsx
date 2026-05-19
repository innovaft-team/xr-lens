"use client";

import { motion } from "framer-motion";
import React from "react";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverDuration?: number;
  [key: string]: any;
}

const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = "",
  hoverDuration = 0.7,
  ...props
}) => {
  return (
    <motion.div
      className={`glass-card-outer ${className}`}
      {...props}
    >
      <div className="absolute inset-0 overflow-hidden rounded-[16.99px] pointer-events-none w-full">
        <motion.div
          className="glass-card-inner-overlay"
          initial={{ x: "-100%" }}
          variants={{ hover: { x: "100%" } }}
          transition={{ duration: hoverDuration, ease: "easeInOut" }}
        />
      </div>
      {children}
    </motion.div>
  );
};

export default GlassCard;
