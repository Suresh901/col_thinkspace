import Team from "./Team";
import { useQuery } from "@tanstack/react-query";
const apiUrl = import.meta.env.VITE_API_URL;

const TeamCard = () => {
  const fetchTeamMembers = async () => {
    const response = await fetch(`${apiUrl}/teams`);
    if (!response.ok) {
      throw new Error("Failed to fetch team members");
    }
    const data = await response.json();
    // console.log(data.data);
    return data.data;
  };

  // using react query

  const {
    data: teamMembers,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["teamMembers"],
    queryFn: fetchTeamMembers,
  });
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching team members.</p>;
  return (
    <>
      <div className="flex flex-col items-center justify-center mb-20 gap-10">
        <div className="md:px-12 relative text-center flex flex-col gap-5">
          <div className="">
            <h1 className="font-bold text-lg md:text-xl lg:text-4xl">
              People Who Bring
            </h1>
            <span className="text-gradient bg-text-gradient font-bold text-lg md:text-xl lg:text-3xl">
              Colors to your Idea
            </span>
          </div>
          <p className="text-center flex items-center justify-center mx-auto px-6 md:px-12 text-md md:text-xl ">
            We are a dynamic group of ambitious young professionals, each
            equipped with specialized training and expertise in the fields of
            web and mobile application development, digital marketing
            strategies, branding techniques, and astute management practices.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 px-12">
          {teamMembers.map((item) => (
            <Team item={item} key={item.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default TeamCard;
