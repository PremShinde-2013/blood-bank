"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import { PopOver } from "@/components/popover";

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
          Every donation helps save up to three lives. Blood banks rely on the
          generosity of donors like you to provide life-saving blood to those in
          need. Whether it's for emergencies, surgeries, or chronic illnesses,
          your donation is a lifeline for someone in need.
        </p>
        <PopOver />
      </div>
      <BackgroundBeams />
      {/* Blood Donation Camps
Donor Login
About Blood Donation
Register VBD camp */}
    </div>
  );
}
