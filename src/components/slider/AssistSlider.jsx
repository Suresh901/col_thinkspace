import React, { useRef, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AssistCard from "../card/assistcard";
import image from "../../assets/image/image.png";

const cardDetails = [
  {
    id: 1,
    heading: "Web Development ",
    desc: "We build scalable and robust software solutions tailored to your business needs, from web apps to enterprise systems.",
    logo: image,
  },
  {
    id: 2,
    heading: "UI/UX Design",
    desc: "Our design team delivers intuitive and visually engaging user experiences to enhance customer satisfaction and usability.",
    logo: image,
  },
  {
    id: 3,
    heading: "Cloud & DevOps Services",
    desc: "Accelerate deployment and reduce downtime with our cloud-native infrastructure and DevOps automation strategies.",
    logo: image,
  },
  {
    id: 4,
    heading: "Mobile App Development",
    desc: "We design and develop responsive, high-performance mobile applications for iOS and Android platforms.",
    logo: image,
  },
  {
    id: 5,
    heading: "IT Consulting & Support",
    desc: "Get expert guidance, system audits, and dedicated support to align your tech stack with your long-term business goals.",
    logo: image,
  },
];

const AssistSlider = () => {
  const sliderRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  const settings = {
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: false,
    slidesToScroll: 1,
    slidesToShow: 4,
    swipeToSlide: true,
    touchMove: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  const handlePrevClick = () => {
    sliderRef.current?.slickPrev();
  };

  const handleNextClick = () => {
    sliderRef.current?.slickNext();
  };

  return (
    <div
      className="relative max-w-7xl mx-auto overflow-hidden my-10"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Optional: Style for centerMode if used in future */}
      <style>{`
        .slick-center {
          opacity: 1 !important;
          transform: scale(1.05);
          z-index: 10;
        }
      `}</style>

      <Slider ref={sliderRef} {...settings}>
        {cardDetails.map((item, index) => (
          <div key={item.id} className="px-4">
            <AssistCard item={item} index={index} />
          </div>
        ))}
      </Slider>

      <div
        className={`flex justify-between items-center absolute top-1/2 w-full px-4 transform -translate-y-1/2 transition-opacity duration-300 ${
          hovered ? "opacity-100" : "opacity-30"
        }`}
      >
        <button
          onClick={handlePrevClick}
          className="p-2 bg-white/80 hover:bg-white rounded-full shadow-lg absolute left-0 transition-all"
        >
          <FaAngleLeft className="h-6 w-6 sm:h-8 sm:w-8 text-gray-800" />
        </button>
        <button
          onClick={handleNextClick}
          className="p-2 bg-white/80 hover:bg-white rounded-full shadow-lg absolute right-0 transition-all"
        >
          <FaAngleRight className="h-6 w-6 sm:h-8 sm:w-8 text-gray-800" />
        </button>
      </div>
    </div>
  );
};

export default AssistSlider;
