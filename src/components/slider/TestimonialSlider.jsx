import React, { useRef, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Testimonial from "../../pages/homepage/components/testimonial/Testimonial";

const testimonials = [
  {
    image:
      "https://admin.colthinkspace.com/storage/teams/1735888154_67778d1a1d4b2.jpg",
    name: "Utsab Pokharel",
    location: "USA",
    texts:
      "Working with ThinkSpace was a game-changer for our team. Their ability to translate our vision into a functional product exceeded expectations. Highly recommend their services!",
  },
  {
    image:
      "https://admin.colthinkspace.com/storage/teams/1735891443_677799f3eccbc.jpg",
    name: "Asmita Tamang",
    location: "Australia",
    texts:
      "From start to finish, the team was responsive, professional, and committed to quality. I appreciated the attention to detail and how they kept us updated at every stage.",
  },
  {
    image:
      "https://admin.colthinkspace.com/storage/teams/1737363742_678e111e59b25.jpg",
    name: "Utsab Shrestha",
    location: "Canada",
    texts:
      "ThinkSpace helped us launch a product we’re truly proud of. Their developers are not only skilled but also very collaborative and easy to work with.",
  },
  {
    image:
      "https://admin.colthinkspace.com/storage/teams/1741516175_67cd6d8f9ebbb.jpg",
    name: "Rija Maharjan",
    location: "Nepal",
    texts:
      "They delivered high-quality code on time, every time. The support even after project completion was outstanding. We’ll definitely work with them again.",
  },
];

const TestimonialSlider = () => {
  const sliderRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    centerMode: false,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
      <h1 className="text-3xl font-bold  text-center py-10 ">
        Our Testimonial
      </h1>
      <Slider ref={sliderRef} {...settings}>
        {testimonials.map((item, index) => (
          <div className=" my-5 md:my-10 ">
            <Testimonial item={item} index={index} />
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
          className="p-1 sm:p-2 bg-white/80 hover:bg-white rounded-full shadow-lg focus:outline-none transition-all absolute left-0"
        >
          <FaAngleLeft className="h-5 w-5 sm:h-8 sm:w-8 text-gray-800" />
        </button>
        <button
          onClick={handleNextClick}
          className="p-1 sm:p-2 bg-white/80 hover:bg-white rounded-full shadow-lg focus:outline-none transition-all absolute right-0"
        >
          <FaAngleRight className="h-5 w-5 sm:h-8 sm:w-8 text-gray-800" />
        </button>
      </div>
    </div>
  );
};

export default TestimonialSlider;
