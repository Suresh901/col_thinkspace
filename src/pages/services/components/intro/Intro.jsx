import React from "react";
import { Link } from "react-router-dom";

const Intro = ({ filteredService }) => {
  const service = filteredService[0];

  return (
    <>
      {/* Background Hero Section */}
      <div
        className="h-[320px] w-full"
        style={{
          backgroundImage:
            "url('https://media.licdn.com/dms/image/v2/D5612AQHyLFkv9YBcGA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1715058774193?e=2147483647&v=beta&t=7yqv62DbvJWPvycGiDX4FGb79GOPsVB_dreB-SHh36E')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      <div className="mx-12">
        {/* Breadcrumb */}
        <div className="px-6 sm:px-12 mt-6 text-sm sm:text-base font-medium text-gray-600 space-x-1">
          <Link to="/" className="hover:underline cursor-pointer">
            Home
          </Link>
          <span className="mx-1">/</span>
          <span>Services</span>
          <span className="mx-1">/</span>
          <span className="text-gray-800 font-semibold">
            {service?.heading}
          </span>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row px-6 sm:px-12 pt-10 pb-20 gap-10 ">
          {/* Text Side */}
          <div className="lg:w-1/2 flex flex-col gap-5">
            <h1 className="text-2xl md:text-3xl font-bold">
              {service?.heading}
            </h1>
            <h2 className="font-bold text-xl md:text-2xl">Service Overview</h2>
            <p className="text-lg leading-relaxed text-justify">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
              labore totam recusandae explicabo placeat a sit est, libero fugit
              facere non asperiores ipsum blanditiis voluptate? Lorem, ipsum
              dolor sit amet consectetur adipisicing elit. Ab tempore odit
              dolores, quas beatae aut possimus eaque, libero sint temporibus ex
              quod inventore eum voluptates!
            </p>
            <div>
              <Link to="/contact">
                <div className="p-[1px] rounded-xl inline-block bg-gradient-to-r from-purple-600 to-blue-600 w-1/3">
                  <button
                    type="button"
                    className="rounded-xl px-6 py-3 text-xl bg-white w-full h-full text-gray-800 hover:bg-gray-100 transition"
                  >
                    Start
                  </button>
                </div>
              </Link>
            </div>
          </div>

          {/* Image Side */}
          <div className="lg:w-1/2 flex items-center justify-center">
            <img
              src={service?.image}
              alt={service?.heading}
              className="w-full h-auto max-h-[500px] rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
