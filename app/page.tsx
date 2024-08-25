"use client";

import React from "react";

// import { BackgroundBeams } from "@/components/BackgroundBeams";
import { BackgroundBeamsDemo } from "@/components/BackgroundBeams";
import { Card } from "@/components/ui/card-hover-effect";
import { CardHoverEffectDemo } from "@/components/card";
import { TextGenerateEffectDemo } from "@/components/textGeneration";
import LearnAboutDonation from "@/components/bloodGroup";

import plasmaImage from "@/public/plasma.jpeg";

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
      <BackgroundBeamsDemo />
      <div className="w-full h-auto bg-[#ffff] border-t-2 border-b-2 flex flex-col items-center">
        <h2 className="text-4xl md:text-4xl font-bold text-[#9b030c] uppercase mt-4">
          OUR SERVICES
        </h2>
        <CardHoverEffectDemo />
      </div>

      <div className="flex flex-col md:flex-row bg-red-100">

        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-4xl font-bold text-red-700 mb-4">
            About e-Raktkosh
          </h2>
          <TextGenerateEffectDemo />
          <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition mt-4">
            Read More →
          </button>
        </div>


        <div className="w-full md:w-1/2 h-full md:h-auto relative">
          <img
            src={plasmaImage.src}
            alt="Blood cells"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="w-full h-auto bg-[#ffff]">
        <LearnAboutDonation />
      </div>

      <div className="bg-red-200 p-8">
        <h1 className="text-3xl font-bold text-center mb-8">
          How Donation Works?
        </h1>

        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 md:space-x-4">
          <div className="bg-white p-6 rounded-lg shadow-md flex-1">
            <div className="text-red-500 text-4xl mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-12 h-12"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-red-600 mb-2">
              Registration Process
            </h2>
            <p className="text-gray-600">
              Sign up and schedule your first with ease
            </p>
          </div>

          <div className="text-red-500 text-4xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md flex-1">
            <div className="text-red-500 text-4xl mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-12 h-12"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-red-600 mb-2">
              Health Screening
            </h2>
            <p className="text-gray-600">
              A simple check-up to ensure you're ready to donate
            </p>
          </div>

          <div className="text-red-500 text-4xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md flex-1">
            <div className="text-red-500 text-4xl mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-12 h-12"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-red-600 mb-2">
              Donation Day
            </h2>
            <p className="text-gray-600">
              Relax as our professional staff guide you through
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
