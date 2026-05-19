"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { Arrow2Icon, ArrowIcon } from "../common/Icons";
import GlassCard from "../common/GlassCard";
import { getFadeInCardWrapper, getFloatCard } from "../../utils/animations";

interface FeatureCardProps {
  title: string;
  description: string;
  iconSrc: string;
  iconAlt: string;
  arrowDirection: "left" | "right";
  delay: number;
  hoverDelay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  iconSrc,
  iconAlt,
  arrowDirection,
  delay,
  hoverDelay,
}) => {
  const isLeft = arrowDirection === "left";
  const xOffset = isLeft ? -30 : 30;

  const cardContent = (
    <GlassCard
      whileHover="hover"
      {...getFloatCard(hoverDelay)}
      className={`w-full lg:w-fit group flex max-lg:justify-between gap-5 ${
        isLeft ? "" : "flex-row-reverse max-md:flex-row"
      }`}
    >
      <div
        className={`glass-card-icon-container ${
          isLeft
            ? ""
            : "max-md:rounded-tl-none max-md:rounded-br-none max-md:rounded-bl-[28.25px] max-md:rounded-tr-[28.25px]"
        }`}
      >
        <Image src={iconSrc} alt={iconAlt} width={44} height={72} />
      </div>
      <div className="relative z-10">
        <h4 className="text-[14.29px] font-medium text-charcoal leading-[169%]">
          {title}
        </h4>
        <p className="text-[10.71px] text-charcoal/60 w-45 mt-1.5 leading-[153%]">
          {description}
        </p>
      </div>
      <span className={isLeft ? "hero-arrow-left" : "hero-arrow-right"}>
        {isLeft ? <ArrowIcon /> : <Arrow2Icon />}
      </span>
    </GlassCard>
  );

  return (
    <motion.div
      {...getFadeInCardWrapper(delay, xOffset)}
      className="max-lg:flex-1 max-lg:w-full mt-8 z-10 max-md:mt-0"
    >
      {isLeft ? (
        cardContent
      ) : (
        <div className="w-full translate-y-20 max-xl:translate-y-8 max-lg:translate-y-0">
          {cardContent}
        </div>
      )}
    </motion.div>
  );
};

export default FeatureCard;
