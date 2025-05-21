import React from "react";

const ServiceDetail = ({ filteredService }) => {
  return (
    <div className="p-5 mx-12">
      <h1 className="font-bold text-xl lg:text32xl">
        Services We Offer in {filteredService[0].heading}
      </h1>
    </div>
  );
};

export default ServiceDetail;
