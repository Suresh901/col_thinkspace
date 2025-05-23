import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ProductDropdown } from "../dropdown/ProductDropdown";
import { HamDropdown } from "../dropdown/HamDropdown";
import Modal from "../modal/Modal";
import icon from "../../assets/image/icon.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Build Up", path: "/build" },
  { name: "Sandbox", path: "/sandbox" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isSandbox = location.pathname === "/sandbox";
  const isTransparentPage = isHomePage || isSandbox;

  const [isAtTop, setIsAtTop] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0);
    };

    if (isHomePage) {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    } else {
      setIsAtTop(false);
    }
  }, [isHomePage]);

  return (
    <div
      className={`${
        isTransparentPage
          ? "absolute top-0 left-0 w-full z-30"
          : "relative w-full"
      } transition duration-300 ${
        isTransparentPage ? "bg-transparent" : "bg-[#f7f7f7]"
      } `}
    >
      <div className="flex justify-between items-center py-4 px-4 md:px-12 mx-auto max-w-[1500px]">
        {/* Logo Section */}
        <div className="flex-shrink-0 w-20 md:w-24">
          {isTransparentPage ? (
            <img src={icon} alt="logo" className="w-full h-auto" />
          ) : (
            <img
              src="https://colthinkspace.com/_app/immutable/assets/new-purple-logo.DBBwDQ3E.webp"
              alt="logo"
              className="w-full h-auto"
            />
          )}
        </div>

        {/* Navigation Links */}
        <div className="hidden lg:flex gap-x-5 items-center font-medium text-lg">
          <ul className="flex gap-x-10">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    isActive
                      ? isTransparentPage
                        ? "text-white font-bold underline"
                        : "text-black font-bold underline"
                      : isTransparentPage
                      ? "text-white"
                      : "text-gray-500"
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop Buttons */}
        <div className="lg:flex gap-x-5 hidden">
          <button
            onClick={openModal}
            className={`border p-2 rounded-md ${
              isTransparentPage && isAtTop
                ? "bg-white text-black"
                : "bg-[#f6f6f6] shadow-md text-black"
            }`}
          >
            Join Our Journey
          </button>

          <ProductDropdown isAtTop={isAtTop} />
        </div>

        {isModalOpen && <Modal closeModal={closeModal} />}

        {/* Mobile Hamburger */}
        <div className="lg:hidden flex items-center gap-3 sm:gap-3 md:gap-5 mx-3">
          <HamDropdown isTransparentPage={isTransparentPage} />
          <ProductDropdown
            isAtTop={isAtTop}
            isTransparentPage={isTransparentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
