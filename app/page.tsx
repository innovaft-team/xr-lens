import Image from "next/image";
import Navbar from "./components/common/Navbar";
import { Arrow2Icon, ArrowIcon, PauseIcon } from "./components/common/Icons";

export default function Home() {
  return (
    <main className="relative pt-[42.91px] px-[94.98px] pb-15">
      <Image
        src="/images/svg/herobg.svg"
        alt="Hero Background"
        fill
        className="object-cover object-center absolute top-0 left-0 -z-10 w-full h-full"
      />
      <Navbar />
      <h1
        className="mt-[39.38px] font-inter text-[259.96px] bg-linear-to-t
     to-white from-white/0 bg-clip-text text-transparent uppercase font-semibold leading-[100%] text-center"
      >
        XR lens
      </h1>
      <div className="">
        <Image
          src="/images/svg/lens.svg"
          alt="Hero Foreground"
          width={126.25}
          height={10}
          className="object-contain absolute top-55 left-1/2 -translate-x-1/2  w-203.25 h-114 "
        />
      </div>
      <div className="flex items-center justify-between">
        <div
          className="relative bg-white/60 backdrop-blur-md border border-white/35 rounded-[16.99px] mt-8 z-10
   shadow-[inset_0px_0px_30px_rgba(255,255,255,0.15),0px_8px_32px_rgba(0,0,0,0.06)] w-fit p-[12.74px] flex gap-5"
        >
          {/*  */}
          <div
            className="border rounded-[28.25px] rounded-tr-none rounded-bl-none
   border-white/45 size-[94.16px] grid place-items-center "
          >
            <Image
              src="/images/svg/cup.svg"
              alt="Arrow Icon"
              width={43.59}
              height={71.9}
            />
          </div>
          <div className="">
            <h4 className="text-[14.29px] font-medium text-charcoal leading-[169%]">
              Moteur optique adaptatif
            </h4>
            <p className="text-[10.71px] text-charcoal/60 w-45 mt-1.5 leading-[153%%]">
              Un système optique dynamique qui ajuste la netteté, le contraste
              et la luminosité en temps réel.
            </p>
          </div>
          <span className="absolute top-1/2 -translate-y-1/2 -bottom-4 -right-43 -z-20">
            <ArrowIcon />
          </span>
        </div>
        {/*  */}
        <div
          className="relative bg-white/60 backdrop-blur-md border border-white/35 rounded-[16.99px] translate-y-20 mt-8 z-10
   shadow-[inset_0px_0px_30px_rgba(255,255,255,0.15),0px_8px_32px_rgba(0,0,0,0.06)] w-fit p-[12.74px] flex flex-row-reverse gap-5"
        >
          {/*  */}
          <div
            className="border rounded-[28.25px] rounded-tr-none rounded-bl-none
   border-white/45 size-[94.16px] grid place-items-center"
          >
            <Image
              src="/images/svg/cup.svg"
              alt="Arrow Icon"
              width={43.59}
              height={71.9}
            />
          </div>
          <div className="">
            <h4 className="text-[14.29px] font-medium text-charcoal leading-[169%]">
              Interface neuronale
            </h4>
            <p className="text-[10.71px] text-charcoal/60 w-45 mt-1.5 leading-[153%%]">
              XR Lens capte vos signaux oculaires et neuronaux pour contrôler
              l’interface sans geste ni appareil.
            </p>
          </div>
          <span className="absolute top-1/2 -translate-y-1/2 -bottom-20 -left-51 -z-20">
            <Arrow2Icon />
          </span>
        </div>
      </div>

      <div
        className="bg-white/60 rounded-4xl w-full max-w-250.75  mx-auto mt-40 
      border border-white/35 flex items-center justify-between pr-6 "
      >
        <div className="pt-[43.5px] pb-[39.5px] pl-10">
          <h3 className="text-5xl text-charcoal font-medium leading-[100%]">
            XR Lens
          </h3>
          <p className="leading-[100%] text-charcoal/64 w-107.5 pt-3 pb-7.5">
            La première lentille de réalité augmentée conçue pour étendre les
            capacités naturelles de la vision humaine.
          </p>
          <div className="flex items-center gap-3">
            <button
              className="bg-bright-blue font-medium leading-[158%] 
                  text-sm text-white py-2 px-5 rounded-full cursor-pointer"
            >
              Découvrir XR Lens
            </button>
            <button
              className="font-medium leading-[158%] 
                  text-sm py-2 px-5 rounded-full cursor-pointer text-bright-blue border border-bright-blue"
            >
              Voir la démo
            </button>
          </div>
        </div>
        {/*  */}
        <div className="p-2 rounded-[18px] border border-white/50 relative">
          <div className="relative">
            <Image
              src="/images/webp/video.webp"
              alt="Arrow Icon"
              width={244}
              className="rounded-2xl"
              height={160}
            />
            <span className="bg-black/60 w-full h-full block absolute top-0 rounded-2xl"></span>
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
              <div
                className="w-full h-full rounded-full
      flex items-center justify-center
      backdrop-blur-[20px]
      shadow-[inset_2px_2px_1px_0_rgba(255,255,255,0.4),
              inset_-1px_-1px_1px_1px_rgba(255,255,255,0.4),
              inset_0px_-10px_20px_rgba(255,255,255,0.06)]"
              >
                <PauseIcon />
              </div>
            </button>
          </div>
          <span className="bg-white/50 border backdrop-blur-xl border-white text-sm -bottom-6 z-50 font-medium py-3 px-5 rounded-full cursor-pointer absolute left-1/2 -translate-x-1/2">Voir la démo</span>
        </div>
      </div>
    </main>
  );
}
