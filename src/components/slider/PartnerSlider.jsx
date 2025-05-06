import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Partner from "../../pages/homepage/components/partner/Partner";

const partnerLogos = [
  {
    id: 1,
    name: "Cube Logo",
    image:
      "https://t4.ftcdn.net/jpg/04/33/01/07/360_F_433010773_uM4nzpaRYXuwrZPGoasgXX75fTCS1vYl.jpg",
    alt: "Cube logo with 3D design and geometric shape",
  },
  {
    id: 2,
    name: "Tech Logo",
    image:
      "https://t3.ftcdn.net/jpg/05/08/08/27/360_F_508082720_dNNUlW85I4K3bsTfMMAcg7NEEGQYVVVP.jpg",
    alt: "Modern tech logo with blue circular elements",
  },
  {
    id: 3,
    name: "VorTech",
    image:
      "https://t3.ftcdn.net/jpg/05/21/58/85/360_F_521588589_3VRVxojhQKiwHGJbdyXUNJvnaZCk0YuG.jpg",
    alt: "VorTech logo in blue and pink gradient style",
  },
  {
    id: 4,
    name: "Cross",
    image:
      "https://t4.ftcdn.net/jpg/04/71/31/41/360_F_471314163_NltxFzJS5YXqBVDGFAn9YOXs6peLgQuE.jpg",
    alt: "Cross logo with green and blue overlapping shapes",
  },
  {
    id: 5,
    name: "Football Club",
    image:
      "https://t3.ftcdn.net/jpg/03/56/45/63/360_F_356456313_zsC2gGc7LvO6ucdfA4JzM5bPSAMvK7dD.jpg",
    alt: "Gold football club shield with classic design",
  },
  {
    id: 6,
    name: "Additional Partner",
    image:
      "https://t4.ftcdn.net/jpg/02/58/17/78/360_F_258177854_yUQNS3kVtd2ZBk1YmHtvGqCvuXRnW5m3.jpg",
    alt: "Corporate partner logo with bold typography",
  },
  {
    id: 7,
    name: "Extra Client",
    image:
      "https://t3.ftcdn.net/jpg/05/09/31/11/360_F_509311151_fFhYZqMyHFNbp6Vkn33Kqux7YKiFxKhG.jpg",
    alt: "Extra client logo featuring abstract swoosh design",
  },
];

export default function PartnerSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-gray-50 py-16">
      <div className=" mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="font-bold text-2xl lg:text-3xl">Our Partners</h1>
        </div>

        <div className="px-8">
          <Slider {...settings}>
            {partnerLogos.map((logo) => (
              <Partner item={logo} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
