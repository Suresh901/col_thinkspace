import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#f3f4f5] py-12 max-2xs:w-full ">
      <div className="flex flex-wrap justify-between px-12 max-md:flex-col max-md:gap-y-12 max-sm:px-4">
        {/* Logo & Tagline */}
        <div className="flex flex-col items-start">
          <img
            src="https://colthinkspace.com/_app/immutable/assets/new-purple-logo.BDJ1wvUN.avif"
            alt="logo"
            className="w-32 max-xs:w-16"
          />
          <p className="mt-2 text-gray-600">Elevate the future of innovation</p>
        </div>

        {/* Company Links */}
        <div>
          <h1 className="font-bold mb-2">Company</h1>
          <ul className="space-y-1 text-gray-700">
            <li>About Us</li>
            <li>Our Team</li>
            <li>Sandbox</li>
            <li>Career</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Products Links */}
        <div>
          <h1 className="font-bold mb-2">Products</h1>
          <ul className="space-y-1 text-gray-700">
            <li>COL Global</li>
            <li>COL University</li>
            <li>COL Learn</li>
            <li>COL Jobs</li>
            <li>COL Euphoria</li>
            <li>COL Nirvana</li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-300 my-6"></div>

      {/* Copyright */}
      <div className="text-center text-gray-600 text-sm">
        © 2025 COL Thinkspace
      </div>
    </div>
  );
};

export default Footer;
