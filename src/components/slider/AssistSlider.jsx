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
    heading: "Website design and development",
    service: "Web Development",
    desc: "We build scalable and robust software solutions tailored to your business needs, from web apps to enterprise systems.",
    logo: image,
  },
  {
    id: 2,
    heading: "App development",
    service: "App Development",
    desc: "We design and develop responsive, high-performance mobile applications for iOS and Android platforms.",
    logo: "https://colthinkspace.com/_app/immutable/assets/niclas-illg-FJ5e_2f96h4-unsplash.BzWiB08-.jpg",
  },
  {
    id: 3,
    heading: "Graphics Design",
    service: "UI/UX Design",
    desc: "Our design team delivers intuitive and visually engaging user experiences to enhance customer satisfaction and usability.",
    logo: "https://colthinkspace.com/_app/immutable/assets/carriza-maiquez-RTdvy9izXvw-unsplash.YcZJ3fVU.jpg",
  },
  {
    id: 4,
    heading: "Digital Marketing and SEO",
    service: "Marketing & SEO",
    desc: "Boost your online presence with our expert digital marketing strategies and SEO services, designed to drive traffic and conversions.",
    logo: "https://colthinkspace.com/_app/immutable/assets/carriza-maiquez-RTdvy9izXvw-unsplash.YcZJ3fVU.jpg",
  },
  {
    id: 5,
    heading: "Website Hosting",
    service: "Hosting Services",
    desc: "Reliable and secure hosting solutions with 24/7 support, optimized performance, and scalability for your business needs.",
    logo: "https://colthinkspace.com/_app/immutable/assets/carriza-maiquez-RTdvy9izXvw-unsplash.YcZJ3fVU.jpg",
  },
  {
    id: 6,
    heading: "Branding and Advertisement",
    service: "Branding & Advertising",
    desc: "Elevate your brand with creative strategies, visual identity design, and targeted advertising to connect with your audience.",
    logo: "https://colthinkspace.com/_app/immutable/assets/carriza-maiquez-RTdvy9izXvw-unsplash.YcZJ3fVU.jpg",
  },
];

const AssistSlider = () => {
  const sliderRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  const settings = {
    infinite: true,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false,
    slidesToScroll: 1,
    slidesToShow: 4,
    swipeToSlide: true,
    touchMove: true,
    cssEase: "linear",
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
      className="relative max-w-8xl mx-auto overflow-hidden my-10 p-5 md:p-10"
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
          hovered ? "opacity-100" : "opacity-20"
        }`}
      >
        <button
          onClick={handlePrevClick}
          className="p-2 bg-white/80 hover:bg-white rounded-full shadow-lg absolute -left-5 md:-left-10 transition-all"
        >
          <FaAngleLeft className="h-4 w-4 sm:h-8 sm:w-8 text-gray-800" />
        </button>
        <button
          onClick={handleNextClick}
          className="p-2 bg-white/80 hover:bg-white rounded-full shadow-lg absolute right-5 md:right-10 transition-all"
        >
          <FaAngleRight className="h-4 w-4 sm:h-8 sm:w-8 text-gray-800" />
        </button>
      </div>
    </div>
  );
};

export default AssistSlider;
