"use client";

import React from "react";

// import { BackgroundBeams } from "@/components/BackgroundBeams";
import { BackgroundBeamsDemo } from "@/components/BackgroundBeams";
import { Card } from "@/components/ui/card-hover-effect";
import { CardHoverEffectDemo } from "@/components/card";

export default function Home() {
  return (
    <div className="w-full h-full">
      {/* <div className="w-full h-full flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-6xl font-bold text-red-600 uppercase">
          Donate Blood, Save Lives
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-red-500">
          Your contribution can make a difference.
        </p>
      </div> */}
      <BackgroundBeamsDemo/>
      <div className="w-full h-auto bg-[#ffff] border-t-2 border-b-2 flex flex-col items-center">
        <h2 className="text-4xl md:text-4xl font-bold text-[#9b030c] uppercase mt-4">OUR SERVICES</h2>
        <CardHoverEffectDemo/>
      </div>
    </div>
  );
}
