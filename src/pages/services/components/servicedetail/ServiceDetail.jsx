import React from "react";

const ServiceDetail = ({ filteredService }) => {
  if (!filteredService || filteredService.length === 0) {
    return <p className="p-5 text-red-500">No service found.</p>;
  }

  const service = filteredService[0];

  return (
    <div className="p-5 mx-4 md:mx-12">
      <h1 className="font-bold text-xl md:text-3xl mb-4 text-gray-800">
        Services We Offer in <span>{service.heading}</span>
      </h1>

      <div className="flex flex-wrap gap-3 mt-4 ">
        {service.tasks &&
          Object.values(service.tasks).map((task, idx) => (
            <span
              key={idx}
              className="bg-gray-100 text-gray-800 text-md px-4 py-2 rounded-full border border-gray-200 shadow-sm cursor-pointer"
            >
              {task}
            </span>
          ))}
      </div>
    </div>
  );
};

export default ServiceDetail;
