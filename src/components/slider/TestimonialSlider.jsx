import React, { useRef, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Testimonial from "../testimonial/Testimonial";
import Timage from "../../assets/image/aju.png";
import { ImQuotesLeft } from "react-icons/im";

const testimonials = [
  {
    image:
      "https://admin.colthinkspace.com/storage/teams/1735888154_67778d1a1d4b2.jpg",
    name: "Utsab Pokharel",
    location: "USA",
    texts:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam voluptate deserunt atque, dolore praesentium cum amet explicabo dolor porro eligendi ipsa possimus et in est officiis sint ex sapiente quia suscipit nobis nesciunt exercitationem. Impedit, accusamus deleniti, aliquid ea fugiat beatae quos earum vero voluptate officiis odio aperiam. Exercitationem, nam!",
  },
  {
    image: Timage,
    name: "Aju Maharjan",
    location: "USA",
    texts:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam voluptate deserunt atque, dolore praesentium cum amet explicabo dolor porro eligendi ipsa possimus et in est officiis sint ex sapiente quia suscipit nobis nesciunt exercitationem. Impedit, accusamus deleniti, aliquid ea fugiat beatae quos earum vero voluptate officiis odio aperiam. Exercitationem, nam!",
  },
  {
    image:
      "https://admin.colthinkspace.com/storage/teams/1735891443_677799f3eccbc.jpg",
    name: "Asmita Tamang",
    location: "USA",
    texts:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    image:
      "https://admin.colthinkspace.com/storage/teams/1735888154_67778d1a1d4b2.jpg",
    name: "Utsab Pokharel",
    location: "USA",
    texts:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    image:
      "https://admin.colthinkspace.com/storage/teams/1737363742_678e111e59b25.jpg",
    name: "Utsab Shrestha",
    location: "USA",
    texts:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
  },
];
const TestimonialSlider = () => {
  const sliderRef = useRef(null);
  const [hovered, setHovered] = useState(false);
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
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
          slidesToShow: 1,
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
      className=" relative my-10 md:px-12"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <h1 className="text-3xl font-bold mb-10 text-center ">Our Testimonial</h1>
      <Slider ref={sliderRef} {...settings}>
        {testimonials.map((item, index) => {
          return <Testimonial item={item} index={index} />;
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

export default TestimonialSlider;
