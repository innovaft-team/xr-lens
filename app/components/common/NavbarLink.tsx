"use client";

import { motion } from "framer-motion";
import React from "react";

interface NavbarLinkProps {
  label: string;
  href: string;
  className?: string;
}

const NavbarLink: React.FC<NavbarLinkProps> = ({ label, href, className = "" }) => {
  return (
    <motion.a
      className={`text-charcoal leading-[103%] font-normal text-[12.7px] relative group transition-opacity hover:opacity-70 max-sm:text-[11px] ${className}`}
      href={href}
    >
      {label}
      <span className="absolute left-0 bottom-[-2px] w-full h-[1px] bg-charcoal scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]" />
    </motion.a>
  );
};

export default NavbarLink;
