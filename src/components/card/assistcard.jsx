const AssistCard = ({ item, index }) => {
  return (
    <div className="flex items-center justify-center gap-2 " key={index}>
      <div className="p-[2px] rounded-2xl bg-text-gradient w-full max-w-md ">
        <div className="flex flex-col gap-4 p-6 sm:p-10  bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out min-h-[400px]">
          <div className="w-20 h-20">
            <img
              src={item.logo}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="font-bold text-xl sm:text-2xl">{item.heading}</h1>
          <p className="text-sm sm:text-base md:text-lg">{item.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default AssistCard;
