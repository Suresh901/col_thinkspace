import Team from "./Team";
import { useQuery } from "@tanstack/react-query";
const apiUrl = import.meta.env.VITE_API_URL;
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const TeamCard = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const fetchTeamMembers = async () => {
    const response = await fetch(`${apiUrl}/teams`);
    if (!response.ok) {
      throw new Error("Failed to fetch team members");
    }
    const data = await response.json();
    return data.data;
  };

  const {
    data: teamMembers,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["teamMembers"],
    queryFn: fetchTeamMembers,
  });

  return (
    <div className="flex flex-col items-center justify-center mb-20 gap-10">
      {/* Heading Section - Always Shown */}
      <div className="md:px-12 relative text-center flex flex-col gap-5">
        <div className="" data-aos="fade-up" data-aos-duration="1000">
          <h1 className="font-bold text-lg md:text-xl lg:text-4xl">
            People Who Bring
          </h1>
          <span className="text-gradient bg-text-gradient font-bold text-lg md:text-xl lg:text-3xl">
            Colors to your Idea
          </span>
        </div>
        <p
          className="text-center flex items-center justify-center mx-auto px-6 md:px-12 text-md md:text-lg "
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          We are a dynamic group of ambitious young professionals, each equipped
          with specialized training and expertise in the fields of web and
          mobile application development, digital marketing strategies, branding
          techniques, and astute management practices.
        </p>
      </div>

      {/* Loading Message */}
      {isLoading && (
        <p className="text-center text-gray-600">Loading team members...</p>
      )}

      {/* Error Message */}
      {isError && (
        <p className="text-center text-red-500">Error fetching team members.</p>
      )}

      {!isLoading && !isError && (
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 px-12"
          data-aos="zoom-in-up"
          data-aos-duration="3000"
        >
          {teamMembers.map((item) => (
            <Team item={item} key={item.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TeamCard;
