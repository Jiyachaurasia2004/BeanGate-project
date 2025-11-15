"use client";
import TechnologySlider from "@/components/TechnologySlider";
import { EfficiencySection } from "@/components/EfficiencySection";
import ExpertiseServices from "@/components/expertiseServices";
import Process from "@/components/process";
import { WhoWeAreSection } from "@/components/WhoWeAreSection";
import React from "react";
import ClientTestimonials from "@/components/ClientTestimonial";
import ClientSlider from "@/components/ClientSlider";
export default function Home() {
  const text = "Succeed in Building Lasting Connections";
  return (
    <div className="flex flex-col items-center justify-center">
    <section className="relative w-screen h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0  w-full  h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/home/backvideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay (optional for dark text readability) */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>

      {/* Text Content */}
      <div className="relative z-10 flex flex-col  gap-5 items-start justify-center h-full text-center text-white px-40  ">
        <h1 className="text-3xl md:text-5xl font-bold">
          <span className="text-[#ff6200]">BeanGate</span> Is a Fastest
        </h1>

        <h1 className="text-3xl md:text-5xl font-bold">
          Growing IT Company In India
        </h1>

        <h1 className="overflow-hidden text-3xl font-bold leading-6 text-[#ff6200]">
        {text.match(/./gu)!.map((char, index) => (
          <span
            className="animate-text-reveal inline-block [animation-fill-mode:backwards]"
            key={`${char}-${index}`}
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h1>
      </div>

   
    </section>

  
 
       <EfficiencySection />
      <WhoWeAreSection />
   

  
      <ExpertiseServices/>
      <TechnologySlider/>
      <Process/>
      <ClientSlider/>
      <ClientTestimonials/>
  

    </div>
  );
}
