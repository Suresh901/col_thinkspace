import React from "react";
import HeroSection from "./components/HeroSection/HeroSection";
import Faqs from "./components/Faq/Faqs";
import Upcoming from "./components/Upcoming/Upcoming";

const sandbox = () => {
  return (
    <div>
      <HeroSection />
      <Upcoming />
      <Faqs />
    </div>
  );
};

export default sandbox;
