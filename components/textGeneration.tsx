import { TextGenerateEffect } from "./ui/text-generate-effect";

const words = `This is a platform to provide information about blood banks, blood availability, blood donation camps and assistant automation. More than 3800 blood banks are registered on this from 29 states and 8 UTs.

This is a citizen centric portal and mobile app for various services such as nearest blood bank, blood availability & blood donation camps information. It enforces blood banks to strictly follow national blood policy standards and guidelines.
`;

export function TextGenerateEffectDemo() {
  return (
    <TextGenerateEffect
      words={words}
      className="text-xl" // Adjust the font size here (e.g., text-sm, text-base, text-lg, text-xl)
    />
  );
}
