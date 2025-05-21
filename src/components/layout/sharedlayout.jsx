import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import { Outlet } from "react-router-dom";

const sharedlayout = () => {
  return (
    <>
      <div className="bg-[#f7f7f7]">
        <div className="max-w-[1800px] mx-auto  ">
          {/* <img
            style={{
              maskImage:
                "radial-gradient(50% 80% at 50% 0%, rgba(0, 0, 0, 1) 30%, rgba(255, 255, 255, 0.2) 100%)",
              WebkitMaskImage:
                "radial-gradient(50% 80% at 50% 0%, rgba(0, 0, 0, 1) 30%, rgba(255, 255, 255, 0.2) 100%)",
            }}
            className="absolute w-full h-[100dvh] top-0 left-0 object-cover opacity-60 "
            src="https://colthinkspace.com/_app/immutable/assets/background.R_sD7WUz.avif"
          /> */}
          <Navbar />
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default sharedlayout;
