import React from "react";
import Form from "./Form";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const FormSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="py-10 md:py-20">
      <div className="flex flex-col lg:flex-row px-6 lg:px-12 mb-10">
        <div className="flex flex-col gap-5 lg:w-1/2 md:px-12">
          <div
            className="font-bold text-2xl flex flex-col gap-2"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <h1 className="text-2xl md:text-3xl">Contact with us</h1>
            <h1 className="text-xl md:text-2xl">
              Have questions? Feel free to write us
            </h1>
          </div>
          <div
            className="flex items-center gap-2 md:gap-5 pb-10"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <Link
              to="https://www.facebook.com/col.thinkspace#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="p-3 bg-[#ededed] rounded-full">
                <FaFacebook />
              </div>
            </Link>

            <Link
              to="https://www.instagram.com/col.thinkspace/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="p-3 bg-[#ededed] rounded-full">
                <BsInstagram />
              </div>
            </Link>

            <Link
              to="https://wa.me/9705208005"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="p-3 bg-[#ededed] rounded-full">
                <BsWhatsapp />
              </div>
            </Link>
          </div>
        </div>
        <div className="w-full md:px-12">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default FormSection;
