import { useQuery } from "@tanstack/react-query";
const apiUrl = import.meta.env.VITE_API_URL;
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const HeroSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const fetchAbout = async () => {
    const response = await fetch(`${apiUrl}/about-us`);
    if (!response.ok) {
      throw new Error("Failed to fetch about info");
    }
    const data = await response.json();
    return data.data;
  };

  const {
    data: about,
    isLoading,
    isError,
  } = useQuery({ queryKey: ["about"], queryFn: fetchAbout });

  return (
    <>
      <div
        className="py-10 px-6 md:px-12 h-[320px]"
        style={{
          backgroundImage:
            "url('https://listopology.com/wp-content/uploads/2024/05/ABOUT-US.jpg')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      <div className="sm:px-12 relative mt-10">
        <div className="px-6 flex flex-col justify-center gap-10">
          <h1
            className="text-2xl md:text-4xl font-bold text-center"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Learn More About Us
          </h1>

          <div className="flex flex-col lg:flex-row">
            <div
              className="lg:w-1/2 flex flex-col gap-5"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <h1 className="font-bold text-xl md:text-3xl">
                Service Overview
              </h1>

              {isError ? (
                <p className="text-red-500">Failed to load about us content.</p>
              ) : (
                <p className="text-md md:text-lg leading-relaxed lg:pr-10 text-justify">
                  {isLoading ? "Loading details..." : about?.details}
                </p>
              )}

              <div>
                <button
                  className="rounded-xl bg-gradient-to-t from-[#2816CA] to-[#B51AEE] px-6 py-3 text-md tracking-tight 
                  text-white shadow-[inset_0_0.15rem_0_#B51AEE,inset_0_-0.12rem_0_#2816CA]"
                >
                  Read More...
                </button>
              </div>
            </div>

            <div
              className="lg:w-1/2 md:px-6 pt-10 lg:pt-0 flex items-center"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <img
                src="https://colthinkspace.com/_app/immutable/assets/firmbee-com-gcsNOsPEXfs-unsplash.Dt_L6CNf.jpg"
                alt="Team working"
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
