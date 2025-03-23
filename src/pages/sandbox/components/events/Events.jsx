import { useQuery } from "@tanstack/react-query";
const apiUrl = import.meta.env.VITE_API_URL;

const fetchEvents = async () => {
  const response = await fetch(`${apiUrl}/events`);
  if (!response.ok) {
    throw new Error("Failed to fetch team members");
  }
  const data = await response.json();
  return data.data;
};

const Events = () => {
  const {
    data: events,
    isLoading,
    isError,
  } = useQuery({ queryKey: ["events"], queryFn: fetchEvents });
  console.log(events);
  if (isLoading || !events) return <p className="text-center">Loading...</p>;
  if (isError) return <p>Error fetching team members.</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {events.map((item) => {
        return (
          <div className="bg-white p-5 ">
            <div>
              <img src={item.photo} alt="" className="w-80 h-40" />
            </div>
            <div className="mt-5">
              <div>
                <h1>{item.name}</h1>
                <h1>{item.date}</h1>
              </div>
              <div className="flex flex-col items-center justify-center mt-2">
                <button className="border p-2 rounded-xl w-full">
                  See Details
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Events;
