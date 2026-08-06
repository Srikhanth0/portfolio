"use client";

import ShinyText from "@/components/ui/ShinyText";
import SideRays from "@/components/ui/SideRays";
import { useDevice } from "@/hooks/useDevice";
import { SITE_CONSTANTS } from "@/data/constants";
import UnicornScene from "unicornstudio-react/next";

export default function HeroSection() {
  const { isMobile } = useDevice();
  return (
    <section id="home" className="relative w-full min-h-screen flex items-center justify-center pt-24 pb-12 px-[clamp(16px,3vw,48px)] overflow-hidden">
      {/* Background Rays */}
      <div className="absolute top-0 left-0 w-full md:w-1/2 h-full z-0 pointer-events-none opacity-80 mix-blend-screen">
        <SideRays
          speed={2.5}
          rayColor1="#EAB308"
          rayColor2="#96c8ff"
          intensity={2}
          spread={2}
          origin="top-left"
          tilt={0}
          saturation={1.5}
          blend={0.75}
          falloff={1.6}
          opacity={isMobile ? 0.5 : 1.0}
        />
      </div>

      <div className="w-full max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between z-10 gap-12">
        {/* Left Column: Typography */}
        <div className="flex-1 flex flex-col justify-center items-start text-left max-w-2xl translate-y-6 md:translate-y-12">
          <p className="text-white font-light tracking-[0.15em] text-3xl md:text-4xl uppercase mb-4" style={{ fontFamily: 'var(--font-greeting)' }}>
            HEY THERE !!!
          </p>

          <h1 className="text-white leading-[0.9] m-0 mb-6 uppercase" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3.5rem, 8vw, 6rem)', fontWeight: 900 }}>
            <span className="block mb-[-0.1em]">I'M</span>
            <div className="relative w-full max-w-[700px] h-[70px] sm:h-[100px] md:h-[180px] mt-2 mb-4 md:mb-8 flex items-center justify-start overflow-visible">
              <ShinyText
                text="SRIKHANTH"
                speed={2.5}
                delay={0}
                color="#b5b5b5"
                shineColor="#ffffff"
                spread={120}
                direction="left"
                yoyo={false}
                pauseOnHover={false}
                className="text-[60px] sm:text-[90px] md:text-[140px] leading-none"
              />
            </div>
          </h1>

          <p className="text-white/90 font-normal text-sm md:text-base max-w-[600px] mb-10 leading-relaxed" style={{ fontFamily: 'var(--font-nav)' }}>
            AI Engineer crafting intelligent systems through Machine Learning, Python, and DevOps. Turning ideas into scalable products across healthcare, geospatial intelligence, and immersive technologies.
          </p>

          <a href={SITE_CONSTANTS.resumeUrl} target="_blank" rel="noopener noreferrer" className="bg-white text-[#121212] rounded-full px-8 py-3.5 font-bold uppercase tracking-wider text-sm md:text-base hover:bg-gray-200 hover:scale-105 transition-all duration-300 inline-block">
            RESUME
          </a>
        </div>

        {/* Right Column: Unicorn Studio 3D Scene */}
        {!isMobile && (
          <div className="flex-1 w-[90%] md:w-[85%] flex justify-center md:justify-end items-center h-[320px] md:h-[460px] relative translate-y-6 md:translate-y-12">
            <div className="w-full h-full rounded-[24px] overflow-hidden relative shadow-2xl bg-white/5 backdrop-blur-sm border border-black/10 z-10 flex items-center justify-center">
              <UnicornScene 
                projectId="ZYBuX9W4qjZR1Q5kGifI" 
                width="100%" 
                height="100%"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
