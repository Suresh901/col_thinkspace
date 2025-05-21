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
      "They delivered high-quality code on time, every time. The support even after project completion was outstanding. We’ll definitely work with them again. From the very beginning, their team demonstrated a deep understanding of our requirements and offered helpful suggestions to improve our initial plan. Their communication was clear, proactive, and consistent throughout the project, which made collaboration smooth and effective. What stood out the most was their attention to detail. They didn’t just meet our expectations—they exceeded them. Every piece of code was clean, well-structured, and tested. They were open to feedback and quick to make any necessary adjustments, always maintaining a professional attitude. Even when we encountered last-minute changes, they handled them gracefully without compromising quality or timelines. Post-launch support has also been excellent. Any minor issues we encountered were resolved quickly. It’s rare to find a development team that combines technical expertise, reliability, and such a strong commitment to customer satisfaction. Working with them gave us confidence that our project was in good hands. We’re already planning our next phase and wouldn’t consider anyone else for the job. Truly a top-tier team in every aspect.",
  },
];

const TestimonialSlider = () => {
  const sliderRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  const handlePrevClick = () => {
    sliderRef.current?.slickPrev();
  };

  const handleNextClick = () => {
    sliderRef.current?.slickNext();
  };

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 3 },
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

  return (
    <div
      className="relative max-w-7xl mx-auto overflow-hidden my-10 "
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <h1 className="font-bold text-xl sm:text-2xl lg:text-3xl text-center py-10">
        Our Testimonial
      </h1>

      <Slider ref={sliderRef} {...settings}>
        {testimonials.map((item, index) => (
          <div key={index} className="px-4">
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

export default TestimonialSlider;
