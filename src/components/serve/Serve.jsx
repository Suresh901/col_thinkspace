import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

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
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      style={{
        backgroundImage:
          "url('https://t4.ftcdn.net/jpg/03/68/64/13/360_F_368641364_zdF9y5JnDUb89cQ54U7AES7f2AVH4sou.jpg') ",
        width: "full",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="bg-fixed py-20 text-white my-10"
    >
      <div
        className="flex flex-col  items-center gap-5"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h1 className="text-xl md:text-2xl font-bold">Who We Serve</h1>
        <h1 className="font-bold text-md md:text-xl text-center">
          Short List of the Industries We Offer IT Support
        </h1>
      </div>
      <div className="flex justify-center items-center ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-12 mt-20 gap-5">
          {industries.map((item) => {
            return (
              <div
                className="flex items-center gap-5 font-bold text-lg"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
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
