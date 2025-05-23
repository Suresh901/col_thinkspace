import { useState, useEffect } from "react";
import { GrLinkTop } from "react-icons/gr";

const Top = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = window.pageYOffset;
    setVisible(scrolled > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`fixed bottom-10 right-5 h-14 w-14 rounded-full text-lg bg-gradient-to-t from-[#2816CA] to-[#B51AEE]
       text-white border-none cursor-pointer z-[1000] flex items-center justify-center 
       transition-opacity duration-300 ${
         visible ? "opacity-100" : "opacity-0 pointer-events-none "
       }`}
    >
      <GrLinkTop size={20} />
    </button>
  );
};

export default Top;
