import React from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { Link } from "react-router-dom";

const socialMediaLinks = [
  {
    name: "Facebook",
    icon: <FaFacebookF />,
    url: "https://facebook.com",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedinIn />,
    url: "https://linkedin.com",
  },
  {
    name: "Instagram",
    icon: <FaInstagram />,
    url: "https://instagram.com",
  },
  {
    name: "TikTok",
    icon: <FaTiktok />,
    url: "https://tiktok.com",
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
      { name: "COL Global", path: "/products/col-global" },
      { name: "COL University", path: "/products/col-university" },
      { name: "COL Learn", path: "/products/col-learn" },
      { name: "COL Jobs", path: "/products/col-jobs" },
      { name: "COL Euphoria", path: "/products/col-euphoria" },
      { name: "COL Nirvana", path: "/products/col-nirvana" },
    ],
  },
];

const Footer = () => {
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
                >
                  <Link to={link.path}>{link.name}</Link>
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
