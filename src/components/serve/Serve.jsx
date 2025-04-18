import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const industries = [
  { name: "Advertising Agencies", icon: <IoIosArrowForward /> },
  { name: "Accounting Firms", icon: <IoIosArrowForward /> },
  { name: "Film Production Companies", icon: <IoIosArrowForward /> },
  { name: "Healthcare Industry", icon: <IoIosArrowForward /> },
  { name: "Private Schools", icon: <IoIosArrowForward /> },
  { name: "Retail Industry", icon: <IoIosArrowForward /> },
  { name: "Dental Industry", icon: <IoIosArrowForward /> },
  { name: "Financial Firms", icon: <IoIosArrowForward /> },
  { name: "IT Subcontracting", icon: <IoIosArrowForward /> },
];

const Serve = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/02/bg-02.jpg' ) ",
        width: "full",
      }}
      className="bg-fixed py-20 text-white mb-20"
    >
      <div className="flex flex-col items-center gap-5">
        <h1 className="text-xl md:text-2xl font-bold">Who We Serve</h1>
        <h1 className="font-bold text-md md:text-xl text-center">
          Short List of the Industries We Offer IT Support
        </h1>
      </div>
      <div className="flex justify-center items-center ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-12 mt-20 gap-5">
          {industries.map((item) => {
            return (
              <div className="flex items-center gap-5">
                {item.icon}
                <h2>{item.name}</h2>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Serve;
