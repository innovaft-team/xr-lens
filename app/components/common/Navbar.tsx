"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import NavbarLink from "./NavbarLink";
import CommonButton from "./CommonButton";
import { NAVBAR_LINKS } from "../../constants";
import { fadeInNavbar } from "../../utils/animations";

const Navbar = () => {
  return (
    <motion.nav
      {...fadeInNavbar}
      className="flex items-center justify-between w-158.75 mx-auto max-md:w-full max-md:px-4"
    >
      <a href="#" aria-label="XR Lens Homepage">
        <Image
          src="/images/svg/logo.svg"
          alt="XR Lens Logo"
          width={24.77}
          height={25.85}
        />
      </a>
      <div className="flex items-center gap-[19.06px] max-sm:gap-3">
        {NAVBAR_LINKS.map((link) => (
          <NavbarLink key={link.label} label={link.label} href={link.href} />
        ))}
        <CommonButton variant="nav" href="#">
          Découvrir XR Lens
        </CommonButton>
      </div>
    </motion.nav>
  );
};

export default Navbar;
