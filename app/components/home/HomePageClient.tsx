"use client";

import { useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";
import Navbar from "../common/Navbar";
import CommonHeading from "../common/CommonHeading";
import FeatureCard from "./FeatureCard";
import GradientBackground from "./GradientBackground";
import HeroForeground from "./HeroForeground";
import VideoCard from "./VideoCard";
import { FEATURE_CARDS } from "../../constants";

export default function HomePageClient() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const parallaxX = useTransform(smoothX, [-0.5, 0.5], [-15, 15]);
  const parallaxY = useTransform(smoothY, [-0.5, 0.5], [-15, 15]);

  useEffect(() => {
    let animationFrameId: number;
    const handleMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(() => {
        const { innerWidth, innerHeight } = window;
        const x = e.clientX / innerWidth - 0.5;
        const y = e.clientY / innerHeight - 0.5;
        mouseX.set(x);
        mouseY.set(y);
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mouseX, mouseY]);

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden">
      <GradientBackground />
      <div className="hero-main-container max-w-[1440px] mx-auto w-full relative">
        <Navbar />

        <CommonHeading as="h1" variant="hero">
          XR lens
        </CommonHeading>

        <HeroForeground parallaxX={parallaxX} parallaxY={parallaxY} />

        <div className="flex items-center justify-between relative z-10 max-md:flex-col max-md:gap-6 max-lg:gap-8 max-lg:mt-[clamp(150px,25vw,300px)]">
          {FEATURE_CARDS.map((card) => (
            <FeatureCard
              key={card.id}
              title={card.title}
              description={card.description}
              iconSrc={card.iconSrc}
              iconAlt={card.iconAlt}
              arrowDirection={card.arrowDirection}
              delay={card.delay}
              hoverDelay={card.hoverDelay}
            />
          ))}
        </div>
        <VideoCard />
      </div>
    </main>
  );
}
