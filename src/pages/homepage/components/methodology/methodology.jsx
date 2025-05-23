import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { DataTab } from "../../../../components/tab/DataTab";
import image1 from "../../../../assets/image/item1.png";
import {
  LuBrain,
  LuHammer,
  LuPaintbrush,
  LuRocket,
  LuTelescope,
} from "react-icons/lu";
const tasks = [
  {
    heading: "Drives Insight with Clarity",
    values: "drives",
    image: image1,
    description:
      "We value clear communication, enabling informed decisions that positively impact business outcomes.",
    title: "Clarity drives insight",
    logo: <LuTelescope size={32} />,
    benefits: [
      "Data-driven decision making",
      "Clear stakeholder communication",
      "Transparent reporting methodology",
    ],
  },
  {
    heading: "Strategy Shapes Success",
    values: "strategy",
    image:
      "https://colthinkspace.com/_app/immutable/assets/eftakher-alam-i1VQZsU86ok-unsplash.ogUhCrZ1.jpg",
    description:
      "We design the framework, carefully select the optimal tools, and establish a clear, actionable roadmap to guide your project from concept to completion.",
    title: "Strategy Shaped toward success",
    logo: <LuBrain size={32} />,
    benefits: [
      "Comprehensive planning approach",
      "Custom toolset selection",
      "Milestone-based project mapping",
    ],
  },
  {
    heading: "Creativity Meets Purpose",
    values: "creative",
    image:
      "https://colthinkspace.com/_app/immutable/assets/carriza-maiquez-RTdvy9izXvw-unsplash.YcZJ3fVU.jpg",
    description:
      "We transform abstract concepts into purposeful design, balancing aesthetic appeal with functional excellence to create solutions that resonate and perform.",
    title: "Creativity with intention",
    logo: <LuPaintbrush size={32} />,
    benefits: [
      "Innovative design thinking",
      "Purpose-driven creativity",
      "Audience-focused solutions",
    ],
  },
  {
    heading: "Build, Refine, Deliver",
    values: "build",
    image:
      "https://colthinkspace.com/_app/immutable/assets/rb_11031.CXcjGWwX.png",
    description:
      "We craft solutions with precision, refine through rigorous testing, and deliver products that exceed expectations, focusing on quality at every development stage.",
    title: "Iterative development process",
    logo: <LuHammer size={32} />,
    benefits: [
      "Agile development methodology",
      "Continuous improvement cycles",
      "Quality assurance at every stage",
    ],
  },
  {
    heading: "Scale and Grow",
    values: "builds",
    image:
      "https://colthinkspace.com/_app/immutable/assets/rb_11031.CXcjGWwX.png",
    description:
      "We ensure your solution can evolve with your business needs, implementing scalable architecture and ongoing optimization strategies for sustainable growth.",
    title: "Sustainable growth foundation",
    logo: <LuRocket size={32} />,
    benefits: [
      "Scalable architecture design",
      "Performance optimization",
      "User-centered development",
    ],
  },
];
const methodology = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      className="flex flex-col gap-5 md:gap-10 py-10"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/7130871/pexels-photo-7130871.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div
        className="flex flex-col px-12 justify-between text-center gap-5"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <h1 className="font-bold text-2xl lg:text-3xl">Our Methodology</h1>
        <p className="mx-auto max-w-screen-sm text-md md:text-lg">
          We bring bold ideas to life with smart technology and custom solutions
          partnering closely with you to break through barriers, streamline
          operations, and drive real, strategic impact.
        </p>
      </div>
      <DataTab datas={tasks} />
    </div>
  );
};

export default methodology;
