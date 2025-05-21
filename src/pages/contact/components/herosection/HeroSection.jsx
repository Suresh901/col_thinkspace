import React from "react";
import ContactCard from "../card/ContactCard";

const HeroSection = () => {
  return (
    <div
      className="py-10 px-6 md:px-12 h-[320px]"
      style={{
        backgroundImage:
          "url('https://www.shutterstock.com/image-photo/concept-contact-us-customer-support-600nw-2505308177.jpg')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        objectFit: "cover",
        backgroundRepeat: "no-repeat",
        height: "full",
      }}
    >
      <div className="  flex flex-col gap-5 text-white">
        <h1 className="font-bold text-xl md:text-3xl lg:text-4xl">
          Contact Us
        </h1>
        <h1>Ready to Get our best Services! Feel free to contact with us</h1>
      </div>
      {/* <ContactCard /> */}
    </div>
  );
};

export default HeroSection;
