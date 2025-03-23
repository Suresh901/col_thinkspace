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
      "Optimize social media profiles (e.g., Instagram, Facebook, TikTok).",
      "Ensure consistent branding and actionable CTAs on all platforms.",
    ],
  },
  {
    title: "Content Creation",
    tasks: [
      "Develop engaging visual content, including photos and reels.",
      "Develop a content calendar with a mix of promotional, informative, and interactive posts.",
    ],
  },
  {
    title: "Paid Campaigns",
    tasks: [
      "Run targeted ad campaigns to reach specific demographics.",
      "Promote special offers like seasonal discounts or early-bird packages.",
      "Implement retargeting campaigns to re-engage potential customers who visited the website or interacted with previous ads.",
    ],
  },
  {
    title: "Reporting",
    tasks: [
      "Monitor website traffic, ad performance, and content posts to evaluate engagement metrics such as likes, comments, shares, and reach.",
      "Identify top-performing posts and refine future content strategies to align with audience preferences and maximize visibility and interaction.",
      "Provide monthly reports with actionable insights.",
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
    <div className="pb-20">
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
