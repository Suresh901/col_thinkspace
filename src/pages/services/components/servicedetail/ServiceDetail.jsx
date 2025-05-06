import React from "react";

const ServiceDetail = ({ filteredService }) => {
  return (
    <div className="py-10">
      <h1 className="font-bold text-xl lg:text-2xl">
        Services We Offer in {filteredService[0].heading}
      </h1>
    </div>
  );
};

export default ServiceDetail;
