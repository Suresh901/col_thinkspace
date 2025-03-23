const assistcard = ({ item, index }) => {
  return (
    <div className="flex px-10 gap-5 " key={index}>
      <div key={item.id} className="p-10 lg:p-20 border-4 rounded-xl">
        {item.logo}
        <h1 className="font-bold text-lg md:text-xl">{item.heading}</h1>
        <div className="mt-5">
          <p className="text-sm md:text-xl">{item.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default assistcard;
