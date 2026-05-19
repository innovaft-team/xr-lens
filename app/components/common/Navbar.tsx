"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="flex items-center justify-between w-158.75 mx-auto max-md:w-full max-md:px-4"
    >
      <a href="#">
        <Image
          src="/images/svg/logo.svg"
          alt="Logo"
          width={24.77}
          height={25.85}
          className=""
        />
      </a>
      <div className="flex items-center gap-[19.06px] max-sm:gap-3">
        <motion.a
          className="text-charcoal leading-[103%] font-normal text-[12.7px] relative group transition-opacity hover:opacity-70 max-sm:text-[11px]"
          href="#"
        >
          Technologie
          <span className="absolute left-0 bottom-[-2px] w-full h-[1px] bg-charcoal scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]" />
        </motion.a>
        <motion.a
          className="text-charcoal leading-[103%] font-normal text-[12.7px] relative group transition-opacity hover:opacity-70 max-sm:text-[11px]"
          href="#"
        >
          Menu
          <span className="absolute left-0 bottom-[-2px] w-full h-[1px] bg-charcoal scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]" />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="bg-bright-blue font-medium leading-[154%] text-[11.12px] text-white py-[6.5px] px-[15.18px] rounded-full will-change-transform max-sm:text-[10px] max-sm:px-[10px]"
          href="#"
        >
          Découvrir XR Lens
        </motion.a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
