import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ProductDropdown } from "../dropdown/ProductDropdown";
import { HamDropdown } from "../dropdown/HamDropdown";
import Modal from "../modal/Modal";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`sticky top-0 left-0 w-full z-10 transition-transform duration-300 ease-in-out 
      ${isVisible ? "translate-y-0" : "-translate-y-full"}
      ${isAtTop ? "bg-transparent" : "bg-white shadow-md"} 
      `}
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
          <ul className="flex gap-x-10">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/about">
              <li>About Us</li>
            </Link>
            <Link to="/build">
              <li>Build Up</li>
            </Link>
            <Link to="/sandbox">
              <li>Sandbox</li>
            </Link>
            <Link to="/contact">
              <li>Contact</li>
            </Link>
          </ul>
        </div>
        <div className="lg:flex gap-x-5 hidden">
          <button
            onClick={openModal}
            className={`border p-2 rounded-md ${
              isAtTop ? "bg-white" : "bg-[#f6f6f6] shadow-md"
            }`}
          >
            Join Our Journey
          </button>

          <ProductDropdown isAtTop={isAtTop} />
        </div>
        {isModalOpen && <Modal closeModal={closeModal} />}

        {/* Hamburger Menu and Dropdowns for Small Screens */}
        <div className="lg:hidden flex items-center gap-3 sm:gap-3 md:gap-5 mx-3">
          {/* <button
            onClick={openModal}
            className={`border p-2 rounded-md ${
              isAtTop ? "bg-white" : "bg-[#f6f6f6] shadow-md"
            } border px-2 py-1 rounded-md  flex gap-2`}
          >
            Join <span className="hidden sm:block"> Our Journey</span>
          </button> */}
          <HamDropdown />
          <ProductDropdown isAtTop={isAtTop} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
