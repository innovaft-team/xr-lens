"use client";

import { motion } from "framer-motion";
import React from "react";

interface CommonButtonProps {
  variant?: "primary" | "secondary" | "nav" | "glass";
  children: React.ReactNode;
  href?: string;
  className?: string;
  onClick?: () => void;
  ariaLabel?: string;
  initial?: any;
  animate?: any;
  whileInView?: any;
  viewport?: any;
  transition?: any;
}

const CommonButton: React.FC<CommonButtonProps> = ({
  variant = "primary",
  children,
  href,
  className = "",
  onClick,
  ariaLabel,
  initial,
  animate,
  whileInView,
  viewport,
  transition,
  ...restProps
}) => {
  const Comp = href ? motion.a : motion.button;

  const baseStyles =
    "font-medium rounded-full cursor-pointer will-change-transform text-center inline-block relative overflow-hidden select-none";

  const variantClasses = {
    primary: "bg-bright-blue text-white text-sm py-2 px-5 leading-[158%] max-md:w-full",
    secondary: "text-bright-blue border border-bright-blue text-sm py-2 px-5 leading-[158%] max-md:w-full",
    nav: "bg-bright-blue text-white text-[11.12px] py-[6.5px] px-[15.18px] leading-[154%] max-sm:text-[10px] max-sm:px-[10px]",
    glass: "bg-white/85 border border-white text-charcoal text-sm py-3 px-5 backdrop-blur-2xl w-max max-md:text-xs max-md:px-4 max-md:py-2",
  };

  const parentVariants = {
    initial: {
      scale: 1,
      boxShadow:
        variant === "primary" || variant === "nav"
          ? "0px 4px 12px rgba(43, 127, 255, 0.05)"
          : variant === "secondary"
          ? "0px 0px 0px rgba(43, 127, 255, 0)"
          : "0px 4px 12px rgba(0, 0, 0, 0.02)",
    },
    hover: {
      scale: 1.03,
      boxShadow:
        variant === "primary" || variant === "nav"
          ? "0px 12px 32px rgba(43, 127, 255, 0.45), 0px 0px 20px rgba(43, 127, 255, 0.25), inset 0px 1px 1px rgba(255, 255, 255, 0.4)"
          : variant === "secondary"
          ? "0px 8px 24px rgba(43, 127, 255, 0.18), inset 0px 0px 8px rgba(43, 127, 255, 0.1)"
          : "0px 12px 36px rgba(0, 0, 0, 0.08), 0px 0px 20px rgba(255, 255, 255, 0.6), inset 0px 1px 1px rgba(255, 255, 255, 0.8)",
    },
    tap: {
      scale: 0.97,
      boxShadow:
        variant === "primary" || variant === "nav"
          ? "0px 2px 4px rgba(43, 127, 255, 0.2)"
          : variant === "secondary"
          ? "0px 0px 0px rgba(43, 127, 255, 0)"
          : "0px 2px 4px rgba(0, 0, 0, 0.02)",
    },
  };

  const transitionConfig = transition || {
    type: "tween",
    duration: 0.45,
    ease: [0.16, 1, 0.3, 1],
  };

  const sweepGradients = {
    primary: "from-transparent via-white/35 to-transparent",
    nav: "from-transparent via-white/35 to-transparent",
    secondary: "from-transparent via-white/20 to-transparent",
    glass: "from-transparent via-white/55 to-transparent",
  };

  const bloomVariants = {
    hover: { scale: 1.25, opacity: 1 },
  };

  const overlayVariants = {
    hover: { opacity: 1 },
  };

  return (
    <Comp
      href={href}
      onClick={onClick}
      aria-label={ariaLabel}
      type={href ? undefined : "button"}
      className={`${baseStyles} ${variantClasses[variant]} ${className}`}
      initial={initial || "initial"}
      animate={animate || "animate"}
      whileHover="hover"
      whileTap="tap"
      variants={parentVariants}
      transition={transitionConfig}
      whileInView={whileInView}
      viewport={viewport}
      {...restProps}
    >
      {/* Luminous blue bloom (Primary / Nav variants) */}
      {(variant === "primary" || variant === "nav") && (
        <motion.span
          initial={{ scale: 0.7, opacity: 0 }}
          variants={bloomVariants}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.25)_0%,transparent_65%)] pointer-events-none z-0"
        />
      )}

      {/* Secondary glass hover background fill */}
      {variant === "secondary" && (
        <motion.span
          initial={{ opacity: 0 }}
          variants={overlayVariants}
          transition={{ duration: 0.45 }}
          className="absolute inset-0 bg-bright-blue/8 pointer-events-none z-0"
        />
      )}

      {/* Glass hover background fill */}
      {variant === "glass" && (
        <motion.span
          initial={{ opacity: 0 }}
          variants={overlayVariants}
          transition={{ duration: 0.45 }}
          className="absolute inset-0 bg-white pointer-events-none z-0"
        />
      )}

      {/* Highlight Sweep Glare */}
      <motion.span className="absolute inset-0 block overflow-hidden rounded-full pointer-events-none z-0">
        <motion.span
          initial={{ x: "-150%" }}
          variants={{
            hover: { x: "150%" },
          }}
          transition={{
            duration: 0.65,
            ease: [0.16, 1, 0.3, 1],
          }}
          className={`absolute inset-0 block w-[60%] h-full bg-gradient-to-r ${sweepGradients[variant]} skew-x-12`}
        />
      </motion.span>

      {/* Button content */}
      <span className="relative z-10 pointer-events-none">{children}</span>
    </Comp>
  );
};

export default CommonButton;
