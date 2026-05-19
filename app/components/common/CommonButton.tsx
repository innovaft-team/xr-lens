"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import React from "react";

interface CommonButtonProps {
  variant?: "primary" | "secondary" | "nav";
  children: React.ReactNode;
  href?: string;
  className?: string;
  onClick?: () => void;
  ariaLabel?: string;
}

const CommonButton: React.FC<CommonButtonProps> = ({
  variant = "primary",
  children,
  href,
  className = "",
  onClick,
  ariaLabel,
}) => {
  const Comp = href ? motion.a : motion.button;

  const baseStyles = "font-medium rounded-full cursor-pointer will-change-transform text-center inline-block";

  const variantClasses = {
    primary: "bg-bright-blue text-white text-sm py-2 px-5 leading-[158%] max-md:w-full",
    secondary: "text-bright-blue border border-bright-blue text-sm py-2 px-5 leading-[158%] max-md:w-full",
    nav: "bg-bright-blue text-white text-[11.12px] py-[6.5px] px-[15.18px] leading-[154%] max-sm:text-[10px] max-sm:px-[10px]",
  };

  const hoverEffect = variant === "secondary"
    ? { scale: 1.02, backgroundColor: "rgba(0,0,0,0.02)" }
    : { scale: 1.02 };

  const motionProps: HTMLMotionProps<any> = {
    whileHover: hoverEffect,
    whileTap: { scale: 0.98 },
    transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
  };

  return (
    <Comp
      href={href}
      onClick={onClick}
      aria-label={ariaLabel}
      type={href ? undefined : "button"}
      className={`${baseStyles} ${variantClasses[variant]} ${className}`}
      {...motionProps}
    >
      {children}
    </Comp>
  );
};

export default CommonButton;
