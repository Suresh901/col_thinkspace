import React from "react";
import TestimonialSlider from "../slider/TestimonialSlider";
import { ImQuotesLeft } from "react-icons/im";
import { ImQuotesRight } from "react-icons/im";

const Testimonial = ({ item, index }) => {
  return (
    <>
      <div className="flex flex-col items-center  md:px-12 " key={index}>
        <div className="flex flex-col md:flex-row items-center justify-between gap-5">
          <div>
            <div className="w-32 h-32 rounded-full">
              <img
                src={item.image}
                alt="User"
                className="w-full h-full rounded-full border-4 border-white"
              />
            </div>
          </div>
          <div className="p-6 flex flex-col gap-2">
            <ImQuotesLeft />
            <p className=" text-sm md:text-lg">{item.texts}</p>
            <div>
              <h1 className="font-bold text-sm md:text-lg">{item.name}</h1>
              <h2 className="text-md">{item.location}</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;

{
  /* <h1 className="text-3xl font-bold mb-6">Our Testimonial</h1>
      <div className="flex flex-col items-center mb-10 px-12">
        {/* <div
        className="h-auto w-auto border flex flex-col items-center 
            bg-gradient-to-t from-[#2816CA] to-[#B51AEE] rounded-lg px-10 py-10 relative"
      >
        <h1 className="text-white text-3xl mb-10">Testimonial</h1>

       
        <div className="bg-white p-6 rounded-xl mt-10 text-center shadow-md">
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            itaque id ullam repellendus quos, cum distinctio temporibus rem,
            fugiat dignissimos debitis saepe odit expedita voluptates blanditiis
            aliquid corrupti nisi, ducimus in enim repudiandae omnis delectus.
          </p>
        </div>

        
        <div className="absolute top-[6rem] z-10">
          <img
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
            alt="User"
            className="w-20 h-20 rounded-full border-4 border-white "
          />
        </div>
        <div className="absolute top-[9rem] left-20">
          <ImQuotesLeft size={26} />
        </div>
        <div className="absolute top-[9rem] right-20">
          <ImQuotesRight size={26} />
        </div>
      </div>  */
}
