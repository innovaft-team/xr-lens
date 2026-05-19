"use client";

import { motion } from "framer-motion";
import React from "react";
import { fadeInHeroTitle } from "../../utils/animations";

interface CommonHeadingProps {
  as?: "h1" | "h2" | "h3" | "h4";
  variant?: "hero" | "section";
  children: React.ReactNode;
  className?: string;
  variants?: any;
  transition?: any;
}

const CommonHeading: React.FC<CommonHeadingProps> = ({
  as = "h1",
  variant = "hero",
  children,
  className = "",
  variants,
  transition,
}) => {
  const Comp = motion[as] as any;

  if (variant === "hero") {
    return (
      <Comp
        {...fadeInHeroTitle}
        className={`hero-title ${className}`}
      >
        {children}
      </Comp>
    );
  }

  return (
    <Comp
      variants={variants}
      transition={transition}
      className={className}
    >
      {children}
    </Comp>
  );
};

export default CommonHeading;
