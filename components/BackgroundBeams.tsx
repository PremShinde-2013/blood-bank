"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";

export function BackgroundBeamsDemo() {
  return (
    <div className="h-[40rem] w-full rounded-md relative flex flex-col items-center justify-center antialiased">
    <div className="max-w-2xl mx-auto p-4 text-center">
      <h1 className="relative z-10 text-4xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-red-300 to-red-600 font-sans font-bold">
        Donate Blood, Save Lives
      </h1>
      <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm relative z-10">
        Your contribution can make a difference.
      </p>
      <p className="text-neutral-400 max-w-lg mx-auto my-4 text-base relative z-10">
        Every donation helps save up to three lives. Blood banks rely on the generosity of donors like you to provide life-saving blood to those in need. Whether it's for emergencies, surgeries, or chronic illnesses, your donation is a lifeline for someone in need.
      </p>
      <button className="relative z-10 px-6 py-3 mt-6 bg-gradient-to-b from-red-300 to-red-600 text-white text-base font-medium rounded-full hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-red-800 transition-all duration-300">
        Donate Now
      </button>
    </div>
    <BackgroundBeams />
  </div>
  
  );
}
