import { useQuery } from "@tanstack/react-query";
const apiUrl = import.meta.env.VITE_API_URL;

const HeroSection = () => {
  const fetchAbout = async () => {
    const response = await fetch(`${apiUrl}/about-us`);
    if (!response.ok) {
      throw new Error("Failed to fetch team members");
    }
    const data = await response.json();
    console.log(data.data);
    return data.data;
  };

  const {
    data: about,
    isLoading,
    isError,
  } = useQuery({ queryKey: ["about"], queryFn: fetchAbout });
  // console.log(about);
  if (isLoading) return <p className="text-center">Loading...</p>;
  if (isError) return <p>Error fetching team members.</p>;

  return (
    <div className="sm:px-12 relative mt-10 ">
      <div className="px-6 flex flex-col justify-center gap-10">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center ">
          Learn More About Us
        </h1>

        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 flex flex-col gap-5 ">
            <h1 className="font-bold text-xl md:text-3xl ">Service Overview</h1>
            <p className="text-md md:text-xl leading-relaxed lg:pr-10 text-justify">
              {about.details}
            </p>
            <div>
              <button
                className="rounded-xl bg-gradient-to-t from-[#2816CA] to-[#B51AEE] px-6 py-3 text-md tracking-tight 
            text-white shadow-[inset_0_0.15rem_0_#B51AEE,inset_0_-0.12rem_0_#2816CA] max-lg:px-4 max-lg:py-3 
            max-sm:rounded-lg max-sm:px-4 max-sm:py-2  "
              >
                Read More....
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 md:px-6 pt-10 lg:pt-0 flex items-center">
            <img
              src="https://colthinkspace.com/_app/immutable/assets/firmbee-com-gcsNOsPEXfs-unsplash.Dt_L6CNf.jpg"
              alt=""
              className="rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
