import React from "react";
import Map from "../aboutpage/components/map/Map";
import HeroSection from "../contact/components/herosection/HeroSection";
import ContactCard from "./components/card/ContactCard";
import FormSection from "./components/form/FormSection";
import Request from "../../components/request/Request";

const Contact = () => {
  return (
    <div className="relative ">
      <HeroSection />
      <ContactCard />
      <FormSection />
      <Request />
      <Map />
    </div>
  );
};

export default Contact;
