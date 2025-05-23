import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { Link } from "react-router-dom";

const socialMediaLinks = [
  {
    name: "Facebook",
    icon: <FaFacebookF />,
    url: "https://www.facebook.com/col.thinkspace#",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedinIn />,
    url: "https://www.linkedin.com/company/col-thinkspace/",
  },
  {
    name: "Instagram",
    icon: <FaInstagram />,
    url: "https://www.instagram.com/col.thinkspace/",
  },
  {
    name: "TikTok",
    icon: <FaTiktok />,
    url: "https://www.tiktok.com/@colthinkspace.official?_t=ZS-8wagcf64OXA&_r=1",
  },
  {
    name: "Youtube",
    icon: <FaYoutube />,
    url: "https://www.youtube.com/@COLThinkspace",
  },
];

const footerLinks = [
  {
    title: "Company",
    links: [
      { name: "Home", path: "/" },
      { name: "About Us", path: "/about" },
      { name: "Build Up", path: "/build" },
      { name: "Sandbox", path: "/sandbox" },
      { name: "Contact", path: "/contact" },
    ],
  },
  {
    title: "Products",
    links: [
      { name: "COL Global", path: "https://colglobal.org/" },
      { name: "COL University", path: "https://uni.colglobal.org/" },
      { name: "COL Learn", path: "https://learn.colglobal.org/" },
      { name: "COL Jobs", path: "https://job.colglobal.org/" },
      { name: "COL Euphoria", path: "https://www.euphoria.colglobal.org/" },
      { name: "COL Nirvana", path: "https://colthinkspace.com/" },
    ],
  },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };
  return (
    <div className="bg-[#f3f4f5] py-12">
      <div className="flex flex-wrap justify-between px-12 max-md:flex-col max-md:gap-y-12 max-sm:px-4 max-w-7xl mx-auto">
        {/* Logo  */}
        <div className="flex flex-col items-start">
          <img
            src="https://colthinkspace.com/_app/immutable/assets/new-purple-logo.BDJ1wvUN.avif"
            alt="logo"
            className="w-32 max-xs:w-16"
          />
          <p className="mt-2 text-gray-600">Elevate the future of innovation</p>
        </div>

        {/* Link Sections */}
        {footerLinks.map((section) => (
          <div key={section.title}>
            <h1 className="font-bold mb-2">{section.title}</h1>
            <ul className="space-y-1 text-gray-700">
              {section.links.map((link) => (
                <li
                  key={link.name}
                  className="cursor-pointer hover:text-purple-600"
                  onClick={scrollToTop}
                >
                  {section.title === "Products" ? (
                    <a
                      href={link.path}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link to={link.path}>{link.name}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Social Media */}
        <div>
          <h1 className="font-bold mb-2">Follow Us:</h1>
          <div className="flex space-x-4 mt-2 text-gray-700">
            {socialMediaLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="cursor-pointer hover:text-purple-600 text-lg"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-gray-300 my-6"></div>

      {/* Copyright */}
      <div className="text-center text-gray-600 text-sm">
        © {new Date().getFullYear()} COL Thinkspace
      </div>
    </div>
  );
};

export default Footer;
