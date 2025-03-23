import React from "react";
import { useParams } from "react-router-dom";
import { datas } from "../../components/card/ServicesCard";
import Intro from "./components/intro/Intro";
import Objective from "./components/objective/Objective";
import Packages from "./components/packages/Packages";
import ScopeSlider from "../../components/slider/ScopeSlider";
import Offer from "./components/offer/Offer";
import Obligations from "./components/obligations/Obligations";
import Request from "../../components/request/Request";

const Services = () => {
  const { id } = useParams();

  // Filter the data based on the matching heading
  const filteredService = datas.filter((service) => service.heading === id);

  return (
    <div className="relative xl:px-12">
      {filteredService.length > 0 ? (
        <div className=" px-8 md:px-12">
          <Intro filteredService={filteredService} />
          <Obligations />
          <Objective filteredService={filteredService} />
          <ScopeSlider />
          <Packages />
          <Offer />
          <Request />
        </div>
      ) : (
        <h1>Service Not Found</h1>
      )}
    </div>
  );
};

export default Services;
