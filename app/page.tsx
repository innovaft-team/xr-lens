"use client";

import Image from "next/image";
import Navbar from "./components/common/Navbar";
import { Arrow2Icon, ArrowIcon, PauseIcon } from "./components/common/Icons";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function Home() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const parallaxX = useTransform(smoothX, [-0.5, 0.5], [-15, 15]);
  const parallaxY = useTransform(smoothY, [-0.5, 0.5], [-15, 15]);
  const cardParallaxX = useTransform(smoothX, [-0.5, 0.5], [10, -10]);
  const cardParallaxY = useTransform(smoothY, [-0.5, 0.5], [10, -10]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = e.clientX / innerWidth - 0.5;
      const y = e.clientY / innerHeight - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <main className="relative pt-[clamp(1.5rem,2.97vw,42.91px)] px-[clamp(1rem,6.59vw,94.98px)] max-xl:px-10 max-[1024px]:px-6 max-md:px-4 pb-[clamp(2rem,4.16vw,60px)]">
      <motion.div
        initial={{ opacity: 0, filter: "blur(20px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-0 left-0 -z-10 w-full h-full overflow-hidden pointer-events-none"
      >
        <Image
          src="/images/svg/herobg.svg"
          alt="Hero Background"
          fill
          className="object-cover object-center"
        />
        <motion.div
          animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "linear",
          }}
          className="absolute inset-0 opacity-40 mix-blend-overlay"
          style={{
            backgroundImage:
              "radial-gradient(circle at center, rgba(255,255,255,0.15) 0%, transparent 60%)",
            backgroundSize: "150% 150%",
          }}
        />
      </motion.div>
      <Navbar />
      <motion.h1
        initial={{ opacity: 0, y: 30, filter: "blur(10px)", scale: 0.98 }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
        transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="mt-[clamp(20px,2.73vw,39.38px)] font-inter text-[clamp(4rem,18.05vw,259.96px)] bg-linear-to-t
     to-white from-white/0 bg-clip-text text-transparent uppercase font-semibold leading-[100%] text-center will-change-transform"
      >
        XR lens
      </motion.h1>

      <div className="absolute top-[clamp(100px,15.2vw,220px)] left-1/2 -translate-x-1/2 pointer-events-none z-0">
        <motion.div
          style={{ x: parallaxX, y: parallaxY }}
          className="w-[clamp(280px,56.45vw,813px)] h-[clamp(157px,31.6vw,456px)] relative"
        >
          <motion.div
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="w-full h-full"
          >
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[clamp(300px,41.6vw,600px)] h-[clamp(150px,20.8vw,300px)] bg-white/5 rounded-[50%] blur-[80px]"
              animate={{ opacity: [0.3, 0.6, 0.3], scale: [0.9, 1.1, 0.9] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{
                duration: 1.2,
                delay: 0.4,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="w-full h-full"
            >
              <Image
                src="/images/svg/lens.svg"
                alt="Hero Foreground"
                width={126.25}
                height={10}
                className="object-contain w-full h-full"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <div className="flex items-center justify-between relative z-10 max-xl:mt-16 max-md:flex-col max-md:gap-6 max-md:mt-[clamp(150px,25vw,300px)]">
        <motion.div
          initial={{ opacity: 0, x: -30, filter: "blur(10px)" }}
          animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ x: cardParallaxX, y: cardParallaxY }}
          className="w-fit mt-8 z-10 max-md:mt-0"
        >
          <motion.div
            whileHover="hover"
            animate={{ y: [-3, 3, -3] }}
            transition={{
              y: {
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.1,
              },
            }}
            className="relative group bg-white/60 backdrop-blur-[20px] border border-white/60 rounded-[16.99px] shadow-[inset_1px_1px_1px_rgba(255,255,255,0.6),0_8px_32px_rgba(0,0,0,0.04)] w-fit p-[12.74px] flex gap-5"
          >
            <div className="absolute inset-0 overflow-hidden rounded-[16.99px] pointer-events-none">
              <motion.div
                className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                initial={{ x: "-100%" }}
                variants={{ hover: { x: "100%" } }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
              />
            </div>
            <div className="rounded-[28.25px] rounded-tr-none rounded-bl-none size-[94.16px] grid place-items-center relative z-10 bg-white/40 backdrop-blur-xl shadow-[inset_4px_4px_10px_rgba(255,255,255,1),inset_-4px_-4px_10px_rgba(0,0,0,0.05),0_8px_20px_rgba(0,0,0,0.04)]">
              <Image
                src="/images/svg/cup.svg"
                alt="Arrow Icon"
                width={43.59}
                height={71.9}
              />
            </div>
            <div className="relative z-10">
              <h4 className="text-[14.29px] font-medium text-charcoal leading-[169%]">
                Moteur optique adaptatif
              </h4>
              <p className="text-[10.71px] text-charcoal/60 w-45 mt-1.5 leading-[153%%]">
                Un système optique dynamique qui ajuste la netteté, le contraste
                et la luminosité en temps réel.
              </p>
            </div>
            <span className="absolute top-1/2 -translate-y-1/2 -bottom-4 -right-43 -z-20 max-md:hidden origin-left max-xl:scale-[0.8] max-xl:-right-24 max-[1024px]:scale-[0.7] max-[1024px]:-right-20">
              <ArrowIcon />
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ x: cardParallaxX, y: cardParallaxY }}
          className="w-fit mt-8 z-10 max-md:mt-0"
        >
          <div className="translate-y-20 max-xl:translate-y-8 max-md:translate-y-0">
            <motion.div
              whileHover="hover"
              animate={{ y: [-3, 3, -3] }}
              transition={{
                y: {
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                },
              }}
              className="relative group bg-white/60 backdrop-blur-[20px] border border-white/60 rounded-[16.99px] shadow-[inset_1px_1px_1px_rgba(255,255,255,0.6),0_8px_32px_rgba(0,0,0,0.04)] w-fit p-[12.74px] flex flex-row-reverse gap-5 max-md:flex-row"
            >
              <div className="absolute inset-0 overflow-hidden rounded-[16.99px] pointer-events-none">
                <motion.div
                  className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                  initial={{ x: "-100%" }}
                  variants={{ hover: { x: "100%" } }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                />
              </div>
              <div className="rounded-[28.25px] rounded-tr-none rounded-bl-none size-[94.16px] grid place-items-center relative z-10 bg-white/40 backdrop-blur-xl shadow-[inset_4px_4px_10px_rgba(255,255,255,1),inset_-4px_-4px_10px_rgba(0,0,0,0.05),0_8px_20px_rgba(0,0,0,0.04)] max-md:rounded-tl-none max-md:rounded-br-none max-md:rounded-bl-[28.25px] max-md:rounded-tr-[28.25px]">
                <Image
                  src="/images/svg/cup.svg"
                  alt="Arrow Icon"
                  width={43.59}
                  height={71.9}
                />
              </div>
              <div className="relative z-10">
                <h4 className="text-[14.29px] font-medium text-charcoal leading-[169%]">
                  Interface neuronale
                </h4>
                <p className="text-[10.71px] text-charcoal/60 w-45 mt-1.5 leading-[153%%]">
                  XR Lens capte vos signaux oculaires et neuronaux pour
                  contrôler l’interface sans geste ni appareil.
                </p>
              </div>
              <span className="absolute top-1/2 -translate-y-1/2 -bottom-20 -left-51 -z-20 max-md:hidden origin-right max-xl:scale-[0.8] max-xl:-left-32 max-[1024px]:scale-[0.7] max-[1024px]:-left-24">
                <Arrow2Icon />
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        whileHover="hover"
        viewport={{ once: true, margin: "-50px" }}
        variants={{
          hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
          visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
              duration: 1,
              ease: [0.16, 1, 0.3, 1],
              staggerChildren: 0.1,
            },
          },
        }}
        className="bg-white/60 backdrop-blur-[30px] shadow-[inset_1px_1px_1px_rgba(255,255,255,0.6),0_8px_32px_rgba(0,0,0,0.04)] rounded-4xl w-full max-w-250.75 mx-auto mt-[clamp(5rem,11vw,160px)] 
      border border-white/60 flex items-center justify-between pr-6 relative group max-xl:flex-col max-xl:pr-0 max-xl:p-6 max-xl:items-start max-xl:gap-8 max-md:rounded-3xl"
      >
        <div className="absolute inset-0 overflow-hidden rounded-4xl pointer-events-none z-0 max-md:rounded-3xl">
          <motion.div
            className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
            initial={{ x: "-100%" }}
            variants={{ hover: { x: "100%" } }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        </div>

        <div className="pt-[43.5px] pb-[39.5px] pl-10 relative z-10 max-xl:p-0 max-xl:w-full">
          <motion.h3
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl text-charcoal font-medium leading-[100%] max-md:text-3xl max-sm:text-2xl"
          >
            XR Lens
          </motion.h3>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="leading-[100%] text-charcoal/64 w-107.5 pt-3 pb-7.5 max-xl:w-full max-md:text-sm"
          >
            La première lentille de réalité augmentée conçue pour étendre les
            capacités naturelles de la vision humaine.
          </motion.p>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3 max-md:flex-col max-md:items-stretch max-md:w-full"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-bright-blue font-medium leading-[158%] 
                  text-sm text-white py-2 px-5 rounded-full cursor-pointer will-change-transform max-md:w-full"
            >
              Découvrir XR Lens
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02, backgroundColor: "rgba(0,0,0,0.02)" }}
              whileTap={{ scale: 0.98 }}
              className="font-medium leading-[158%] 
                  text-sm py-2 px-5 rounded-full cursor-pointer text-bright-blue border border-bright-blue will-change-transform max-md:w-full"
            >
              Voir la démo
            </motion.button>
          </motion.div>
        </div>

        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0.95 },
            visible: { opacity: 1, scale: 1 },
          }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="p-2 rounded-[18px] border border-white/50 relative z-10 max-xl:w-full max-xl:flex max-xl:justify-center"
        >
          <div className="relative group/video overflow-hidden rounded-2xl max-xl:w-full">
            <motion.div
              initial={{ filter: "blur(10px)", scale: 1.05 }}
              whileInView={{ filter: "blur(0px)", scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 1.2,
                delay: 0.3,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="max-xl:w-full"
            >
              <Image
                src="/images/webp/video.webp"
                alt="Video thumbnail"
                width={244}
                height={160}
                className="rounded-2xl transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/video:scale-105 max-xl:w-full max-xl:h-auto object-cover aspect-[244/160]"
              />
            </motion.div>
            <span className="bg-black/60 w-full h-full block absolute top-0 rounded-2xl pointer-events-none transition-opacity duration-500 group-hover/video:opacity-40"></span>
            <button
              className="w-12 h-12 rounded-full absolute top-1/2 left-1/2
    -translate-x-1/2 -translate-y-1/2
    bg-white/12 border border-white/18
    z-99 cursor-pointer will-change-transform
    transition-transform duration-450
    ease-[cubic-bezier(0.34,1.56,0.64,1)]
    hover:scale-[1.2]
    shadow-[0_6px_6px_rgba(0,0,0,0.3),0_0_20px_rgba(0,0,0,0.2)]"
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
                <PauseIcon />
              </motion.div>
            </button>
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 -bottom-6 z-50">
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.6,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="bg-white/50 border backdrop-blur-xl border-white text-sm font-medium py-3 px-5 rounded-full cursor-pointer block w-max max-md:text-xs max-md:px-4 max-md:py-2"
            >
              Voir la démo
            </motion.span>
          </div>
        </motion.div>
      </motion.div>
    </main>
  );
}
