import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { DataTab } from "../../../../components/tab/DataTab";
import {
  LuAlignHorizontalJustifyCenter,
  LuBanknote,
  LuBookOpenCheck,
  LuBriefcase,
  LuHeartPulse,
  LuPalette,
} from "react-icons/lu";
const projects = [
  {
    heading: "Clarity Drives Financial Decisions",
    values: "finance",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkgQTmxDPZg4nReWay1_SNC-QSyNeqLA414Q&s",
    description:
      "A comprehensive platform designed to streamline budgeting, expense tracking, and financial reporting for both individuals and businesses.",
    title: "Clarity drives financial decisions",
    logo: <LuBanknote size={32} />,
    benefits: [
      "Real-time budget tracking",
      "Automated expense categorization",
      "Custom financial reports",
    ],
  },
  {
    heading: "Strategy Shaped for Wellness",
    values: "befit",
    image:
      "https://marianpissaridi.co.uk/wp-content/uploads/2017/12/BeFit-app-logo-2-1000x430.jpg",
    description:
      "A fitness companion app that promotes a healthy lifestyle through personalized workouts, meal planning, and goal tracking.",
    title: "Strategy shaped for wellness",
    logo: <LuHeartPulse size={32} />,
    benefits: [
      "Tailored workout plans",
      "Nutritional guidance",
      "Daily fitness challenges",
    ],
  },
  {
    heading: "Creativity Meets Brand Identity",
    values: "splash",
    image:
      "https://leisurepoolsusa.com/wp-content/uploads/2024/10/101824-HealthBenefits-1Hero.webp",
    description:
      "A digital brand identity toolkit offering creative resources, templates, and dynamic design elements for startups and agencies.",
    title: "Creativity meets branding purpose",
    logo: <LuPalette size={32} />,
    benefits: [
      "Creative asset library",
      "Brand style guide builder",
      "Export-ready templates",
    ],
  },
  {
    heading: "Mindfulness Built with Clarity",
    values: "nirvana",
    image:
      "https://i5.walmartimages.com/asr/cdea37a2-fcd4-4497-9f25-608796044630.338dca4e581eaad97ab43f16f8177eaa.jpeg",
    description:
      "A mindfulness and wellness app aimed at reducing stress and improving mental clarity through guided sessions and habit tracking.",
    title: "Wellness built with clarity",
    logo: <LuAlignHorizontalJustifyCenter size={32} />,
    benefits: [
      "Guided meditations",
      "Mood and habit tracker",
      "Sleep and breathing exercises",
    ],
  },

  {
    heading: "Purpose-Driven Career Strategy",
    values: "job",
    image:
      "https://republicaimg.nagariknewscdn.com/shared/web/uploads/media/JobHunt_20230516075318.jpg",
    description:
      "A career platform connecting job seekers with employers, offering smart job matching, resume tools, and interview prep features.",
    title: "Purpose-driven career strategy",
    logo: <LuBriefcase size={32} />,
    benefits: [
      "AI-powered job recommendations",
      "Resume builder and templates",
      "Interview coaching tools",
    ],
  },
];

const ProjectSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="flex flex-col gap-5 md:gap-10">
      <h1
        className="font-bold text-2xl lg:text-3xl text-center"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        Our Projects
      </h1>
      <DataTab classname1="flex" datas={projects} />
    </div>
  );
};

export default ProjectSection;
