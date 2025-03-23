import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ProductDropdown } from "../dropdown/ProductDropdown";
import { HamDropdown } from "../dropdown/HamDropdown";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsAtTop(true);
      } else {
        setIsAtTop(false);
      }

      if (window.scrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`sticky top-0 left-0 w-full z-10 transition-transform duration-300 ease-in-out 
      ${isVisible ? "translate-y-0" : "-translate-y-full"}
      ${isAtTop ? "bg-transparent" : "bg-white shadow-md"} `}
    >
      <div className="flex justify-between items-center py-4 px-4 md:px-12 mx-auto max-w-[1500px]">
        {/* Logo Section */}
        <div className="flex-shrink-0 w-20 md:w-24">
          <img
            src="https://colthinkspace.com/_app/immutable/assets/new-purple-logo.DBBwDQ3E.webp"
            alt="logo"
            className="w-full h-auto"
          />
        </div>

        {/* Navigation Links for Large Screens */}
        <div className="hidden lg:flex gap-x-5 items-center font-medium text-gray-500">
          <ul className="flex gap-x-5">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/about">
              <li>About Us</li>
            </Link>
            <Link to="/build">
              <li>Build with Us</li>
            </Link>
            <Link to="/sandbox">
              <li>Sandbox</li>
            </Link>
            <Link to="/contact">
              <li>Contact</li>
            </Link>
          </ul>
          <ProductDropdown />
        </div>

        {/* Hamburger Menu and Dropdowns for Small Screens */}
        <div className="lg:hidden flex items-center gap-4">
          <HamDropdown />
          <ProductDropdown />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
