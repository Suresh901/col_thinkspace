import React, { useRef, useState } from "react";
import ScopeCard from "../../pages/services/components/scope/ScopeCard";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Scope = [
  {
    title: "Platform Optimization",
    tasks: [
      "Optimize profiles on Instagram, Facebook, and TikTok.",
      "Ensure consistent branding and clear CTAs across all pages.",
    ],
  },
  {
    title: "Content Creation",
    tasks: [
      "Create visual content like photos, stories, and reels.",
      "Plan a content calendar with diverse post types.",
    ],
  },
  {
    title: "Paid Campaigns",
    tasks: [
      "Run ads targeting specific audience groups.",
      "Promote offers like discounts and early deals.",
      "Retarget users who visited or clicked on ads.",
    ],
  },
  {
    title: "Performance Reporting",
    tasks: [
      "Track traffic, engagement, and ad results weekly.",
      "Analyze top posts to refine future strategies.",
      "Provide monthly reports with key insights.",
    ],
  },
];

const ScopeSlider = () => {
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
    <div className="py-20">
      <div className="flex flex-col items-center pb-10">
        <h1 className="font-bold text-3xl mb-5 text-center">Scope of Work</h1>
        <p className="text-lg md:text-xl mx-auto max-w-screen-sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
          odit nam praesentium culpa voluptatem odio dolor illum, ab nisi
          delectus repellendus ea eos temporibus labore.
        </p>
      </div>
      <div
        className="sm:mx-10 p-5 relative bg-gray-200"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Slider ref={sliderRef} {...settings}>
          {Scope.map((item) => {
            return (
              <div className="px-5 p-4">
                <ScopeCard item={item} />
              </div>
            );
          })}
        </Slider>
        <div
          className={`transition-opacity duration-300 ${
            hovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <FaAngleLeft
            className="h-6 w-6 cursor-pointer absolute top-[10rem] left-0 drop-shadow-xl bg-white rounded-md"
            onClick={handlePrevClick}
          />
          <FaAngleRight
            className="h-6 w-6 cursor-pointer absolute top-[10rem] right-0 shadow-xl bg-white rounded-md"
            onClick={handleNextClick}
          />
        </div>
      </div>
    </div>
  );
};

export default ScopeSlider;
