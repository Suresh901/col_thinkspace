import React, { useRef, useState } from "react";
import TeamCard from "../card/TeamCard";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FiExternalLink } from "react-icons/fi";

const teams = [
  {
    id: 1,
    image:
      "https://admin.colthinkspace.com/storage/teams/1735888154_67778d1a1d4b2.jpg",
    name: "Utsab Pokharel",
    designation: "CTO",
    logo: <FiExternalLink />,
  },
  {
    id: 2,
    image:
      "https://admin.colthinkspace.com/storage/teams/1735891443_677799f3eccbc.jpg",
    name: "Asmita Tamang",
    designation: "HR",
    logo: <FiExternalLink />,
  },
  {
    id: 3,
    image:
      "https://admin.colthinkspace.com/storage/teams/1735888154_67778d1a1d4b2.jpg",
    name: "Utsab Pokharel",
    designation: "CTO",
    logo: <FiExternalLink />,
  },
  {
    id: 4,
    image:
      "https://admin.colthinkspace.com/storage/teams/1737363742_678e111e59b25.jpg",
    name: "Utsab Shrestha",
    designation: "CE0",
    logo: <FiExternalLink />,
  },
];

const TeamSlider = () => {
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
      className="sm:mx-10  relative  "
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Slider ref={sliderRef} {...settings}>
        {teams.map((item) => {
          return (
            <div key={item.id} className="px-5 ">
              <TeamCard item={item} />
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
          className="h-6 w-6 cursor-pointer absolute top-[20rem] left-0 drop-shadow-xl bg-white rounded-md"
          onClick={handlePrevClick}
        />
        <FaAngleRight
          className="h-6 w-6 cursor-pointer absolute top-[20rem] right-0 shadow-xl bg-white rounded-md"
          onClick={handleNextClick}
        />
      </div>
    </div>
  );
};

export default TeamSlider;
