import { HoverEffect } from "./ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto ">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Blood Search",
    description:
      "Find available blood donors or blood units near you by searching with your location and blood type.",
    link: "https://stripe.com",
  },
  {
    title: "Blood Bank Direction",
    description:
      "Get GPS directions to the nearest blood bank for easy and quick access.",
    link: "https://netflix.com",
  },
  {
    title: "Blood Donation Camp",
    description:
      " Discover and register for upcoming blood donation camps in your area.",
    link: "https://google.com",
  },
  {
    title: "Donor Login",
    description:
      " Access your donor dashboard to track donations, update details, and receive notifications.",
    link: "https://meta.com",
  },
  {
    title: "Register Blood Bank",
    description:
      "Blood banks can join the platform to manage inventory and connect with donors and recipients.",
    link: "https://amazon.com",
  },
];
