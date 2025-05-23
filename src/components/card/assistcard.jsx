import { Link } from "react-router-dom";

const AssistCard = ({ item, index }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };
  return (
    <div className="flex items-center justify-center gap-2 " key={index}>
      <Link key={index} to={`/services/${item.heading}`}>
        <div
          className="p-[2px] rounded-2xl bg-text-gradient w-full max-w-md "
          onClick={scrollToTop}
        >
          <div className="flex flex-col justify-center items-center gap-4 p-6 sm:p-50  bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out min-h-[350px]">
            <div className="w-20 h-20 ">
              <img
                src={item.logo}
                alt=""
                className="w-full h-full object-cover "
              />
            </div>
            <h1 className="font-bold text-xl sm:text-xl">{item.heading}</h1>
            <p className="text-sm sm:text-base md:text-md">{item.desc}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default AssistCard;
