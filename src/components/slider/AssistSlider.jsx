import React, { useRef, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AssistCard from "../card/assistcard";
import { GoLightBulb } from "react-icons/go";

const cardDetails = [
  {
    id: 1,
    heading: "Innovative Solutions",
    desc: " We’re here to ensure you get exactly what you need—tailored solutions,expert guidance, and ongoing support.",
    logo: <GoLightBulb size={32} />,
  },
  {
    id: 2,
    heading: "Innovative Solutions",
    desc: " We’re here to ensure you get exactly what you need—tailored solutions,expert guidance, and ongoing support.",
    logo: <GoLightBulb size={32} />,
  },
  {
    id: 3,
    heading: "Innovative Solutions",
    desc: " We’re here to ensure you get exactly what you need—tailored solutions,expert guidance, and ongoing support.",
    logo: <GoLightBulb size={32} />,
  },
  {
    id: 4,
    heading: "Innovative Solutions",
    desc: " We’re here to ensure you get exactly what you need—tailored solutions,expert guidance, and ongoing support.",
    logo: <GoLightBulb size={32} />,
  },
];

const AssistSlider = () => {
  const sliderRef = useRef(null);
  const [hovered, setHovered] = useState(false);
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    pauseOnHover: true,
    nextArrow: <></>,
    prevArrow: <></>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handlePrevClick = () => {
    sliderRef.current.slickPrev();
  };

  const handleNextClick = () => {
    sliderRef.current.slickNext();
  };

  return (
    <div
      className="sm:mx-10  relative "
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div>
        <Slider ref={sliderRef} {...settings}>
          {cardDetails.map((item,index) => (
            <AssistCard item={item} index={index} />
          ))}
        </Slider>
      </div>
      {/* <div
        className={`transition-opacity duration-300 ${
          hovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <FaAngleLeft
          className="h-6 w-6 cursor-pointer absolute top-[20rem] left-0 drop-shadow-xl bg-white rounded-md"
          onClick={handlePrevClick}
        />
        <FaAngleRight
          className="h-6 w-6 cursor-pointer absolute top-[20rem] right-0 shadow-xl bg-white rounded-md"
          onClick={handleNextClick}
        />
      </div> */}
    </div>
  );
};

export default AssistSlider;
